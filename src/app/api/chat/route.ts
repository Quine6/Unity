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
      - Avance Atómico: Explica conceptos detalladamente y no pases de tema. Tu tarea actual es evaluar lo que el usuario envía para este TEMA ACTUAL.
      - "Strictness": Sé implacable con errores que rompan el juego o malas prácticas extremas.
      
      FUNCIONAMIENTO DE ESTE CHAT:
      Debes guiar al usuario a completar el "Reto" del TEMA ACTUAL. 
      IMPORTANTÍSIMO: Si consideras que el usuario ha completado satisfactoriamente el reto de este tema o ha demostrado dominar el concepto del TEMA ACTUAL, debes incluir EXACTAMENTE la frase "[UNLOCKED]" al final de tu respuesta (en tu último párrafo o línea). El sistema detectará esta palabra exacta para desbloquear el siguiente módulo en la interfaz del alumno. Si el usuario aún no lo ha logrado o está preguntando dudas iniciales, NO incluyas "[UNLOCKED]".

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
