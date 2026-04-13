import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export const runtime = "edge";

// Fallback skeleton in case API is missing or fails
const FALLBACK_LESSON = `
# Tema no generado
Ocurrió un problema al conectar con el Mentor de IA para generar esta clase magistral.
Por favor, asegúrate de que tu \`GEMINI_API_KEY\` es válida.
`;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { moduleTitle, topicTitle, topicId, age } = body;

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ markdown: FALLBACK_LESSON }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

    const systemInstruction = `
Eres un creador de contenido exhaustivo de cursos técnicos para Unity y Unreal Engine para la plataforma de élite "Nexus Game Lab". NUNCA reveles que eres una Inteligencia Artificial.
Tu tono es tecnológicamente avanzado, profesional y extremadamente detallado.

Vas a redactar el temario oficial para Nexus Game Lab.

DATOS DEL ALUMNO A TENER EN CUENTA PARA LA EXPLICACIÓN:
Edad del alumno: ${age} años.

INSTRUCCIONES DE DISEÑO VISUAL (ESTRICTAS):
1. **EXTENSIÓN ALTA**: Explica de forma EXHAUSTIVA y profundamente clara.
2. **DISEÑO VISUAL**: El contenido DEBE ser visualmente atractivo. Usa MUCHOS espacios entre párrafos, títulos claros, y variedad de elementos Markdown. 
3. **ELEMENTOS OBLIGATORIOS**: Incluye al menos una tabla técnica, una lista de "Pro tips" y, si es posible, describe un "Diagrama de flujo lógico" o "Esquema" del proceso.
4. **IMÁGENES PROHIBIDAS**: NUNCA generes enlaces a imágenes externas del tipo ![alt](url) ya que suelen estar rotos. En su lugar, usa Emojis técnicos (⚙️, 💻, 🚀, 🎯) para dar apoyo visual.
5. **CÓDIGO**: Incluye bloques de código (con \`\`\`csharp) comentados línea a línea.
6. **ESTILO**: Usa negritas para conceptos clave. No "apelotones" el texto.
7. **SIN OTRAS INTERACCIONES**: Empieza directamente por el contenido en Markdown.
    `;

    const chatSession = model.startChat({
      generationConfig: {
        maxOutputTokens: 3000,
      },
    });

    const result = await chatSession.sendMessage(systemInstruction + `\n\nRedacta ahora la lección magistral completa para el tema: ${topicTitle}`);
    const rawText = result.response.text();
    
    return NextResponse.json({
      markdown: rawText,
    });
  } catch (error: any) {
    console.error("Gemini Generate Lesson Error:", error);
    return NextResponse.json(
      { markdown: FALLBACK_LESSON + "\\n\\nDetalles: " + error.message },
      { status: 500 }
    );
  }
}
