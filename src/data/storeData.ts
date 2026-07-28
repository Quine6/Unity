export interface StoreItem {
  id: string;
  name: string;
  price: number;
  category: "theme" | "title" | "border" | "audio";
  description: string;
  isVipOnly?: boolean;
  primaryColor?: string;
  bgGradient?: string;
  icon?: string;
  value: string;
}

export const VIP_VAULT_PRICE = 1837;
export const VIP_VAULT_NAME = "⚡ LA BÓVEDA SECRETA DE CÓDIGO OMEGA 🌌";

export const STORE_THEMES: StoreItem[] = [
  {
    id: "theme_cyberpunk",
    name: "Cyberpunk Neón",
    price: 0,
    category: "theme",
    description: "Tema estándar del laboratorio con azul neón y verde tóxico.",
    primaryColor: "#00b4ff",
    bgGradient: "from-[#0a1017] to-[#070e14]",
    icon: "⚡",
    value: "theme_cyberpunk"
  },
  {
    id: "theme_gameboy",
    name: "Retro Game Boy '89",
    price: 97,
    category: "theme",
    description: "Estética retro verde píxel nostálgica inspirada en las portátiles clásicas.",
    primaryColor: "#8bac0f",
    bgGradient: "from-[#0f380f] to-[#041a04]",
    icon: "👾",
    value: "theme_gameboy"
  },
  {
    id: "theme_synthwave",
    name: "Synthwave Sunset '84",
    price: 183,
    category: "theme",
    description: "Atardecer ochentero en magenta brillante y violeta retro.",
    primaryColor: "#ec4899",
    bgGradient: "from-[#1a091d] to-[#0d040e]",
    icon: "🌆",
    value: "theme_synthwave"
  },
  {
    id: "theme_deep_space",
    name: "Espacio Profundo",
    price: 327,
    category: "theme",
    description: "Estética cósmica azul violeta y polvo de estrellas para exploradores.",
    primaryColor: "#a855f7",
    bgGradient: "from-[#110e20] to-[#0a0714]",
    icon: "🌌",
    value: "theme_deep_space"
  },
  {
    id: "theme_matrix",
    name: "Matrix Terminal",
    price: 519,
    category: "theme",
    description: "Estilo retro hacker informático con verde fosforescente puro.",
    primaryColor: "#22c55e",
    bgGradient: "from-[#051a0e] to-[#020b06]",
    icon: "💻",
    value: "theme_matrix"
  },
  {
    id: "theme_red_lava",
    name: "Planeta Volcánico",
    price: 743,
    category: "theme",
    description: "Atmósfera volcánica roja y dorado fuego para creadores audaces.",
    primaryColor: "#ef4444",
    bgGradient: "from-[#1a0a0a] to-[#0f0505]",
    icon: "🌋",
    value: "theme_red_lava"
  },
  {
    id: "theme_cyber_samurai",
    name: "Cyber Samurai Pink",
    price: 913,
    category: "theme",
    description: "Combina rosa neón futurista con sombras oscuras de alta precisión.",
    primaryColor: "#f43f5e",
    bgGradient: "from-[#1d0812] to-[#0a0306]",
    icon: "⚔️",
    value: "theme_cyber_samurai"
  },
  // VIP STORE THEMES
  {
    id: "theme_quantum_void",
    name: "Vacío Cuántico OMEGA",
    price: 1483,
    category: "theme",
    isVipOnly: true,
    description: "Energía cuántica oscura reservada para iniciados en la Bóveda Omega.",
    primaryColor: "#6366f1",
    bgGradient: "from-[#090b1e] to-[#03040e]",
    icon: "🌀",
    value: "theme_quantum_void"
  },
  {
    id: "theme_gold_master",
    name: "Gold Master Supreme",
    price: 3137,
    category: "theme",
    isVipOnly: true,
    description: "Edición especial en oro puro brillante reservada para Directores Pro.",
    primaryColor: "#f59e0b",
    bgGradient: "from-[#1c1606] to-[#0f0b03]",
    icon: "👑",
    value: "theme_gold_master"
  }
];

