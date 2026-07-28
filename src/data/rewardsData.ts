export interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: "misión" | "creatividad" | "investigación" | "gdscript";
}

export interface CreatorRank {
  level: number;
  title: string;
  requiredXP: number;
  icon: string;
  description: string;
}

export const CREATOR_RANKS: CreatorRank[] = [
  { level: 1, title: "Cadete de Laboratorio", requiredXP: 0, icon: "🚀", description: "Primeros pasos en el editor de Godot 4." },
  { level: 2, title: "Arquitecto de Escenarios 3D", requiredXP: 200, icon: "🏗️", description: "Dominio de escenas 3D, nodos raíz e inspección." },
  { level: 3, title: "Ingeniero de Físicas y Luz", requiredXP: 500, icon: "💡", description: "Especialista en sombras, sol, materiales y masa rígida." },
  { level: 4, title: "Diseñador de Interfaces & HUD", requiredXP: 900, icon: "🎨", description: "Creador de barras de vida, etiquetas, botones y paneles." },
  { level: 5, title: "Programador GDScript", requiredXP: 1400, icon: "⚡", description: "Maestro del código de movimiento, señales y funciones." },
  { level: 6, title: "Director de Videojuegos Pro", requiredXP: 2000, icon: "👑", description: "Desarrollador con juego completo exportado a ejecutable .exe." },
];

