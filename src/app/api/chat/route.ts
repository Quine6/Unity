import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message, progress, currentTopic, currentSubmodule, history } = body;

    const apiKey = process.env.GEMINI_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json(
        { text: "Error: No se ha configurado la API Key de Gemini en el servidor. Por favor, añádela a las variables de entorno.", isCorrectAndUnlock: false },
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);

    const startFormatted = currentSubmodule?.startTime !== undefined ? `${Math.floor(currentSubmodule.startTime / 60)}:${String(currentSubmodule.startTime % 60).padStart(2, '0')}` : "00:00";
    const endFormatted = currentSubmodule?.endTime !== undefined ? `${Math.floor(currentSubmodule.endTime / 60)}:${String(currentSubmodule.endTime % 60).padStart(2, '0')}` : "fin";

    const systemInstruction = `
Eres el MENTOR SENIOR de desarrollo de videojuegos en NEXUS GAME LAB.
Tu alumno es ${progress?.name || "Unai"} (${progress?.age || 12} años).

PASO O MISIÓN ACTIVA EN GODOT 4:
- Título del paso: "${currentSubmodule?.title || currentTopic}"
- Descripción del fragmento de vídeo: "${currentSubmodule?.description || ""}"
- Acción práctica a realizar: "${currentSubmodule?.actionObjective || ""}"
- Condición de victoria: "${currentSubmodule?.victoryCondition || ""}"
- Minutos del vídeo YouTube: de ${startFormatted} a ${endFormatted}.

🔴 REGLA ABSOLUTA DE SINCRONIZACIÓN Y NINGÚN ADELANTO (VIOLACIÓN STRICTAMENTE PROHIBIDA):
1. NUNCA le pidas al alumno (${progress?.name || "Unai"}) que realice tareas, cree nodos o programe scripts de submódulos o misiones posteriores.
2. Tu orientación DEBE responder ÚNICA Y EXCLUSIVAMENTE a lo que se enseña en este fragmento de vídeo exacto (${startFormatted} - ${endFormatted}) y paso actual.
3. Si el alumno tiene dudas o errores, tu respuesta debe limitarse a resolver la anomalía en ESTE paso concreto de Godot 4.

FILOSOFÍA Y ESCALERA DE PISTAS:
1. Tono: Entusiasta, gamer, respetuoso, motivador y cercano.
2. ESCALERA DE PISTAS (REGLA DE ORO): Nunca le des el código completo a la primera. Sigue esta escalera:
   • Nivel 1: Pregunta breve de observación ("¿Tu nodo tiene asignada la propiedad correcta en el Inspector?").
   • Nivel 2: Pista concreta sobre dónde mirar en el editor de Godot 4 (Inspector, Árbol de Nodos, FileSystem).
   • Nivel 3: Indicación del fragmento de vídeo exacto (${startFormatted} a ${endFormatted}).
   • Nivel 4: Ejemplo parcial en GDScript o configuración de nodos.
   • Nivel 5: Solución explicada paso a paso si tras intentar sigue atascado.
3. Errores como Descubrimientos: NUNCA digas que ha fallado. Usa expresiones como "¡Has encontrado un bug!", "Vamos a corregir esa anomalía de código".
4. Lectura visual de imágenes: Si te envía una captura de pantalla de Godot 4 o su código, analízala al detalle y dile exactamente qué nodo, propiedad o línea de GDScript revisar.

SISTEMA DE DESBLOQUEO:
Incluye EXACTAMENTE la marca "[UNLOCKED]" al final de tu mensaje solo cuando ${progress?.name || "Unai"} haya demostrado haber completado la misión en Godot 4 o solucionado su duda práctica.

Responde SIEMPRE en Español, utilizando formato Markdown impecable.
`;

    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash-lite",
      systemInstruction: systemInstruction 
    });

    let cleanHistory = (history || []).map((msg: any) => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: msg.parts
    }));

    // Gemini API requires history to start with 'user'
    if (cleanHistory.length > 0 && cleanHistory[0].role === 'model') {
      cleanHistory.shift();
    }

    const chatSession = model.startChat({
      history: cleanHistory,
      generationConfig: {
        maxOutputTokens: 2000,
      },
    });

    const parts: any[] = [{ text: message }];
    
    if (body.image) {
      const mimeType = body.image.split(';')[0].split(':')[1];
      const data = body.image.split(',')[1];
      parts.push({ inlineData: { mimeType, data } });
    }

    const result = await chatSession.sendMessage(parts);
    const rawText = result.response.text();
    
    const isCorrectAndUnlock = /\[UNLOCKED\]/i.test(rawText);
    const cleanText = rawText.replace(/\[UNLOCKED\]/gi, "").trim();

    return NextResponse.json({
      text: cleanText,
      isCorrectAndUnlock,
    });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return NextResponse.json(
      { text: "Hubo un error de conexión con la IA. Por favor reintenta en unos instantes. Detalles: " + error.message, isCorrectAndUnlock: false },
      { status: 500 }
    );
  }
}