export const STORE_TITLES: StoreItem[] = [
  {
    id: "title_code_cadet",
    name: "Cadete de Código",
    price: 147,
    category: "title",
    description: "Primer galardón honorífico para los que inician su primer script.",
    value: "Cadete de Código 🚀"
  },
  {
    id: "title_coin_hunter",
    name: "Cazador de Monedas",
    price: 213,
    category: "title",
    description: "Para recolectores natos de ítems y secretos ocultos.",
    value: "Cazador de Monedas 🪙"
  },
  {
    id: "title_bug_hunter",
    name: "Buscador de Bugs",
    price: 283,
    category: "title",
    description: "Para desarrolladores expertos en depurar y corregir errores.",
    value: "Buscador de Bugs 🐛"
  },
  {
    id: "title_architect",
    name: "Arquitecto 3D",
    price: 419,
    category: "title",
    description: "Maestro en la creación y jerarquía de escenarios tridimensionales.",
    value: "Arquitecto 3D 🏗️"
  },
  {
    id: "title_hud_master",
    name: "Diseñador de HUD",
    price: 563,
    category: "title",
    description: "Creador de interfaces visuales elegantes y funcionales.",
    value: "Diseñador de HUD 🎨"
  },
  {
    id: "title_physics_master",
    name: "Maestro de las Físicas",
    price: 711,
    category: "title",
    description: "Especialista en masa, gravedad, colisiones y rigidez de objetos.",
    value: "Maestro de Físicas ⚛️"
  },
  {
    id: "title_audio_engineer",
    name: "Ingeniero de Sonido",
    price: 823,
    category: "title",
    description: "Experto en música de fondo, AudioManager y efectos SFX.",
    value: "Ingeniero de Sonido 🎧"
  },
  {
    id: "title_gdscript_legend",
    name: "Leyenda de GDScript",
    price: 891,
    category: "title",
    description: "Experto en lógica de programación, variables y funciones de Godot 4.",
    value: "Leyenda de GDScript ⚡"
  },
  // VIP STORE TITLES
  {
    id: "title_cyber_hacker",
    name: "Hacker del Sector Zero",
    price: 1619,
    category: "title",
    isVipOnly: true,
    description: "Acceso desbloqueado al código interno de la Bóveda Secreta.",
    value: "Hacker del Sector Zero 👾"
  },
  {
    id: "title_godot_archmage",
    name: "Archimago del Motor Godot",
    price: 2199,
    category: "title",
    isVipOnly: true,
    description: "Máxima jerarquía de sabiduría en programación 3D.",
    value: "Archimago de Godot 🧙‍♂️"
  }
];

export const STORE_BORDERS: StoreItem[] = [
  {
    id: "border_neon_cyan",
    name: "Aura Neón Cían",
    price: 129,
    category: "border",
    description: "Un resplandor futurista azul neón alrededor de tu avatar.",
    value: "border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.6)]",
    icon: "💎"
  },
  {
    id: "border_solar_fire",
    name: "Anillo de Fuego Solar",
    price: 197,
    category: "border",
    description: "Borde naranja cálido con destellos de energía solar.",
    value: "border-orange-500 shadow-[0_0_18px_rgba(249,115,22,0.7)]",
    icon: "☀️"
  },
  {
    id: "border_emerald_pulse",
    name: "Escudo Esmeralda",
    price: 271,
    category: "border",
    description: "Borde verde pulsante de energía pura para tu foto de perfil.",
    value: "border-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.6)]",
    icon: "🛡️"
  },
  {
    id: "border_electric_blue",
    name: "Aura Eléctrica Azul",
    price: 383,
    category: "border",
    description: "Descargas eléctricas azules vibrantes alrededor del avatar.",
    value: "border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.8)] animate-pulse",
    icon: "⚡"
  },
  {
    id: "border_amber_gold",
    name: "Borde Dorado Mítico",
    price: 587,
    category: "border",
    description: "Marco dorado brillante reservado a creadores destacados.",
    value: "border-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.8)]",
    icon: "✨"
  },
  {
    id: "border_rainbow_rgb",
    name: "Resplandor Gamer RGB",
    price: 847,
    category: "border",
    description: "Borde multicolor vibrante gamer de alto rendimiento.",
    value: "border-pink-500 shadow-[0_0_22px_rgba(236,72,153,0.8)]",
    icon: "🌈"
  },
  // VIP STORE BORDERS
  {
    id: "border_void_flame",
    name: "Llama del Vacío Cósmico",
    price: 1144,
    category: "border",
    isVipOnly: true,
    description: "Aura ultravioleta pulsante traída directamente de la Bóveda Secreta.",
    value: "border-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.9)] animate-pulse",
    icon: "🔥"
  }
];