export const ALL_BADGES: Badge[] = [
  {
    id: "b_scene_3d",
    title: "Primer Escenario 3D",
    description: "Guardó la primera escena Level_01.tscn con nodos padre e hijo en Godot 4.",
    icon: "📦",
    category: "misión"
  },
  {
    id: "b_light_master",
    title: "Atmósfera Cósmica",
    description: "Configuró luz solar DirectionalLight3D, ambiente y materiales personalizados.",
    icon: "☀️",
    category: "misión"
  },
  {
    id: "b_physics_pro",
    title: "Desafiando a la Gravedad",
    description: "Logró que objetos RigidBody3D caigan y reboten sobre suelos StaticBody3D sólidos.",
    icon: "🧲",
    category: "misión"
  },
  {
    id: "b_hud_designer",
    title: "Maestro del HUD",
    description: "Diseñó una interfaz completa ui_hud.tscn con paneles, iconos y barras de progreso.",
    icon: "🎨",
    category: "misión"
  },
  {
    id: "b_player_character",
    title: "Cuerpo del Jugador 3D",
    description: "Construyó la escena independiente Player.tscn con CharacterBody3D y colisión.",
    icon: "🏃",
    category: "misión"
  },
  {
    id: "b_console_print",
    title: "Mi Primer Mensaje en Consola",
    description: "Completó la Cápsula 4A escribiendo su primer mensaje con print() en GDScript.",
    icon: "💻",
    category: "gdscript"
  },
  {
    id: "b_player_playable",
    title: "Personaje Jugable 3D",
    description: "Completó la Unidad 4: logró que su personaje camine, salte y responda a las teclas.",
    icon: "⚡",
    category: "misión"
  },
  {
    id: "b_backup_hero",
    title: "Escudo de Seguridad",
    description: "Creó una copia de seguridad de su proyecto antes de experimentar con código en la Unidad 5.",
    icon: "🛡️",
    category: "investigación"
  },
  {
    id: "b_dev_tweak",
    title: "Ajusto mi juego como desarrollador",
    description: "Usó @export, constantes y comentarios para personalizar variables desde el Inspector.",
    icon: "🛠️",
    category: "gdscript"
  },
  {
    id: "b_code_debugger",
    title: "Investigador de Código",
    description: "Comprendió el ciclo de vida de un script (_ready vs _physics_process) y depuró con print().",
    icon: "🔍",
    category: "investigación"
  },
  {
    id: "b_camera_follow",
    title: "Cámara Seguidora",
    description: "Configuró Camera3D como hija de Player para que la cámara acompañe al personaje.",
    icon: "🎥",
    category: "misión"
  },
  {
    id: "b_input_master",
    title: "Maestro del Input",
    description: "Configuró Input Map con acciones personalizadas para WASD, flechas y la tecla restart.",
    icon: "🎮",
    category: "gdscript"
  },
  {
    id: "b_asset_explorer",
    title: "Expedición de Recursos",
    description: "Importó y organizó modelos 3D, texturas y sonidos en la carpeta assets/.",
    icon: "🎨",
    category: "misión"
  },
  {
    id: "b_platform_architect",
    title: "Arquitecto de Saltos",
    description: "Construyó un recorrido de plataformas 3D con colisiones Trimesh en Level_01.",
    icon: "🏗️",
    category: "misión"
  },
  {
    id: "b_if_master",
    title: "Maestro de la Lógica If",
    description: "Completó la Cápsula 7A dominando estructuras condicionales if, elif, else y comparaciones.",
    icon: "⚖️",
    category: "gdscript"
  },
  {
    id: "b_function_hero",
    title: "Arquitecto de Funciones",
    description: "Completó la Cápsula 7B declarando y llamando funciones reutilizables en GDScript.",
    icon: "🧠",
    category: "gdscript"
  },
  {
    id: "b_respawn_master",
    title: "Héroe del Respawn",
    description: "Programó el sistema de reaparición automática cuando el personaje cae al vacío.",
    icon: "🔄",
    category: "misión"
  },
  {
    id: "b_coin_collector",
    title: "Coleccionista 3D",
    description: "Creó la escena Coin.tscn con Area3D que gira y se destruye con queue_free() al recogerla.",
    icon: "🪙",
    category: "misión"
  },
  {
    id: "b_node_manipulator",
    title: "Controlador de Nodos HUD",
    description: "Completó la Cápsula 8A modificando la propiedad .text, position y modulate desde código.",
    icon: "🏷️",
    category: "gdscript"
  },
  {
    id: "b_signal_master",
    title: "Maestro de las Señales",
    description: "Completó la Cápsula 8B comunicando nodos de forma desacoplada mediante signal y .emit().",
    icon: "📡",
    category: "gdscript"
  },
  {
    id: "b_score_manager",
    title: "Puntuación Global Autoload",
    description: "Configuró el nodo GameManager como Singleton para gestionar el marcador de monedas.",
    icon: "📊",
    category: "misión"
  },
  {
    id: "b_coin_route",
    title: "Ruta de Recompensas",
    description: "Distribuyó coleccionables estratégicamente para crear un objetivo claro en el nivel.",
    icon: "🌟",
    category: "misión"
  },
  {
    id: "b_camera_arm",
    title: "Pivote y Control de Ratón",
    description: "Creó el pivote CameraArm y capturó/liberó el cursor del ratón con MOUSE_MODE_CAPTURED.",
    icon: "🎥",
    category: "misión"
  },
  {
    id: "b_orbital_camera",
    title: "Cámara Orbital Pro",
    description: "Programó rotación con clamp(), movimiento orientado a la cámara y rotación suave slerp.",
    icon: "🌐",
    category: "misión"
  },
  {
    id: "b_character_model",
    title: "Modelo 3D del Héroe",
    description: "Reemplazó la cápsula provisional por un modelo 3D animado perfectamente alineado.",
    icon: "🕺",
    category: "misión"
  },
  {
    id: "b_animated_hero",
    title: "Héroe Animado",
    description: "Conectó el AnimationPlayer para reproducir Idle, Running y Jump en tiempo de juego.",
    icon: "🎬",
    category: "misión"
  },
  {
    id: "b_bgm_master",
    title: "Atmósfera Musical",
    description: "Añadió música de fondo en bucle con AudioStreamPlayer2D y Autoplay.",
    icon: "🎵",
    category: "misión"
  },
  {
    id: "b_sfx_hero",
    title: "Efectos de Sonido SFX",
    description: "Integró el gestor AudioManager con sonidos para monedas, saltos y pisadas del personaje.",
    icon: "🔊",
    category: "misión"
  },
  {
    id: "b_game_director",
    title: "Director de Videojuegos Pro (v1.0 .exe)",
    description: "Exportó su primer juego ejecutable para Windows en la versión 1.0 lista para compartir.",
    icon: "👑",
    category: "misión"
  },
  {
    id: "b_datalab_ready",
    title: "Pilas del DataLab",
    description: "Creó la escena data_lab.tscn en el Mundo 2 y ejecutó su primer script de experimentos.",
    icon: "🧪",
    category: "gdscript"
  },
  {
    id: "b_data_architect",
    title: "Arquitecto de datos",
    description: "Creó y formateó un sistema de datos completo con int, String, float y bool en GDScript.",
    icon: "📊",
    category: "gdscript"
  },
  {
    id: "b_dynamic_data",
    title: "Generador de Datos Dinámicos",
    description: "Creó variables que cambian, calculó operaciones aritméticas y asignaciones compuestas (+=, -=).",
    icon: "⚡",
    category: "gdscript"
  },
  {
    id: "b_systems_designer",
    title: "Diseñador de sistemas",
    description: "Creó reglas con const, expuso valores editables con @export y documentó su sistema en Godot 4.",
    icon: "🛠️",
    category: "gdscript"
  },
  {
    id: "b_if_else_master",
    title: "Maestro de las Decisiones",
    description: "Creó estructuras de decisión complejas con if, elif, else e indentación en GDScript.",
    icon: "🔀",
    category: "gdscript"
  },
  {
    id: "b_rules_designer",
    title: "Diseñador de reglas",
    description: "Combinó condiciones con and, or, not y detectó acciones del usuario con Input.is_action_pressed().",
    icon: "📜",
    category: "gdscript"
  },
  {
    id: "b_array_master",
    title: "Maestro de las Colecciones",
    description: "Organizó elementos dentro de un Array [], entendió los índices desde el 0 y controló bucles while.",
    icon: "📦",
    category: "gdscript"
  },
  {
    id: "b_world_organizer",
    title: "Organizador de mundos",
    description: "Recorrió listas dinámicamente con bucles for, usó .size() y creó respuestas de estado con match.",
    icon: "🗺️",
    category: "gdscript"
  },
  {
    id: "b_function_creator",
    title: "Creador de Acciones",
    description: "Declaró funciones propias reutilizables con parámetros y las ejecutó desde el ciclo de vida del script.",
    icon: "🎯",
    category: "gdscript"
  },
  {
    id: "b_ability_builder",
    title: "Constructor de habilidades",
    description: "Dominó el uso de return, verificó condiciones con % y controló el ámbito local y global de variables.",
    icon: "✨",
    category: "gdscript"
  },
  {
    id: "b_creative_creator",
    title: "Creador Innovador 🌟",
    description: "Completó un reto creativo opcional personalizando iluminación, nave o colores.",
    icon: "🌟",
    category: "creatividad"
  },
  {
    id: "b_bug_hunter",
    title: "Cazador de Bugs",
    description: "Investigó y resolvió una anomalía técnica en Godot 4 junto al Mentor IA.",
    icon: "🐛",
    category: "investigación"
  },
  {
    id: "b_devlog_writer",
    title: "Cronista de Juegos",
    description: "Escribió su primera entrada de reflexión en el DevLog del laboratorio.",
    icon: "📝",
    category: "investigación"
  },
  {
    id: "b_ui_whisperer",
    title: "Habla-nodos de UI",
    description: "Modificó las propiedades de un Label desde código usando $, get_node y @export.",
    icon: "🗣️",
    category: "gdscript"
  },
  {
    id: "b_ui_wizard",
    title: "Mago de la Interfaz",
    description: "Transformó posición, color y tamaño de un Sprite2D mediante código en InterfaceLab.",
    icon: "🧙‍♂️",
    category: "gdscript"
  },
  {
    id: "b_input_customizer",
    title: "Diseñador de Acciones",
    description: "Configuró la acción use_item en el Input Map y capturó eventos de pulsación y liberación con _input(event).",
    icon: "🎮",
    category: "gdscript"
  },
  {
    id: "b_inventory_keeper",
    title: "Guardián del Inventario",
    description: "Creó un inventario con Diccionarios anidados en InventoryLab, guardando propiedades, cantidades y durabilidad.",
    icon: "🎒",
    category: "gdscript"
  },
  {
    id: "b_state_master",
    title: "Maestro de Estados",
    description: "Definió un enum para controlar estados como IDLE, RUN, JUMP y ATTACK expuestos en el Inspector.",
    icon: "🎛️",
    category: "gdscript"
  },
  {
    id: "b_event_director",
    title: "Director de Eventos",
    description: "Desacopló nodos usando señales personalizadas con signal y .emit() en StateSignalLab.",
    icon: "📡",
    category: "gdscript"
  },
];

export function getRankForXP(xp: number): CreatorRank {
  let currentRank = CREATOR_RANKS[0];
  for (const rank of CREATOR_RANKS) {
    if (xp >= rank.requiredXP) {
      currentRank = rank;
    } else {
      break;
    }
  }
  return currentRank;
}

export function getNextRank(xp: number): CreatorRank | null {
  const currentRank = getRankForXP(xp);
  const nextRank = CREATOR_RANKS.find((r) => r.level === currentRank.level + 1);
  return nextRank || null;
}
