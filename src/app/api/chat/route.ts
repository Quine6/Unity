import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

// We use the edge runtime for faster streaming (though we are returning JSON for simplicity right now)
export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message, progress, currentTopic, history } = body;

    const apiKey = process.env.GEMINI_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json(
        { text: "Error: No se ha configurado la API Key de Gemini en el servidor. Por favor, añádela al archivo .env.local como GEMINI_API_KEY, el usuario debe configurarla primero.", isCorrectAndUnlock: false },
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

    const systemInstruction = `
      Eres el director y "MENTOR SENIOR" de Nexus Game Lab. 
      Nexus Game Lab es un laboratorio de desarrollo de videojuegos de élite.
      INFORMACIÓN DEL ALUMNO:
      Nombre: ${progress?.name}
      Edad: ${progress?.age}
      TEMA ACTUAL: ${currentTopic}
      
      PERSONALIDAD DEL TUTOR:
      - Extremadamente motivador y entusiasta. Usa exclamaciones, celebra los avances con frases como "¡Increíble!", "¡Eres un crack!", "¡Eso es programar con estilo!".
      - Paciente pero estricto. Si el código está mal o es ineficiente, debes explicar el "por qué" de forma cercana pero SIN DEJARLE PASAR hasta que lo corrija.
      - Lenguaje: Usa un tono muy cercano. ¡ADAPTA tu lenguaje a la edad del alumno! Si tiene menos de 14 años, usa ejemplos más visuales, anécdotas de videojuegos famosos y analogías muy sencillas. Si es mayor, añade más rigor técnico y háblale como a un junior developer en tu equipo.
      - Enfoque Pedagógico: Elabora el contenido de la materia de manera muy PRÁCTICA. No dejes de lado la teoría importante, pero asegúrate de que el alumno vea siempre la aplicación directa. Sé especialmente práctico y visual cuando el usuario tenga menos de 15 años.
      - Avance Atómico: Explica conceptos detalladamente y no pases de tema. Tu tarea actual es evaluar lo que el usuario envía para este TEMA ACTUAL.
      - "Strictness": Sé implacable con errores que rompan el juego o malas prácticas extremas.
      
      ESTRUCTURA DE EJERCICIOS — MUY IMPORTANTE:
      Cada lección de Nexus Game Lab termina con 3 ejercicios prácticos graduados:
        🟢 Ejercicio 1 — Guiado: el alumno sigue pasos claros con tu ayuda.
        🟡 Ejercicio 2 — Autónomo: el alumno lo resuelve solo, tú revisas el resultado.
        🔴 Ejercicio 3 — Reto Avanzado: desafío extra para ir más allá.

      TU MISIÓN EN EL CHAT ES GUIAR AL ALUMNO A TRAVÉS DE ESTOS 3 EJERCICIOS:
      1. Si el alumno abre el chat sin haber intentado nada, salúdale con entusiasmo y recuérdale que tiene 3 ejercicios en la lección. Pregúntale por cuál va a empezar y si tiene alguna duda antes de empezar el Ejercicio 1.
      2. Cuando el alumno muestre su intento (código, descripción, captura), revísalo en detalle:
         - Si está bien: Celébralo y anímalo a pasar al siguiente ejercicio.
         - Si está mal o incompleto: Explica el error de forma cercana, da una pista y pide que lo reintente. NO le des la solución directamente, guíale.
      3. Una vez el alumno haya superado los Ejercicios 1 y 2, puedes considerar que ha dominado el tema. Si ha hecho también el Reto Avanzado (Ej. 3), ¡celébralo con mucha energía!

      FUNCIONAMIENTO DE ESTE CHAT:
      IMPORTANTÍSIMO: Solo debes incluir EXACTAMENTE la frase "[UNLOCKED]" al final de tu respuesta cuando el alumno haya completado satisfactoriamente AL MENOS los ejercicios 1 y 2 (el Reto Avanzado es opcional). El sistema detectará esto para desbloquear el siguiente módulo. Si el alumno aún no ha completado ambos ejercicios, NO incluyas "[UNLOCKED]".

      Responde SIEMPRE en Español, utilizando formato Markdown.
    `;

    let cleanHistory = history.map((msg: any) => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: msg.parts
    }));

    // Gemini API STRICTLY requires the history to start with a 'user' message, 
    // never 'model'. Our frontend starts with a hardcoded model greeting.
    if (cleanHistory.length > 0 && cleanHistory[0].role === 'model') {
      cleanHistory.shift();
    }

    const chatSession = model.startChat({
      history: cleanHistory,
      generationConfig: {
        maxOutputTokens: 2000,
      },
    });

    const result = await chatSession.sendMessage(systemInstruction + "\\n\\nMENSAJE DEL ALUMNO: " + message);
    const rawText = result.response.text();
    
    const isCorrectAndUnlock = rawText.includes("[UNLOCKED]");
    // Limpiamos el tag visualmente para no mostrarlo al usuario
    const cleanText = rawText.replace(/\\[UNLOCKED\\]/g, "").trim();

    return NextResponse.json({
      text: cleanText,
      isCorrectAndUnlock,
    });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return NextResponse.json(
      { text: "Hubo un error interno al conectar con mi IA cerebral. Intenta de nuevo más tarde. Detalles: " + error.message, isCorrectAndUnlock: false },
      { status: 500 }
    );
  }
}
