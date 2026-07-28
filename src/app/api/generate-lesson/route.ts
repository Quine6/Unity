import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { 
      moduleTitle, 
      topicTitle, 
      topicId, 
      description,
      startTime,
      endTime,
      duration,
      actionObjective,
      victoryCondition,
      godotNodes,
      optionalChallenge,
      categoryTag,
      age 
    } = body;

    const startFormatted = startTime !== undefined ? `${Math.floor(startTime / 60)}:${String(startTime % 60).padStart(2, '0')}` : "00:00";
    const endFormatted = endTime !== undefined ? `${Math.floor(endTime / 60)}:${String(endTime % 60).padStart(2, '0')}` : "fin";

    // Bug 2 fix: 100% deterministic template. No AI generation.
    // The content is built ENTIRELY from the submodule metadata.
    // This guarantees perfect synchronization with the video segment.

    const nodesSection = godotNodes && godotNodes.length > 0 
      ? godotNodes.map((n: string) => `\`${n}\``).join(", ")
      : "los nodos indicados en el vídeo";

    const nodeTreeLines = godotNodes && godotNodes.length > 0
      ? godotNodes.map((n: string, i: number) => `║    ${i === 0 ? "▼" : "►"} ${n}`).join("\n")
      : "║    ► (Nodo del paso)";

    const markdown = `### ⚡ ACCIÓN EN 30 SEGUNDOS (${startFormatted} – ${endFormatted})

${description || topicTitle}

---

### 🛠️ QUÉ HACER EN GODOT 4

Reproduce **exactamente** lo que ves en el fragmento de vídeo (${startFormatted} – ${endFormatted}).

**Nodos usados:** ${nodesSection}

\`\`\`godot-ui
╔══════════════════════════════════════╗
║  ESCENA / ÁRBOL DE NODOS (GODOT 4)   ║
╠══════════════════════════════════════╣
${nodeTreeLines}
╚══════════════════════════════════════╝
\`\`\`

---

### 🎯 RETO DE ESTA MISIÓN

<div class="callout callout-exercise-easy">
<strong>🟢 Hazlo en tu Godot 4</strong><br/>
${actionObjective || "Sigue los pasos exactos del fragmento de vídeo."}<br/>
<strong>✅ Victoria:</strong> ${victoryCondition || "Resultado visible al pulsar Play."}
</div>

${optionalChallenge ? `
<div class="callout callout-exercise-hard">
<strong>🔴 Reto Creador Pro (Opcional +100 🪙)</strong><br/>
${optionalChallenge}<br/>
<strong>✅ Comprobación:</strong> Sube tu evidencia para ganar tus monedas extra.
</div>
` : ''}

> 💬 **¿Dudas?** Pregunta a tu **Mentor Senior** en el chat lateral. Él te guía sin darte la respuesta directa.
`;

    return NextResponse.json({
      markdown: markdown,
    });
  } catch (error: any) {
    console.error("Generate Lesson Error:", error);
    return NextResponse.json(
      { markdown: "# Error\\nHubo un problema al generar la guía. Detalles: " + error.message },
      { status: 500 }
    );
  }
}
