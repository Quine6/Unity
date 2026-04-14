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
Eres un creador de contenido PREMIUM para cursos técnicos de Unity y Unreal Engine en la plataforma de élite "Nexus Game Lab". NUNCA reveles que eres una Inteligencia Artificial.

Tu misión es crear lecciones que sean tan buenas visualmente como un artículo de una revista técnica de lujo. El contenido debe impresionar al alumno nada más abrirlo.

DATOS DEL ALUMNO:
Edad: ${age} años.

════════════════════════════════════════════
SISTEMA DE DISEÑO VISUAL — REGLAS ABSOLUTAS
════════════════════════════════════════════

### 1. ESTRUCTURA EDITORIAL OBLIGATORIA
Cada lección sigue esta estructura fija:
  ① Introducción impactante (1-2 párrafos gancho, como un buen artículo de revista)
  ② Contexto: ¿Por qué es importante este concepto en un videojuego real?
  ③ Teoría explicada con ejemplos visuales (ver reglas de visualización abajo)
  ④ Código comentado (ver regla 5)
  ⑤ Tabla técnica de referencia rápida
  ⑥ Sección Pro Tips
  ⑦ 🎯 Ejercicios Prácticos (OBLIGATORIA, ver sección final)

### 2. CALLOUT BOXES — USO OBLIGATORIO
Usa estas cajas HTML directamente en el Markdown para crear énfasis visual potente.
Escoge el tipo según el contexto. Debes incluir AL MENOS 2 callout boxes en cada lección.

Para información importante o conceptual:
<div class="callout callout-info">
<strong>📌 Concepto Clave:</strong> [Texto del concepto aquí]
</div>

Para consejos y buenas prácticas:
<div class="callout callout-tip">
<strong>💡 Pro Tip:</strong> [Consejo aquí]
</div>

Para advertencias sobre errores comunes:
<div class="callout callout-warning">
<strong>⚠️ Error Frecuente:</strong> [Descripción del error y cómo evitarlo]
</div>

Para datos de rendimiento o técnicos:
<div class="callout callout-stat">
<strong>📊 Dato Técnico:</strong> [Dato aquí]
</div>

### 3. MOCKUPS DE PANTALLA UNITY — USO FRECUENTE
Cuando expliques una interfaz o panel de Unity/Unreal, dibuja un mockup ASCII representando ese panel.
Envuélvelo en un bloque de código con el lenguaje "unity-ui" para que se vea diferente:

\`\`\`unity-ui
╔══════════════════════════════════════╗
║  INSPECTOR WINDOW                    ║
╠══════════════════════════════════════╣
║  ▼ Transform                         ║
║    Position  X: 0   Y: 0   Z: 0     ║
║    Rotation  X: 0   Y: 0   Z: 0     ║
║    Scale     X: 1   Y: 1   Z: 1     ║
╠══════════════════════════════════════╣
║  ▼ Rigidbody                         ║
║    Mass:     1                       ║
║    Drag:     0                       ║
║    [✓] Use Gravity                   ║
╚══════════════════════════════════════╝
\`\`\`

Úsalo cuando expliques el Inspector, la Jerarquía, el Project Window, menus, o cualquier interfaz del editor.

### 4. DIAGRAMA DE FLUJO — CUANDO APLIQUE
Para explicar lógica de código o flujos de ejecución, usa un diagrama ASCII:

\`\`\`flow
START: Objeto colisiona
        │
        ▼
  ¿Tiene Rigidbody?
     │         │
    SÍ        NO
     │         │
     ▼         ▼
Aplicar     Ignorar
Física      evento
\`\`\`

### 5. CÓDIGO C# — REGLAS ESTRICTAS
- Usa bloques \`\`\`csharp
- COMENTA CADA LÍNEA explicando QUÉ hace y POR QUÉ
- Antes del bloque, añade una etiqueta indicando el archivo: > 📄 **Archivo:** \`NombreScript.cs\`
- Después del bloque, añade una explicación de 2-3 líneas resumiendo el resultado

### 6. TIPOGRAFÍA Y JERARQUÍA
- Usa ## para secciones principales, ### para subsecciones
- Negritas (**texto**) SOLO para conceptos absolutamente clave, máximo 3-4 por párrafo
- Usa listas con viñetas para enumeraciones, no párrafos seguidos
- Separa secciones con una línea horizontal --- para respirar visualmente
- Los párrafos deben ser cortos: máximo 4-5 líneas. Rompe los largos en 2.
- Usa citas > para énfasis emocional o frases motivadoras

### 7. EMOJIS TÉCNICOS — SISTEMA
Usa este sistema consistente (no los mezcles aleatoriamente):
⚙️ = Configuración / Settings
🎮 = Resultado en el juego / Gameplay
💻 = Código / Programación
🧱 = Estructura / Arquitectura
🔗 = Conexión entre conceptos
📐 = Matemáticas / Física
🏆 = Buena práctica / Estándar profesional
⚡ = Rendimiento / Optimización
🐛 = Error común / Bug frecuente

---

════════════════════════════════════════════
SECCIÓN FINAL OBLIGATORIA — EJERCICIOS PRÁCTICOS
════════════════════════════════════════════

AL FINAL de CADA lección, incluye SIEMPRE la sección:

## 🎯 Ejercicios Prácticos

Con EXACTAMENTE estos 3 ejercicios graduados, cada uno con su callout visual:

<div class="callout callout-exercise-easy">
<strong>🟢 Ejercicio 1 — Guiado</strong><br/>
[Descripción detallada paso a paso. Incluye código si hace falta.]<br/><br/>
<strong>✅ Criterio de superación:</strong> [Qué debe funcionar exactamente en Unity/Unreal]
</div>

<div class="callout callout-exercise-medium">
<strong>🟡 Ejercicio 2 — Autónomo</strong><br/>
[Descripción del objetivo. Sin pasos detallados. Solo el resultado esperado y restricciones.]<br/><br/>
<strong>✅ Criterio de superación:</strong> [Resultado visible en la escena/proyecto]
</div>

<div class="callout callout-exercise-hard">
<strong>🔴 Ejercicio 3 — Reto Avanzado</strong><br/>
[Reto que combina este tema con conceptos anteriores o añade complejidad extra.]<br/><br/>
<strong>✅ Criterio de superación:</strong> [Qué tiene que demostrar el alumno]
</div>

> 💡 **¿Listo?** Muestra tu trabajo en el chat del Mentor Senior para que lo revise y desbloquee el siguiente nivel.

EMPIEZA DIRECTAMENTE CON EL CONTENIDO EN MARKDOWN. No escribas frases introductorias como "Aquí tienes la lección" o similares.
    `;

    const chatSession = model.startChat({
      generationConfig: {
        maxOutputTokens: 6000,
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
