export interface Submodule {
  id: string;
  title: string;
  youtubeId?: string;
  playlistId?: string;
  startTime?: number; // In seconds
  endTime?: number;   // In seconds
  duration?: string;
  description?: string;
  actionObjective?: string;
  victoryCondition?: string;
  godotNodes?: string[]; // Recommended Godot nodes
  optionalChallenge?: string;
  badgeUnlock?: string;
  categoryTag?: "Esencial" | "Reto extra" | "Biblioteca";
}

export interface Mission {
  id: string; // e.g. "m1"
  title: string; // e.g. "🚀 Misión 1 — Entra en NEXUS GAME LAB"
  submodules: Submodule[];
}

export interface Unit {
  id: string; // e.g. "u1"
  title: string; // e.g. "Unidad 1 — Preparar el laboratorio y crear el primer escenario"
  missions: Mission[];
}

export interface World {
  id: string; // e.g. "w1"
  title: string; // e.g. "MUNDO 1 — Tu Primer Juego en Godot 3D"
  units: Unit[];
}

export interface Module {
  id: string;
  title: string;
  submodules: Submodule[];
}

export const GODOT_VIDEO_1_ID = "KXnBp8q_t-Y";
export const GODOT_VIDEO_2_ID = "qmdz-OCSEfs";
export const GODOT_VIDEO_3_ID = "u6fncZUdb-4";
export const GODOT_VIDEO_4_ID = "fya91wv1OPI";
export const GODOT_VIDEO_5_ID = "bMnAPLE4US8";
export const GODOT_VIDEO_6_ID = "ncRQUwlsiHQ";
export const GODOT_VIDEO_7_ID = "KGu9Jtt57Fk";
export const GODOT_VIDEO_8_ID = "HOkYnP4CsfY";
export const GODOT_VIDEO_9_ID = "yWgtlspWr4M";
export const GODOT_VIDEO_10_ID = "PXjtuNA7RWU";
export const GODOT_VIDEO_11_ID = "Ol00419tFsQ";
export const GODOT_VIDEO_12_ID = "RFyN9KNN6Js";

export const GDSCRIPT_VIDEO_1_ID = "nS7wfQAUirY";
export const GDSCRIPT_VIDEO_2_ID = "8pXyzg1Zc3k";
export const GDSCRIPT_VIDEO_3_ID = "qU5xnmHYNVk";
export const GDSCRIPT_VIDEO_4_ID = "jrShD_LOEnA";
export const GDSCRIPT_VIDEO_5_ID = "1F_24X5D9Tk";
export const GDSCRIPT_VIDEO_6_ID = "9A49WvuE0S4";
export const GDSCRIPT_VIDEO_7_ID = "B3hCjdvjVAg";
export const GDSCRIPT_VIDEO_8_ID = "bHqXKn7LG60";

export const worldsData: World[] = [
  {
    id: "w1",
    title: "MUNDO 1 — Tu Primer Juego en Godot 3D",
    units: [
      {
        id: "u1",
        title: "Unidad 1 — Preparar el laboratorio y crear el primer escenario",
        missions: [
          {
            id: "m1",
            title: "🚀 Misión 1 — Entra en NEXUS GAME LAB",
            submodules: [
              {
                id: "01-01",
                title: "Paso 1.1: Qué es Godot (Motor 2D/3D Multiplataforma)",
                youtubeId: GODOT_VIDEO_1_ID,
                startTime: 0,
                endTime: 33,
                duration: "1 min",
                description: "Comprende qué es Godot 4 y cómo te permitirá crear tus propios juegos.",
                actionObjective: "Entender que Godot es tu herramienta de creación de juegos.",
                victoryCondition: "Reconocer las capacidades de Godot 4 y pasar al siguiente paso.",
                godotNodes: ["Engine Overview"]
              },
              {
                id: "01-02",
                title: "Paso 1.2: Escenas y Árbol de Nodos",
                youtubeId: GODOT_VIDEO_1_ID,
                startTime: 33,
                endTime: 50,
                duration: "1 min",
                description: "Descubre la estructura en árbol de nodos que compone cualquier videojuego en Godot.",
                actionObjective: "Ver que un juego se construye uniendo piezas organizadas llamadas nodos.",
                victoryCondition: "Comprender la diferencia entre escenas y nodos.",
                godotNodes: ["Node Tree"]
              },
              {
                id: "01-03",
                title: "Paso 1.3: Descargar Godot (Versión Actual / LTS)",
                youtubeId: GODOT_VIDEO_1_ID,
                startTime: 50,
                endTime: 124,
                duration: "2 min",
                description: "Descarga la versión recomendada del motor en tu ordenador.",
                actionObjective: "Descargar la versión recomendada de Godot 4 desde la web oficial.",
                victoryCondition: "Tener el archivo comprimido de Godot 4 en la carpeta de descargas de tu PC.",
                godotNodes: ["Installer"]
              },
              {
                id: "01-04",
                title: "Paso 1.4: Archivo de Versiones Antiguas",
                youtubeId: GODOT_VIDEO_1_ID,
                startTime: 124,
                endTime: 147,
                duration: "1 min",
                description: "Aprende a ubicar versiones previas en caso de requerir compatibilidad específica.",
                actionObjective: "Localizar el archivo de versiones si fuera necesario en tu equipo.",
                victoryCondition: "Saber dónde encontrar versiones anteriores del motor.",
                godotNodes: ["Archive"]
              },
              {
                id: "01-05",
                title: "Paso 1.5: Descomprimir Godot y Crear Acceso Directo",
                youtubeId: GODOT_VIDEO_1_ID,
                startTime: 147,
                endTime: 190,
                duration: "2 min",
                description: "Descomprime el ejecutable y crea un acceso directo en tu escritorio para abrirlo con un clic.",
                actionObjective: "Abrir Godot 4 directamente desde su acceso directo.",
                victoryCondition: "Ver la pantalla inicial del gestor de proyectos de Godot 4 abierta.",
                godotNodes: ["Executable"]
              },
              {
                id: "01-06",
                title: "Paso 1.6: Gestor de Proyectos",
                youtubeId: GODOT_VIDEO_1_ID,
                startTime: 190,
                endTime: 208,
                duration: "1 min",
                description: "Familiarízate con el panel principal donde se listan y gestionan todos tus juegos.",
                actionObjective: "Reconocer la lista de proyectos y saber dónde se guardarán tus creaciones.",
                victoryCondition: "Identificar el botón 'Nuevo Proyecto' en la barra del gestor.",
                godotNodes: ["Project Manager"]
              },
              {
                id: "01-07",
                title: "Paso 1.7: Crear Proyecto y Elegir Carpeta",
                youtubeId: GODOT_VIDEO_1_ID,
                startTime: 208,
                endTime: 234,
                duration: "2 min",
                description: "Escribe el nombre de tu videojuego y crea la carpeta de trabajo principal.",
                actionObjective: "Crear tu proyecto con el nombre elegido (ej: 'Mi_Primer_Juego_3D') en tu disco duro.",
                victoryCondition: "Hacer clic en 'Crear y Editar' y ver cómo se inicializa el editor.",
                godotNodes: ["Project Setup"]
              },
              {
                id: "01-08",
                title: "Paso 1.8: Renderer (Forward+, Mobile y Compatibility)",
                youtubeId: GODOT_VIDEO_1_ID,
                startTime: 234,
                endTime: 303,
                duration: "2 min",
                description: "Selecciona el motor gráfico adecuado para la potencia de tu equipo.",
                actionObjective: "Elegir la opción recomendada (Forward+ o Compatibility) según las características de tu PC.",
                victoryCondition: "Confirmar la selección y acceder al entorno de trabajo 3D.",
                godotNodes: ["Renderer Config"]
              },
              {
                id: "01-09",
                title: "Paso 1.9: Personalizar el Tema del Editor",
                youtubeId: GODOT_VIDEO_1_ID,
                startTime: 303,
                endTime: 350,
                duration: "2 min",
                description: "Configura el aspecto de tu laboratorio cambiando los colores y tema de la interfaz.",
                actionObjective: "Reto opcional: elegir tu color o tema preferido en la configuración de Godot.",
                victoryCondition: "Comprobación de la Misión 1: Existe un proyecto de Godot 4 abierto con el nombre elegido por Unai.",
                godotNodes: ["Theme Editor"]
              },
            ]
          },
          {
            id: "m2",
            title: "🏗️ Misión 2 — Construye tu primera sala 3D",
            submodules: [
              {
                id: "02-01",
                title: "Paso 2.1: Escena y Nodos Raíz (2D, 3D y User Interface)",
                youtubeId: GODOT_VIDEO_1_ID,
                startTime: 350,
                endTime: 404,
                duration: "2 min",
                description: "Crea tu primer espacio tridimensional seleccionando la opción Escena 3D.",
                actionObjective: "Crear una Escena 3D como nodo principal del nivel.",
                victoryCondition: "Ver el nodo raíz 'Node3D' creado en el panel de Escena.",
                godotNodes: ["Node3D"]
              },
              {
                id: "02-02",
                title: "Paso 2.2: Nodo, Gizmo y Ejes X, Y, Z",
                youtubeId: GODOT_VIDEO_1_ID,
                startTime: 404,
                endTime: 463,
                duration: "2 min",
                description: "Aprende la orientación tridimensional: Rojo (X), Verde (Y arriba/abajo) y Azul (Z delante/detrás).",
                actionObjective: "Identificar las flechas del gizmo 3D y orientarte en el espacio del nivel.",
                victoryCondition: "Saber mover la vista hacia los ejes X, Y y Z.",
                godotNodes: ["Node3D", "Gizmo 3D"]
              },
              {
                id: "02-03",
                title: "Paso 2.3: Guardar Escena .tscn en scenes/",
                youtubeId: GODOT_VIDEO_1_ID,
                startTime: 463,
                endTime: 529,
                duration: "2 min",
                description: "Crea una carpeta de organización llamada 'scenes' y guarda tu nivel inicial.",
                actionObjective: "Crear la carpeta 'scenes' y guardar la escena como 'Level_01.tscn'.",
                victoryCondition: "Confirmar que la escena se guardó en el disco con la extensión .tscn.",
                godotNodes: ["Scene Saver"]
              },
              {
                id: "02-04",
                title: "Paso 2.4: Panel FileSystem",
                youtubeId: GODOT_VIDEO_1_ID,
                startTime: 529,
                endTime: 559,
                duration: "1 min",
                description: "Inspecciona la carpeta del proyecto en el panel inferior izquierdo de Godot.",
                actionObjective: "Localizar el archivo 'Level_01.tscn' dentro del panel FileSystem.",
                victoryCondition: "Ver el icono de la escena guardada en el navegador de archivos de Godot.",
                godotNodes: ["FileSystem"]
              },
              {
                id: "02-05",
                title: "Paso 2.5: Inspector y Transform (Posición, Rotación y Escala)",
                youtubeId: GODOT_VIDEO_1_ID,
                startTime: 559,
                endTime: 619,
                duration: "2 min",
                description: "Accede al panel derecho (Inspector) para ajustar las coordenadas matemáticas exactas.",
                actionObjective: "Prepararte para modificar la posición, rotación y escala de cualquier objeto desde números.",
                victoryCondition: "Localizar la sección 'Transform' en el panel Inspector.",
                godotNodes: ["Inspector", "Transform3D"]
              },
              {
                id: "02-06",
                title: "Paso 2.6: Añadir MeshInstance3D",
                youtubeId: GODOT_VIDEO_1_ID,
                startTime: 619,
                endTime: 694,
                duration: "2 min",
                description: "Crea el nodo encargado de dibujar objetos visibles en la pantalla 3D.",
                actionObjective: "Añadir un nodo hijo de tipo MeshInstance3D al nodo raíz Node3D.",
                victoryCondition: "Ver el nuevo nodo MeshInstance3D dentro del árbol de escena.",
                godotNodes: ["Node3D", "MeshInstance3D"]
              },
              {
                id: "02-07",
                title: "Paso 2.7: Elegir Malla (Cubo, Cilindro o Prisma)",
                youtubeId: GODOT_VIDEO_1_ID,
                startTime: 694,
                endTime: 720,
                duration: "1 min",
                description: "Asigna una forma geométrica a tu nodo visible desde la propiedad Mesh.",
                actionObjective: "Asignar una malla BoxMesh, CylinderMesh o PrismMesh a tu nodo.",
                victoryCondition: "Ver tu primera figura 3D renderizada en el visor 3D.",
                godotNodes: ["MeshInstance3D", "BoxMesh"]
              },
              {
                id: "02-08",
                title: "Paso 2.8: Nodo Padre e Hijo",
                youtubeId: GODOT_VIDEO_1_ID,
                startTime: 720,
                endTime: 763,
                duration: "2 min",
                description: "Aprende la jerarquía: cuando mueves al nodo padre, los nodos hijos se desplazan automáticamente con él.",
                actionObjective: "Crear una figura compuesta con un nodo padre y varios hijos y comprobar que se mueven juntos.",
                victoryCondition: "Mover el nodo padre y comprobar que toda la estructura articulada le sigue.",
                godotNodes: ["Node Hierarchy"]
              },
              {
                id: "02-09",
                title: "Paso 2.9: Navegar por el Viewport 3D",
                youtubeId: GODOT_VIDEO_1_ID,
                startTime: 763,
                endTime: 885,
                duration: "3 min",
                description: "Domina la cámara del editor usando el clic derecho del ratón, WASD y la rueda.",
                actionObjective: "Rodear tu creación 3D por arriba, por abajo y por todos lados como un director de cine.",
                victoryCondition: "Sentirte cómodo orbitando y desplazándote por la sala 3D.",
                godotNodes: ["Viewport Camera"]
              },
              {
                id: "02-10",
                title: "Paso 2.10: Escalar de Forma Independiente por Cada Eje",
                youtubeId: GODOT_VIDEO_1_ID,
                startTime: 885,
                endTime: 933,
                duration: "2 min",
                description: "Estira o aplasta piezas individuales modificando la Escala en X, Y o Z independientemente.",
                actionObjective: "Estirar una pieza para hacer una plataforma ancha o una columna alta.",
                victoryCondition: "Ver una pieza transformada con dimensiones personalizadas.",
                godotNodes: ["Transform -> Scale"]
              },
              {
                id: "02-11",
                title: "Paso 2.11: Guardar con Ctrl + S",
                youtubeId: GODOT_VIDEO_1_ID,
                startTime: 933,
                endTime: 960,
                duration: "1 min",
                description: "Guarda todo tu trabajo en el archivo de escena antes de terminar la misión.",
                actionObjective: "Pulsar Ctrl + S para guardar permanentemente Level_01.tscn.",
                victoryCondition: "Comprobación de la Misión 2: Level_01.tscn contiene al menos un objeto 3D visible, transformado y guardado.",
                optionalChallenge: "Reto creativo opcional: crear una nave, torre, robot, portal o estructura inventada usando un nodo padre y al menos dos nodos hijos."
              },
            ]
          }
        ]
      },
      {
        id: "u2",
        title: "Unidad 2 — Ilumina el mundo y haz que tenga físicas",
        missions: [
          {
            id: "m3",
            title: "💡 Misión 3 — Dale luz a tu primer mundo",
            submodules: [
              {
                id: "03-01",
                title: "Paso 3.1: Introducción (Iluminación, Materiales y Físicas)",
                youtubeId: GODOT_VIDEO_2_ID,
                startTime: 0,
                endTime: 36,
                duration: "1 min",
                description: "Entender el objetivo: convertir una escena vacía en un mundo vivo.",
                actionObjective: "Comprender la importancia de la iluminación y los materiales en 3D.",
                victoryCondition: "Reconocer las partes de la lección y avanzar a la cámara.",
                godotNodes: ["Overview"]
              },
              {
                id: "03-02",
                title: "Paso 3.2: Ejecutar Proyecto o Escena Actual (F6)",
                youtubeId: GODOT_VIDEO_2_ID,
                startTime: 36,
                endTime: 70,
                duration: "1 min",
                description: "Aprende a probar la escena actual en vivo presionando la tecla F6.",
                actionObjective: "Ejecutar Level_01.tscn con F6, cerrar la ventana de prueba y volver al editor.",
                victoryCondition: "Pulsar F6 y comprobar cómo se renderiza la prueba del juego.",
                godotNodes: ["Scene Runner"]
              },
              {
                id: "03-03",
                title: "Paso 3.3: Crear Camera3D, Gizmo y Modo Preview",
                youtubeId: GODOT_VIDEO_2_ID,
                startTime: 70,
                endTime: 137,
                duration: "2 min",
                description: "Crea el ojo del jugador en el mundo 3D y ajústalo con el modo Preview.",
                actionObjective: "Añadir un nodo Camera3D y colocarlo mirando hacia tu escenario.",
                victoryCondition: "Pulsar 'Preview' en la esquina de la vista 3D y ver exactamente lo que enfocará la cámara.",
                godotNodes: ["Camera3D"]
              },
              {
                id: "03-04",
                title: "Paso 3.4: Crear DirectionalLight3D y WorldEnvironment",
                youtubeId: GODOT_VIDEO_2_ID,
                startTime: 137,
                endTime: 210,
                duration: "2 min",
                description: "Encender la luz del sol y el ambiente cósmico del nivel.",
                actionObjective: "Añadir los nodos DirectionalLight3D y WorldEnvironment a tu escena.",
                victoryCondition: "Ver tu mundo iluminado por luz solar tridimensional.",
                godotNodes: ["DirectionalLight3D", "WorldEnvironment"]
              },
              {
                id: "03-05",
                title: "Paso 3.5: Color, Energía y Rotación de la Luz",
                youtubeId: GODOT_VIDEO_2_ID,
                startTime: 210,
                endTime: 315,
                duration: "2 min",
                description: "Cambia la hora del día o la atmósfera del mapa rotando la luz y cambiando su energía.",
                actionObjective: "Girar la luz y cambiar su color para crear un amanecer, atardecer o noche.",
                victoryCondition: "Ver el ambiente visual de tu nivel cambiar de tono y dirección de luz.",
                godotNodes: ["DirectionalLight3D -> Light Color"]
              },
              {
                id: "03-06",
                title: "Paso 3.6: Crear Suelo con MeshInstance3D y PlaneMesh",
                youtubeId: GODOT_VIDEO_2_ID,
                startTime: 315,
                endTime: 388,
                duration: "2 min",
                description: "Añade una superficie plana gigante bajo los objetos para servir de suelo.",
                actionObjective: "Añadir un MeshInstance3D con un PlaneMesh y escalarlo en X y Z.",
                victoryCondition: "Tener un suelo plano gigante debajo de tu escenario.",
                godotNodes: ["MeshInstance3D", "PlaneMesh"]
              },
              {
                id: "03-07",
                title: "Paso 3.7: Activar Sombras (Enable Shadow & Cast Shadow)",
                youtubeId: GODOT_VIDEO_2_ID,
                startTime: 388,
                endTime: 456,
                duration: "2 min",
                description: "Haz que los objetos proyecten sombras realistas sobre el suelo.",
                actionObjective: "Activar la casilla 'Shadow -> Enabled' en el Inspector de DirectionalLight3D.",
                victoryCondition: "Ver sombras negras proyectadas bajo los objetos de tu mundo.",
                godotNodes: ["DirectionalLight3D -> Shadow"]
              },
              {
                id: "03-08",
                title: "Paso 3.8: Crear Carpeta materials/ y StandardMaterial3D",
                youtubeId: GODOT_VIDEO_1_ID,
                startTime: 456,
                endTime: 525,
                duration: "2 min",
                description: "Crea una carpeta organizada para guardar las pinturas y texturas de tus objetos.",
                actionObjective: "Crear la carpeta 'materials' y un archivo de recurso StandardMaterial3D.",
                victoryCondition: "Ver el archivo de material guardado dentro de la carpeta materials.",
                godotNodes: ["StandardMaterial3D"]
              },
              {
                id: "03-09",
                title: "Paso 3.9: Asignar Material y Cambiar Albedo",
                youtubeId: GODOT_VIDEO_2_ID,
                startTime: 525,
                endTime: 595,
                duration: "2 min",
                description: "Pinta tu suelo o tus objetos asignando el material y cambiando su color Albedo.",
                actionObjective: "Arrastrar el material a tu suelo y elegir su color base.",
                victoryCondition: "Ver el suelo pintado con tu color elegido.",
                godotNodes: ["Material -> Albedo"]
              },
              {
                id: "03-10",
                title: "Paso 3.10: Ajustar Metallic y Emission",
                youtubeId: GODOT_VIDEO_2_ID,
                startTime: 595,
                endTime: 665,
                duration: "2 min",
                description: "Dale un acabado metálico, brillante o neón que emita luz propia.",
                actionObjective: "Modificar Metallic o activar Emission para hacer superficies resplandecientes.",
                victoryCondition: "Comprobación de la Misión 3: Al ejecutar la escena con F6, ves un suelo iluminado desde tu cámara y con tu propio estilo visual.",
                optionalChallenge: "Reto creativo opcional: cambiar luz, color y emisión para convertir el nivel en un planeta helado, volcán, ciudad nocturna, nave espacial o idea propia."
              },
            ]
          },
          {
            id: "m4",
            title: "🧲 Misión 4 — Haz que los objetos obedezcan a la gravedad",
            submodules: [
              {
                id: "04-01",
                title: "Paso 4.1: Renombrar Nodos y Físicas Estáticas",
                youtubeId: GODOT_VIDEO_2_ID,
                startTime: 665,
                endTime: 706,
                duration: "1 min",
                description: "Organiza la escena renombrando nodos clave como 'Ground' y 'TestCube'.",
                actionObjective: "Renombrar el suelo como Ground y el cubo de pruebas como TestCube en el árbol de escena.",
                victoryCondition: "Tener los nombres de los nodos limpios y reconocibles.",
                godotNodes: ["Node Renamer"]
              },
              {
                id: "04-02",
                title: "Paso 4.2: Convertir una Superficie en Sólida con StaticBody3D",
                youtubeId: GODOT_VIDEO_2_ID,
                startTime: 706,
                endTime: 739,
                duration: "1 min",
                description: "Convierte el suelo en un cuerpo físico estático para impedir que otros objetos lo atraviesen.",
                actionObjective: "Crear un nodo StaticBody3D para tu suelo.",
                victoryCondition: "Ver el nodo StaticBody3D abrazando la malla del suelo.",
                godotNodes: ["StaticBody3D"]
              },
              {
                id: "04-03",
                title: "Paso 4.3: Colisión Automática (Convex/Concave & CollisionShape3D)",
                youtubeId: GODOT_VIDEO_2_ID,
                startTime: 739,
                endTime: 811,
                duration: "2 min",
                description: "Genera la forma de choque (CollisionShape3D) de manera automática desde el menú Malla.",
                actionObjective: "Usar la opción 'Crear colisión estática cóncava/convexa' para el suelo.",
                victoryCondition: "Ver la malla azul/verde de colisión bordeando exactamente el suelo.",
                godotNodes: ["CollisionShape3D"]
              },
              {
                id: "04-04",
                title: "Paso 4.4: Usar RigidBody3D para Físicas Dinámicas y Gravedad",
                youtubeId: GODOT_VIDEO_2_ID,
                startTime: 811,
                endTime: 855,
                duration: "2 min",
                description: "Añade física dinámica real a un objeto para que caiga y rebote por gravedad.",
                actionObjective: "Convertir un cubo en RigidBody3D con su CollisionShape3D asignado.",
                victoryCondition: "Tener un cubo rígido colocado flotando en el aire sobre el suelo.",
                godotNodes: ["RigidBody3D", "CollisionShape3D"]
              },
              {
                id: "04-05",
                title: "Paso 4.5: Probar Caída Libre y Colisiones",
                youtubeId: GODOT_VIDEO_2_ID,
                startTime: 855,
                endTime: 877,
                duration: "1 min",
                description: "Presiona F6 y observa la magia de las físicas 3D en tiempo real.",
                actionObjective: "Ejecutar la escena y ver cómo el cubo cae por gravedad y se detiene exactamente sobre el suelo.",
                victoryCondition: "Ver el cubo rebotar o asentarse sobre el suelo sin atravesarlo.",
                godotNodes: ["RigidBody3D Sim"]
              },
              {
                id: "04-06",
                title: "Paso 4.6: Duplicar Objetos Rígidos (Ctrl + D) y Probar con F6",
                youtubeId: GODOT_VIDEO_2_ID,
                startTime: 877,
                endTime: 930,
                duration: "2 min",
                description: "Duplica los cubos rígidos y observa cómo chocan entre sí.",
                actionObjective: "Duplicar el cubo con Ctrl + D, apilarlos o desalinearlos y probar con F6.",
                victoryCondition: "Comprobación de la Misión 4: Al pulsar F6, al menos un cubo cae y se queda sobre el suelo sin atravesarlo.",
                optionalChallenge: "Reto creativo opcional: crear una torre de cubos, soltarla desde arriba y comprobar qué ocurre. Puedes tomar una captura de pantalla para tu DevLog."
              },
            ]
          }
        ]
      },
      {
        id: "u3",
        title: "Unidad 3 — Diseña la interfaz de tu juego",
        missions: [
          {
            id: "m5",
            title: "🎨 Misión 5 — Construye el panel de misión",
            submodules: [
              {
                id: "05-01",
                title: "Paso 5.1: Qué es una Interfaz de Usuario (UI) en un Videojuego",
                youtubeId: GODOT_VIDEO_3_ID,
                startTime: 0,
                endTime: 34,
                duration: "1 min",
                description: "Identifica los elementos visuales clave que informan al jugador: vidas, puntos, botones y mensajes.",
                actionObjective: "Identificar elementos que un jugador ve: vidas, puntos, botones y mensajes.",
                victoryCondition: "Comprender la utilidad de la interfaz y avanzar a la creación de la escena UI.",
                godotNodes: ["Control Overview"]
              },
              {
                id: "05-02",
                title: "Paso 5.2: Crear Escena User Interface con Nodo Raíz Control",
                youtubeId: GODOT_VIDEO_3_ID,
                startTime: 34,
                endTime: 84,
                duration: "1 min",
                description: "Crea una escena especial de tipo User Interface (Control) para albergar la interfaz.",
                actionObjective: "Crear una escena con nodo raíz Control y guardarla como 'ui_hud.tscn'.",
                victoryCondition: "Ver el archivo 'ui_hud.tscn' guardado en tu proyecto.",
                godotNodes: ["Control"]
              },
              {
                id: "05-03",
                title: "Paso 5.3: Marco Lila: Límites de la Pantalla de Interfaz",
                youtubeId: GODOT_VIDEO_3_ID,
                startTime: 84,
                endTime: 127,
                duration: "1 min",
                description: "Reconoce el rectángulo de marco lila que delimita los bordes visibles de la pantalla.",
                actionObjective: "Comprobar dónde se verá la interfaz dentro del lienzo 2D del juego.",
                victoryCondition: "Identificar la resolución base marcada por el rectángulo de Control.",
                godotNodes: ["Control Bounds"]
              },
              {
                id: "05-04",
                title: "Paso 5.4: Crear y Escalar un Panel",
                youtubeId: GODOT_VIDEO_3_ID,
                startTime: 127,
                endTime: 200,
                duration: "2 min",
                description: "Añade una tarjeta contenedora Panel para enmarcar contadores o tarjetas de información.",
                actionObjective: "Añadir un nodo hijo de tipo Panel y escalarlo en el lienzo.",
                victoryCondition: "Ver tu primer panel de interfaz dibujado sobre la pantalla.",
                godotNodes: ["Control", "Panel"]
              },
              {
                id: "05-05",
                title: "Paso 5.5: Anclajes (Anchors Preset y Adaptación a Resolución)",
                youtubeId: GODOT_VIDEO_3_ID,
                startTime: 200,
                endTime: 217,
                duration: "1 min",
                description: "Asegura que tu panel permanezca en la esquina correcta aunque cambie el tamaño de la ventana.",
                actionObjective: "Utilizar Anchors Preset para fijar el panel a la esquina superior izquierda o derecha.",
                victoryCondition: "Fijar el anclaje y ver cómo el panel se mantiene firme al redimensionar.",
                godotNodes: ["Panel -> Anchors Preset"]
              },
              {
                id: "05-06",
                title: "Paso 5.6: Estilos con Theme Overrides y StyleBoxFlat",
                youtubeId: GODOT_VIDEO_3_ID,
                startTime: 217,
                endTime: 267,
                duration: "1 min",
                description: "Personaliza el aspecto de tu panel cambiando sus propiedades visuales.",
                actionObjective: "Crear un nuevo recurso StyleBoxFlat en Theme Overrides -> Styles -> Panel.",
                victoryCondition: "Desplegar el inspector de StyleBoxFlat para editar el diseño.",
                godotNodes: ["StyleBoxFlat"]
              },
              {
                id: "05-07",
                title: "Paso 5.7: Bordes Redondeados, Grosor y Color",
                youtubeId: GODOT_VIDEO_3_ID,
                startTime: 267,
                endTime: 328,
                duration: "2 min",
                description: "Define el color de fondo, redondea las esquinas y añade un borde brillante a tu panel.",
                actionObjective: "Elegir el color de fondo (Bg Color), el grosor del borde (Border Width) y el radio de esquinas (Corner Radius).",
                victoryCondition: "Ver tu panel personalizado con bordes redondeados y estilo pro.",
                godotNodes: ["StyleBoxFlat -> Corner Radius"]
              },
              {
                id: "05-08",
                title: "Paso 5.8: Paneles Anidados y Make Unique",
                youtubeId: GODOT_VIDEO_3_ID,
                startTime: 328,
                endTime: 419,
                duration: "2 min",
                description: "Duplica o anida paneles y usa 'Make Unique' para cambiar sus colores de forma independiente.",
                actionObjective: "Crear una segunda tarjeta visual independiente usando 'Make Unique' en su estilo.",
                victoryCondition: "Comprobación de la Misión 5: Existe una escena ui_hud.tscn con un panel anclado y personalizado.",
                optionalChallenge: "Reto creativo opcional: elegir una identidad visual para el juego: neón, espacial, pirata, volcánica, helada o inventada."
              },
            ]
          },
          {
            id: "m6",
            title: "📊 Misión 6 — Muestra información al jugador",
            submodules: [
              {
                id: "06-01",
                title: "Paso 6.1: Mostrar Imágenes e Iconos con TextureRect",
                youtubeId: GODOT_VIDEO_3_ID,
                startTime: 419,
                endTime: 499,
                duration: "2 min",
                description: "Añade mallas gráficas o imágenes 2D como monedas, corazones o estrellas a tu panel.",
                actionObjective: "Añadir un nodo TextureRect e integrar una imagen en la propiedad Texture.",
                victoryCondition: "Ver tu icono gráfico dibujado dentro del panel de interfaz.",
                godotNodes: ["TextureRect"]
              },
              {
                id: "06-02",
                title: "Paso 6.2: Mostrar Texto con Label",
                youtubeId: GODOT_VIDEO_3_ID,
                startTime: 499,
                endTime: 529,
                duration: "1 min",
                description: "Escribe etiquetas de texto dinámico para mostrar contadores al jugador.",
                actionObjective: "Añadir un nodo Label con el texto inicial 'Monedas: 0' o 'Vidas: 3'.",
                victoryCondition: "Ver el texto de tu etiqueta renderizado sobre el panel.",
                godotNodes: ["Label"]
              },
              {
                id: "06-03",
                title: "Paso 6.3: Tamaño, Color, Sombra y Borde del Texto",
                youtubeId: GODOT_VIDEO_3_ID,
                startTime: 529,
                endTime: 686,
                duration: "3 min",
                description: "Diseña un texto altamente legible añadiendo sombras, contorno y fuente personalizada.",
                actionObjective: "Modificar Font Size, Font Color y Font Outline/Shadow en Label -> Theme Overrides.",
                victoryCondition: "Tener un texto nítido, grande y fácil de leer durante la partida.",
                godotNodes: ["Label -> Theme Overrides"]
              },
              {
                id: "06-04",
                title: "Paso 6.4: Guías Rojas de Alineación y Centrado",
                youtubeId: GODOT_VIDEO_3_ID,
                startTime: 686,
                endTime: 718,
                duration: "1 min",
                description: "Utiliza las guías magnéticas inteligentes de Godot para centrar elementos sin colocarlos 'a ojo'.",
                actionObjective: "Alinear perfectamente el icono TextureRect con el texto Label usando las guías purpuras/rojas.",
                victoryCondition: "Ver icono y texto simétricamente alineados en el panel.",
                godotNodes: ["Alignment Guides"]
              },
              {
                id: "06-05",
                title: "Paso 6.5: Crear ProgressBar",
                youtubeId: GODOT_VIDEO_3_ID,
                startTime: 718,
                endTime: 820,
                duration: "2 min",
                description: "Construye una barra visual de medición para indicar la vida, energía o progreso en el nivel.",
                actionObjective: "Añadir un nodo ProgressBar y configurar sus valores Value, Min y Max.",
                victoryCondition: "Ver la barra de progreso llenándose o vaciándose en el editor.",
                godotNodes: ["ProgressBar"]
              },
              {
                id: "06-06",
                title: "Paso 6.6: Estilizar la Barra con StyleBoxFlat",
                youtubeId: GODOT_VIDEO_3_ID,
                startTime: 820,
                endTime: 853,
                duration: "1 min",
                description: "Pinta el fondo (Background) y el relleno (Fill) de tu barra de vida o energía.",
                actionObjective: "Personalizar los estilos 'Background' y 'Fill' de la ProgressBar con colores contrastados.",
                victoryCondition: "Comprobación de la Misión 6: El panel muestra al menos un icono, una etiqueta y una barra de progreso con estilo propio.",
                optionalChallenge: "Reto creativo opcional: crear dos versiones del HUD: una para un mundo 'normal' y otra para un mundo 'en peligro'."
              },
            ]
          },
          {
            id: "m7",
            title: "🎮 Misión 7 — Ordena una pantalla con botones",
            submodules: [
              {
                id: "07-01",
                title: "Paso 7.1: Crear un Button y Configurar su Texto",
                youtubeId: GODOT_VIDEO_3_ID,
                startTime: 853,
                endTime: 897,
                duration: "1 min",
                description: "Crea botones interactivos para menús de juego como 'Jugar', 'Continuar' o 'Ajustes'.",
                actionObjective: "Añadir un nodo Button con el texto 'JUGAR NUEVO NIVEL'.",
                victoryCondition: "Ver el botón rectangular clickable en la pantalla.",
                godotNodes: ["Button"]
              },
              {
                id: "07-02",
                title: "Paso 7.2: Estados del Botón (Normal, Hover, Pulsado y Deshabilitado)",
                youtubeId: GODOT_VIDEO_3_ID,
                startTime: 897,
                endTime: 980,
                duration: "2 min",
                description: "Proporciona reacción visual cuando el ratón pasa por encima o presiona el botón.",
                actionObjective: "Personalizar las propiedades Hover, Pressed y Normal del botón.",
                victoryCondition: "Ver cambiar de color el botón al pasar el cursor sobre él.",
                godotNodes: ["Button -> Styles"]
              },
              {
                id: "07-03",
                title: "Paso 7.3: Crear Fondos con ColorRect",
                youtubeId: GODOT_VIDEO_3_ID,
                startTime: 980,
                endTime: 1017,
                duration: "1 min",
                description: "Añade un fondo tintado completo tras los menús de pausa o victoria.",
                actionObjective: "Añadir un nodo ColorRect con opacidad o color oscuro detrás del menú.",
                victoryCondition: "Ver un fondo semi-transparente oscureciendo el fondo del juego.",
                godotNodes: ["ColorRect"]
              },
              {
                id: "07-04",
                title: "Paso 7.4: Organización con HBoxContainer y VBoxContainer",
                youtubeId: GODOT_VIDEO_3_ID,
                startTime: 1017,
                endTime: 1068,
                duration: "2 min",
                description: "Aprende los contenedores automáticos que organizan listas de botones en vertical u horizontal.",
                actionObjective: "Añadir un VBoxContainer y mover varios botones dentro como hijos.",
                victoryCondition: "Ver los botones auto-alinearse perfectamente en columna vertical.",
                godotNodes: ["VBoxContainer", "HBoxContainer"]
              },
              {
                id: "07-05",
                title: "Paso 7.5: Añadir Hijos al Contenedor y Ajustar Separation",
                youtubeId: GODOT_VIDEO_3_ID,
                startTime: 1068,
                endTime: 1110,
                duration: "1 min",
                description: "Ajusta la separación uniforme entre botones desde Theme Overrides -> Constants.",
                actionObjective: "Modificar la constante 'Separation' para dejar espacio elegante entre los botones.",
                victoryCondition: "Comprobación de la Misión 7: Existe una pantalla visual con fondo, título y al menos un botón ordenado mediante contenedores.",
                optionalChallenge: "Reto creativo opcional: crear una pantalla de 'Nivel Completado' con un botón que, de momento, solo sea visual."
              },
            ]
          }
        ]
      },
      {
        id: "u4",
        title: "Unidad 4 — Crea un personaje que pueda moverse",
        missions: [
          {
            id: "m8",
            title: "🏃 Misión 8 — Construye el cuerpo de tu personaje",
            submodules: [
              {
                id: "08-01",
                title: "Paso 8.1: Personaje 3D, Movimiento y Primer Contacto con GDScript",
                youtubeId: GODOT_VIDEO_4_ID,
                startTime: 0,
                endTime: 36,
                duration: "1 min",
                description: "Entender el objetivo del hito: crear un personaje independiente que recorra tu mundo 3D.",
                actionObjective: "Comprender la necesidad de separar el personaje de la escena del nivel.",
                victoryCondition: "Avanzar a la creación de la escena independiente Player.tscn.",
                godotNodes: ["Player Overview"]
              },
              {
                id: "08-02",
                title: "Paso 8.2: Crear el Personaje en Escena Independiente (Player.tscn)",
                youtubeId: GODOT_VIDEO_4_ID,
                startTime: 36,
                endTime: 78,
                duration: "1 min",
                description: "Crea una nueva escena vacía y guárdala como Player.tscn para que sea reutilizable.",
                actionObjective: "Crear una nueva escena y guardarla como 'Player.tscn'.",
                victoryCondition: "Ver Player.tscn guardado dentro de la carpeta de escenas de tu proyecto.",
                godotNodes: ["Scene Manager"]
              },
              {
                id: "08-03",
                title: "Paso 8.3: Usar CharacterBody3D como Nodo Raíz Físico",
                youtubeId: GODOT_VIDEO_4_ID,
                startTime: 78,
                endTime: 138,
                duration: "1 min",
                description: "Utiliza el nodo raíz especial CharacterBody3D diseñado para controlar personajes con código.",
                actionObjective: "Asignar CharacterBody3D como nodo raíz de la escena Player.",
                victoryCondition: "Ver el nodo raíz CharacterBody3D en el panel Escena.",
                godotNodes: ["CharacterBody3D"]
              },
              {
                id: "08-04",
                title: "Paso 8.4: Aspecto del Cuerpo con MeshInstance3D y CapsuleMesh",
                youtubeId: GODOT_VIDEO_4_ID,
                startTime: 138,
                endTime: 187,
                duration: "1 min",
                description: "Añade una figura visible provisional de tipo cápsula para representar a tu personaje.",
                actionObjective: "Añadir un nodo MeshInstance3D con una malla CapsuleMesh como hijo de CharacterBody3D.",
                victoryCondition: "Ver la cápsula 3D dibujada en el viewport.",
                godotNodes: ["CharacterBody3D", "MeshInstance3D", "CapsuleMesh"]
              },
              {
                id: "08-05",
                title: "Paso 8.5: Crear CollisionShape3D y CapsuleShape3D",
                youtubeId: GODOT_VIDEO_4_ID,
                startTime: 187,
                endTime: 222,
                duration: "1 min",
                description: "Crea la forma de colisión física invisible para impedir que el personaje atravese el suelo.",
                actionObjective: "Añadir CollisionShape3D con una CapsuleShape3D ajustada al cuerpo.",
                victoryCondition: "Ver el contorno azul/verde de colisión abrazando exactamente la cápsula.",
                godotNodes: ["CollisionShape3D", "CapsuleShape3D"]
              },
              {
                id: "08-06",
                title: "Paso 8.6: Construir Cuerpo y Cabeza con Jerarquía de Nodos",
                youtubeId: GODOT_VIDEO_4_ID,
                startTime: 222,
                endTime: 286,
                duration: "1 min",
                description: "Articula el personaje añadiendo una esfera u otros detalles como la cabeza del jugador.",
                actionObjective: "Añadir un segundo MeshInstance3D (SphereMesh) elevado para simular la cabeza.",
                victoryCondition: "Tener un personaje articulado con cuerpo y cabeza.",
                godotNodes: ["MeshInstance3D -> Head"]
              },
              {
                id: "08-07",
                title: "Paso 8.7: Aplicar Color con Surface Material Override",
                youtubeId: GODOT_VIDEO_4_ID,
                startTime: 286,
                endTime: 366,
                duration: "2 min",
                description: "Pinta a tu jugador asignando un color Albedo brillante en Surface Material Override.",
                actionObjective: "Asignar un material propio al jugador y elegir su color característico.",
                victoryCondition: "Ver a tu personaje pintado con tu color elegido.",
                godotNodes: ["Material -> Surface Material Override"]
              },
              {
                id: "08-08",
                title: "Paso 8.8: Instanciar Player.tscn dentro de Level_01",
                youtubeId: GODOT_VIDEO_4_ID,
                startTime: 366,
                endTime: 395,
                duration: "1 min",
                description: "Arrastra e instancia el archivo Player.tscn dentro de la escena principal de tu mapa.",
                actionObjective: "Instanciar la escena Player.tscn dentro de Level_01.tscn sobre el suelo.",
                victoryCondition: "Ver tu personaje apoyado sobre el suelo en Level_01.",
                godotNodes: ["Instanced Scene"]
              },
              {
                id: "08-09",
                title: "Paso 8.9: Ventajas de las Escenas Instanciadas",
                youtubeId: GODOT_VIDEO_4_ID,
                startTime: 395,
                endTime: 499,
                duration: "2 min",
                description: "Comprende por qué trabajar con escenas independientes te permite modificar el personaje y actualizar todos los niveles automáticamente.",
                actionObjective: "Entender el superpoder de la modularidad en Godot 4.",
                victoryCondition: "Comprobación de la Misión 8: Level_01 contiene un personaje visible sobre el suelo con colisión correctamente alineada.",
                optionalChallenge: "Reto creativo opcional: cambiar color, forma o tamaño para que el personaje parezca un robot, alienígena, explorador, bola de energía o creación propia."
              },
            ]
          },
          {
            id: "m9",
            title: "📜 Misión 9 — Da instrucciones a tu personaje",
            submodules: [
              {
                id: "09-01",
                title: "Paso 9.1: Lenguajes en Godot: GDScript y C#",
                youtubeId: GODOT_VIDEO_4_ID,
                startTime: 499,
                endTime: 568,
                duration: "1 min",
                description: "Descubre los lenguajes soportados por Godot y por qué GDScript es la mejor opción para aprender.",
                actionObjective: "Entender que GDScript es el lenguaje nativo y ultra-rápido de Godot 4.",
                victoryCondition: "Elegir GDScript para programar tu personaje.",
                godotNodes: ["GDScript Engine"]
              },
              {
                id: "09-02",
                title: "Paso 9.2: Adjuntar un Script al Nodo Raíz Player",
                youtubeId: GODOT_VIDEO_4_ID,
                startTime: 568,
                endTime: 599,
                duration: "1 min",
                description: "Haz clic derecho en el nodo raíz CharacterBody3D y selecciona 'Attach Script'.",
                actionObjective: "Abrir la ventana de creación de scripts en Godot 4.",
                victoryCondition: "Ver el panel de configuración de Attach Script.",
                godotNodes: ["Attach Script"]
              },
              {
                id: "09-03",
                title: "Paso 9.3: Usar la Plantilla Básica de Movimiento 3D",
                youtubeId: GODOT_VIDEO_4_ID,
                startTime: 599,
                endTime: 629,
                duration: "1 min",
                description: "Aprovecha la plantilla oficial de movimiento 3D que incluye gravedad, velocidad e inputs ya configurados.",
                actionObjective: "Seleccionar la plantilla 'CharacterBody3D: Basic Movement'.",
                victoryCondition: "Confirmar la plantilla como punto de partida.",
                godotNodes: ["Basic Movement Template"]
              },
              {
                id: "09-04",
                title: "Paso 9.4: Crear Carpeta scripts/ y Guardar player_movement.gd",
                youtubeId: GODOT_VIDEO_4_ID,
                startTime: 629,
                endTime: 690,
                duration: "1 min",
                description: "Crea una carpeta de organización llamada 'scripts' y guarda el archivo con el nombre player_movement.gd.",
                actionObjective: "Crear la carpeta 'scripts' y guardar el script como 'player_movement.gd'.",
                victoryCondition: "Ver scripts/player_movement.gd en tu panel FileSystem.",
                godotNodes: ["Script Saver"]
              },
              // 🟢 CÁPSULA GDSCRIPT 4A — MI PRIMER MENSAJE DESDE EL CÓDIGO
              {
                id: "04A-01",
                title: "Cápsula 4A.1: GDScript como Lenguaje de Programación",
                youtubeId: GDSCRIPT_VIDEO_1_ID,
                startTime: 0,
                endTime: 66,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Entiende qué es GDScript y por qué sirve para dar órdenes lógicas a los nodos de tu juego.",
                actionObjective: "Comprender la diferencia entre nodos (cuerpo) y scripts (cerebro).",
                victoryCondition: "Avanzar al laboratorio de código de pruebas.",
                godotNodes: ["GDScript Core"]
              },
              {
                id: "04A-02",
                title: "Cápsula 4A.2: Crear Escena de Pruebas code_lab.tscn",
                youtubeId: GDSCRIPT_VIDEO_1_ID,
                startTime: 66,
                endTime: 92,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Crea una escena de pruebas aislada para experimentar sin riesgo de romper el personaje.",
                actionObjective: "Crear una escena con nodo raíz Node y guardarla como 'code_lab.tscn'.",
                victoryCondition: "Ver la escena code_lab.tscn lista en el editor.",
                godotNodes: ["Node", "Code Lab"]
              },
              {
                id: "04A-03",
                title: "Cápsula 4A.3: Crear my_first_script.gd con Attach Script",
                youtubeId: GDSCRIPT_VIDEO_1_ID,
                startTime: 92,
                endTime: 129,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Adjunta tu primer script limpio a la escena de pruebas.",
                actionObjective: "Crear y guardar scripts/my_first_script.gd unido a Node.",
                victoryCondition: "Ver el editor de código abierto con tu primer script.",
                godotNodes: ["Attach Script"]
              },
              {
                id: "04A-04",
                title: "Cápsula 4A.4: Estructura Inicial (extends, _ready y _process)",
                youtubeId: GDSCRIPT_VIDEO_1_ID,
                startTime: 129,
                endTime: 205,
                duration: "2 min",
                categoryTag: "Esencial",
                description: "Identifica las 4 partes fundamentales de cualquier script: herencia, comentarios, _ready() y _process(delta).",
                actionObjective: "Localizar _ready() y _process() en tu script de pruebas.",
                victoryCondition: "Comprender que _ready() ocurre al inicio y _process() en cada fotograma.",
                godotNodes: ["Script Functions"]
              },
              {
                id: "04A-05",
                title: "Cápsula 4A.5: Sustituir pass por print('hola mundo')",
                youtubeId: GDSCRIPT_VIDEO_1_ID,
                startTime: 205,
                endTime: 232,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Reemplaza la instrucción vacía pass por tu primer mensaje de texto por consola.",
                actionObjective: "Escribir print('Unai ha entrado al laboratorio') dentro de _ready().",
                victoryCondition: "Tener la función print escrita sin errores de sintaxis.",
                godotNodes: ["print()"]
              },
              {
                id: "04A-06",
                title: "Cápsula 4A.6: Ejecutar y Leer la Consola Output",
                youtubeId: GDSCRIPT_VIDEO_1_ID,
                startTime: 232,
                endTime: 298,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Ejecuta la escena y encuentra tu mensaje impreso en la pestaña Output inferior.",
                actionObjective: "Ejecutar code_lab.tscn con F6 y verificar el texto en el panel Output.",
                victoryCondition: "Ver tu mensaje personalizado impreso en la consola de Godot.",
                godotNodes: ["Output Console"],
                badgeUnlock: "b_console_print"
              },
              {
                id: "04A-07",
                title: "Cápsula 4A.7: Indentación y Corrección de Errores",
                youtubeId: GDSCRIPT_VIDEO_1_ID,
                startTime: 298,
                endTime: 444,
                duration: "2 min",
                categoryTag: "Esencial",
                description: "Aprende el secreto de GDScript: la sangría (tabulador/espacios) indica qué código pertenece a cada función.",
                actionObjective: "Provocar un error de indentación voluntario, leer el aviso en rojo y corregirlo con Tab.",
                victoryCondition: "Saber identificar y solucionar errores de indentación por ti mismo.",
                godotNodes: ["Indentation Debugger"]
              },
              // CONTINUACIÓN MISIÓN 9
              {
                id: "09-05",
                title: "Paso 9.5: Conocer la Vista Script de Godot",
                youtubeId: GODOT_VIDEO_4_ID,
                startTime: 690,
                endTime: 730,
                duration: "1 min",
                description: "Familiarízate con el panel superior de cambio entre la vista 3D y la vista Script.",
                actionObjective: "Aprender a alternar entre ver tu mundo 3D y leer tu código de GDScript.",
                victoryCondition: "Saber cambiar rápidamente entre el espacio 3D y el editor de código.",
                godotNodes: ["Script Workspace"]
              },
              {
                id: "09-06",
                title: "Paso 9.6: Buscar Documentación Oficial desde Godot",
                youtubeId: GODOT_VIDEO_4_ID,
                startTime: 730,
                endTime: 825,
                duration: "2 min",
                description: "Aprende a consultar la ayuda integrada presionando F1 o buscando clases desde el motor.",
                actionObjective: "Buscar 'CharacterBody3D' en la documentación integrada de Godot.",
                victoryCondition: "Ver la página oficial de ayuda abierta dentro del propio editor.",
                godotNodes: ["Help / F1 Doc"]
              },
              {
                id: "09-07",
                title: "Paso 9.7: Consultar el Manual de GDScript: Variables, Tipos y Estructuras",
                youtubeId: GODOT_VIDEO_4_ID,
                startTime: 825,
                endTime: 874,
                duration: "1 min",
                description: "Reconoce que puedes consultar fuentes fiables cuando necesites ayuda con funciones específicas.",
                actionObjective: "Reconocer las secciones del manual de GDScript.",
                victoryCondition: "Comprobación de la Misión 9: Existe scripts/player_movement.gd unido al nodo raíz de Player.",
                godotNodes: ["GDScript Reference"]
              },
            ]
          },
          {
            id: "m10",
            title: "⚡ Misión 10 — Haz que tu personaje cobre vida",
            submodules: [
              {
                id: "10-01",
                title: "Paso 10.1: Probar Movimiento y Salto en Tiempo de Ejecución",
                youtubeId: GODOT_VIDEO_4_ID,
                startTime: 874,
                endTime: 978,
                duration: "2 min",
                description: "Ejecuta Level_01 con F6 y comprueba cómo el personaje camina con las flechas/WASD y salta con Espacio.",
                actionObjective: "Controlar tu personaje en vivo sobre el suelo del nivel.",
                victoryCondition: "Mover el personaje y hacerlo saltar con la barra espaciadora.",
                godotNodes: ["Live Playtest"]
              },
              {
                id: "10-02",
                title: "Paso 10.2: Introducción al Análisis del Código Generado",
                youtubeId: GODOT_VIDEO_4_ID,
                startTime: 978,
                endTime: 983,
                duration: "1 min",
                description: "Abre player_movement.gd con una sola pregunta en mente: '¿Qué parte controla cada acción?'",
                actionObjective: "Inspeccionar las líneas del script sin agobiarte.",
                victoryCondition: "Localizar las variables iniciales en la parte superior.",
                godotNodes: ["Code Analyzer"]
              },
              {
                id: "10-03",
                title: "Paso 10.3: Constantes SPEED y JUMP_VELOCITY",
                youtubeId: GODOT_VIDEO_4_ID,
                startTime: 983,
                endTime: 995,
                duration: "1 min",
                description: "Identifica las dos líneas que definen la rapidez al andar y la fuerza de salto del personaje.",
                actionObjective: "Localizar const SPEED = 5.0 y const JUMP_VELOCITY = 4.5.",
                victoryCondition: "Saber exactamente en qué renglones cambiar la física del personaje.",
                godotNodes: ["SPEED & JUMP_VELOCITY"]
              },
              // 🟡 CÁPSULA GDSCRIPT 4B — LOS DATOS DE MI PERSONAJE
              {
                id: "04B-01",
                title: "Cápsula 4B.1: Variable Entera int y var coins = 0",
                youtubeId: GDSCRIPT_VIDEO_1_ID,
                startTime: 444,
                endTime: 518,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Aprende a guardar números enteros (sin decimales) usando variables con la palabra clave var.",
                actionObjective: "Escribir var coins = 0 en code_lab.gd e imprimirla en la consola.",
                victoryCondition: "Ver el número 0 impreso en la pestaña Output.",
                godotNodes: ["var int"]
              },
              {
                id: "04B-02",
                title: "Cápsula 4B.2: Formatear e Imprimir Variables con %d",
                youtubeId: GDSCRIPT_VIDEO_1_ID,
                startTime: 518,
                endTime: 567,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Combina texto y números enteros usando el comodín %d para mostrar frases personalizadas.",
                actionObjective: "Escribir print('Monedas recogidas: %d' % coins).",
                victoryCondition: "Ver 'Monedas recogidas: 0' formateado en la consola.",
                godotNodes: ["String Formatting %d"]
              },
              {
                id: "04B-03",
                title: "Cápsula 4B.3: Variable de Texto String y %s",
                youtubeId: GDSCRIPT_VIDEO_1_ID,
                startTime: 567,
                endTime: 677,
                duration: "2 min",
                categoryTag: "Esencial",
                description: "Crea variables para almacenar palabras o nombres entre comillas y combínalas con %s.",
                actionObjective: "Crear var player_name = 'Unai' y mostrar 'Jugador activo: %s' % player_name.",
                victoryCondition: "Ver el nombre del jugador formateado en la consola.",
                godotNodes: ["var String %s"]
              },
              {
                id: "04B-04",
                title: "Cápsula 4B.4: Variable Decimal float",
                youtubeId: GDSCRIPT_VIDEO_1_ID,
                startTime: 677,
                endTime: 729,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Descubre los números decimales (float) necesarios para velocidades continuas o tiempos.",
                actionObjective: "Crear var run_speed = 5.5 y comprender su diferencia con los enteros int.",
                victoryCondition: "Reconocer cuándo usar float para movimientos suaves.",
                godotNodes: ["var float"]
              },
              {
                id: "04B-05",
                title: "Cápsula 4B.5: Variable Lógica bool (true y false)",
                youtubeId: GDSCRIPT_VIDEO_1_ID,
                startTime: 729,
                endTime: 763,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Aprende los valores de verdadero (true) o falso (false) para controlar estados del juego.",
                actionObjective: "Crear var has_jumped = false en tu laboratorio de código.",
                victoryCondition: "Entender cómo responder a preguntas de sí o no en código.",
                godotNodes: ["var bool"]
              },
              {
                id: "04B-06",
                title: "Cápsula 4B.6: Resumen de int, String, float y bool",
                youtubeId: GDSCRIPT_VIDEO_1_ID,
                startTime: 763,
                endTime: 900,
                duration: "2 min",
                categoryTag: "Esencial",
                description: "Relaciona cada tipo de datos con las necesidades reales de tu videojuego.",
                actionObjective: "Saber qué tipo de dato usar para vidas, velocidad, nombres y estado de salto.",
                victoryCondition: "Superar el resumen de la Cápsula 4B y volver a player_movement.gd.",
                godotNodes: ["Data Types Summary"]
              },
              // CONTINUACIÓN MISIÓN 10
              {
                id: "10-04",
                title: "Paso 10.4: is_on_floor() y Cálculo de Gravedad",
                youtubeId: GODOT_VIDEO_4_ID,
                startTime: 995,
                endTime: 1008,
                duration: "1 min",
                description: "Entiende la función de seguridad is_on_floor() que impide al personaje saltar en el aire.",
                actionObjective: "Comprobar que el salto solo se activa cuando los pies tocan una colisión sólida.",
                victoryCondition: "Entender la condición de salto sobre el suelo.",
                godotNodes: ["is_on_floor()"]
              },
              {
                id: "10-05",
                title: "Paso 10.5: Input.get_vector() y Acciones de Entrada Predetermadas",
                youtubeId: GODOT_VIDEO_4_ID,
                startTime: 1008,
                endTime: 1064,
                duration: "1 min",
                description: "Reconoce cómo Input.get_vector() lee la combinación de teclas (ui_left, ui_right, ui_up, ui_down).",
                actionObjective: "Comprender la transformación de teclas presionadas en vector de movimiento 3D.",
                victoryCondition: "Ver el mapa de teclas predeterminado en el script.",
                godotNodes: ["Input.get_vector()"]
              },
              {
                id: "10-06",
                title: "Paso 10.6: Resumen y Cierre del Primer Personaje Jugable",
                youtubeId: GODOT_VIDEO_4_ID,
                startTime: 1064,
                endTime: 1110,
                duration: "1 min",
                description: "¡Felicidades! Has creado, instanciado y programado tu primer personaje jugable en Godot 4.",
                actionObjective: "Modificar la velocidad SPEED o el salto JUMP_VELOCITY, probar con F6 y sentir el cambio.",
                victoryCondition: "Comprobación de la Misión 10: Al ejecutar Level_01, Unai puede mover y saltar libremente con su personaje.",
                optionalChallenge: "Reto creativo opcional: decidir si tu personaje se siente pesado, rápido, saltarín o flotante y ajustar los valores hasta conseguirlo."
              },
            ]
          }
        ]
      },
      {
        id: "u5",
        title: "Unidad 5 — Entiende, modifica y depura el código de movimiento",
        missions: [
          {
            id: "m11",
            title: "🛡️ Misión 11 — Protege tu proyecto antes de experimentar",
            submodules: [
              {
                id: "11-01",
                title: "Paso 11.1: Introducción: Actualización y Análisis del Código de Movimiento",
                youtubeId: GODOT_VIDEO_5_ID,
                startTime: 0,
                endTime: 19,
                duration: "1 min",
                description: "Entender que un desarrollador profesional protege su proyecto antes de realizar cambios importantes.",
                actionObjective: "Aprender el hábito de seguridad de respaldar código antes de experimentar.",
                victoryCondition: "Reconocer la importancia de las copias de seguridad.",
                godotNodes: ["Safety First"]
              },
              {
                id: "11-02",
                title: "Paso 11.2: Actualizar Godot sin Romper el Proyecto",
                youtubeId: GODOT_VIDEO_5_ID,
                startTime: 19,
                endTime: 102,
                duration: "2 min",
                description: "Aprende qué significa actualizar un proyecto de Godot sin romper compatibilidades.",
                actionObjective: "Entender las precauciones al actualizar el motor gráfico.",
                victoryCondition: "Saber que las actualizaciones se realizan con supervisión.",
                godotNodes: ["Engine Updates"]
              },
              {
                id: "11-03",
                title: "Paso 11.3: Crear una Copia de Seguridad del Proyecto",
                youtubeId: GODOT_VIDEO_5_ID,
                startTime: 102,
                endTime: 163,
                duration: "1 min",
                description: "Crea una copia comprimida o duplicada de tu carpeta de proyecto antes de continuar.",
                actionObjective: "Crear la carpeta duplicada 'MiJuego_backup_01' en tu disco duro.",
                victoryCondition: "Ver tu copia de seguridad guardada en tu ordenador.",
                godotNodes: ["Backup Folder"],
                badgeUnlock: "b_backup_hero"
              },
              {
                id: "11-04",
                title: "Paso 11.4: Revisar Errores y Ejecutar tras una Actualización",
                youtubeId: GODOT_VIDEO_5_ID,
                startTime: 163,
                endTime: 221,
                duration: "1 min",
                description: "Comprender que si algo cambia en el motor, primero se revisa la consola Output y después se prueba el juego.",
                actionObjective: "Aprender el protocolo de prueba tras cambios en el proyecto.",
                victoryCondition: "Comprobación de la Misión 11: Existe una copia de seguridad antes de comenzar a modificar el script.",
                godotNodes: ["Console Verification"]
              },
            ]
          },
          {
            id: "m12",
            title: "🛠️ Misión 12 — Haz que tu personaje se sienta diferente",
            submodules: [
              {
                id: "12-01",
                title: "Paso 12.1: Revisar player_movement.gd en Detalle",
                youtubeId: GODOT_VIDEO_5_ID,
                startTime: 221,
                endTime: 258,
                duration: "1 min",
                description: "Abre tu script player_movement.gd y localiza las secciones de velocidad y salto sin miedo.",
                actionObjective: "Navegar con fluidez por las líneas de player_movement.gd.",
                victoryCondition: "Identificar las líneas de SPEED y JUMP_VELOCITY.",
                godotNodes: ["Script Inspector"]
              },
              {
                id: "12-02",
                title: "Paso 12.2: Mayúsculas y Minúsculas: SPEED no es igual a speed",
                youtubeId: GODOT_VIDEO_5_ID,
                startTime: 258,
                endTime: 315,
                duration: "1 min",
                description: "Aprende que GDScript diferencia mayúsculas de minúsculas (Case Sensitivity).",
                actionObjective: "Ver que cambiar una letra mayúscula por minúscula produce un error de nombre.",
                victoryCondition: "Respetar la ortografía exacta de las variables.",
                godotNodes: ["Case Sensitivity"]
              },
              {
                id: "12-03",
                title: "Paso 12.3: Indentación: Espacios, Tabulación y Estructura del Código",
                youtubeId: GODOT_VIDEO_5_ID,
                startTime: 315,
                endTime: 386,
                duration: "1.5 min",
                description: "Comprueba cómo las sangrías agrupan instrucciones dentro de funciones en GDScript.",
                actionObjective: "Asegurar que todas las líneas dentro de _physics_process estén tabuladas.",
                victoryCondition: "Ver el código perfectamente alineado y ordenado.",
                godotNodes: ["Tab Indentation"]
              },
              {
                id: "12-04",
                title: "Paso 12.4: Variables y Constantes: var frente a const",
                youtubeId: GODOT_VIDEO_5_ID,
                startTime: 386,
                endTime: 431,
                duration: "1 min",
                description: "Entiende la diferencia entre var (datos que cambian durante el juego) y const (valores fijos).",
                actionObjective: "Reconocer cuándo usar const para la gravedad o velocidad fija.",
                victoryCondition: "Comprender la diferencia práctica entre var y const.",
                godotNodes: ["var vs const"]
              },
              // 🔵 CÁPSULA GDSCRIPT 5A — CAMBIA Y CALCULA VALORES
              {
                id: "05A-01",
                title: "Cápsula 5A.1: Operaciones y Manipulación de Variables",
                youtubeId: GDSCRIPT_VIDEO_2_ID,
                startTime: 0,
                endTime: 29,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Entiende que una variable puede cambiar dinámicamente su valor mientras el juego está funcionando.",
                actionObjective: "Comprender la reasignación de datos en tiempo real.",
                victoryCondition: "Avanzar a las pruebas de cálculo en code_lab.gd.",
                godotNodes: ["Variable Mutation"]
              },
              {
                id: "05A-02",
                title: "Cápsula 5A.2: Reasignar un Valor y Orden de Ejecución",
                youtubeId: GDSCRIPT_VIDEO_2_ID,
                startTime: 29,
                endTime: 120,
                duration: "1.5 min",
                categoryTag: "Esencial",
                description: "Cambia el valor de una variable en code_lab.gd y muestra el antes y después con print().",
                actionObjective: "Modificar var score = 10 a score = 20 e imprimir ambos momentos.",
                victoryCondition: "Ver el cambio de valor impreso secuencialmente en la consola.",
                godotNodes: ["Reassignment"]
              },
              {
                id: "05A-03",
                title: "Cápsula 5A.3: Operadores +, -, * y /",
                youtubeId: GDSCRIPT_VIDEO_2_ID,
                startTime: 120,
                endTime: 153,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Realiza sumas, restas, multiplicaciones y divisiones directamente en GDScript.",
                actionObjective: "Probar operaciones matemáticas básicas en tu script de laboratorio.",
                victoryCondition: "Ver los resultados matemáticos correctos en la consola.",
                godotNodes: ["Operators +, -, *, /"]
              },
              {
                id: "05A-04",
                title: "Cápsula 5A.4: Operar con Varias Variables y Guardar el Resultado",
                youtubeId: GDSCRIPT_VIDEO_2_ID,
                startTime: 153,
                endTime: 215,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Combina variables existentes (var base_speed + var bonus_speed) para calcular un total.",
                actionObjective: "Calcular var final_speed = base_speed + bonus_speed.",
                victoryCondition: "Imprimir la velocidad combinada en consola.",
                godotNodes: ["Variable Arithmetic"]
              },
              {
                id: "05A-05",
                title: "Cápsula 5A.5: Repaso de Operadores Aritméticos",
                youtubeId: GDSCRIPT_VIDEO_2_ID,
                startTime: 215,
                endTime: 263,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Relaciona cada operador matemático con situaciones del juego: ganar monedas (+), recibir daño (-), poción doble (*).",
                actionObjective: "Relacionar matemáticas con mecánicas reales de juego.",
                victoryCondition: "Superar la revisión de operadores.",
                godotNodes: ["Game Math"]
              },
              {
                id: "05A-06",
                title: "Cápsula 5A.6: Asignación Compuesta: +=, -=, *= y /=",
                youtubeId: GDSCRIPT_VIDEO_2_ID,
                startTime: 263,
                endTime: 326,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Simplifica tu código usando asignaciones compuestas como score += 1 para incrementar valores.",
                actionObjective: "Probar score += 1 en code_lab.gd.",
                victoryCondition: "Ver cómo la variable se incrementa en 1 automáticamente.",
                godotNodes: ["Compound Operators += -= *= /="]
              },
              {
                id: "05A-07",
                title: "Cápsula 5A.7: Reasignar una Variable de Texto String",
                youtubeId: GDSCRIPT_VIDEO_2_ID,
                startTime: 326,
                endTime: 396,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Cambia el contenido de un texto durante la partida (ej: var state = 'preparado' -> state = 'corriendo').",
                actionObjective: "Reasignar una variable String e imprimir la actualización.",
                victoryCondition: "Ver el nuevo texto reflejado en consola.",
                godotNodes: ["String Reassignment"]
              },
              // CONTINUACIÓN MISIÓN 12
              {
                id: "12-05",
                title: "Paso 12.5: Gravedad Global: Project Settings > Default Gravity",
                youtubeId: GODOT_VIDEO_5_ID,
                startTime: 431,
                endTime: 500,
                duration: "1 min",
                description: "Localiza la configuración global de gravedad de Godot en Configuración del Proyecto.",
                actionObjective: "Explorar la ventana Project Settings -> Physics -> 3D -> Default Gravity.",
                victoryCondition: "Identificar el valor por defecto de la gravedad global (9.8).",
                godotNodes: ["Project Settings -> Gravity"]
              },
              {
                id: "12-06",
                title: "Paso 12.6: Cambiar SPEED y JUMP_VELOCITY",
                youtubeId: GODOT_VIDEO_5_ID,
                startTime: 500,
                endTime: 581,
                duration: "1.5 min",
                description: "Modifica los números de velocidad o salto en player_movement.gd y prueba el cambio con F6.",
                actionObjective: "Cambiar SPEED a 8.0 o JUMP_VELOCITY a 7.0 y probar en vivo.",
                victoryCondition: "Ver a tu personaje moverse más rápido o saltar mucho más alto.",
                godotNodes: ["Live Speed Adjust"]
              },
              // 🟣 CÁPSULA GDSCRIPT 5B — ORGANIZA EL CÓDIGO COMO UN DESARROLLADOR
              {
                id: "05B-01",
                title: "Cápsula 5B.1: Declarar Constantes con const",
                youtubeId: GDSCRIPT_VIDEO_2_ID,
                startTime: 396,
                endTime: 443,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Declara una constante fija con const (ej: const MAX_JUMPS = 1) y comprueba que Godot impide modificarla por error.",
                actionObjective: "Crear const MAX_JUMPS = 1 en tu script de pruebas.",
                victoryCondition: "Entender la protección de datos que brindan las constantes.",
                godotNodes: ["const Declaration"]
              },
              {
                id: "05B-02",
                title: "Cápsula 5B.2: Exponer Valores en Inspector con @export",
                youtubeId: GDSCRIPT_VIDEO_2_ID,
                startTime: 443,
                endTime: 538,
                duration: "1.5 min",
                categoryTag: "Esencial",
                description: "Escribe la palabra clave @export antes de una variable para poder modificarla desde el panel Inspector sin abrir el código.",
                actionObjective: "Añadir @export var speed = 5.0 y ver la casilla apareciendo en el Inspector.",
                victoryCondition: "Modificar la velocidad directamente desde el panel Inspector de Godot.",
                godotNodes: ["@export Variable"]
              },
              {
                id: "05B-03",
                title: "Cápsula 5B.3: Comentarios con # y Nombres Claros",
                youtubeId: GDSCRIPT_VIDEO_2_ID,
                startTime: 538,
                endTime: 625,
                duration: "1.5 min",
                categoryTag: "Esencial",
                description: "Escribe notas explicativas iniciadas con el símbolo # para recordar decisiones de diseño en el futuro.",
                actionObjective: "Añadir el comentario '# Salto ajustado para el planeta lunar' sobre JUMP_VELOCITY.",
                victoryCondition: "Tener tu código comentado con explicaciones claras.",
                godotNodes: ["Code Comments #"]
              },
              {
                id: "05B-04",
                title: "Cápsula 5B.4: Documentación Integrada y Documentación Online",
                youtubeId: GDSCRIPT_VIDEO_2_ID,
                startTime: 625,
                endTime: 718,
                duration: "1.5 min",
                categoryTag: "Esencial",
                description: "Mantén presionada la tecla Ctrl y haz clic en cualquier método o nodo para abrir su documentación explicativa.",
                actionObjective: "Hacer Ctrl + Clic sobre CharacterBody3D o move_and_slide().",
                victoryCondition: "Ver la ayuda integrada de Godot abierta al instante.",
                godotNodes: ["Ctrl + Click Documentation"]
              },
              {
                id: "05B-05",
                title: "Cápsula 5B.5: Resumen del Capítulo",
                youtubeId: GDSCRIPT_VIDEO_2_ID,
                startTime: 718,
                endTime: 840,
                duration: "2 min",
                categoryTag: "Esencial",
                description: "Repasa qué datos cambian (var), cuáles permanecen fijos (const), cuáles se editan en el Inspector (@export) y cómo documentarlos (#).",
                actionObjective: "Comprender la estructura limpia de un script profesional.",
                victoryCondition: "Comprobación de la Cápsula 5B: Tienes una constante, una variable @export, un comentario y una consulta a la documentación.",
                godotNodes: ["Developer Best Practices Summary"],
                badgeUnlock: "b_dev_tweak"
              },
              // CONTINUACIÓN MISIÓN 12
              {
                id: "12-07",
                title: "Paso 12.7: Comentarios Explicativos en player_movement.gd",
                youtubeId: GODOT_VIDEO_5_ID,
                startTime: 581,
                endTime: 677,
                duration: "1.5 min",
                description: "Añade un comentario propio explicativo en player_movement.gd documentando el 'modo' de tu personaje.",
                actionObjective: "Escribir un comentario de personalización en tu script del personaje.",
                victoryCondition: "Comprobación de la Misión 12: Unai ha creado una versión personal de su personaje modificando velocidad o salto y comentando su decisión.",
                optionalChallenge: "Reto creativo opcional: crear tres 'modos' para probar: corredor veloz, explorador equilibrado y astronauta lunar."
              },
            ]
          },
          {
            id: "m13",
            title: "🔍 Misión 13 — Investiga cómo piensa el movimiento",
            submodules: [
              {
                id: "13-01",
                title: "Paso 13.1: Salto: Condición if input e is_on_floor()",
                youtubeId: GODOT_VIDEO_5_ID,
                startTime: 677,
                endTime: 729,
                duration: "1 min",
                description: "Analiza la regla del salto: 'solo puedes saltar si presionas la tecla Y estás tocando el suelo'.",
                actionObjective: "Identificar el bloque 'if Input.is_action_just_pressed(...) and is_on_floor()'.",
                victoryCondition: "Comprender la lógica condicional del salto.",
                godotNodes: ["if is_on_floor()"]
              },
              {
                id: "13-02",
                title: "Paso 13.2: Vector de Entrada en los Ejes X y Z",
                youtubeId: GODOT_VIDEO_5_ID,
                startTime: 729,
                endTime: 793,
                duration: "1 min",
                description: "Relaciona las teclas de dirección pulsadas con el movimiento en el espacio 3D (X y Z).",
                actionObjective: "Reconocer cómo las teclas se convierten en velocidad horizontal.",
                victoryCondition: "Comprender la dirección del movimiento 3D.",
                godotNodes: ["Input Vector 3D"]
              },
              {
                id: "13-03",
                title: "Paso 13.3: Introducción al Ciclo de Vida del Script",
                youtubeId: GODOT_VIDEO_5_ID,
                startTime: 793,
                endTime: 799,
                duration: "1 min",
                description: "Descubre que las distintas funciones de un script se ejecutan en momentos específicos.",
                actionObjective: "Comprender la diferencia entre el inicio y la ejecución continua.",
                victoryCondition: "Avanzar a _physics_process.",
                godotNodes: ["Lifecycle Overview"]
              },
              {
                id: "13-04",
                title: "Paso 13.4: _physics_process(delta): Ejecución Continua",
                youtubeId: GODOT_VIDEO_5_ID,
                startTime: 799,
                endTime: 808,
                duration: "1 min",
                description: "Identifica la función _physics_process(delta) que revisa físicas y movimientos 60 veces por segundo.",
                actionObjective: "Reconocer el bucle principal de físicas del motor.",
                victoryCondition: "Entender qué función calcula la gravedad continuamente.",
                godotNodes: ["_physics_process(delta)"]
              },
              {
                id: "13-05",
                title: "Paso 13.5: _ready(): Ejecución Única al Iniciar",
                youtubeId: GODOT_VIDEO_5_ID,
                startTime: 808,
                endTime: 823,
                duration: "1 min",
                description: "Identifica la función _ready() que se ejecuta una sola vez cuando la escena aparece en pantalla.",
                actionObjective: "Reconocer el lugar perfecto para configuraciones iniciales.",
                victoryCondition: "Diferenciar el inicio del bucle continuo.",
                godotNodes: ["_ready()"]
              },
              {
                id: "13-06",
                title: "Paso 13.6: print() para Depurar el Estado Inicial",
                youtubeId: GODOT_VIDEO_5_ID,
                startTime: 823,
                endTime: 913,
                duration: "1.5 min",
                description: "Añade un print() en _ready() y comprueba cómo el mensaje se muestra una sola vez al arrancar.",
                actionObjective: "Escribir print('¡Jugador iniciado en Level_01!') en _ready().",
                victoryCondition: "Ver el mensaje impreso en la consola al pulsar F6.",
                godotNodes: ["Debug print()"]
              },
              {
                id: "13-07",
                title: "Paso 13.7: Diferencia Práctica entre _ready() y _physics_process(delta)",
                youtubeId: GODOT_VIDEO_5_ID,
                startTime: 913,
                endTime: 948,
                duration: "1 min",
                description: "Predice qué mensaje se imprimirá una sola vez y cuál se repetiría constantemente si estuviera en _physics_process.",
                actionObjective: "Explicar con tus palabras la diferencia entre ambas funciones.",
                victoryCondition: "Saber cuándo usar _ready() y cuándo _physics_process().",
                godotNodes: ["Lifecycle Comparison"]
              },
              {
                id: "13-08",
                title: "Paso 13.8: Resumen y Cierre del Capítulo",
                youtubeId: GODOT_VIDEO_5_ID,
                startTime: 948,
                endTime: 990,
                duration: "1 min",
                description: "Registra en tu DevLog una reflexión sobre cómo funciona el script de movimiento.",
                actionObjective: "Publicar una entrada en tu DevLog sobre tus experimentos de velocidad y salto.",
                victoryCondition: "Comprobación de la Misión 13: Unai sabe diferenciar acciones de inicio de las de ejecución continua y tiene su DevLog actualizado.",
                godotNodes: ["Chapter Wrap Up"],
                badgeUnlock: "b_code_debugger",
                optionalChallenge: "Reto de investigación: Si algo falla al modificar un valor, sigue la escalera de 5 pasos: 1. Leer consola Output, 2. Nombre exacto variable, 3. Indentación, 4. Deshacer último cambio o abrir copia backup, 5. Probar otra vez."
              },
            ]
          }
        ]
      },
      {
        id: "u6",
        title: "Unidad 6 — Crea controles propios e incorpora recursos al juego",
        missions: [
          {
            id: "m14",
            title: "🎥 Misión 14 — Aprende a investigar y seguir a tu personaje",
            submodules: [
              {
                id: "14-01",
                title: "Paso 14.1: Introducción: Inputs, Consola y Assets 3D",
                youtubeId: GODOT_VIDEO_6_ID,
                startTime: 0,
                endTime: 35,
                duration: "1 min",
                description: "Reconocer las tres herramientas principales que aprenderás a dominar en esta unidad.",
                actionObjective: "Entender el objetivo de personalizar controles y traer modelos al nivel.",
                victoryCondition: "Avanzar a la documentación interna.",
                godotNodes: ["Overview"]
              },
              {
                id: "14-02",
                title: "Paso 14.2: Documentación Interna con Ctrl + Clic",
                youtubeId: GODOT_VIDEO_6_ID,
                startTime: 35,
                endTime: 138,
                duration: "2 min",
                description: "Aprende el atajo profesional Ctrl + clic sobre cualquier nodo o método para abrir su ayuda nativa.",
                actionObjective: "Hacer Ctrl + Clic sobre CharacterBody3D o move_and_slide().",
                victoryCondition: "Ver la página de documentación integrada dentro de Godot.",
                godotNodes: ["Ctrl + Click Doc"]
              },
              {
                id: "14-03",
                title: "Paso 14.3: Inspeccionar CharacterBody3D y sus Métodos Nativos",
                youtubeId: GODOT_VIDEO_6_ID,
                startTime: 138,
                endTime: 184,
                duration: "1 min",
                description: "Localiza la información de los métodos y propiedades nativos del cuerpo de tu jugador.",
                actionObjective: "Reconocer métodos como is_on_floor() o velocity en la documentación.",
                victoryCondition: "Explorar la lista de métodos de CharacterBody3D.",
                godotNodes: ["Native Methods"]
              },
              {
                id: "14-04",
                title: "Paso 14.4: Usar print() con Texto y Números",
                youtubeId: GODOT_VIDEO_6_ID,
                startTime: 184,
                endTime: 255,
                duration: "1 min",
                description: "Imprime mensajes combinando palabras y valores numéricos en la consola Output.",
                actionObjective: "Escribir print('Prueba de nivel:', 1) en tu script.",
                victoryCondition: "Ver la combinación impreso en consola.",
                godotNodes: ["print() Debug"]
              },
              {
                id: "14-05",
                title: "Paso 14.5: Concatenar Texto y Números con str()",
                youtubeId: GODOT_VIDEO_6_ID,
                startTime: 255,
                endTime: 389,
                duration: "2 min",
                description: "Convierte números en texto usando la función str() para concatenar mensajes con el signo +.",
                actionObjective: "Mostrar en consola: 'Velocidad actual: ' + str(SPEED).",
                victoryCondition: "Ver el mensaje 'Velocidad actual: 5.0' en la consola.",
                godotNodes: ["str() Concatenation"]
              },
              {
                id: "14-06",
                title: "Paso 14.6: Hacer Camera3D Hija de Player",
                youtubeId: GODOT_VIDEO_6_ID,
                startTime: 389,
                endTime: 444,
                duration: "1 min",
                description: "Arrastra el nodo Camera3D para que sea hijo del nodo raíz de Player y acompañe al jugador al caminar.",
                actionObjective: "Mover Camera3D como nodo hijo de Player en el árbol de escena y probar con F6.",
                victoryCondition: "Comprobación de la Misión 14: Al ejecutar el nivel, la cámara acompaña dinámicamente al personaje al caminar.",
                godotNodes: ["Camera3D Child"],
                badgeUnlock: "b_camera_follow",
                optionalChallenge: "Reto creativo opcional: usar print() para que la consola salude al jugador con su nombre personalizado al empezar."
              },
            ]
          },
          {
            id: "m15",
            title: "🎮 Misión 15 — Elige cómo se controla tu juego",
            submodules: [
              {
                id: "15-01",
                title: "Paso 15.1: Abrir Project Settings > Input Map",
                youtubeId: GODOT_VIDEO_6_ID,
                startTime: 444,
                endTime: 509,
                duration: "1 min",
                description: "Abre el panel de configuración de controles del proyecto desde Proyecto -> Configuración -> Mapa de Entradas.",
                actionObjective: "Abrir la pestaña Input Map en Godot 4.",
                victoryCondition: "Ver la lista de acciones de entrada del proyecto.",
                godotNodes: ["Input Map Manager"]
              },
              // 🎮 CÁPSULA GDSCRIPT 6A — CREA CONTROLES QUE HABLEN EL IDIOMA DE TU JUEGO
              {
                id: "06A-01",
                title: "Cápsula 6A.1: Inputs y Diccionarios de Acciones",
                youtubeId: GDSCRIPT_VIDEO_7_ID,
                startTime: 0,
                endTime: 38,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Entiende que el juego no debe depender directamente de una tecla física: debe usar acciones con nombres descriptivos.",
                actionObjective: "Comprender la abstracción de teclas físicas a nombres de acciones.",
                victoryCondition: "Avanzar a la creación de la acción restart.",
                godotNodes: ["Input Abstraction"]
              },
              {
                id: "06A-02",
                title: "Cápsula 6A.2: Revisar Input Map y Acciones Integradas",
                youtubeId: GDSCRIPT_VIDEO_7_ID,
                startTime: 38,
                endTime: 85,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Observa las acciones de sistema que Godot ya conoce (ui_left, ui_right, ui_select, ui_accept).",
                actionObjective: "Identificar las acciones ui_* en la lista.",
                victoryCondition: "Entender el mapa predeterminado de Godot.",
                godotNodes: ["Built-in Inputs"]
              },
              {
                id: "06A-03",
                title: "Cápsula 6A.3: Crear Acción Propia y Asignar Tecla (restart / R)",
                youtubeId: GDSCRIPT_VIDEO_7_ID,
                startTime: 85,
                endTime: 155,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Añade una acción propia llamada restart y asígnale la tecla física R.",
                actionObjective: "Crear la acción 'restart' y pulsar 'R' para asignarla.",
                victoryCondition: "Ver la acción 'restart' creada con la tecla R vinculada.",
                godotNodes: ["Add Action -> restart"]
              },
              {
                id: "06A-04",
                title: "Cápsula 6A.4: Usar _input(event) para Detectar Entradas",
                youtubeId: GDSCRIPT_VIDEO_7_ID,
                startTime: 155,
                endTime: 174,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Aprende a usar la función nativa _input(event) que se activa automáticamente al pulsar cualquier tecla.",
                actionObjective: "Escribir func _input(event): en tu script de pruebas.",
                victoryCondition: "Ver la función _input estructurada.",
                godotNodes: ["func _input(event)"]
              },
              {
                id: "06A-05",
                title: "Cápsula 6A.5: Detectar Pulsación e is_action_pressed()",
                youtubeId: GDSCRIPT_VIDEO_7_ID,
                startTime: 174,
                endTime: 280,
                duration: "1.5 min",
                categoryTag: "Esencial",
                description: "Usa event.is_action_pressed('restart') para detectar exactamente cuándo el jugador presiona la tecla R.",
                actionObjective: "Imprimir '¡Reinicio solicitado!' al presionar la tecla R.",
                victoryCondition: "Ver el mensaje impreso en consola al pulsar la tecla R en la prueba.",
                godotNodes: ["is_action_pressed('restart')"]
              },
              {
                id: "06A-06",
                title: "Cápsula 6A.6: Acciones Integradas: ui_accept con Enter o Espacio",
                youtubeId: GDSCRIPT_VIDEO_7_ID,
                startTime: 280,
                endTime: 316,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Probar una acción integrada de aceptación y relacionarla con futuros botones de menú.",
                actionObjective: "Comprobar la acción ui_accept.",
                victoryCondition: "Comprobación de la Cápsula 6A: La acción restart está creada y probada con print().",
                godotNodes: ["ui_accept"],
                badgeUnlock: "b_input_master"
              },
              // CONTINUACIÓN MISIÓN 15
              {
                id: "15-02",
                title: "Paso 15.2: Crear Acciones: left, right, forward, backward y jump",
                youtubeId: GODOT_VIDEO_6_ID,
                startTime: 509,
                endTime: 530,
                duration: "1 min",
                description: "Crea las 5 acciones de movimiento principales de tu juego en Input Map con nombres en español o inglés claro.",
                actionObjective: "Crear las acciones: move_left, move_right, move_forward, move_backward y jump.",
                victoryCondition: "Ver las 5 acciones creadas en la lista.",
                godotNodes: ["Input Actions List"]
              },
              {
                id: "15-03",
                title: "Paso 15.3: Asignar Dos Teclas a Cada Acción: WASD y Flechas",
                youtubeId: GODOT_VIDEO_6_ID,
                startTime: 530,
                endTime: 604,
                duration: "1.5 min",
                description: "Asigna dos controles alternativos a cada acción para dar libertad al jugador de usar teclas WASD o flechas de dirección.",
                actionObjective: "Vincular 'A' y 'Flecha Izquierda' a move_left, 'W' y 'Flecha Arriba' a move_forward, etc.",
                victoryCondition: "Cada acción tiene vinculadas ambas teclas físicas.",
                godotNodes: ["Dual Key Mapping"]
              },
              {
                id: "15-04",
                title: "Paso 15.4: Sustituir Inputs Predeterminados en el Script",
                youtubeId: GODOT_VIDEO_6_ID,
                startTime: 604,
                endTime: 672,
                duration: "1.5 min",
                description: "Actualiza player_movement.gd reemplazando ui_left, ui_right por tus acciones personalizadas.",
                actionObjective: "Reemplazar los nombres ui_* en Input.get_vector() por tus nuevas acciones.",
                victoryCondition: "Comprobación de la Misión 15: El personaje se mueve fluidamente tanto con WASD como con las flechas, y salta con Espacio.",
                optionalChallenge: "Reto creativo opcional: añadir una acción llamada restart asignada a la tecla R, preparada para cuando el juego tenga respawn."
              },
            ]
          },
          {
            id: "m16",
            title: "🎨 Misión 16 — Trae recursos a tu mundo",
            submodules: [
              {
                id: "16-01",
                title: "Paso 16.1: Conocer Paquetes Oficiales Gratuitos de Godot",
                youtubeId: GODOT_VIDEO_6_ID,
                startTime: 672,
                endTime: 749,
                duration: "1 min",
                description: "Comprende qué son los recursos (assets 3D, texturas, sonidos) y por qué conviene usar paquetes libres oficiales.",
                actionObjective: "Entender el valor de reutilizar recursos de comunidades libres.",
                victoryCondition: "Conocer fuentes de assets recomendadas.",
                godotNodes: ["Assets Overview"]
              },
              {
                id: "16-02",
                title: "Paso 16.2: Importar un Proyecto Descargado con Import and Edit",
                youtubeId: GODOT_VIDEO_6_ID,
                startTime: 749,
                endTime: 798,
                duration: "1 min",
                description: "Aprende a importar y abrir un proyecto de muestra descargado desde el gestor de proyectos.",
                actionObjective: "Usar la opción 'Importar' en el gestor de proyectos de Godot.",
                victoryCondition: "Abrir el proyecto de muestra sin alterar tu juego principal.",
                godotNodes: ["Project Importer"]
              },
              {
                id: "16-03",
                title: "Paso 16.3: Explorar un Proyecto 3D: Modelos, Partículas y Scripts",
                youtubeId: GODOT_VIDEO_6_ID,
                startTime: 798,
                endTime: 868,
                duration: "1.5 min",
                description: "Navega por las carpetas del proyecto de prueba para identificar mallas 3D, partículas y efectos.",
                actionObjective: "Buscar un modelo 3D, una textura y un sonido dentro del proyecto importado.",
                victoryCondition: "Identificar los tipos de archivos en FileSystem.",
                godotNodes: ["Asset Explorer"]
              },
              {
                id: "16-04",
                title: "Paso 16.4: Explorar Proyecto de Plataformas con Cámara y Monedas",
                youtubeId: GODOT_VIDEO_6_ID,
                startTime: 868,
                endTime: 958,
                duration: "1.5 min",
                description: "Observa un nivel de plataformas funcionando con coleccionables y cámara como inspiración para tu juego.",
                actionObjective: "Ejecutar la escena de demostración y observar el movimiento.",
                victoryCondition: "Visualizar el objetivo del recorrido.",
                godotNodes: ["Demo Level"]
              },
              {
                id: "16-05",
                title: "Paso 16.5: Extraer y Copiar Carpeta assets/ al Proyecto Principal",
                youtubeId: GODOT_VIDEO_6_ID,
                startTime: 958,
                endTime: 1054,
                duration: "1.5 min",
                description: "Copia la carpeta de recursos necesarios (assets) desde tu explorador de archivos hacia la carpeta de tu juego.",
                actionObjective: "Copiar la carpeta 'assets' dentro de la carpeta principal de tu proyecto de Godot.",
                victoryCondition: "Confirmar que los archivos se copiaron correctamente.",
                godotNodes: ["Asset Importer"],
                badgeUnlock: "b_asset_explorer"
              },
              {
                id: "16-06",
                title: "Paso 16.6: Verificar los Assets en FileSystem",
                youtubeId: GODOT_VIDEO_6_ID,
                startTime: 1054,
                endTime: 1108,
                duration: "1 min",
                description: "Comprueba que Godot 4 importa automáticamente los nuevos modelos 3D, audios y texturas en el panel FileSystem.",
                actionObjective: "Inspeccionar la carpeta assets/ en el panel FileSystem de Godot.",
                victoryCondition: "Ver los modelos y recursos organizados en tu proyecto.",
                godotNodes: ["FileSystem Verification"]
              },
              {
                id: "16-07",
                title: "Paso 16.7: Cierre y Avance al Siguiente Capítulo",
                youtubeId: GODOT_VIDEO_6_ID,
                startTime: 1108,
                endTime: 1155,
                duration: "1 min",
                description: "Guarda todo el proyecto con Ctrl + S y prepárate para construir plataformas y saltos en la Unidad 7.",
                actionObjective: "Pulsar Ctrl + S y registrar tus impresiones en tu DevLog.",
                victoryCondition: "Comprobación de la Misión 16: El panel FileSystem contiene una estructura ordenada de recursos lista para usar.",
                optionalChallenge: "Reto creativo opcional: elegir un único recurso que quieras usar en el nivel —un modelo, textura o sonido— y explicar para qué servirá."
              },
            ]
          }
        ]
      },
      {
        id: "u7",
        title: "Unidad 7 — Diseña plataformas y recupera al jugador al caer",
        missions: [
          {
            id: "m17",
            title: "🏗️ Misión 17 — Construye un recorrido de saltos",
            submodules: [
              {
                id: "17-01",
                title: "Paso 17.1: Introducción: Plataformas 3D y Respawn",
                youtubeId: GODOT_VIDEO_7_ID,
                startTime: 0,
                endTime: 30,
                duration: "1 min",
                description: "Entender el objetivo: transformar modelos 3D en un camino de saltos donde las caídas se puedan reintentar al instante.",
                actionObjective: "Comprender la necesidad de crear plataformas sólidas y un sistema de reaparición.",
                victoryCondition: "Avanzar a la creación de escenas de plataformas.",
                godotNodes: ["Platforms Overview"]
              },
              {
                id: "17-02",
                title: "Paso 17.2: Abrir Modelos en models/ y Crear Escena Heredada platforms.tscn",
                youtubeId: GODOT_VIDEO_7_ID,
                startTime: 30,
                endTime: 97,
                duration: "1.5 min",
                description: "Explora la carpeta models/ y crea una escena heredada reutilizable para tus plataformas.",
                actionObjective: "Crear una escena heredada de modelos 3D y guardarla como platforms.tscn.",
                victoryCondition: "Ver la escena platforms.tscn lista en tu proyecto.",
                godotNodes: ["Inherited Scene"]
              },
              {
                id: "17-03",
                title: "Paso 17.3: Copiar Plataformas e Integrarlas en Level_01",
                youtubeId: GODOT_VIDEO_7_ID,
                startTime: 97,
                endTime: 149,
                duration: "1 min",
                description: "Instancia la primera plataforma desde la carpeta de assets hacia tu escenario Level_01.",
                actionObjective: "Arrastrar la primera plataforma al mapa.",
                victoryCondition: "Ver la plataforma flotando en la escena Level_01.",
                godotNodes: ["Instanced Platform"]
              },
              {
                id: "17-04",
                title: "Paso 17.4: Crear Colisiones Complejas con Create Trimesh Static Body",
                youtubeId: GODOT_VIDEO_7_ID,
                startTime: 149,
                endTime: 246,
                duration: "1.5 min",
                description: "Genera la malla de colisión exacta desde la pestaña Malla -> Crear cuerpo estático trimesh.",
                actionObjective: "Generar colisión cóncava Trimesh para que el personaje camine sin atravesar los bordes.",
                victoryCondition: "Ver la malla verde de colisión ajustada a la plataforma.",
                godotNodes: ["Trimesh Static Body"]
              },
              {
                id: "17-05",
                title: "Paso 17.5: Elegir la Escena Principal: Set as Main Scene / Current Scene",
                youtubeId: GODOT_VIDEO_7_ID,
                startTime: 246,
                endTime: 275,
                duration: "1 min",
                description: "Establece Level_01.tscn como la escena principal del juego para que arranque directamente al pulsar F5.",
                actionObjective: "Hacer clic derecho en Level_01.tscn y seleccionar 'Establecer como Escena Principal'.",
                victoryCondition: "Pulsar F5 y ver como arranca directamente tu nivel.",
                godotNodes: ["Main Scene Setup"]
              },
              {
                id: "17-06",
                title: "Paso 17.6: Añadir Otra Plataforma, Calcular Colisión y Escalarla",
                youtubeId: GODOT_VIDEO_7_ID,
                startTime: 275,
                endTime: 354,
                duration: "1.5 min",
                description: "Añade una segunda plataforma a una distancia prudente que el jugador pueda alcanzar de un salto.",
                actionObjective: "Colocar la segunda plataforma y ajustar su colisión y escala.",
                victoryCondition: "Tener dos plataformas colocadas a distancia de salto.",
                godotNodes: ["Platform 2"]
              },
              {
                id: "17-07",
                title: "Paso 17.7: Ajustar Velocidad y Fuerza de Salto",
                youtubeId: GODOT_VIDEO_7_ID,
                startTime: 354,
                endTime: 404,
                duration: "1 min",
                description: "Prueba el salto con F6 y ajusta SPEED o JUMP_VELOCITY para que el recorrido sea desafiante pero no imposible.",
                actionObjective: "Calibrar las variables del jugador para el circuito.",
                victoryCondition: "Lograr saltar entre ambas plataformas con éxito.",
                godotNodes: ["Jump Calibration"]
              },
              {
                id: "17-08",
                title: "Paso 17.8: Renombrar Plataformas y Mover el Nodo Raíz Correcto",
                youtubeId: GODOT_VIDEO_7_ID,
                startTime: 404,
                endTime: 440,
                duration: "1 min",
                description: "Renombra tus plataformas como RedPlatform, BluePlatform o StartPlatform para mantener el mapa ordenado.",
                actionObjective: "Renombrar y organizar los nodos de plataformas en el árbol.",
                victoryCondition: "Ver nombres limpios y reconocibles en el árbol de escena.",
                godotNodes: ["Node Organization"]
              },
              {
                id: "17-09",
                title: "Paso 17.9: Duplicar con Ctrl + D y Diseñar el Recorrido",
                youtubeId: GODOT_VIDEO_7_ID,
                startTime: 440,
                endTime: 506,
                duration: "1.5 min",
                description: "Duplica plataformas con Ctrl + D para crear un camino continuo de al menos tres saltos desafiantes.",
                actionObjective: "Crear un circuito de al menos 3 saltos seguidos sobre el vacío.",
                victoryCondition: "Comprobación de la Misión 17: Unai puede recorrer una secuencia de plataformas con su personaje.",
                godotNodes: ["Ctrl + D Duplicate"],
                badgeUnlock: "b_platform_architect",
                optionalChallenge: "Reto creativo opcional: diseñar el recorrido con un tema: ruinas, torre flotante, planeta extraño o nave espacial."
              },
            ]
          },
          {
            id: "m18",
            title: "🔄 Misión 18 — Haz que una caída no termine la aventura",
            submodules: [
              {
                id: "18-01",
                title: "Paso 18.1: Detectar la Necesidad de Reiniciar la Posición al Caer",
                youtubeId: GODOT_VIDEO_7_ID,
                startTime: 506,
                endTime: 553,
                duration: "1 min",
                description: "Formula el problema de diseño: 'si el personaje cae al vacío, quiero que reaparezca automáticamente al inicio'.",
                actionObjective: "Comprender la necesidad del sistema de respawn.",
                victoryCondition: "Avanzar a las condiciones de caída.",
                godotNodes: ["Respawn Problem"]
              },
              // 🟡 CÁPSULA GDSCRIPT 7A — EL JUEGO TOMA DECISIONES
              {
                id: "07A-01",
                title: "Cápsula 7A.1: Introducción: Condiciones y Toma de Decisiones",
                youtubeId: GDSCRIPT_VIDEO_3_ID,
                startTime: 0,
                endTime: 20,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Entiende que el juego necesita reglas lógicas para tomar decisiones según lo que haga el jugador.",
                actionObjective: "Comprender el concepto de regla condicional (Si... entonces...).",
                victoryCondition: "Avanzar al primer bloque if.",
                godotNodes: ["Conditional Logic"]
              },
              {
                id: "07A-02",
                title: "Cápsula 7A.2: Estructura if, elif y else",
                youtubeId: GDSCRIPT_VIDEO_3_ID,
                startTime: 20,
                endTime: 51,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Escribe una regla sencilla en code_lab.gd: si una variable es mayor que 0, mostrar un mensaje.",
                actionObjective: "Escribir if score > 0: print('¡Tienes puntos!').",
                victoryCondition: "Ver la condición ejecutarse en consola.",
                godotNodes: ["if Statement"]
              },
              {
                id: "07A-03",
                title: "Cápsula 7A.3: Primer if, Dos Puntos e Indentación",
                youtubeId: GDSCRIPT_VIDEO_3_ID,
                startTime: 51,
                endTime: 98,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Aprende que la condición termina en dos puntos (:) y el código interno debe ir tabulado.",
                actionObjective: "Respetar los dos puntos y la sangría al escribir un bloque if.",
                victoryCondition: "Escribir un if limpio sin errores de sintaxis.",
                godotNodes: ["if Syntax :"]
              },
              {
                id: "07A-04",
                title: "Cápsula 7A.4: Comparaciones <, <=, >, >=, == y !=",
                youtubeId: GDSCRIPT_VIDEO_3_ID,
                startTime: 98,
                endTime: 130,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Practica los operadores de comparación: menor que (<), igual a (==) y diferente (!=).",
                actionObjective: "Probar la comparación position.y < -25 en tu laboratorio de código.",
                victoryCondition: "Ver el resultado booleano (true/false) de la comparación.",
                godotNodes: ["Comparison Operators"]
              },
              {
                id: "07A-05",
                title: "Cápsula 7A.5: Usar elif para una Segunda Posibilidad",
                youtubeId: GDSCRIPT_VIDEO_3_ID,
                startTime: 130,
                endTime: 179,
                duration: "1 min",
                categoryTag: "Reto extra",
                description: "Añade alternativas con elif cuando la primera condición no se cumpla.",
                actionObjective: "Probar una regla con dos alternativas en code_lab.gd.",
                victoryCondition: "Ver cómo el script evalúa elif si la primera falla.",
                godotNodes: ["elif Branch"]
              },
              {
                id: "07A-06",
                title: "Cápsula 7A.6: Usar else para el Caso Restante",
                youtubeId: GDSCRIPT_VIDEO_3_ID,
                startTime: 179,
                endTime: 238,
                duration: "1 min",
                categoryTag: "Reto extra",
                description: "Completa la regla con else para capturar cualquier otro caso que ocurra.",
                actionObjective: "Añadir un bloque else final en tu regla condicional.",
                victoryCondition: "Tener la estructura completa if-elif-else.",
                godotNodes: ["else Catch-all"]
              },
              {
                id: "07A-07",
                title: "Cápsula 7A.7: Condicionales Anidados",
                youtubeId: GDSCRIPT_VIDEO_3_ID,
                startTime: 238,
                endTime: 294,
                duration: "1 min",
                categoryTag: "Reto extra",
                description: "Reto opcional: comprueba primero si ha caído al vacío y dentro si le quedan vidas.",
                actionObjective: "Escribir una condición dentro de otra condición.",
                victoryCondition: "Comprender la jerarquía de condiciones anidadas.",
                godotNodes: ["Nested if"]
              },
              {
                id: "07A-08",
                title: "Cápsula 7A.8: Operadores Lógicos and, or y not",
                youtubeId: GDSCRIPT_VIDEO_3_ID,
                startTime: 294,
                endTime: 385,
                duration: "1.5 min",
                categoryTag: "Esencial",
                description: "Combina condiciones usando and (ambas se cumplen) u or (al menos una se cumple).",
                actionObjective: "Revisar la regla: 'solo salta si está en el suelo AND presiona salto'.",
                victoryCondition: "Usar and para exigir múltiples requisitos a la vez.",
                godotNodes: ["Logical Operators and / or"]
              },
              {
                id: "07A-09",
                title: "Cápsula 7A.9: Expresiones que Devuelven true o false",
                youtubeId: GDSCRIPT_VIDEO_3_ID,
                startTime: 385,
                endTime: 402,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Relaciona cualquier condición con una pregunta cuya respuesta es siempre Sí (true) o No (false).",
                actionObjective: "Entender que if evalúa la verdad de la expresión.",
                victoryCondition: "Relacionar condiciones con preguntas de sí/no.",
                godotNodes: ["Boolean Evaluation"]
              },
              {
                id: "07A-10",
                title: "Cápsula 7A.10: Revisar Condiciones en _physics_process(delta)",
                youtubeId: GDSCRIPT_VIDEO_3_ID,
                startTime: 402,
                endTime: 412,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Entiende por qué la comprobación de caída debe estar dentro de _physics_process para revisarse continuamente.",
                actionObjective: "Comprender la comprobación continua de caídas.",
                victoryCondition: "Saber dónde colocar la regla de caída.",
                godotNodes: ["_physics_process check"]
              },
              {
                id: "07A-11",
                title: "Cápsula 7A.11: Detectar una Pulsación con Input.is_action_pressed()",
                youtubeId: GDSCRIPT_VIDEO_3_ID,
                startTime: 412,
                endTime: 478,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Prueba la acción restart que dejaste configurada en la Unidad 6.",
                actionObjective: "Comprobar si Input.is_action_just_pressed('restart') se activa al pulsar R.",
                victoryCondition: "Ver la respuesta a la pulsación de la tecla R.",
                godotNodes: ["is_action_just_pressed"]
              },
              {
                id: "07A-12",
                title: "Cápsula 7A.12: Resumen de Condicionales",
                youtubeId: GDSCRIPT_VIDEO_3_ID,
                startTime: 478,
                endTime: 525,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Formula en tu lenguaje: 'Si mi personaje cae por debajo de Y = -25, entonces debo reaparecerlo'.",
                actionObjective: "Escribir la regla del respawn en palabras claras.",
                victoryCondition: "Comprobación de la Cápsula 7A: Entiendes cómo if revisa la altura del personaje.",
                godotNodes: ["Conditionals Summary"],
                badgeUnlock: "b_if_master"
              },
              // CONTINUACIÓN MISIÓN 18: PASO 18.2 & CÁPSULA 7B
              {
                id: "18-02",
                title: "Paso 18.2: Crear respawn_position con Tipo Vector3",
                youtubeId: GODOT_VIDEO_7_ID,
                startTime: 553,
                endTime: 637,
                duration: "1.5 min",
                description: "Guarda una coordenada segura en una variable Vector3 (ej: var respawn_position = Vector3(0, 2, 0)).",
                actionObjective: "Declara var respawn_position en la parte superior de player_movement.gd.",
                victoryCondition: "Ver la coordenada inicial guardada en el script.",
                godotNodes: ["var respawn_position"]
              },
              // 🟣 CÁPSULA GDSCRIPT 7B — CREA UNA FUNCIÓN DE RESPAWN
              {
                id: "07B-01",
                title: "Cápsula 7B.1: Introducción: Funciones, Orden y Reutilización",
                youtubeId: GDSCRIPT_VIDEO_5_ID,
                startTime: 0,
                endTime: 46,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Entiende que una función agrupa un bloque de código y le da un nombre para reutilizarlo cuando lo necesites.",
                actionObjective: "Comprender la utilidad de agrupar acciones en funciones.",
                victoryCondition: "Avanzar a la creación de respawn_player().",
                godotNodes: ["Function Concept"]
              },
              {
                id: "07B-02",
                title: "Cápsula 7B.2: Declarar y Llamar una Función Propia",
                youtubeId: GDSCRIPT_VIDEO_5_ID,
                startTime: 46,
                endTime: 98,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Declara la función func respawn_player(): y llámala desde tu regla de caída.",
                actionObjective: "Escribir la definición de func respawn_player(): en tu script.",
                victoryCondition: "Tener la función declarada y lista para invocarse.",
                godotNodes: ["func respawn_player()"]
              },
              {
                id: "07B-03",
                title: "Cápsula 7B.3: Pasar un Parámetro a una Función",
                youtubeId: GDSCRIPT_VIDEO_5_ID,
                startTime: 98,
                endTime: 183,
                duration: "1 min",
                categoryTag: "Reto extra",
                description: "Prueba enviar datos de entrada a una función (ej: func set_health(amount)).",
                actionObjective: "Crear una función de pruebas que reciba un número o mensaje.",
                victoryCondition: "Ver cómo la función recibe y usa el parámetro.",
                godotNodes: ["Function Parameters"]
              },
              {
                id: "07B-04",
                title: "Cápsula 7B.4: Funciones con Varios Parámetros",
                youtubeId: GDSCRIPT_VIDEO_5_ID,
                startTime: 183,
                endTime: 254,
                duration: "1 min",
                categoryTag: "Reto extra",
                description: "Reto opcional: crea una función de laboratorio que reciba la posición X e Y a la que enviar al personaje.",
                actionObjective: "Probar la recepción de múltiples parámetros separados por comas.",
                victoryCondition: "Manejar varios argumentos en una función.",
                godotNodes: ["Multiple Parameters"]
              },
              {
                id: "07B-05",
                title: "Cápsula 7B.5: Devolver Datos con return",
                youtubeId: GDSCRIPT_VIDEO_5_ID,
                startTime: 254,
                endTime: 318,
                duration: "1 min",
                categoryTag: "Biblioteca",
                description: "Aprende a hacer que una función realice un cálculo y devuelva el resultado con la palabra return.",
                actionObjective: "Crear una función de cálculo que devuelva un valor.",
                victoryCondition: "Entender el funcionamiento del return.",
                godotNodes: ["return Statement"]
              },
              {
                id: "07B-06",
                title: "Cápsula 7B.6: Ejemplo is_even(number) y Operador Módulo %",
                youtubeId: GDSCRIPT_VIDEO_5_ID,
                startTime: 318,
                endTime: 433,
                duration: "1.5 min",
                categoryTag: "Biblioteca",
                description: "Reto opcional: usa el operador módulo % para averiguar si una cantidad de monedas recopiladas es par o impar.",
                actionObjective: "Explorar el operador módulo % en tu laboratorio de código.",
                victoryCondition: "Ver el cálculo de números pares.",
                godotNodes: ["Modulus % Operator"]
              },
              {
                id: "07B-07",
                title: "Cápsula 7B.7: Ámbito de Variables: Locales y Globales",
                youtubeId: GDSCRIPT_VIDEO_5_ID,
                startTime: 433,
                endTime: 578,
                duration: "2 min",
                categoryTag: "Esencial",
                description: "Entiende por qué respawn_position debe declararse fuera de las funciones (ámbito global) para que todos puedan leerla.",
                actionObjective: "Comprender la diferencia entre variables dentro y fuera de funciones.",
                victoryCondition: "Asegurar que respawn_position sea accesible desde respawn_player().",
                godotNodes: ["Global vs Local Scope"]
              },
              {
                id: "07B-08",
                title: "Cápsula 7B.8: Resumen de Funciones",
                youtubeId: GDSCRIPT_VIDEO_5_ID,
                startTime: 578,
                endTime: 630,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Explica qué trabajo realiza tu función respawn_player(): reasignar la posición del jugador a su punto seguro.",
                actionObjective: "Revisar la función completa de reaparición.",
                victoryCondition: "Comprobación de la Cápsula 7B: Tu función respawn_player() está definida y lista para usarse.",
                godotNodes: ["Functions Summary"],
                badgeUnlock: "b_function_hero"
              },
              // CONTINUACIÓN MISIÓN 18 PASOS FINALES
              {
                id: "18-03",
                title: "Paso 18.3: Detectar la Caída en _physics_process: position.y < -25",
                youtubeId: GODOT_VIDEO_7_ID,
                startTime: 637,
                endTime: 690,
                duration: "1 min",
                description: "Escribe la condición en _physics_process: if position.y < -25: respawn_player().",
                actionObjective: "Añadir la regla de detección de caída a tu script del personaje.",
                victoryCondition: "Tener la condición conectada con la función de reaparición.",
                godotNodes: ["if position.y < -25"]
              },
              {
                id: "18-04",
                title: "Paso 18.4: Crear la Función respawn_player()",
                youtubeId: GODOT_VIDEO_7_ID,
                startTime: 690,
                endTime: 755,
                duration: "1 min",
                description: "Escribe el cuerpo de la función: global_position = respawn_position y limpia la velocidad acumulada.",
                actionObjective: "Escribir el código dentro de func respawn_player().",
                victoryCondition: "Ver la función de respawn completa en GDScript.",
                godotNodes: ["respawn_player Implementation"]
              },
              {
                id: "18-05",
                title: "Paso 18.5: Asignar la Posición de Respawn",
                youtubeId: GODOT_VIDEO_7_ID,
                startTime: 755,
                endTime: 775,
                duration: "1 min",
                description: "Guarda la posición inicial en _ready() con respawn_position = global_position para que reaparezca exactamente donde comenzó.",
                actionObjective: "Escribir respawn_position = global_position dentro de _ready().",
                victoryCondition: "Tener el punto de origen guardado automáticamente.",
                godotNodes: ["_ready respawn setup"]
              },
              {
                id: "18-06",
                title: "Paso 18.6: Errores Comunes: Indentación, Dos Puntos y Nombres Idénticos",
                youtubeId: GODOT_VIDEO_7_ID,
                startTime: 775,
                endTime: 824,
                duration: "1 min",
                description: "Revisa los errores clásicos si el personaje no reaparece: verificar dos puntos (:), sangría y coincidencia de nombres.",
                actionObjective: "Depurar cualquier error de sintaxis en el respawn.",
                victoryCondition: "Ver el script sin ningún aviso de error en rojo.",
                godotNodes: ["Syntax Debugger"]
              },
              {
                id: "18-07",
                title: "Paso 18.7: Probar el Killzone o Sistema de Reaparición",
                youtubeId: GODOT_VIDEO_7_ID,
                startTime: 824,
                endTime: 874,
                duration: "1 min",
                description: "Ejecuta Level_01 con F6, camina hacia el vacío, déjate caer y comprueba cómo el personaje reaparece al instante arriba.",
                actionObjective: "Caer voluntariamente de las plataformas y verificar la reaparición.",
                victoryCondition: "Comprobación de la Misión 18: El personaje vuelve inmediatamente a la plataforma inicial al caer por debajo de Y = -25.",
                godotNodes: ["Live Respawn Test"],
                badgeUnlock: "b_respawn_master"
              },
              {
                id: "18-08",
                title: "Paso 18.8: Conclusión y Cierre de la Unidad 7",
                youtubeId: GODOT_VIDEO_7_ID,
                startTime: 874,
                endTime: 915,
                duration: "1 min",
                description: "Guarda todo tu avance con Ctrl + S y sube una captura de tu recorrido de saltos funcionando a tu Portafolio de Creador.",
                actionObjective: "Subir la evidencia de tu recorrido en la Zona de Entregable.",
                victoryCondition: "Comprobación completa de la Unidad 7: Nivel con plataformas, saltos probados y sistema de respawn en vivo.",
                optionalChallenge: "Reto creativo opcional: colocar una zona visual o banderín de inicio para marcar el punto donde reaparece el jugador."
              },
            ]
          }
        ]
      },
      {
        id: "u8",
        title: "Unidad 8 — Crea monedas, puntos y un objetivo para el nivel",
        missions: [
          {
            id: "m19",
            title: "🪙 Misión 19 — Construye una moneda que el jugador pueda recoger",
            submodules: [
              {
                id: "19-01",
                title: "Paso 19.1: Introducción: Monedas Recolectables e Interfaz",
                youtubeId: GODOT_VIDEO_8_ID,
                startTime: 0,
                endTime: 20,
                duration: "1 min",
                description: "Entender el nuevo objetivo: dar al jugador algo valioso que buscar por el nivel.",
                actionObjective: "Comprender la necesidad de objetos coleccionables en el juego.",
                victoryCondition: "Avanzar a la creación de Coin.tscn.",
                godotNodes: ["Collectibles Overview"]
              },
              {
                id: "19-02",
                title: "Paso 19.2: Crear Coin.tscn con Nodo Raíz Area3D",
                youtubeId: GODOT_VIDEO_8_ID,
                startTime: 20,
                endTime: 45,
                duration: "1 min",
                description: "Crea una escena independiente para la moneda usando el nodo raíz especial Area3D.",
                actionObjective: "Crear una escena con nodo raíz Area3D y guardarla como Coin.tscn.",
                victoryCondition: "Ver el archivo Coin.tscn guardado en tu proyecto.",
                godotNodes: ["Area3D"]
              },
              {
                id: "19-03",
                title: "Paso 19.3: Añadir Modelo con MeshInstance3D",
                youtubeId: GODOT_VIDEO_8_ID,
                startTime: 45,
                endTime: 110,
                duration: "1 min",
                description: "Añade un nodo hijo MeshInstance3D con un cilindro o moneda 3D para darle aspecto visual.",
                actionObjective: "Añadir MeshInstance3D con la forma visible de la moneda.",
                victoryCondition: "Ver la moneda dibujada en el viewport.",
                godotNodes: ["MeshInstance3D -> Cylinder"]
              },
              {
                id: "19-04",
                title: "Paso 19.4: Añadir CollisionShape3D con BoxShape3D o CylinderShape3D",
                youtubeId: GODOT_VIDEO_8_ID,
                startTime: 110,
                endTime: 165,
                duration: "1 min",
                description: "Crea el área invisible de contacto para detectar cuándo el personaje toca la moneda.",
                actionObjective: "Añadir un nodo CollisionShape3D y ajustar su zona de choque.",
                victoryCondition: "Ver el contorno verde de colisión rodeando la moneda.",
                godotNodes: ["CollisionShape3D"]
              },
              {
                id: "19-05",
                title: "Paso 19.5: Material de Moneda: Textura de Color y Efecto Rim",
                youtubeId: GODOT_VIDEO_8_ID,
                startTime: 165,
                endTime: 247,
                duration: "1.5 min",
                description: "Pinta la moneda con un color dorado brillante y activa el efecto Rim para que resplandezca al sol.",
                actionObjective: "Asignar un material dorado y ajustar el brillo Rim en el Inspector.",
                victoryCondition: "Ver la moneda resplandecer con reflejos metálicos.",
                godotNodes: ["StandardMaterial3D -> Rim"]
              },
              {
                id: "19-06",
                title: "Paso 19.6: Crear y Conectar coin.gd",
                youtubeId: GODOT_VIDEO_8_ID,
                startTime: 247,
                endTime: 276,
                duration: "1 min",
                description: "Adjunta un script a la moneda para controlar su rotación y su destrucción al recogerla.",
                actionObjective: "Crear y guardar scripts/coin.gd unido al nodo raíz Area3D.",
                victoryCondition: "Ver coin.gd listo en el editor de scripts.",
                godotNodes: ["Attach Script -> coin.gd"]
              },
              {
                id: "19-07",
                title: "Paso 19.7: Girar la Moneda con rotate_y() en _physics_process",
                youtubeId: GODOT_VIDEO_8_ID,
                startTime: 276,
                endTime: 385,
                duration: "1.5 min",
                description: "Haz que la moneda gire suavemente sobre su eje vertical usando rotate_y(deg_to_rad(3)) dentro de _physics_process.",
                actionObjective: "Escribir rotate_y() para animar la rotación continua.",
                victoryCondition: "Ver la moneda girar como en los juegos de arcade clásicos.",
                godotNodes: ["rotate_y()"]
              },
              {
                id: "19-08",
                title: "Paso 19.8: Ajustar Tamaño y Escala desde Inspector",
                youtubeId: GODOT_VIDEO_8_ID,
                startTime: 385,
                endTime: 429,
                duration: "1 min",
                description: "Ajusta la escala de la moneda en la escena para que tenga una proporción adecuada respecto al jugador.",
                actionObjective: "Escalar la moneda a un tamaño visible y fácil de recoger.",
                victoryCondition: "Tener la moneda perfectamente proporcionada.",
                godotNodes: ["Transform -> Scale"]
              },
              {
                id: "19-09",
                title: "Paso 19.9: Conectar Señal body_entered",
                youtubeId: GODOT_VIDEO_8_ID,
                startTime: 429,
                endTime: 463,
                duration: "1 min",
                description: "Conecta la señal nativa body_entered del Area3D a tu script coin.gd para reaccionar cuando alguien la pise.",
                actionObjective: "Conectar la señal body_entered desde el panel Nodo.",
                victoryCondition: "Ver la función _on_body_entered creada en coin.gd.",
                godotNodes: ["body_entered Signal"]
              },
              {
                id: "19-10",
                title: "Paso 19.10: Eliminar un Nodo con queue_free()",
                youtubeId: GODOT_VIDEO_8_ID,
                startTime: 463,
                endTime: 509,
                duration: "1 min",
                description: "Escribe la instrucción de seguridad queue_free() para hacer que la moneda desaparezca del mundo al ser tocada.",
                actionObjective: "Escribir queue_free() dentro de la función de recogida.",
                victoryCondition: "Ver desaparecer la moneda al chocar con ella.",
                godotNodes: ["queue_free()"]
              },
              {
                id: "19-11",
                title: "Paso 19.11: Filtrar Colisiones: if body.name == 'Player'",
                youtubeId: GODOT_VIDEO_8_ID,
                startTime: 509,
                endTime: 576,
                duration: "1 min",
                description: "Añade una regla if body.name == 'Player': para asegurar que solo el jugador pueda recoger la moneda.",
                actionObjective: "Filtrar la recogida verificando el nombre del cuerpo que colisiona.",
                victoryCondition: "Comprobación de la Misión 19: Al tocar la moneda con el personaje, esta se destruye y desaparece inmediatamente.",
                godotNodes: ["if body.name == 'Player'"],
                badgeUnlock: "b_coin_collector",
                optionalChallenge: "Reto creativo opcional: cambiar la moneda por una estrella, cristal, batería o fragmento mágico inventado."
              },
            ]
          },
          {
            id: "m20",
            title: "📊 Misión 20 — Haz que el juego recuerde tus monedas",
            submodules: [
              {
                id: "20-01",
                title: "Paso 20.1: Crear Escena UI con Control y Ajuste Full Rect",
                youtubeId: GODOT_VIDEO_8_ID,
                startTime: 576,
                endTime: 641,
                duration: "1 min",
                description: "Reutiliza o completa la interfaz ui_hud.tscn para que cubra toda la pantalla de juego con anclaje Full Rect.",
                actionObjective: "Configurar Anchors Preset -> Full Rect en el nodo Control de la interfaz.",
                victoryCondition: "Tener el lienzo UI cubriendo toda la resolución.",
                godotNodes: ["Control -> Full Rect"]
              },
              {
                id: "20-02",
                title: "Paso 20.2: Añadir Icono con Sprite2D o TextureRect y coin.png",
                youtubeId: GODOT_VIDEO_8_ID,
                startTime: 641,
                endTime: 695,
                duration: "1 min",
                description: "Añade un pequeño icono gráfico de la moneda junto al marcador de puntos.",
                actionObjective: "Asignar la imagen coin.png a la propiedad Texture de tu icono en el HUD.",
                victoryCondition: "Ver el icono de la moneda dibujado en la esquina superior.",
                godotNodes: ["TextureRect -> coin.png"]
              },
              {
                id: "20-03",
                title: "Paso 20.3: Añadir Label y Personalizarlo con LabelSettings",
                youtubeId: GODOT_VIDEO_8_ID,
                startTime: 695,
                endTime: 797,
                duration: "1.5 min",
                description: "Crea el nodo Label con el nombre CoinsLabel que mostrará el contador inicial '0'.",
                actionObjective: "Crear CoinsLabel y ajustar su tamaño y color de texto.",
                victoryCondition: "Ver el número 0 impreso junto al icono de la moneda.",
                godotNodes: ["CoinsLabel"]
              },
              // 🟡 CÁPSULA GDSCRIPT 8A — HAZ QUE LA INTERFAZ CAMBIE DESDE CÓDIGO
              {
                id: "08A-01",
                title: "Cápsula 8A.1: Introducción: Modificar Nodos Durante el Juego",
                youtubeId: GDSCRIPT_VIDEO_6_ID,
                startTime: 0,
                endTime: 23,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Entiende que el código puede cambiar elementos de la interfaz en tiempo real mientras juegas.",
                actionObjective: "Comprender la manipulación de la interfaz desde GDScript.",
                victoryCondition: "Avanzar a la modificación de la propiedad .text.",
                godotNodes: ["UI Scripting"]
              },
              {
                id: "08A-02",
                title: "Cápsula 8A.2: Crear y Configurar un Label",
                youtubeId: GDSCRIPT_VIDEO_6_ID,
                startTime: 23,
                endTime: 101,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Revisa la estructura de tu nodo CoinsLabel preparado en el HUD.",
                actionObjective: "Identificar la propiedad .text del nodo Label.",
                victoryCondition: "Localizar el texto modificable en el Inspector.",
                godotNodes: ["Label Property .text"]
              },
              {
                id: "08A-03",
                title: "Cápsula 8A.3: Acceder a un Nodo con $Label y Cambiar .text",
                youtubeId: GDSCRIPT_VIDEO_6_ID,
                startTime: 101,
                endTime: 171,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Aprende el atajo del signo dólar ($) para obtener un nodo hijo y cambiar su texto: $CoinsLabel.text = 'Monedas: 1'.",
                actionObjective: "Escribir $CoinsLabel.text = 'Monedas: 1' en tu script de pruebas.",
                victoryCondition: "Ver cambiar el texto en vivo al ejecutar la interfaz.",
                godotNodes: ["$CoinsLabel.text"]
              },
              {
                id: "08A-04",
                title: "Cápsula 8A.4: Usar get_node('Label')",
                youtubeId: GDSCRIPT_VIDEO_6_ID,
                startTime: 171,
                endTime: 211,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Conoce la función formal get_node('CoinsLabel') como alternativa al signo dólar ($).",
                actionObjective: "Probar get_node('CoinsLabel').text = '1'.",
                victoryCondition: "Entender ambas formas de buscar nodos.",
                godotNodes: ["get_node()"]
              },
              {
                id: "08A-05",
                title: "Cápsula 8A.5: Usar Rutas de Nodos: NodePath",
                youtubeId: GDSCRIPT_VIDEO_6_ID,
                startTime: 211,
                endTime: 265,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Entiende cómo se escriben las rutas relativas cuando un nodo está metido dentro de contenedores.",
                actionObjective: "Copiar la ruta del nodo desde el inspector.",
                victoryCondition: "Manejar rutas de nodos complejas.",
                godotNodes: ["NodePath"]
              },
              {
                id: "08A-06",
                title: "Cápsula 8A.6: Exponer Referencias en Inspector con @export var my_label: Label",
                youtubeId: GDSCRIPT_VIDEO_6_ID,
                startTime: 265,
                endTime: 324,
                duration: "1 min",
                categoryTag: "Reto extra",
                description: "Reto opcional: expón la casilla @export var coins_label: Label en el Inspector y arrastra el nodo directamente.",
                actionObjective: "Conectar la referencia del Label desde el panel Inspector.",
                victoryCondition: "Tener la referencia vinculada sin escribir rutas en texto.",
                godotNodes: ["@export var Label"]
              },
              {
                id: "08A-07",
                title: "Cápsula 8A.7: Añadir y Modificar un Sprite2D / TextureRect",
                youtubeId: GDSCRIPT_VIDEO_6_ID,
                startTime: 324,
                endTime: 382,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Aprende a cambiar la imagen o textura de un icono desde código en tiempo de ejecución.",
                actionObjective: "Acceder a la propiedad texture de tu icono.",
                victoryCondition: "Ver cambiar la imagen desde script.",
                godotNodes: ["Texture Manipulation"]
              },
              {
                id: "08A-08",
                title: "Cápsula 8A.8: Cambiar position con Vector2",
                youtubeId: GDSCRIPT_VIDEO_6_ID,
                startTime: 382,
                endTime: 452,
                duration: "1 min",
                categoryTag: "Reto extra",
                description: "Reto opcional: desplaza ligeramente el icono del contador desde código usando Vector2.",
                actionObjective: "Modificar $Icon.position = Vector2(10, 10).",
                victoryCondition: "Ver mover el icono en la pantalla.",
                godotNodes: ["Vector2 Position"]
              },
              {
                id: "08A-09",
                title: "Cápsula 8A.9: Cambiar Color con modulate",
                youtubeId: GDSCRIPT_VIDEO_6_ID,
                startTime: 452,
                endTime: 503,
                duration: "1 min",
                categoryTag: "Reto extra",
                description: "Reto opcional: haz que el marcador brille en color amarillo neón al recoger una moneda usando modulate.",
                actionObjective: "Modificar $CoinsLabel.modulate = Color.YELLOW.",
                victoryCondition: "Ver iluminarse el marcador con un destello brillante.",
                godotNodes: ["modulate Color"]
              },
              {
                id: "08A-10",
                title: "Cápsula 8A.10: Cambiar Tamaño con scale",
                youtubeId: GDSCRIPT_VIDEO_6_ID,
                startTime: 503,
                endTime: 541,
                duration: "1 min",
                categoryTag: "Reto extra",
                description: "Reto opcional: agranda brevemente el contador con scale = Vector2(1.2, 1.2) al ganar un punto.",
                actionObjective: "Probar un pulso de escala en la etiqueta de puntos.",
                victoryCondition: "Ver un efecto de animación juiciosa en el contador.",
                godotNodes: ["scale Vector2"]
              },
              {
                id: "08A-11",
                title: "Cápsula 8A.11: Reutilizar Cambios con una Función Propia",
                youtubeId: GDSCRIPT_VIDEO_6_ID,
                startTime: 541,
                endTime: 665,
                duration: "2 min",
                categoryTag: "Esencial",
                description: "Agrupa la actualización del marcador dentro de una función update_coins_display(new_amount).",
                actionObjective: "Crear la función update_coins_display() en el script del HUD.",
                victoryCondition: "Tener la actualización del marcador encapsulada en una función.",
                godotNodes: ["update_display() Function"]
              },
              {
                id: "08A-12",
                title: "Cápsula 8A.12: Resumen de Modificación de Nodos",
                youtubeId: GDSCRIPT_VIDEO_6_ID,
                startTime: 665,
                endTime: 705,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Identifica qué línea de código controla el texto, cuál el color y cuál la textura en tu interfaz.",
                actionObjective: "Revisar los comandos clave de control de nodos UI.",
                victoryCondition: "Comprobación de la Cápsula 8A: Sabes cambiar el texto de CoinsLabel desde código.",
                godotNodes: ["UI Summary"],
                badgeUnlock: "b_node_manipulator"
              },
              // CONTINUACIÓN MISIÓN 20: PASOS 20.4 AL 20.6
              {
                id: "20-04",
                title: "Paso 20.4: Crear GameManager con Node3D o Node",
                youtubeId: GODOT_VIDEO_8_ID,
                startTime: 797,
                endTime: 838,
                duration: "1 min",
                description: "Crea una escena llamada GameManager.tscn con nodo raíz Node que actuará como cerebro del juego.",
                actionObjective: "Crear y guardar GameManager.tscn.",
                victoryCondition: "Ver GameManager.tscn guardado en tu proyecto.",
                godotNodes: ["GameManager Node"]
              },
              {
                id: "20-05",
                title: "Paso 20.5: Crear score y función add_score()",
                youtubeId: GODOT_VIDEO_8_ID,
                startTime: 838,
                endTime: 921,
                duration: "1.5 min",
                description: "Declara var score = 0 y la función func add_score(): score += 1 en game_manager.gd.",
                actionObjective: "Escribir la variable de puntuación y la función de incremento.",
                victoryCondition: "Tener la lógica global de puntos programada.",
                godotNodes: ["var score & add_score()"]
              },
              {
                id: "20-06",
                title: "Paso 20.6: Patrón Singleton y Autoload",
                youtubeId: GODOT_VIDEO_8_ID,
                startTime: 921,
                endTime: 1011,
                duration: "1.5 min",
                description: "Registra GameManager en Proyecto -> Configuración del Proyecto -> Autoload para que esté disponible en cualquier escena.",
                actionObjective: "Añadir game_manager.gd como Autoload con el nombre GameManager.",
                victoryCondition: "Poder acceder a GameManager desde cualquier script sin instanciarlo.",
                godotNodes: ["Project Settings -> Autoload"]
              },
              // 🟣 CÁPSULA GDSCRIPT 8B — HAZ QUE LAS PARTES DEL JUEGO SE AVISEN ENTRE SÍ
              {
                id: "08B-01",
                title: "Cápsula 8B.1: Introducción: Enums y Señales",
                youtubeId: GDSCRIPT_VIDEO_8_ID,
                startTime: 0,
                endTime: 10,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Entiende que las señales permiten que la moneda, el GameManager y la interfaz se comuniquen sin estar mezclados.",
                actionObjective: "Comprender la comunicación desacoplada por eventos.",
                victoryCondition: "Avanzar al laboratorio de señales.",
                godotNodes: ["Signals Concept"]
              },
              {
                id: "08B-02",
                title: "Cápsula 8B.2: Declarar un Enum",
                youtubeId: GDSCRIPT_VIDEO_8_ID,
                startTime: 10,
                endTime: 43,
                duration: "1 min",
                categoryTag: "Reto extra",
                description: "Declara un enum con estados con nombre como enum State { IDLE, WALKING, JUMPING }.",
                actionObjective: "Crear un enum de estados en tu script de pruebas.",
                victoryCondition: "Ver la lista de estados legibles en código.",
                godotNodes: ["enum State"]
              },
              {
                id: "08B-03",
                title: "Cápsula 8B.3: Mostrar un Enum en Inspector con @export",
                youtubeId: GDSCRIPT_VIDEO_8_ID,
                startTime: 43,
                endTime: 77,
                duration: "1 min",
                categoryTag: "Reto extra",
                description: "Reto opcional: expón la selección de estado en el Inspector con @export var current_state: State.",
                actionObjective: "Seleccionar el estado activo desde un menú desplegable en el Inspector.",
                victoryCondition: "Ver el desplegable de enum en el Inspector de Godot.",
                godotNodes: ["@export var enum"]
              },
              {
                id: "08B-04",
                title: "Cápsula 8B.4: Usar match con Enum",
                youtubeId: GDSCRIPT_VIDEO_8_ID,
                startTime: 77,
                endTime: 162,
                duration: "1.5 min",
                categoryTag: "Reto extra",
                description: "Reto de ampliación: usa la instrucción match current_state: para decidir qué código ejecutar en cada estado.",
                actionObjective: "Probar un bloque match con alternativas de enum.",
                victoryCondition: "Manejar alternativas limpias de estado con match.",
                godotNodes: ["match Statement"]
              },
              {
                id: "08B-05",
                title: "Cápsula 8B.5: Qué es una Señal y por qué Desacopla Nodos",
                youtubeId: GDSCRIPT_VIDEO_8_ID,
                startTime: 162,
                endTime: 178,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Comprende que una señal es un grito de aviso: '¡He sido recogida!' sin importar quién lo escuche.",
                actionObjective: "Entender el desacoplamiento entre emisor y receptor.",
                victoryCondition: "Avanzar a la creación de señales personalizadas.",
                godotNodes: ["Decoupling Signals"]
              },
              {
                id: "08B-06",
                title: "Cápsula 8B.6: Conectar Señal Nativa pressed de un Botón",
                youtubeId: GDSCRIPT_VIDEO_8_ID,
                startTime: 178,
                endTime: 254,
                duration: "1.5 min",
                categoryTag: "Esencial",
                description: "Conecta la señal nativa pressed de un botón para ejecutar una función al hacer clic.",
                actionObjective: "Conectar la señal pressed de un botón de prueba.",
                victoryCondition: "Ver la función _on_button_pressed ejecutarse.",
                godotNodes: ["pressed Signal"]
              },
              {
                id: "08B-07",
                title: "Cápsula 8B.7: Declarar una Señal Propia con signal",
                youtubeId: GDSCRIPT_VIDEO_8_ID,
                startTime: 254,
                endTime: 285,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Escribe la palabra clave signal coin_collected en la parte superior de coin.gd.",
                actionObjective: "Declarar signal coin_collected en tu script de la moneda.",
                victoryCondition: "Tener la señal personalizada creada.",
                godotNodes: ["signal coin_collected"]
              },
              {
                id: "08B-08",
                title: "Cápsula 8B.8: Emitir una Señal con .emit()",
                youtubeId: GDSCRIPT_VIDEO_8_ID,
                startTime: 285,
                endTime: 310,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Emite la señal escribiendo coin_collected.emit() cuando el jugador pise la moneda.",
                actionObjective: "Emitir la señal dentro de la función de recogida.",
                victoryCondition: "Ver emitir la señal en el momento del impacto.",
                godotNodes: ["coin_collected.emit()"]
              },
              {
                id: "08B-09",
                title: "Cápsula 8B.9: Conectar una Señal entre Scripts",
                youtubeId: GDSCRIPT_VIDEO_8_ID,
                startTime: 310,
                endTime: 358,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Conecta la señal coin_collected con la función add_score() de GameManager o con el HUD.",
                actionObjective: "Conectar la emisión con el receptor de puntos.",
                victoryCondition: "Ver cómo el GameManager responde al aviso de la moneda.",
                godotNodes: ["Signal Connection"]
              },
              {
                id: "08B-10",
                title: "Cápsula 8B.10: Resumen de Señales",
                youtubeId: GDSCRIPT_VIDEO_8_ID,
                startTime: 358,
                endTime: 400,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Formula en tu lenguaje cómo las señales permiten que el juego permanezca ordenado y modular.",
                actionObjective: "Explicar el flujo: Moneda emite señal -> GameManager suma punto -> HUD actualiza marcador.",
                victoryCondition: "Comprobación de la Cápsula 8B: La comunicación entre nodos funciona mediante señales o llamadas a Autoload.",
                godotNodes: ["Signals Summary"],
                badgeUnlock: "b_signal_master"
              },
              // CONTINUACIÓN MISIÓN 20 PASOS FINALES
              {
                id: "20-07",
                title: "Paso 20.7: Llamar a GameManager.add_score() desde Coin.gd",
                youtubeId: GODOT_VIDEO_8_ID,
                startTime: 1011,
                endTime: 1072,
                duration: "1 min",
                description: "Invoca GameManager.add_score() dentro del script coin.gd justo antes de destruir la moneda.",
                actionObjective: "Escribir GameManager.add_score() en la recogida.",
                victoryCondition: "Ver la puntuación del GameManager incrementarse al recoger la moneda.",
                godotNodes: ["GameManager.add_score()"]
              },
              {
                id: "20-08",
                title: "Paso 20.8: Referenciar Etiqueta con @onready var coins_label = $CoinsLabel",
                youtubeId: GODOT_VIDEO_8_ID,
                startTime: 1072,
                endTime: 1174,
                duration: "1.5 min",
                description: "Utiliza @onready var coins_label = $CoinsLabel para guardar la referencia al texto del HUD al cargar la escena.",
                actionObjective: "Declarar la referencia @onready en el script de la interfaz.",
                victoryCondition: "Tener la etiqueta lista para actualizarse.",
                godotNodes: ["@onready var $CoinsLabel"]
              },
              {
                id: "20-09",
                title: "Paso 20.9: Formatear y Actualizar el Contador en _process",
                youtubeId: GODOT_VIDEO_8_ID,
                startTime: 1174,
                endTime: 1247,
                duration: "1.5 min",
                description: "Actualiza el texto del marcador con coins_label.text = str(GameManager.score) para ver las monedas en tiempo real.",
                actionObjective: "Escribir la actualización del texto en _process.",
                victoryCondition: "Comprobación de la Misión 20: Al recoger una moneda, el número del HUD pasa inmediatamente de 0 a 1.",
                godotNodes: ["Live Score Counter"],
                badgeUnlock: "b_score_manager"
              },
            ]
          },
          {
            id: "m21",
            title: "🌟 Misión 21 — Diseña una ruta con recompensas",
            submodules: [
              {
                id: "21-01",
                title: "Paso 21.1: Prueba Final: Monedas Duplicadas y Contador en Tiempo Real",
                youtubeId: GODOT_VIDEO_8_ID,
                startTime: 1247,
                endTime: 1288,
                duration: "1 min",
                description: "Duplica la escena Coin.tscn con Ctrl + D por el recorrido de plataformas y prueba a recogerlas todas en vivo.",
                actionObjective: "Distribuir al menos 5 monedas por las plataformas de tu nivel.",
                victoryCondition: "Ver el contador del HUD incrementar de 1 en 1 al recoger cada moneda en orden.",
                godotNodes: ["Level Collectibles Route"]
              },
              {
                id: "21-02",
                title: "Paso 21.2: Cierre del Capítulo y Avance a la Unidad 9",
                youtubeId: GODOT_VIDEO_8_ID,
                startTime: 1288,
                endTime: 1335,
                duration: "1 min",
                description: "Guarda el proyecto con Ctrl + S y sube la captura de tu nivel con monedas a la Zona de Entregable.",
                actionObjective: "Subir la evidencia de tu nivel con monedas en la plataforma.",
                victoryCondition: "Comprobación completa de la Unidad 8: Tu nivel tiene un objetivo claro, monedas recolectables y un marcador en vivo.",
                godotNodes: ["Chapter 8 Complete"],
                badgeUnlock: "b_coin_route",
                optionalChallenge: "Reto de diseño: colocar algunas monedas en la ruta principal fácil y otras en plataformas elevadas más difíciles para desafiar al jugador."
              },
            ]
          }
        ]
      },
      {
        id: "u9",
        title: "Unidad 9 — Controla la cámara y orienta el personaje",
        missions: [
          {
            id: "m22",
            title: "🎥 Misión 22 — Construye una cámara que acompaña al jugador",
            submodules: [
              {
                id: "22-01",
                title: "Paso 22.1: Introducción: Cámara Orbital y Orientación del Personaje",
                youtubeId: GODOT_VIDEO_9_ID,
                startTime: 0,
                endTime: 25,
                duration: "1 min",
                description: "Entender el objetivo: conseguir que la cámara gire con el ratón alrededor del personaje.",
                actionObjective: "Comprender la necesidad de una cámara orbital libre en 3D.",
                victoryCondition: "Avanzar a la creación del pivote CameraArm.",
                godotNodes: ["Orbital Camera Overview"]
              },
              {
                id: "22-02",
                title: "Paso 22.2: Crear Pivote CameraArm como Hijo de Player",
                youtubeId: GODOT_VIDEO_9_ID,
                startTime: 25,
                endTime: 70,
                duration: "1 min",
                description: "Añade un nodo Node3D llamado CameraArm como hijo del nodo raíz de Player.",
                actionObjective: "Crear el nodo pivote CameraArm en la jerarquía de Player.",
                victoryCondition: "Ver CameraArm posicionado en el centro del personaje.",
                godotNodes: ["Node3D -> CameraArm"]
              },
              {
                id: "22-03",
                title: "Paso 22.3: Hacer Camera3D Hija de CameraArm y Ajustar Distancia/Ángulo",
                youtubeId: GODOT_VIDEO_9_ID,
                startTime: 70,
                endTime: 135,
                duration: "1 min",
                description: "Arrastra Camera3D como hija de CameraArm y desplázala ligeramente atrás y arriba.",
                actionObjective: "Ajustar la posición de la cámara detrás y por encima de los hombros del jugador.",
                victoryCondition: "Tener un encuadre en tercera persona profesional.",
                godotNodes: ["Camera3D -> Arm Child"]
              },
              {
                id: "22-04",
                title: "Paso 22.4: Capturar Cursor con Input.MOUSE_MODE_CAPTURED en _ready()",
                youtubeId: GODOT_VIDEO_9_ID,
                startTime: 135,
                endTime: 210,
                duration: "1 min",
                description: "Escribe Input.mouse_mode = Input.MOUSE_MODE_CAPTURED en _ready() para ocultar y centrar el cursor al jugar.",
                actionObjective: "Capturar el ratón al iniciar la escena.",
                victoryCondition: "Ver desaparecer el puntero del ratón al pulsar F6.",
                godotNodes: ["MOUSE_MODE_CAPTURED"]
              },
              {
                id: "22-05",
                title: "Paso 22.5: Liberar Cursor al Pulsar Escape con InputEventKey",
                youtubeId: GODOT_VIDEO_9_ID,
                startTime: 210,
                endTime: 285,
                duration: "1 min",
                description: "Permite al jugador pulsar Escape para liberar el ratón con Input.MOUSE_MODE_VISIBLE.",
                actionObjective: "Añadir la regla de liberación de ratón con la tecla Escape.",
                victoryCondition: "Comprobación de la Misión 22: Al jugar, el cursor se captura para controlar la cámara y se libera al pulsar Escape.",
                godotNodes: ["MOUSE_MODE_VISIBLE"],
                badgeUnlock: "b_camera_arm",
                optionalChallenge: "Reto creativo opcional: elegir una distancia de cámara cercana e intensa o alejada y exploratoria."
              },
            ]
          },
          {
            id: "m23",
            title: "🌐 Misión 23 — Mira alrededor y gira hacia donde caminas",
            submodules: [
              {
                id: "23-01",
                title: "Paso 23.1: Detectar Movimiento del Ratón con _unhandled_input(event) y event.relative",
                youtubeId: GODOT_VIDEO_9_ID,
                startTime: 285,
                endTime: 370,
                duration: "1 min",
                description: "Capta los desplazamientos del ratón usando event is InputEventMouseMotion y event.relative.",
                actionObjective: "Escribir la detección del movimiento relativo del ratón en el script.",
                victoryCondition: "Capturar los valores X e Y del movimiento del ratón.",
                godotNodes: ["_unhandled_input(event)"]
              },
              {
                id: "23-02",
                title: "Paso 23.2: Crear Constante MOUSE_SENSITIVITY",
                youtubeId: GODOT_VIDEO_9_ID,
                startTime: 370,
                endTime: 440,
                duration: "1 min",
                description: "Declara const MOUSE_SENSITIVITY = 0.005 para ajustar la velocidad de giro de la cámara.",
                actionObjective: "Crear la constante de sensibilidad en player_movement.gd.",
                victoryCondition: "Tener la velocidad de rotación calibrada.",
                godotNodes: ["MOUSE_SENSITIVITY"]
              },
              {
                id: "23-03",
                title: "Paso 23.3: Rotar Horizontalmente CameraArm con rotate_y()",
                youtubeId: GODOT_VIDEO_9_ID,
                startTime: 440,
                endTime: 520,
                duration: "1 min",
                description: "Aplica rotate_y(-event.relative.x * MOUSE_SENSITIVITY) al pivote CameraArm para mirar a izquierda y derecha.",
                actionObjective: "Girar la cámara en horizontal con el ratón.",
                victoryCondition: "Ver rotar la vista 360 grados alrededor del personaje.",
                godotNodes: ["CameraArm.rotate_y()"]
              },
              {
                id: "23-04",
                title: "Paso 23.4: Rotar Verticalmente y Limitar Ángulos con clamp()",
                youtubeId: GODOT_VIDEO_9_ID,
                startTime: 520,
                endTime: 650,
                duration: "2 min",
                description: "Gira en vertical y usa clamp(rotation.x, deg_to_rad(-80), deg_to_rad(60)) para evitar volteretas raras.",
                actionObjective: "Limitar la rotación vertical para que no traspase el suelo.",
                victoryCondition: "Mirar arriba y abajo de forma natural sin sobrepasar los límites.",
                godotNodes: ["clamp() Rotation"]
              },
              {
                id: "23-05",
                title: "Paso 23.5: Mover al Jugador según la Orientación de CameraArm",
                youtubeId: GODOT_VIDEO_9_ID,
                startTime: 650,
                endTime: 760,
                duration: "2 min",
                description: "Calcula el vector de dirección basándote en la rotación de CameraArm para que 'avanzar' siga la mirada de la cámara.",
                actionObjective: "Transformar las teclas WASD según la dirección de la cámara.",
                victoryCondition: "Caminar hacia donde enfoca la cámara.",
                godotNodes: ["Camera Oriented Motion"]
              },
              {
                id: "23-06",
                title: "Paso 23.6: Girar Suavemente el Modelo con transform.basis y slerp",
                youtubeId: GODOT_VIDEO_9_ID,
                startTime: 760,
                endTime: 855,
                duration: "1.5 min",
                description: "Aplica rotación interpolada suave al modelo del personaje usando slerp() al cambiar de dirección.",
                actionObjective: "Escribir la rotación slerp suave hacia la dirección de avance.",
                victoryCondition: "Ver al personaje girar de forma fluida sin tirones.",
                godotNodes: ["slerp() Rotation"]
              },
              {
                id: "23-07",
                title: "Paso 23.7: Prueba Completa: Ratón y Teclado",
                youtubeId: GODOT_VIDEO_9_ID,
                startTime: 855,
                endTime: 910,
                duration: "1 min",
                description: "Ejecuta el juego con F6, recorre las plataformas y recoge monedas usando la cámara orbital libre.",
                actionObjective: "Navegar el circuito de saltos con control orbital completo.",
                victoryCondition: "Sentir el control fluido estilo videojuego 3D comercial.",
                godotNodes: ["Orbital Playtest"]
              },
              {
                id: "23-08",
                title: "Paso 23.8: Resumen y Cierre de la Unidad 9",
                youtubeId: GODOT_VIDEO_9_ID,
                startTime: 910,
                endTime: 950,
                duration: "1 min",
                description: "Guarda con Ctrl + S y sube una foto o vídeo de tu personaje navegando con cámara orbital a la Zona de Entregable.",
                actionObjective: "Subir evidencia del control de cámara en la plataforma.",
                victoryCondition: "Comprobación de la Misión 23: Control orbital completo de cámara y personaje girando suavemente.",
                godotNodes: ["Chapter 9 Complete"],
                badgeUnlock: "b_orbital_camera",
                optionalChallenge: "Reto de ajuste: probar tres valores de MOUSE_SENSITIVITY (0.002, 0.005, 0.010) y decidir cuál se siente mejor."
              },
            ]
          }
        ]
      },
      {
        id: "u10",
        title: "Unidad 10 — Dale un modelo y animaciones a tu personaje",
        missions: [
          {
            id: "m24",
            title: "🕺 Misión 24 — Cambia la cápsula por un personaje real",
            submodules: [
              {
                id: "24-01",
                title: "Paso 24.1: Introducción: Modelo 3D y Cambio de Fondo",
                youtubeId: GODOT_VIDEO_10_ID,
                startTime: 0,
                endTime: 35,
                duration: "1 min",
                description: "Entender el objetivo: sustituir la cápsula provisional por un modelo 3D articulado conservando las físicas.",
                actionObjective: "Comprender la separación entre malla visual y colisión física.",
                victoryCondition: "Avanzar a la búsqueda del modelo en assets.",
                godotNodes: ["Character Model Overview"]
              },
              {
                id: "24-02",
                title: "Paso 24.2: Localizar Modelo en assets/models/",
                youtubeId: GODOT_VIDEO_10_ID,
                startTime: 35,
                endTime: 80,
                duration: "1 min",
                description: "Busca la carpeta assets/models/ y localiza el archivo del personaje 3D (.glb / .gltf / .tscn).",
                actionObjective: "Encontrar el modelo 3D en el panel FileSystem.",
                victoryCondition: "Ver el archivo del personaje listo para instanciarse.",
                godotNodes: ["FileSystem -> models/"]
              },
              {
                id: "24-03",
                title: "Paso 24.3: Sustituir MeshInstance3D por el Modelo Animado",
                youtubeId: GODOT_VIDEO_10_ID,
                startTime: 80,
                endTime: 160,
                duration: "1.5 min",
                description: "Elimina o sustituye la cápsula MeshInstance3D arrastrando la escena del modelo 3D dentro del personaje.",
                actionObjective: "Instanciar la escena del modelo 3D dentro del nodo raíz Player.",
                victoryCondition: "Ver el nuevo personaje 3D en el viewport.",
                godotNodes: ["Instanced 3D Model"]
              },
              {
                id: "24-04",
                title: "Paso 24.4: Ajustar Tamaño y Alineación con CollisionShape3D",
                youtubeId: GODOT_VIDEO_10_ID,
                startTime: 160,
                endTime: 230,
                duration: "1 min",
                description: "Alinea la posición del modelo para que los pies toquen el suelo exactamente donde termina la colisión.",
                actionObjective: "Ajustar la posición Y del modelo dentro de CollisionShape3D.",
                victoryCondition: "Tener el modelo perfectamente encajado dentro de la cápsula de colisión.",
                godotNodes: ["Collision Alignment"]
              },
              {
                id: "24-05",
                title: "Paso 24.5: Inspeccionar AnimationPlayer Incluido en el Modelo",
                youtubeId: GODOT_VIDEO_10_ID,
                startTime: 230,
                endTime: 295,
                duration: "1 min",
                description: "Localiza el nodo AnimationPlayer integrado dentro del modelo importado.",
                actionObjective: "Seleccionar el nodo AnimationPlayer en el árbol.",
                victoryCondition: "Ver desplegarse la línea de tiempo de animaciones en la parte inferior.",
                godotNodes: ["AnimationPlayer"]
              },
              {
                id: "24-06",
                title: "Paso 24.6: Explorar Animaciones Idle, Running y Jump",
                youtubeId: GODOT_VIDEO_10_ID,
                startTime: 295,
                endTime: 370,
                duration: "1 min",
                description: "Reproduce manualmente las animaciones de reposo (Idle), carrera (Running) y salto (Jump) desde el editor.",
                actionObjective: "Hacer clic en 'Play' en la lista de animaciones para probarlas.",
                victoryCondition: "Comprobación de la Misión 24: El personaje tiene un modelo 3D visible, alineado y con animaciones reproduciéndose.",
                godotNodes: ["Animation Timeline"],
                badgeUnlock: "b_character_model",
                optionalChallenge: "Reto creativo opcional: elegir la 'pose de reposo' ideal de tu personaje y tomar una foto de presentación."
              },
            ]
          },
          {
            id: "m25",
            title: "🎬 Misión 25 — Haz que el personaje reaccione a lo que hace",
            submodules: [
              {
                id: "25-01",
                title: "Paso 25.1: Referenciar AnimationPlayer con @onready var",
                youtubeId: GODOT_VIDEO_10_ID,
                startTime: 370,
                endTime: 450,
                duration: "1 min",
                description: "Escribe @onready var anim_player = $Model/AnimationPlayer en player_movement.gd.",
                actionObjective: "Declarar la referencia al AnimationPlayer en tu script del personaje.",
                victoryCondition: "Tener la referencia al reproductor de animaciones lista.",
                godotNodes: ["@onready var AnimationPlayer"]
              },
              {
                id: "25-02",
                title: "Paso 25.2: Introducción a la Lógica de Animaciones en _physics_process",
                youtubeId: GODOT_VIDEO_10_ID,
                startTime: 450,
                endTime: 465,
                duration: "1 min",
                description: "Entender que el script elegirá qué animación reproducir revisando la física del personaje 60 veces por segundo.",
                actionObjective: "Comprender la máquina de estados básica de animaciones.",
                victoryCondition: "Avanzar a las condiciones de salto.",
                godotNodes: ["Animation State Machine"]
              },
              {
                id: "25-03",
                title: "Paso 25.3: Reproducir Jump cuando is_on_floor() es Falso",
                youtubeId: GODOT_VIDEO_10_ID,
                startTime: 465,
                endTime: 545,
                duration: "1.5 min",
                description: "Escribe if not is_on_floor(): anim_player.play('Jump') para activar la pose de salto en el aire.",
                actionObjective: "Activar la animación de salto cuando el personaje cae o salta.",
                victoryCondition: "Ver al personaje adoptar la postura de salto al estar en el aire.",
                godotNodes: ["anim_player.play('Jump')"]
              },
              {
                id: "25-04",
                title: "Paso 25.4: Reproducir Running cuando velocity.length() > 0",
                youtubeId: GODOT_VIDEO_10_ID,
                startTime: 545,
                endTime: 620,
                duration: "1.5 min",
                description: "Escribe elif velocity.length() > 0: anim_player.play('Running') para animar las piernas al correr por el suelo.",
                actionObjective: "Activar la carrera al desplazarse horizontalmente.",
                victoryCondition: "Ver al personaje mover las piernas al presionar WASD.",
                godotNodes: ["anim_player.play('Running')"]
              },
              {
                id: "25-05",
                title: "Paso 25.5: Reproducir Idle cuando está Quieto",
                youtubeId: GODOT_VIDEO_10_ID,
                startTime: 620,
                endTime: 665,
                duration: "1 min",
                description: "Escribe else: anim_player.play('Idle') para volver a la posición de respiración en reposo cuando te detienes.",
                actionObjective: "Activar la animación Idle al soltar los controles.",
                victoryCondition: "Ver al personaje respirar relajado al detenerse.",
                godotNodes: ["anim_player.play('Idle')"]
              },
              {
                id: "25-06",
                title: "Paso 25.6: Cambiar Cielo y Fondo con WorldEnvironment",
                youtubeId: GODOT_VIDEO_10_ID,
                startTime: 665,
                endTime: 705,
                duration: "1 min",
                description: "Ajusta las propiedades del cielo en WorldEnvironment para darle un tono atmosférico a tu nivel.",
                actionObjective: "Elegir un tono de cielo o atardecer para el fondo del mundo.",
                victoryCondition: "Ver el cielo del juego renovado.",
                godotNodes: ["WorldEnvironment Sky"]
              },
              {
                id: "25-07",
                title: "Paso 25.7: Prueba Final de Animaciones",
                youtubeId: GODOT_VIDEO_10_ID,
                startTime: 705,
                endTime: 750,
                duration: "1 min",
                description: "Prueba con F6: corre, salta, cae y detente. Comprueba que el personaje cambia de animación perfectamente en cada estado.",
                actionObjective: "Realizar una prueba completa de la respuesta visual del personaje.",
                victoryCondition: "Comprobación de la Misión 25: El personaje cambia entre Idle, Running y Jump respondiendo a lo que hace.",
                godotNodes: ["Live Animation Test"],
                badgeUnlock: "b_animated_hero",
                optionalChallenge: "Reto creativo opcional: crear una plataforma alta de pruebas para observar los tres estados de animación en un solo salto."
              },
            ]
          }
        ]
      },
      {
        id: "u11",
        title: "Unidad 11 — Haz que el juego suene vivo",
        missions: [
          {
            id: "m26",
            title: "🎵 Misión 26 — Da una música a tu mundo",
            submodules: [
              {
                id: "26-01",
                title: "Paso 26.1: Introducción: Música de Fondo y Efectos de Sonido",
                youtubeId: GODOT_VIDEO_11_ID,
                startTime: 0,
                endTime: 25,
                duration: "1 min",
                description: "Entender el objetivo: acompañar la partida con banda sonora y sonidos retro de interacción.",
                actionObjective: "Comprender el impacto del diseño de audio en un videojuego.",
                victoryCondition: "Avanzar a la exploración de audios.",
                godotNodes: ["Audio System Overview"]
              },
              {
                id: "26-02",
                title: "Paso 26.2: Revisar Audio Disponible: Moneda, Salto y Pasos",
                youtubeId: GODOT_VIDEO_11_ID,
                startTime: 25,
                endTime: 110,
                duration: "1.5 min",
                description: "Explora los archivos de audio .wav o .mp3 disponibles en tu carpeta de assets.",
                actionObjective: "Escuchar los efectos de sonido de moneda, salto y pisadas.",
                victoryCondition: "Identificar los archivos de audio útiles.",
                godotNodes: ["Audio Files .wav/.mp3"]
              },
              {
                id: "26-03",
                title: "Paso 26.3: Buscar Música y Sonidos Gratuitos sin Copyright",
                youtubeId: GODOT_VIDEO_11_ID,
                startTime: 110,
                endTime: 127,
                duration: "1 min",
                description: "Aprende qué licencias libres (Creative Commons / Public Domain) permiten usar música sin derechos de autor.",
                actionObjective: "Conocer fuentes de audio libres para juegos.",
                victoryCondition: "Respetar las licencias de uso de sonido.",
                godotNodes: ["Free Audio Licenses"]
              },
              {
                id: "26-04",
                title: "Paso 26.4: Importar y Organizar Audio en Carpetas music/ y sfx/",
                youtubeId: GODOT_VIDEO_11_ID,
                startTime: 127,
                endTime: 178,
                duration: "1 min",
                description: "Crea las carpetas music/ y sfx/ dentro de tu proyecto para mantener ordenados tus archivos sonoros.",
                actionObjective: "Crear y organizar las carpetas de audio en FileSystem.",
                victoryCondition: "Tener carpetas music/ y sfx/ creadas.",
                godotNodes: ["FileSystem -> music/ & sfx/"]
              },
              {
                id: "26-05",
                title: "Paso 26.5: Crear AudioStreamPlayer2D o AudioStreamPlayer y Asignar su Stream",
                youtubeId: GODOT_VIDEO_11_ID,
                startTime: 178,
                endTime: 250,
                duration: "1.5 min",
                description: "Añade un nodo AudioStreamPlayer a tu escena Level_01 y asigna tu canción en la propiedad Stream.",
                actionObjective: "Asignar la música de fondo a la propiedad Stream.",
                victoryCondition: "Ver el archivo de audio cargado en el reproductor.",
                godotNodes: ["AudioStreamPlayer"]
              },
              {
                id: "26-06",
                title: "Paso 26.6: Activar Autoplay y Bucle Loop Mode: Forward",
                youtubeId: GODOT_VIDEO_11_ID,
                startTime: 250,
                endTime: 354,
                duration: "1.5 min",
                description: "Activa Autoplay = true y configura Loop Mode = Forward en el recurso de audio para que no se detenga la música.",
                actionObjective: "Activar la reproducción automática en bucle continuo.",
                victoryCondition: "Comprobación de la Misión 26: Al ejecutar el nivel, la música comienza sola y continúa en bucle sin cortarse.",
                godotNodes: ["Autoplay & Loop Mode"],
                badgeUnlock: "b_bgm_master",
                optionalChallenge: "Reto creativo opcional: elegir una música que cambie la emoción del nivel: relajada, épica, arcade o misteriosa."
              },
            ]
          },
          {
            id: "m27",
            title: "🔊 Misión 27 — Añade sonidos a las acciones del jugador",
            submodules: [
              {
                id: "27-01",
                title: "Paso 27.1: Crear Escena AudioManager y CoinAudio para Sonidos Persistentes",
                youtubeId: GODOT_VIDEO_11_ID,
                startTime: 354,
                endTime: 458,
                duration: "1.5 min",
                description: "Crea una escena AudioManager.tscn con reproductores de audio independientes para evitar que el sonido de moneda se corte al destruirse la moneda.",
                actionObjective: "Crear la escena AudioManager con el nodo CoinAudio.",
                victoryCondition: "Tener el gestor de efectos de sonido independiente.",
                godotNodes: ["AudioManager Scene"]
              },
              {
                id: "27-02",
                title: "Paso 27.2: Referenciar CoinAudio en AudioManager.gd con @onready var",
                youtubeId: GODOT_VIDEO_11_ID,
                startTime: 458,
                endTime: 531,
                duration: "1 min",
                description: "Escribe @onready var coin_sfx = $CoinAudio dentro del script audio_manager.gd.",
                actionObjective: "Declarar las referencias a los efectores de sonido en AudioManager.",
                victoryCondition: "Tener la referencia del sonido lista para sonar.",
                godotNodes: ["@onready var $CoinAudio"]
              },
              {
                id: "27-03",
                title: "Paso 27.3: Registrar AudioManager como Singleton mediante Autoload",
                youtubeId: GODOT_VIDEO_11_ID,
                startTime: 531,
                endTime: 558,
                duration: "1 min",
                description: "Registra audio_manager.gd en Proyecto -> Autoload para poder reproducir efectos desde cualquier escena con un solo comando.",
                actionObjective: "Añadir AudioManager a la lista de Autoloads.",
                victoryCondition: "Tener el AudioManager disponible globalmente.",
                godotNodes: ["Autoload AudioManager"]
              },
              {
                id: "27-04",
                title: "Paso 27.4: Reproducir Sonido de Moneda desde Coin.gd",
                youtubeId: GODOT_VIDEO_11_ID,
                startTime: 558,
                endTime: 620,
                duration: "1 min",
                description: "Escribe AudioManager.coin_sfx.play() dentro de coin.gd al ser recogida la moneda.",
                actionObjective: "Llamar al reproductor de sonido al tocar una moneda.",
                victoryCondition: "Escuchar el sonido brillante de moneda al recogerla en vivo.",
                godotNodes: ["AudioManager.coin_sfx.play()"]
              },
              {
                id: "27-05",
                title: "Paso 27.5: Añadir JumpAudio al Jugador y Reproducirlo al Saltar",
                youtubeId: GODOT_VIDEO_11_ID,
                startTime: 620,
                endTime: 733,
                duration: "1.5 min",
                description: "Añade un nodo AudioStreamPlayer llamado JumpAudio dentro de Player.tscn y actívalo con $JumpAudio.play() al presionar Salto.",
                actionObjective: "Activar el efecto de sonido de salto al impulsarse.",
                victoryCondition: "Escuchar el efecto de salto en vivo.",
                godotNodes: ["$JumpAudio.play()"]
              },
              {
                id: "27-06",
                title: "Paso 27.6: Añadir Pasos: WalkAudio, stream_paused y Estados de Movimiento",
                youtubeId: GODOT_VIDEO_11_ID,
                startTime: 733,
                endTime: 975,
                duration: "3 min",
                description: "Controla las pisadas activando $WalkAudio.stream_paused = false únicamente mientras el personaje camina sobre el suelo.",
                actionObjective: "Pausar o reanudar el sonido de pisadas según el movimiento y el contacto con el suelo.",
                victoryCondition: "Escuchar pisadas rítmicas al correr que se detienen al frenar o saltar.",
                godotNodes: ["$WalkAudio.stream_paused"]
              },
              {
                id: "27-07",
                title: "Paso 27.7: Resumen de Sistemas de Sonido",
                youtubeId: GODOT_VIDEO_11_ID,
                startTime: 975,
                endTime: 1020,
                duration: "1 min",
                description: "Realiza una prueba completa de sonido: escucha la música de fondo, corre, salta y recoge monedas disfrutando de la atmósfera viva.",
                actionObjective: "Realizar una prueba general de la capa de audio.",
                victoryCondition: "Comprobación de la Misión 27: Al jugar se oye música en bucle y cada acción (moneda, salto, pisada) genera su sonido en tiempo real.",
                godotNodes: ["Full Audio Test"],
                badgeUnlock: "b_sfx_hero",
                optionalChallenge: "Reto de depuración: si un sonido no se oye, revisar el orden de 5 comprobaciones (importación, nombre exacto, Autoload, .play y stream_paused)."
              },
            ]
          }
        ]
      },
      {
        id: "u12",
        title: "Unidad 12 — Exporta y comparte tu primer juego",
        missions: [
          {
            id: "m28",
            title: "👑 Misión 28 — Convierte tu juego en algo que otra persona pueda jugar",
            submodules: [
              {
                id: "28-01",
                title: "Paso 28.1: Introducción: Exportar un Juego de Godot como .exe",
                youtubeId: GODOT_VIDEO_12_ID,
                startTime: 0,
                endTime: 72,
                duration: "1 min",
                description: "Entender el objetivo final: empaquetar todo tu juego en un archivo ejecutable independiente que funcione en cualquier PC.",
                actionObjective: "Comprender la diferencia entre editar en Godot y publicar un juego final.",
                victoryCondition: "Avanzar a la instalación de plantillas.",
                godotNodes: ["Export Overview"]
              },
              {
                id: "28-02",
                title: "Paso 28.2: Instalar Plantillas de Exportación",
                youtubeId: GODOT_VIDEO_12_ID,
                startTime: 72,
                endTime: 132,
                duration: "1 min",
                description: "Abre Editor -> Gestionar Plantillas de Exportación y descarga las plantillas de Godot 4 oficiales.",
                actionObjective: "Instalar las export templates recomendadas.",
                victoryCondition: "Ver las plantillas de exportación instaladas correctamente.",
                godotNodes: ["Export Templates Manager"]
              },
              {
                id: "28-03",
                title: "Paso 28.3: Añadir Plataforma Windows Desktop desde Project > Export",
                youtubeId: GODOT_VIDEO_12_ID,
                startTime: 132,
                endTime: 150,
                duration: "1 min",
                description: "Abre Proyecto -> Exportar, haz clic en Añadir y selecciona 'Windows Desktop'.",
                actionObjective: "Crear el perfil de exportación para Windows Desktop.",
                victoryCondition: "Ver el perfil de Windows activo en la ventana de exportación.",
                godotNodes: ["Windows Desktop Profile"]
              },
              {
                id: "28-04",
                title: "Paso 28.4: Elegir Versión, Nombre de Producto y Detalles de Publicación",
                youtubeId: GODOT_VIDEO_12_ID,
                startTime: 150,
                endTime: 171,
                duration: "1 min",
                description: "Escribe el nombre oficial de tu juego (ej: 'El_Viaje_de_Unai_v1.0') y configura los metadatos de autor.",
                actionObjective: "Rellenar el título oficial de tu creación y asignar versión 1.0.",
                victoryCondition: "Tener la ficha técnica de tu videojuego completada.",
                godotNodes: ["Product Name & Version 1.0"]
              },
              {
                id: "28-05",
                title: "Paso 28.5: Activar Embed PCK para Generar un Único .exe",
                youtubeId: GODOT_VIDEO_12_ID,
                startTime: 171,
                endTime: 197,
                duration: "1 min",
                description: "Activa la casilla 'Embed PCK' en las opciones para empaquetar todos los modelos, audios y escenas en un solo ejecutable limpio.",
                actionObjective: "Activar Embed PCK para generar un único archivo .exe sin carpetas sueltas.",
                victoryCondition: "Asegurar un ejecutable único y fácil de enviar a tus amigos.",
                godotNodes: ["Embed PCK Binary"]
              },
              {
                id: "28-06",
                title: "Paso 28.6: Ajustar Debug y usar Export Project",
                youtubeId: GODOT_VIDEO_12_ID,
                startTime: 197,
                endTime: 263,
                duration: "1 min",
                description: "Crea una carpeta llamada 'builds' o 'publicacion', desactiva 'Export With Debug' y pulsa 'Exportar Proyecto'.",
                actionObjective: "Generar el archivo .exe ejecutable final en tu carpeta de publicación.",
                victoryCondition: "Ver el archivo ejecutable guardado en tu disco duro.",
                godotNodes: ["Export Project Button"]
              },
              {
                id: "28-07",
                title: "Paso 28.7: Abrir y Probar el .exe fuera de Godot",
                youtubeId: GODOT_VIDEO_12_ID,
                startTime: 263,
                endTime: 295,
                duration: "1 min",
                description: "Cierra el editor de Godot 4, ve a tu carpeta de publicación y haz doble clic sobre tu ejecutable .exe para jugar como un usuario final.",
                actionObjective: "Abrir tu juego recién exportado directamente desde Windows.",
                victoryCondition: "Ver tu juego funcionar a pantalla completa sin depender de Godot.",
                godotNodes: ["Standalone Playtest"]
              },
              {
                id: "28-08",
                title: "Paso 28.8: Resolver Problemas de Permisos y Ejecución",
                youtubeId: GODOT_VIDEO_12_ID,
                startTime: 295,
                endTime: 336,
                duration: "1 min",
                description: "Conoce las soluciones si Windows SmartScreen o el antivirus muestra un aviso: hacer clic en 'Más información' -> 'Ejecutar de todos modos'.",
                actionObjective: "Aprender a superar los avisos de seguridad de ejecutables propios.",
                victoryCondition: "Saber abrir tu ejecutable en cualquier ordenador.",
                godotNodes: ["Security Permissions"]
              },
              {
                id: "28-09",
                title: "Paso 28.9: Cierre de la Serie y Celebración de la Versión 1.0",
                youtubeId: GODOT_VIDEO_12_ID,
                startTime: 336,
                endTime: 390,
                duration: "1 min",
                description: "¡ENHORABUENA DIRECTOR! Has completado el Mundo 1 de Godot 4 desde cero y has creado un juego ejecutable completo.",
                actionObjective: "Publicar tu tarjeta de presentación oficial v1.0 en la Zona de Entregable del Laboratorio.",
                victoryCondition: "Comprobación completa del Mundo 1: Tienes tu ejecutable listo, tu diploma de Director de Videojuegos y tu Rango Máximo alcanzado.",
                godotNodes: ["Course Completed 🎉"],
                badgeUnlock: "b_game_director",
                optionalChallenge: "Reto de presentación: preparar la tarjeta oficial de tu juego en NEXUS GAME LAB con: Nombre del juego, Versión 1.0, Foto del mapa, 3 mecánicas que incluye y tu firma: 'He creado este juego'."
              },
            ]
          }
        ]
      }
    ]
  },
  {
    id: "w2",
    title: "MUNDO 2 — Laboratorio de Programación GDScript",
    units: [
      {
        id: "u2_1",
        title: "Unidad 1 — Mi primer sistema de datos en GDScript",
        missions: [
          {
            id: "mP1",
            title: "🧪 Misión P1 — Crea tu laboratorio de código (DataLab)",
            submodules: [
              {
                id: "P1-01",
                title: "Paso P1.1: Introducción al curso de programación y a GDScript",
                youtubeId: GDSCRIPT_VIDEO_1_ID,
                startTime: 0,
                endTime: 66,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Entender que ahora aprenderás herramientas para inventar tus propias mecánicas de juego en GDScript.",
                actionObjective: "Comprender la utilidad del laboratorio de experimentos DataLab.",
                victoryCondition: "Avanzar a la creación de data_lab.tscn.",
                godotNodes: ["GDScript Overview"]
              },
              {
                id: "P1-02",
                title: "Paso P1.2: Crear y guardar una escena con nodo raíz Node",
                youtubeId: GDSCRIPT_VIDEO_1_ID,
                startTime: 66,
                endTime: 92,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Crea una escena limpia con el nodo raíz básico Node y guárdala como data_lab.tscn en la carpeta world_2/.",
                actionObjective: "Crear data_lab.tscn dentro de la carpeta world_2/.",
                victoryCondition: "Ver el archivo data_lab.tscn guardado en tu proyecto.",
                godotNodes: ["Node -> data_lab.tscn"]
              },
              {
                id: "P1-03",
                title: "Paso P1.3: Crear my_first_script.gd (data_lab.gd)",
                youtubeId: GDSCRIPT_VIDEO_1_ID,
                startTime: 92,
                endTime: 129,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Adjunta un nuevo script llamado data_lab.gd al nodo raíz de la escena de experimentos.",
                actionObjective: "Crear y adjuntar data_lab.gd al nodo raíz Node.",
                victoryCondition: "Ver el editor de código de GDScript listo en pantalla.",
                godotNodes: ["Attach Script -> data_lab.gd"]
              },
              {
                id: "P1-04",
                title: "Paso P1.4: Estructura: extends Node, comentarios, _ready() y _process(delta)",
                youtubeId: GDSCRIPT_VIDEO_1_ID,
                startTime: 129,
                endTime: 205,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Identifica qué líneas preparan el script (extends Node), cuáles son comentarios (#) y qué diferencia a _ready() de _process(delta).",
                actionObjective: "Reconocer las funciones principales del ciclo de vida en GDScript.",
                victoryCondition: "Entender dónde escribir las instrucciones de inicio.",
                godotNodes: ["extends Node", "func _ready()"]
              },
              {
                id: "P1-05",
                title: "Paso P1.5: Escribir print('DataLab conectado')",
                youtubeId: GDSCRIPT_VIDEO_1_ID,
                startTime: 205,
                endTime: 232,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Escribe la instrucción print('DataLab conectado') dentro de la función _ready().",
                actionObjective: "Escribir tu primera instrucción de salida personalizada por consola.",
                victoryCondition: "Tener la instrucción print() lista para ejecutar.",
                godotNodes: ["print('DataLab conectado')"]
              },
              {
                id: "P1-06",
                title: "Paso P1.6: Ejecutar y usar Output / consola",
                youtubeId: GDSCRIPT_VIDEO_1_ID,
                startTime: 232,
                endTime: 298,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Ejecuta la escena con F6 y localiza la pestaña Salida (Output) en el panel inferior de Godot 4.",
                actionObjective: "Ejecutar data_lab.tscn y verificar el mensaje en la consola de salida.",
                victoryCondition: "Ver impreso el mensaje 'DataLab conectado' en la consola.",
                godotNodes: ["Output Panel"]
              },
              {
                id: "P1-07",
                title: "Paso P1.7: Indentación y mayúsculas/minúsculas",
                youtubeId: GDSCRIPT_VIDEO_1_ID,
                startTime: 298,
                endTime: 444,
                duration: "2.5 min",
                categoryTag: "Esencial",
                description: "Aprende la regla de la sangría (Tabulador) y la sensibilidad a mayúsculas/minúsculas corrigiendo un error de sintaxis.",
                actionObjective: "Corregir un error provocado de indentación o de nombre de variable.",
                victoryCondition: "Comprobación de la Misión P1: Tu script data_lab.gd ejecuta sin errores y la consola muestra tus mensajes de bienvenida.",
                godotNodes: ["Syntax Debugger"],
                badgeUnlock: "b_datalab_ready",
                optionalChallenge: "Reto creativo: cambiar el mensaje de inicio por una frase que diría el ordenador de una nave, un laboratorio secreto o tu propio estudio de videojuegos."
              }
            ]
          },
          {
            id: "mP2",
            title: "📊 Misión P2 — Guarda los datos de tu personaje",
            submodules: [
              {
                id: "P2-01",
                title: "Paso P2.1: Variables enteras int y tipado dinámico",
                youtubeId: GDSCRIPT_VIDEO_1_ID,
                startTime: 444,
                endTime: 518,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Declara números enteros sin decimales como var health = 100 o var coins = 0 en la parte superior del script.",
                actionObjective: "Crear variables de tipo entero int para vida o monedas.",
                victoryCondition: "Ver tus variables enteras declaradas en GDScript.",
                godotNodes: ["var health = 100"]
              },
              {
                id: "P2-02",
                title: "Paso P2.2: Formatear enteros con %d",
                youtubeId: GDSCRIPT_VIDEO_1_ID,
                startTime: 518,
                endTime: 567,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Muestra el valor de una variable entera insertándola en un texto con print('Vida: %d' % health).",
                actionObjective: "Formatear números enteros en texto usando %d.",
                victoryCondition: "Ver impreso 'Vida: 100' en la consola.",
                godotNodes: ["String Formatting %d"]
              },
              {
                id: "P2-03",
                title: "Paso P2.3: Variables de texto String y %s",
                youtubeId: GDSCRIPT_VIDEO_1_ID,
                startTime: 567,
                endTime: 677,
                duration: "1.5 min",
                categoryTag: "Esencial",
                description: "Crea var player_name = 'Unai' y muéstralo en consola usando el comodín de texto %s.",
                actionObjective: "Crear variables de tipo texto String e imprimirlas con %s.",
                victoryCondition: "Ver impreso el nombre de tu personaje en pantalla.",
                godotNodes: ["var player_name = '...'"]
              },
              {
                id: "P2-04",
                title: "Paso P2.4: Variables decimales float",
                youtubeId: GDSCRIPT_VIDEO_1_ID,
                startTime: 677,
                endTime: 729,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Declara números con decimales como var speed = 4.5 o var jump_height = 8.2.",
                actionObjective: "Crear variables decimales de tipo float.",
                victoryCondition: "Manejar valores numéricos con coma flotante.",
                godotNodes: ["var speed = 4.5"]
              },
              {
                id: "P2-05",
                title: "Paso P2.5: Variables lógicas bool",
                youtubeId: GDSCRIPT_VIDEO_1_ID,
                startTime: 729,
                endTime: 763,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Crea variables de verdadero o falso (true / false) como var has_key = false o var is_jumping = false.",
                actionObjective: "Crear variables de estado lógico bool.",
                victoryCondition: "Representar respuestas de Sí/No en código.",
                godotNodes: ["var has_key = false"]
              },
              {
                id: "P2-06",
                title: "Paso P2.6: Resumen e Informe Final de Datos (int, String, float y bool)",
                youtubeId: GDSCRIPT_VIDEO_1_ID,
                startTime: 763,
                endTime: 830,
                duration: "1.5 min",
                categoryTag: "Esencial",
                description: "Imprime una ficha técnica completa de tu héroe con Jugador (%s), Vida (%d), Velocidad (%.1f) y ¿Tiene llave? (%s).",
                actionObjective: "Construir el informe completo de tu personaje en la consola al arrancar la escena.",
                victoryCondition: "Comprobación de la Misión P2: La consola imprime la ficha completa con los 4 tipos de datos al presionar F6.",
                godotNodes: ["DataLab Full Summary"],
                badgeUnlock: "b_data_architect",
                optionalChallenge: "Reto creativo opcional: inventar un quinto dato para tu personaje (ej: energía, poder especial, planeta de origen) y justificar qué tipo de variable necesita."
              }
            ]
          }
        ]
      },
      {
        id: "u2_2",
        title: "Unidad 2 — Crea un sistema de energía y puntuación",
        missions: [
          {
            id: "mP3",
            title: "⚡ Misión P3 — Haz que tus datos cambien",
            submodules: [
              {
                id: "P3-01",
                title: "Paso P3.1: Introducción: operaciones y variables",
                youtubeId: GDSCRIPT_VIDEO_2_ID,
                startTime: 0,
                endTime: 29,
                duration: "0.5 min",
                categoryTag: "Esencial",
                description: "Entender que un videojuego cambia datos constantemente mientras se juega.",
                actionObjective: "Reconocer cómo var permite modificar datos en tiempo de ejecución.",
                victoryCondition: "Avanzar a la reasignación de valores en GDScript.",
                godotNodes: ["var energy = 100"]
              },
              {
                id: "P3-02",
                title: "Paso P3.2: Reasignar un valor y orden de ejecución",
                youtubeId: GDSCRIPT_VIDEO_2_ID,
                startTime: 29,
                endTime: 120,
                duration: "1.5 min",
                categoryTag: "Esencial",
                description: "Crea var energy = 100, cámbialo a 80 y muestra ambos estados por consola observando el orden paso a paso.",
                actionObjective: "Reasignar una variable y verificar la ejecución secuencial en _ready().",
                victoryCondition: "Ver impresos los dos estados de energía en la consola.",
                godotNodes: ["Reassignment -> energy = 80"]
              },
              {
                id: "P3-03",
                title: "Paso P3.3: Operaciones: suma, resta, multiplicación y división",
                youtubeId: GDSCRIPT_VIDEO_2_ID,
                startTime: 120,
                endTime: 153,
                duration: "0.5 min",
                categoryTag: "Esencial",
                description: "Prueba qué ocurre si el personaje gana (+), pierde (-), duplica (*) o divide (/) su energía.",
                actionObjective: "Utilizar los 4 operadores aritméticos básicos (+, -, *, /).",
                victoryCondition: "Ver los resultados matemáticos calculados por GDScript.",
                godotNodes: ["Arithmetic +, -, *, /"]
              },
              {
                id: "P3-04",
                title: "Paso P3.4: Operaciones entre varias variables",
                youtubeId: GDSCRIPT_VIDEO_2_ID,
                startTime: 153,
                endTime: 215,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Combina variables creando base_points, bonus_points y total_points.",
                actionObjective: "Calcular el resultado final sumando dos variables numéricas.",
                victoryCondition: "Obtener la puntuación total combinada en la consola.",
                godotNodes: ["var total_points = base + bonus"]
              },
              {
                id: "P3-05",
                title: "Paso P3.5: Repaso de operadores aritméticos",
                youtubeId: GDSCRIPT_VIDEO_2_ID,
                startTime: 215,
                endTime: 263,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Relaciona cada operador aritmético con una mecánica de juego (ej: curar, recibir daño, multiplicador de combo).",
                actionObjective: "Asociar operaciones matemáticas a mecánicas jugables reales.",
                victoryCondition: "Comprender la utilidad técnica de cada operador.",
                godotNodes: ["Game Logic Operators"]
              },
              {
                id: "P3-06",
                title: "Paso P3.6: Asignación compuesta: +=, -=, *= y /=",
                youtubeId: GDSCRIPT_VIDEO_2_ID,
                startTime: 263,
                endTime: 326,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Simplifica acumulación de puntos o pérdida de vida creando una función de prueba con score += 10.",
                actionObjective: "Usar operadores de asignación compuesta (+=, -=, *=, /=).",
                victoryCondition: "Incrementar y decrementar valores con sintaxis profesional.",
                godotNodes: ["Compound Assignment += 10"]
              },
              {
                id: "P3-07",
                title: "Paso P3.7: Cambiar una variable de texto",
                youtubeId: GDSCRIPT_VIDEO_2_ID,
                startTime: 326,
                endTime: 396,
                duration: "1.5 min",
                categoryTag: "Esencial",
                description: "Cambia dinámicamente la variable status entre 'Explorando', 'En peligro' y 'Victoria'.",
                actionObjective: "Actualizar la variable de estado de texto según el progreso.",
                victoryCondition: "Comprobación de la Misión P3: La consola muestra puntuación acumulada y estado actualizado.",
                godotNodes: ["status = 'Victoria'"],
                badgeUnlock: "b_dynamic_data",
                optionalChallenge: "Reto creativo: inventar un multiplicador de puntos y decidir qué acción del jugador debería activarlo en tu juego."
              }
            ]
          },
          {
            id: "mP4",
            title: "🛠️ Misión P4 — Haz que tu sistema sea fácil de ajustar",
            submodules: [
              {
                id: "P4-01",
                title: "Paso P4.1: Constantes con const",
                youtubeId: GDSCRIPT_VIDEO_2_ID,
                startTime: 396,
                endTime: 443,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Define reglas fijas que nunca cambian usando const MAX_ENERGY = 100.",
                actionObjective: "Declarar una constante inmutable en la parte superior del script.",
                victoryCondition: "Probar que GDScript no permite modificar una constante.",
                godotNodes: ["const MAX_ENERGY = 100"]
              },
              {
                id: "P4-02",
                title: "Paso P4.2: Valores editables con @export",
                youtubeId: GDSCRIPT_VIDEO_2_ID,
                startTime: 443,
                endTime: 538,
                duration: "1.5 min",
                categoryTag: "Esencial",
                description: "Expón @export var starting_energy = 100 para modificarlo directamente desde el Inspector de Godot 4.",
                actionObjective: "Usar la anotación @export para ajustar variables desde el editor sin tocar código.",
                victoryCondition: "Cambiar valores en el Inspector y ver el resultado al presionar F6.",
                godotNodes: ["@export var starting_energy = 100"]
              },
              {
                id: "P4-03",
                title: "Paso P4.3: Comentarios con # y nombres claros",
                youtubeId: GDSCRIPT_VIDEO_2_ID,
                startTime: 538,
                endTime: 625,
                duration: "1.5 min",
                categoryTag: "Esencial",
                description: "Escribe comentarios claros (#) explicando la energía, puntos y bonus para tu futuro yo.",
                actionObjective: "Documentar la intención del código con comentarios descriptivos.",
                victoryCondition: "Tener un script limpio, legible y auto-explicativo.",
                godotNodes: ["# Comentarios explicativos"]
              },
              {
                id: "P4-04",
                title: "Paso P4.4: Documentación interna y online (Ctrl + Clic)",
                youtubeId: GDSCRIPT_VIDEO_2_ID,
                startTime: 625,
                endTime: 718,
                duration: "1.5 min",
                categoryTag: "Biblioteca",
                description: "Consulta propiedades y métodos oficiales de Godot 4 manteniendo presionado Ctrl + Clic sobre cualquier nodo o función.",
                actionObjective: "Aprender a buscar ayuda interna directamente en el editor de Godot.",
                victoryCondition: "Navegar por la documentación integrada de Godot 4.",
                godotNodes: ["Ctrl + Clic Help Documentation"]
              },
              {
                id: "P4-05",
                title: "Paso P4.5: Resumen del capítulo e Integración final de DataLab",
                youtubeId: GDSCRIPT_VIDEO_2_ID,
                startTime: 718,
                endTime: 780,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Revisa qué valores cambian (var), cuáles son reglas fijas (const) y cuáles se ajustan desde el Inspector (@export).",
                actionObjective: "Verificar el script completo de DataLab con const MAX_ENERGY, score, @export starting_energy y status.",
                victoryCondition: "Comprobación de la Misión P4: Explicar la diferencia entre var, const y @export con tu laboratorio funcionando.",
                godotNodes: ["DataLab Systems Complete"],
                badgeUnlock: "b_systems_designer"
              }
            ]
          }
        ]
      },
      {
        id: "u2_3",
        title: "Unidad 3 — Crea reglas, decisiones y estados de juego",
        missions: [
          {
            id: "mP5",
            title: "🔀 Misión P5 — Enseña al juego a decidir (RuleLab)",
            submodules: [
              {
                id: "P5-01",
                title: "Paso P5.1: Introducción: lógica y toma de decisiones",
                youtubeId: GDSCRIPT_VIDEO_3_ID,
                startTime: 0,
                endTime: 20,
                duration: "0.5 min",
                categoryTag: "Esencial",
                description: "Entender que las reglas condicionales hacen que el juego responda de forma diferente según cada situación.",
                actionObjective: "Comprender la necesidad de tomar decisiones lógicas en GDScript.",
                victoryCondition: "Avanzar a la estructura de control if.",
                godotNodes: ["Logic Overview"]
              },
              {
                id: "P5-02",
                title: "Paso P5.2: Estructura if, elif y else",
                youtubeId: GDSCRIPT_VIDEO_3_ID,
                startTime: 20,
                endTime: 51,
                duration: "0.5 min",
                categoryTag: "Esencial",
                description: "Construye tu primera regla: si el jugador tiene una llave (has_key == true), la puerta puede abrirse.",
                actionObjective: "Escribir la estructura básica de toma de decisiones.",
                victoryCondition: "Entender la evaluación lógica de una puerta.",
                godotNodes: ["if has_key:"]
              },
              {
                id: "P5-03",
                title: "Paso P5.3: Primer if, dos puntos e indentación",
                youtubeId: GDSCRIPT_VIDEO_3_ID,
                startTime: 51,
                endTime: 98,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Aprende la importancia de los dos puntos (:) al final de la condición y la sangría del bloque de instrucciones.",
                actionObjective: "Escribir un condicional con sintaxis e indentación perfecta.",
                victoryCondition: "Ejecutar la condición sin errores de sintaxis.",
                godotNodes: ["Colon & Tab Syntax"]
              },
              {
                id: "P5-04",
                title: "Paso P5.4: Comparaciones: <, <=, >, >=, == y !=",
                youtubeId: GDSCRIPT_VIDEO_3_ID,
                startTime: 98,
                endTime: 130,
                duration: "0.5 min",
                categoryTag: "Esencial",
                description: "Utiliza los operadores de comparación para evaluar vida (health > 0), puntos o número de llaves.",
                actionObjective: "Comparar variables numéricas y estados de igualdad o diferencia.",
                victoryCondition: "Ver los resultados relacionales en la consola.",
                godotNodes: ["Comparison Operators"]
              },
              {
                id: "P5-05",
                title: "Paso P5.5: Usar elif para varias posibilidades",
                youtubeId: GDSCRIPT_VIDEO_3_ID,
                startTime: 130,
                endTime: 179,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Crea tres estados distintos de salud: vida alta (health > 70), vida baja (health > 0) y sin vida.",
                actionObjective: "Evaluar múltiples alternativas con elif.",
                victoryCondition: "Probar el comportamiento del script al cambiar el valor de vida.",
                godotNodes: ["elif health > 0:"]
              },
              {
                id: "P5-06",
                title: "Paso P5.6: Usar else como respuesta final",
                youtubeId: GDSCRIPT_VIDEO_3_ID,
                startTime: 179,
                endTime: 238,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Define el bloque else como respuesta por defecto cuando ninguna de las condiciones anteriores se cumple.",
                actionObjective: "Completar el flujo de decisión con la alternativa final else.",
                victoryCondition: "Comprobación de la Misión P5: La regla de la puerta evalúa si la puerta está abierta o bloqueada.",
                godotNodes: ["else: puerta bloqueada"],
                badgeUnlock: "b_if_else_master",
                optionalChallenge: "Reto creativo: añadir una segunda puerta que requiera un número mínimo de monedas (ej: coins >= 5)."
              }
            ]
          },
          {
            id: "mP6",
            title: "📜 Misión P6 — Combina reglas y reacciona al jugador",
            submodules: [
              {
                id: "P6-01",
                title: "Paso P6.1: Condicionales anidados",
                youtubeId: GDSCRIPT_VIDEO_3_ID,
                startTime: 238,
                endTime: 294,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Crea reglas dentro de otras reglas: abrir la puerta solo si tiene llave Y ADEMÁS energía suficiente.",
                actionObjective: "Escribir condicionales anidados dentro del mismo bloque.",
                victoryCondition: "Validar decisiones jerárquicas en GDScript.",
                godotNodes: ["Nested if Statements"]
              },
              {
                id: "P6-02",
                title: "Paso P6.2: Operadores lógicos and, or y not",
                youtubeId: GDSCRIPT_VIDEO_3_ID,
                startTime: 294,
                endTime: 385,
                duration: "1.5 min",
                categoryTag: "Esencial",
                description: "Une varias condiciones en una sola línea elegante usando and (ambas verdaderas), or (al menos una) o not (inversión).",
                actionObjective: "Simplificar reglas compuestas con operadores lógicos.",
                victoryCondition: "Probar combinaciones lógicas complejas.",
                godotNodes: ["Logical and, or, not"]
              },
              {
                id: "P6-03",
                title: "Paso P6.3: Expresiones que devuelven true o false",
                youtubeId: GDSCRIPT_VIDEO_3_ID,
                startTime: 385,
                endTime: 402,
                duration: "0.5 min",
                categoryTag: "Esencial",
                description: "Identifica preguntas de Sí/No directamente dentro del código de tu propio juego.",
                actionObjective: "Evaluar expresiones booleanas dinámicas.",
                victoryCondition: "Entender el valor interno de una condición.",
                godotNodes: ["Boolean Expressions"]
              },
              {
                id: "P6-04",
                title: "Paso P6.4: Revisar reglas constantemente en _physics_process(delta)",
                youtubeId: GDSCRIPT_VIDEO_3_ID,
                startTime: 402,
                endTime: 412,
                duration: "0.5 min",
                categoryTag: "Esencial",
                description: "Comprende por qué ciertas reglas de peligro o victoria deben comprobarse continuamente fotograma a fotograma.",
                actionObjective: "Mover reglas en tiempo real a la función _physics_process(delta).",
                victoryCondition: "Ver el control constante de reglas en ejecución.",
                godotNodes: ["func _physics_process(delta)"]
              },
              {
                id: "P6-05",
                title: "Paso P6.5: Detectar acciones con Input.is_action_pressed()",
                youtubeId: GDSCRIPT_VIDEO_3_ID,
                startTime: 412,
                endTime: 478,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Reacciona cuando el jugador presione una tecla usando Input.is_action_pressed('ui_accept') para intentar abrir la puerta.",
                actionObjective: "Conectar reglas lógicas a pulsaciones de teclas reales.",
                victoryCondition: "Ver responder a la consola al presionar la barra espaciadora o Enter.",
                godotNodes: ["Input.is_action_pressed()"]
              },
              {
                id: "P6-06",
                title: "Paso P6.6: Resumen de condicionales e Informe de Estados",
                youtubeId: GDSCRIPT_VIDEO_3_ID,
                startTime: 478,
                endTime: 540,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Muestra un mensaje de consola final: 'Puerta bloqueada', 'Puerta abierta', 'Peligro: poca energía' o 'Victoria'.",
                actionObjective: "Construir un panel completo de toma de decisiones en RuleLab.",
                victoryCondition: "Comprobación de la Misión P6: Predecir el resultado del sistema antes de ejecutar F6.",
                godotNodes: ["RuleLab Complete Summary"],
                badgeUnlock: "b_rules_designer"
              }
            ]
          }
        ]
      },
      {
        id: "u2_4",
        title: "Unidad 4 — Crea listas, bucles y estados",
        missions: [
          {
            id: "mP7",
            title: "📦 Misión P7 — Organiza una colección de cosas (CollectionLab)",
            submodules: [
              {
                id: "P7-01",
                title: "Paso P7.1: Introducción: bucles, match y Arrays",
                youtubeId: GDSCRIPT_VIDEO_4_ID,
                startTime: 0,
                endTime: 28,
                duration: "0.5 min",
                categoryTag: "Esencial",
                description: "Entender que un juego puede guardar múltiples objetos, enemigos o ítems dentro de una misma lista organizada.",
                actionObjective: "Comprender la utilidad de las colecciones de datos.",
                victoryCondition: "Avanzar a los bucles de repetición.",
                godotNodes: ["Collection Overview"]
              },
              {
                id: "P7-02",
                title: "Paso P7.2: Bucle while",
                youtubeId: GDSCRIPT_VIDEO_4_ID,
                startTime: 28,
                endTime: 95,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Crea un contador de pruebas con un bucle while que se repita de forma controlada hasta alcanzar un límite pequeño.",
                actionObjective: "Escribir una estructura de repetición while.",
                victoryCondition: "Ver el contador incrementarse por consola.",
                godotNodes: ["while count < 5:"]
              },
              {
                id: "P7-03",
                title: "Paso P7.3: Peligro de bucles infinitos (Condición de salida)",
                youtubeId: GDSCRIPT_VIDEO_4_ID,
                startTime: 95,
                endTime: 157,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "⚠️ ADVERTENCIA: Un bucle debe tener siempre una forma de terminar. Aprende a evitar que un bucle infinito congele Godot.",
                actionObjective: "Asegurar que la condición de salida incremente en cada vuelta (count += 1).",
                victoryCondition: "Garantizar la terminación segura del bucle.",
                godotNodes: ["Loop Safety Check"]
              },
              {
                id: "P7-04",
                title: "Paso P7.4: Crear un Array con []",
                youtubeId: GDSCRIPT_VIDEO_4_ID,
                startTime: 265,
                endTime: 319,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Crea tu primera lista de objetos usando corchetes: var inventory = ['Llave', 'Cristal', 'Mapa'].",
                actionObjective: "Declarar e inicializar una variable de tipo Array [].",
                victoryCondition: "Ver la lista de objetos almacenada en memoria.",
                godotNodes: ["var inventory = [...]"]
              },
              {
                id: "P7-05",
                title: "Paso P7.5: Índices: el primer elemento ocupa la posición 0",
                youtubeId: GDSCRIPT_VIDEO_4_ID,
                startTime: 319,
                endTime: 408,
                duration: "1.5 min",
                categoryTag: "Esencial",
                description: "Accede individualmente a los objetos imprimiendo inventory[0] (primer elemento) e inventory[2].",
                actionObjective: "Entender la indexación en base cero de las listas en programación.",
                victoryCondition: "Comprobación de la Misión P7: Explicar por qué el primer elemento ocupa la posición 0.",
                godotNodes: ["Array Indexing [0]"],
                badgeUnlock: "b_array_master",
                optionalChallenge: "Reto creativo: crear una lista con tres poderes, tres enemigos o tres planetas para tu futuro videojuego."
              }
            ]
          },
          {
            id: "mP8",
            title: "🗺️ Misión P8 — Repite tareas y crea estados de juego",
            submodules: [
              {
                id: "P8-01",
                title: "Paso P8.1: match como alternativa a varios if",
                youtubeId: GDSCRIPT_VIDEO_4_ID,
                startTime: 157,
                endTime: 265,
                duration: "1.5 min",
                categoryTag: "Esencial",
                description: "Crea respuestas limpias según el estado actual usando match: EXPLORANDO ('Busca recursos'), PELIGRO ('¡Cuidado!') o VICTORIA ('Nivel completado').",
                actionObjective: "Usar la sentencia match para manejar máquinas de estados simples.",
                victoryCondition: "Ver responder al script según el estado asignado.",
                godotNodes: ["match game_state:"]
              },
              {
                id: "P8-02",
                title: "Paso P8.2: Bucle for y range()",
                youtubeId: GDSCRIPT_VIDEO_4_ID,
                startTime: 408,
                endTime: 460,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Recorre una secuencia de números del 1 al 5 automáticamente usando for i in range(1, 6).",
                actionObjective: "Escribir un bucle for seguro basado en rangos numéricos.",
                victoryCondition: "Ver los números impresos en orden secuencial.",
                godotNodes: ["for i in range(1, 6):"]
              },
              {
                id: "P8-03",
                title: "Paso P8.3: Recorrer dinámicamente un Array con .size()",
                youtubeId: GDSCRIPT_VIDEO_4_ID,
                startTime: 460,
                endTime: 540,
                duration: "1.5 min",
                categoryTag: "Esencial",
                description: "Haz que el bucle for recorra automáticamente toda tu lista sin importar cuántos elementos tenga usando inventory.size().",
                actionObjective: "Iterar dinámicamente sobre colecciones de tamaño variable.",
                victoryCondition: "Recorrer la lista completa sin escribir índices a mano.",
                godotNodes: ["inventory.size()"]
              },
              {
                id: "P8-04",
                title: "Paso P8.4: Imprimir y formatear cada elemento del Array",
                youtubeId: GDSCRIPT_VIDEO_4_ID,
                startTime: 540,
                endTime: 554,
                duration: "0.5 min",
                categoryTag: "Esencial",
                description: "Muestra por consola una lista limpia y numerada de los objetos encontrados en tu inventario.",
                actionObjective: "Formatear la salida de cada elemento del Array.",
                victoryCondition: "Ver la lista de objetos formateada como catálogo por consola.",
                godotNodes: ["Array Formatting Print"]
              },
              {
                id: "P8-05",
                title: "Paso P8.5: Resumen de bucles, Arrays y match (CollectionLab)",
                youtubeId: GDSCRIPT_VIDEO_4_ID,
                startTime: 554,
                endTime: 620,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Revisa qué partes utilizarías en tu juego: listas de inventario, bucles de recorrido o máquina de estados.",
                actionObjective: "Consolidar el proyecto CollectionLab con lista de recompensas y máquina de estados.",
                victoryCondition: "Comprobación de la Misión P8: Demostrar cuándo usar una lista, cuándo for y la seguridad de while.",
                godotNodes: ["CollectionLab Complete"],
                badgeUnlock: "b_world_organizer"
              }
            ]
          }
        ]
      },
      {
        id: "u2_5",
        title: "Unidad 5 — Crea habilidades reutilizables con funciones",
        missions: [
          {
            id: "mP9",
            title: "🎯 Misión P9 — Crea tus propias acciones (AbilityLab)",
            submodules: [
              {
                id: "P9-01",
                title: "Paso P9.1: Introducción: funciones, orden y reutilización",
                youtubeId: GDSCRIPT_VIDEO_5_ID,
                startTime: 0,
                endTime: 46,
                duration: "0.5 min",
                categoryTag: "Esencial",
                description: "Entender que una función reúne un grupo de instrucciones bajo un nombre propio reutilizable en cualquier momento.",
                actionObjective: "Comprender la filosofía de crear acciones reutilizables.",
                victoryCondition: "Avanzar a la declaración de funciones propias.",
                godotNodes: ["Functions Overview"]
              },
              {
                id: "P9-02",
                title: "Paso P9.2: Declarar y llamar una función propia",
                youtubeId: GDSCRIPT_VIDEO_5_ID,
                startTime: 46,
                endTime: 98,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Crea tu primera función func show_status() y ejecútala llamándola desde la función principal _ready().",
                actionObjective: "Declarar una función personalizada con func y ejecutarla por su nombre.",
                victoryCondition: "Ver la función ejecutarse en la consola.",
                godotNodes: ["func show_status():"]
              },
              {
                id: "P9-03",
                title: "Paso P9.3: Pasar un parámetro a una función",
                youtubeId: GDSCRIPT_VIDEO_5_ID,
                startTime: 98,
                endTime: 183,
                duration: "1.5 min",
                categoryTag: "Esencial",
                description: "Envía información a tu función creando func heal(amount) o func add_points(amount) para modificar variables.",
                actionObjective: "Usar parámetros dentro de los paréntesis de una función.",
                victoryCondition: "Probar pasar diferentes valores numéricos al llamar a la función.",
                godotNodes: ["func heal(amount):"]
              },
              {
                id: "P9-04",
                title: "Paso P9.4: Usar varios parámetros",
                youtubeId: GDSCRIPT_VIDEO_5_ID,
                startTime: 183,
                endTime: 254,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Crea una función que reciba dos datos distintos, por ejemplo func give_reward(item_name, amount).",
                actionObjective: "Declarar y enviar múltiples parámetros separados por coma.",
                victoryCondition: "Comprobación de la Misión P9: Explicar qué hace una función y qué datos recibe.",
                godotNodes: ["func give_reward(item, qty):"],
                badgeUnlock: "b_function_creator",
                optionalChallenge: "Reto creativo: inventar una habilidad propia para tu personaje (ej: curar, teletransportar, activar escudo o doble salto)."
              }
            ]
          },
          {
            id: "mP10",
            title: "✨ Misión P10 — Haz que una función te devuelva una respuesta",
            submodules: [
              {
                id: "P10-01",
                title: "Paso P10.1: Devolver un valor con return",
                youtubeId: GDSCRIPT_VIDEO_5_ID,
                startTime: 254,
                endTime: 318,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Crea funciones que calculen resultados matemáticos o de juego y devuelvan una respuesta usando la palabra clave return.",
                actionObjective: "Utilizar return para obtener un valor de salida de una función.",
                victoryCondition: "Guardar el resultado de una función en una variable externa.",
                godotNodes: ["return total_points"]
              },
              {
                id: "P10-02",
                title: "Paso P10.2: Ejemplo is_even(number) y operador %",
                youtubeId: GDSCRIPT_VIDEO_5_ID,
                startTime: 318,
                endTime: 433,
                duration: "2 min",
                categoryTag: "Esencial",
                description: "Crea una función lógica func is_even(number) usando el operador módulo (%) para verificar si un número de monedas es par o impar.",
                actionObjective: "Usar el operador módulo % para evaluar divisibilidad y devolver verdaderos/falsos.",
                victoryCondition: "Ver la función devolver true o false según la cantidad enviada.",
                godotNodes: ["number % 2 == 0"]
              },
              {
                id: "P10-03",
                title: "Paso P10.3: Ámbito de variables: locales y globales",
                youtubeId: GDSCRIPT_VIDEO_5_ID,
                startTime: 433,
                endTime: 578,
                duration: "2.5 min",
                categoryTag: "Esencial",
                description: "Entiende la diferencia entre variables globales del script (arriba) y variables locales creadas dentro de una función.",
                actionObjective: "Identificar el alcance y vida de una variable según su posición en el código.",
                victoryCondition: "Evitar errores de variable no encontrada (Out of Scope).",
                godotNodes: ["Local vs Global Scope"]
              },
              {
                id: "P10-04",
                title: "Paso P10.4: Resumen de funciones e Integración final de AbilityLab",
                youtubeId: GDSCRIPT_VIDEO_5_ID,
                startTime: 578,
                endTime: 640,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Consolida AbilityLab con funciones sin parámetros, con parámetros, con return y verificación con %.",
                actionObjective: "Demostrar la capacidad de decidir si una variable debe ser global o local.",
                victoryCondition: "Comprobación de la Misión P10: AbilityLab completo funcionando sin errores.",
                godotNodes: ["AbilityLab Complete"],
                badgeUnlock: "b_ability_builder"
              }
            ]
          }
        ]
      },
      {
        id: "u2_6",
        title: "Unidad 6 — Haz que la interfaz cambie mientras juegas",
        missions: [
          {
            id: "mP11",
            title: "🗣️ Misión P11 — Habla con tu interfaz desde el código (InterfaceLab)",
            submodules: [
              {
                id: "P11-01",
                title: "Paso P11.1: Introducción: modificar nodos en tiempo de ejecución",
                youtubeId: GDSCRIPT_VIDEO_6_ID,
                startTime: 0,
                endTime: 23,
                duration: "0.5 min",
                categoryTag: "Esencial",
                description: "Entender que un script puede cambiar objetos visibles e interfaz mientras el juego funciona.",
                actionObjective: "Comprender cómo GDScript se comunica con los elementos visuales de la escena.",
                victoryCondition: "Avanzar a la creación y manipulación de un Label.",
                godotNodes: ["Interface Overview"]
              },
              {
                id: "P11-02",
                title: "Paso P11.2: Crear y configurar un Label",
                youtubeId: GDSCRIPT_VIDEO_6_ID,
                startTime: 23,
                endTime: 101,
                duration: "1.5 min",
                categoryTag: "Esencial",
                description: "Añade un nodo Label a tu escena y dale un tamaño de texto grande con mensaje inicial.",
                actionObjective: "Crear un nodo Label y modificar sus propiedades iniciales en el Inspector.",
                victoryCondition: "Ver el texto 'Mensaje Inicial' renderizado en pantalla.",
                godotNodes: ["Label", "Control"]
              },
              {
                id: "P11-03",
                title: "Paso P11.3: Acceder con $Label y cambiar .text",
                youtubeId: GDSCRIPT_VIDEO_6_ID,
                startTime: 101,
                endTime: 171,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Accede directamente al texto usando el atajo $Label.text = '¡Misión iniciada!' en _ready().",
                actionObjective: "Modificar la propiedad .text de un nodo hijo usando la sintaxis rápida $.",
                victoryCondition: "Ver cambiar el texto automáticamente al pulsar Play (F6).",
                godotNodes: ["$Label.text"]
              },
              {
                id: "P11-04",
                title: "Paso P11.4: Acceder con get_node()",
                youtubeId: GDSCRIPT_VIDEO_6_ID,
                startTime: 171,
                endTime: 211,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Encuentra y modifica el mismo Label utilizando el método oficial get_node('Label').text.",
                actionObjective: "Aprender a buscar nodos mediante la función formal get_node().",
                victoryCondition: "Verificar que get_node() produce el mismo resultado que $.",
                godotNodes: ["get_node('Label')"]
              },
              {
                id: "P11-05",
                title: "Paso P11.5: Usar rutas de nodos: NodePath",
                youtubeId: GDSCRIPT_VIDEO_6_ID,
                startTime: 211,
                endTime: 265,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Accede a nodos anidados dentro de paneles o contenedores usando rutas como $Panel/Label.text.",
                actionObjective: "Escribir rutas de jerarquía NodePath para acceder a nodos dentro de carpetas o paneles.",
                victoryCondition: "Modificar un Label situado dentro de un Panel contenedor.",
                godotNodes: ["$Panel/Label"]
              },
              {
                id: "P11-06",
                title: "Paso P11.6: Referencias mediante @export",
                youtubeId: GDSCRIPT_VIDEO_6_ID,
                startTime: 265,
                endTime: 324,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Crea @export var my_label: Label para arrastrar y conectar cualquier nodo directamente desde el Inspector.",
                actionObjective: "Vincular nodos visualmente desde el Inspector con la anotación @export.",
                victoryCondition: "Comprobación de la Misión P11: Cambiar el texto usando $, get_node() o la referencia @export.",
                godotNodes: ["@export var my_label: Label"],
                badgeUnlock: "b_ui_whisperer",
                optionalChallenge: "Reto creativo: añadir un segundo Label con la puntuación y hacer que cambie al presionar una tecla."
              }
            ]
          },
          {
            id: "mP12",
            title: "🎨 Misión P12 — Anima y transforma un icono",
            submodules: [
              {
                id: "P12-01",
                title: "Paso P12.1: Crear un Sprite2D y asignar textura",
                youtubeId: GDSCRIPT_VIDEO_6_ID,
                startTime: 324,
                endTime: 382,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Añade un nodo Sprite2D a la escena y asígnale el icono por defecto (icon.svg) o una imagen propia.",
                actionObjective: "Crear un Sprite2D y cargar una textura en el Inspector.",
                victoryCondition: "Ver el icono renderizado en el visor 2D de Godot 4.",
                godotNodes: ["Sprite2D"]
              },
              {
                id: "P12-02",
                title: "Paso P12.2: Cambiar position con Vector2",
                youtubeId: GDSCRIPT_VIDEO_6_ID,
                startTime: 382,
                endTime: 452,
                duration: "1.5 min",
                categoryTag: "Esencial",
                description: "Mueve el icono por la pantalla desde el script asignándole una nueva posición $Sprite2D.position = Vector2(300, 200).",
                actionObjective: "Utilizar la estructura Vector2(x, y) para cambiar la ubicación de un objeto 2D.",
                victoryCondition: "Ver el icono aparecer en las coordenadas X e Y exactas al dar a Play.",
                godotNodes: ["$Sprite2D.position = Vector2()"]
              },
              {
                id: "P12-03",
                title: "Paso P12.3: Cambiar color con modulate",
                youtubeId: GDSCRIPT_VIDEO_6_ID,
                startTime: 452,
                endTime: 503,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Tinta o cambia el tono de tu icono usando $Sprite2D.modulate = Color.GREEN (para premio) o Color.RED (para peligro).",
                actionObjective: "Modificar la propiedad modulate mediante la clase Color de GDScript.",
                victoryCondition: "Ver el icono cambiar de color al instante en pantalla.",
                godotNodes: ["$Sprite2D.modulate = Color.GREEN"]
              },
              {
                id: "P12-04",
                title: "Paso P12.4: Cambiar tamaño con scale",
                youtubeId: GDSCRIPT_VIDEO_6_ID,
                startTime: 503,
                endTime: 541,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Haz que el icono crezca o se encoja cambiando su escala: $Sprite2D.scale = Vector2(2, 2).",
                actionObjective: "Ajustar la escala de un nodo 2D dinámicamente desde código.",
                victoryCondition: "Ver el icono duplicar su tamaño en pantalla al ejecutar el script.",
                godotNodes: ["$Sprite2D.scale = Vector2(2, 2)"]
              },
              {
                id: "P12-05",
                title: "Paso P12.5: Crear función reutilizable change_position()",
                youtubeId: GDSCRIPT_VIDEO_6_ID,
                startTime: 541,
                endTime: 665,
                duration: "2 min",
                categoryTag: "Esencial",
                description: "Crea una función personalizada func transform_icon(new_pos, new_color, new_scale) que agrupe todos los cambios en un solo lugar.",
                actionObjective: "Empaquetar la posición, color y tamaño de un Sprite en una función propia con parámetros.",
                victoryCondition: "Llamar a la función y ver transformarse el icono de un solo golpe.",
                godotNodes: ["func transform_icon()"]
              },
              {
                id: "P12-06",
                title: "Paso P12.6: Resumen e Integración final del Panel de Recompensa (InterfaceLab)",
                youtubeId: GDSCRIPT_VIDEO_6_ID,
                startTime: 665,
                endTime: 720,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Construye el 'Panel de Recompensa': al pulsar una tecla, el texto cambia a '¡Recompensa!', el icono se mueve, se pinta de verde y se agranda.",
                actionObjective: "Combinar Label + Sprite2D + Input para crear una interfaz dinámica completa.",
                victoryCondition: "Comprobación de la Misión P12: Demostrar que los nodos de pantalla cambian y se animan desde el código.",
                godotNodes: ["InterfaceLab Complete Panel"],
                badgeUnlock: "b_ui_wizard"
              }
            ]
          }
        ]
      },
      {
        id: "u2_7",
        title: "Unidad 7 — Crea controles y un inventario inteligente",
        missions: [
          {
            id: "mP13",
            title: "🎮 Misión P13 — Crea una acción propia (Input Map)",
            submodules: [
              {
                id: "P13-01",
                title: "Paso P13.1: Introducción: Input y Dictionary",
                youtubeId: GDSCRIPT_VIDEO_7_ID,
                startTime: 0,
                endTime: 38,
                duration: "0.5 min",
                categoryTag: "Esencial",
                description: "Entender que un videojuego necesita recibir órdenes del jugador y guardar datos organizados de sus objetos.",
                actionObjective: "Comprender la relación entre controles del jugador (Input) y almacenamiento de objetos (Dictionary).",
                victoryCondition: "Avanzar a la configuración del mapa de entradas en Godot 4.",
                godotNodes: ["Input & Dictionary Overview"]
              },
              {
                id: "P13-02",
                title: "Paso P13.2: Revisar Input Map",
                youtubeId: GDSCRIPT_VIDEO_7_ID,
                startTime: 38,
                endTime: 85,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Abre Proyecto -> Configuración del Proyecto -> Mapa de Entradas (Input Map) y examina las acciones del sistema.",
                actionObjective: "Explorar la pestaña Input Map de Godot 4.",
                victoryCondition: "Localizar las acciones integradas como ui_accept, ui_cancel y ui_select.",
                godotNodes: ["Project Settings -> Input Map"]
              },
              {
                id: "P13-03",
                title: "Paso P13.3: Crear una acción y asignar una tecla",
                youtubeId: GDSCRIPT_VIDEO_7_ID,
                startTime: 85,
                endTime: 155,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Crea una acción personalizada llamada use_item y asígnale una tecla de tu teclado (ej: la tecla E o la barra espaciadora).",
                actionObjective: "Añadir una nueva acción en Input Map y vincular una tecla física.",
                victoryCondition: "Ver la acción use_item registrada correctamente en el editor de Godot 4.",
                godotNodes: ["action: use_item"]
              },
              {
                id: "P13-04",
                title: "Paso P13.4: Usar _input(event)",
                youtubeId: GDSCRIPT_VIDEO_7_ID,
                startTime: 155,
                endTime: 174,
                duration: "0.5 min",
                categoryTag: "Esencial",
                description: "Declara la función nativa func _input(event): para recibir todas las pulsaciones del jugador en tiempo real.",
                actionObjective: "Escribir la función _input(event) en tu script.",
                victoryCondition: "Capturar el objeto InputEvent al presionar cualquier tecla.",
                godotNodes: ["func _input(event):"]
              },
              {
                id: "P13-05",
                title: "Paso P13.5: Detectar pulsación y liberación",
                youtubeId: GDSCRIPT_VIDEO_7_ID,
                startTime: 174,
                endTime: 280,
                duration: "1.5 min",
                categoryTag: "Esencial",
                description: "Usa event.is_action_pressed('use_item') y event.is_action_released('use_item') para detectar cuándo se pulsa y suelta la tecla.",
                actionObjective: "Diferenciar entre presionar y soltar una acción de juego.",
                victoryCondition: "Ver mensajes distintos en la consola al presionar y soltar la tecla.",
                godotNodes: ["event.is_action_pressed()", "event.is_action_released()"]
              },
              {
                id: "P13-06",
                title: "Paso P13.6: Usar acción integrada ui_accept",
                youtubeId: GDSCRIPT_VIDEO_7_ID,
                startTime: 280,
                endTime: 316,
                duration: "0.5 min",
                categoryTag: "Esencial",
                description: "Prueba la acción del sistema 'ui_accept' (Enter o Espacio) para confirmar selecciones en menús o interfaces.",
                actionObjective: "Utilizar las acciones estándar predefinidas por Godot 4.",
                victoryCondition: "Comprobación de la Misión P13: La consola muestra claramente cuándo pulsas y sueltas la acción elegida.",
                godotNodes: ["ui_accept"],
                badgeUnlock: "b_input_customizer",
                optionalChallenge: "Reto creativo: añadir una segunda acción propia llamada 'drop_item' asignada a la tecla Q."
              }
            ]
          },
          {
            id: "mP14",
            title: "🎒 Misión P14 — Guarda objetos con un diccionario (InventoryLab)",
            submodules: [
              {
                id: "P14-01",
                title: "Paso P14.1: Crear un Dictionary con pares clave-valor",
                youtubeId: GDSCRIPT_VIDEO_7_ID,
                startTime: 316,
                endTime: 391,
                duration: "1.5 min",
                categoryTag: "Esencial",
                description: "Crea tu primer diccionario de inventario usando llaves: var inventory = {'potion': 5, 'key': 1, 'crystal': 12}.",
                actionObjective: "Declarar un Dictionary en GDScript con claves (Key) y valores (Value).",
                victoryCondition: "Ver la estructura de pares clave-valor guardada en memoria.",
                godotNodes: ["var inventory = {'potion': 5}"]
              },
              {
                id: "P14-02",
                title: "Paso P14.2: Leer valores mediante una clave",
                youtubeId: GDSCRIPT_VIDEO_7_ID,
                startTime: 391,
                endTime: 415,
                duration: "0.5 min",
                categoryTag: "Esencial",
                description: "Consulta cuántas pociones o llaves tienes imprimiendo inventory['potion'] o usando el método inventory.get('key').",
                actionObjective: "Acceder al valor de un diccionario mediante su nombre de clave.",
                victoryCondition: "Imprimir la cantidad exacta de pociones guardadas en la consola.",
                godotNodes: ["inventory['potion']"]
              },
              {
                id: "P14-03",
                title: "Paso P14.3: Cambiar o añadir claves",
                youtubeId: GDSCRIPT_VIDEO_7_ID,
                startTime: 415,
                endTime: 470,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Aumenta la cantidad de pociones con inventory['potion'] += 1 o añade un objeto nuevo como inventory['map'] = 1.",
                actionObjective: "Modificar valores existentes y añadir nuevos pares clave-valor en caliente.",
                victoryCondition: "Ver el inventario actualizado al consultar de nuevo sus claves.",
                godotNodes: ["inventory['map'] = 1"]
              },
              {
                id: "P14-04",
                title: "Paso P14.4: Recorrer claves con for y convertir a texto con str()",
                youtubeId: GDSCRIPT_VIDEO_7_ID,
                startTime: 470,
                endTime: 527,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Muestra todo el contenido del inventario en consola usando un bucle for item in inventory: e imprimiendo con str().",
                actionObjective: "Iterar sobre las claves de un diccionario e imprimirlas de forma legible.",
                victoryCondition: "Ver el catálogo completo de objetos e ítems impreso en la consola.",
                godotNodes: ["for item in inventory:"]
              },
              {
                id: "P14-05",
                title: "Paso P14.5: Crear diccionarios anidados",
                youtubeId: GDSCRIPT_VIDEO_7_ID,
                startTime: 527,
                endTime: 584,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Guarda propiedades complejas de cada objeto creando diccionarios dentro de diccionarios: 'sword': {'damage': 25, 'durability': 100}.",
                actionObjective: "Construir estructuras de datos avanzadas con diccionarios anidados.",
                victoryCondition: "Consultar propiedades específicas como inventory['sword']['damage'].",
                godotNodes: ["Nested Dictionaries"]
              },
              {
                id: "P14-06",
                title: "Paso P14.6: Resumen de Input y Dictionary (InventoryLab)",
                youtubeId: GDSCRIPT_VIDEO_7_ID,
                startTime: 584,
                endTime: 625,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Construye la aplicación final: al pulsar 'use_item', comprueba si existe una poción, muestra cuántas quedan y reduce la cantidad.",
                actionObjective: "Conectar pulsación de teclas (Input Map) con la modificación lógica del diccionario de inventario.",
                victoryCondition: "Comprobación de la Misión P14: Guardar varios objetos con datos distintos y consumir uno al pulsar la tecla asignada.",
                godotNodes: ["InventoryLab Complete System"],
                badgeUnlock: "b_inventory_keeper"
              }
            ]
          }
        ]
      },
      {
        id: "u2_8",
        title: "Unidad 8 — Crea estados y señales entre partes del juego",
        missions: [
          {
            id: "mP15",
            title: "🎛️ Misión P15 — Define los estados de tu personaje (Enums)",
            submodules: [
              {
                id: "P15-01",
                title: "Paso P15.1: Introducción: enums y señales",
                youtubeId: GDSCRIPT_VIDEO_8_ID,
                startTime: 0,
                endTime: 10,
                duration: "0.5 min",
                categoryTag: "Esencial",
                description: "Entender que un juego necesita conocer el estado actual de cada personaje y avisar cuando algo ocurre.",
                actionObjective: "Comprender la utilidad de los estados (enums) y eventos (signals).",
                victoryCondition: "Avanzar a la declaración de estados enumerados.",
                godotNodes: ["Enum & Signal Overview"]
              },
              {
                id: "P15-02",
                title: "Paso P15.2: Declarar un enum",
                youtubeId: GDSCRIPT_VIDEO_8_ID,
                startTime: 10,
                endTime: 43,
                duration: "0.5 min",
                categoryTag: "Esencial",
                description: "Declara un enum con nombres de estado claros: enum State { IDLE, RUN, JUMP, ATTACK } en la parte superior del script.",
                actionObjective: "Declarar una estructura enum para definir la lista de estados válidos del jugador.",
                victoryCondition: "Ver los nombres de estado reconocidos por GDScript.",
                godotNodes: ["enum State { IDLE, RUN, JUMP, ATTACK }"]
              },
              {
                id: "P15-03",
                title: "Paso P15.3: Mostrar enum en Inspector con @export",
                youtubeId: GDSCRIPT_VIDEO_8_ID,
                startTime: 43,
                endTime: 77,
                duration: "0.5 min",
                categoryTag: "Esencial",
                description: "Expón la variable @export var current_state: State = State.IDLE para seleccionar el estado desde un menú desplegable en el Inspector.",
                actionObjective: "Usar la anotación @export para elegir el estado directamente desde el editor de Godot 4.",
                victoryCondition: "Ver el menú desplegable de estados en el Inspector.",
                godotNodes: ["@export var current_state: State"]
              },
              {
                id: "P15-04",
                title: "Paso P15.4: Usar match con enum",
                youtubeId: GDSCRIPT_VIDEO_8_ID,
                startTime: 77,
                endTime: 162,
                duration: "1.5 min",
                categoryTag: "Esencial",
                description: "Reacciona según el estado activo en _ready() usando match current_state: State.IDLE -> 'El personaje descansa', State.RUN -> 'El personaje corre'.",
                actionObjective: "Evaluar estados enumerados mediante la estructura de control match.",
                victoryCondition: "Comprobación de la Misión P15: Entender por qué PlayerState.JUMP es más claro y seguro que usar números como 2.",
                godotNodes: ["match current_state:"],
                badgeUnlock: "b_state_master",
                optionalChallenge: "Reto creativo: añadir un quinto estado llamado DEFEND o SHIELD y mostrar un mensaje personalizado."
              }
            ]
          },
          {
            id: "mP16",
            title: "📡 Misión P16 — Haz que un nodo avise a otro (Signals)",
            submodules: [
              {
                id: "P16-01",
                title: "Paso P16.1: Qué es una señal y por qué desacopla nodos",
                youtubeId: GDSCRIPT_VIDEO_8_ID,
                startTime: 162,
                endTime: 178,
                duration: "0.5 min",
                categoryTag: "Esencial",
                description: "Entender que una señal es un aviso inalámbrico ('ha pasado algo') que evita que los nodos tengan que conocerse directamente.",
                actionObjective: "Comprender el concepto de desacoplamiento de nodos mediante señales.",
                victoryCondition: "Avanzar a la conexión de señales visuales.",
                godotNodes: ["Signal Concept"]
              },
              {
                id: "P16-02",
                title: "Paso P16.2: Conectar señal nativa pressed de un Button",
                youtubeId: GDSCRIPT_VIDEO_8_ID,
                startTime: 178,
                endTime: 254,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Añade un nodo Button, abre la pestaña Nodos -> Señales y conecta la señal pressed() al script para mostrar un mensaje al presionar.",
                actionObjective: "Conectar una señal nativa desde la pestaña Nodos del editor de Godot 4.",
                victoryCondition: "Ver el mensaje de consola responder al hacer clic en el botón.",
                godotNodes: ["Button -> pressed()"]
              },
              {
                id: "P16-03",
                title: "Paso P16.3: Declarar una señal propia con signal",
                youtubeId: GDSCRIPT_VIDEO_8_ID,
                startTime: 254,
                endTime: 285,
                duration: "0.5 min",
                categoryTag: "Esencial",
                description: "Declara tu propia señal personalizada escribiendo signal player_died o signal mission_complete en la parte superior del script.",
                actionObjective: "Crear una señal propia con la palabra clave signal.",
                victoryCondition: "Ver la señal registrada y lista para emitirse.",
                godotNodes: ["signal mission_complete"]
              },
              {
                id: "P16-04",
                title: "Paso P16.4: Emitir señal con .emit()",
                youtubeId: GDSCRIPT_VIDEO_8_ID,
                startTime: 285,
                endTime: 310,
                duration: "0.5 min",
                categoryTag: "Esencial",
                description: "Emite el aviso en cualquier momento llamando a mission_complete.emit() cuando el jugador cumpla la condición de prueba.",
                actionObjective: "Disparar una señal propia utilizando el método .emit().",
                victoryCondition: "Ver el evento emitirse correctamente por consola.",
                godotNodes: ["mission_complete.emit()"]
              },
              {
                id: "P16-05",
                title: "Paso P16.5: Conectar señales entre scripts",
                youtubeId: GDSCRIPT_VIDEO_8_ID,
                startTime: 310,
                endTime: 358,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Conecta la señal a un nodo principal o interfaz que reaccione cambiando el mensaje de pantalla a '¡Misión completada!'.",
                actionObjective: "Vincular emisor y receptor entre dos nodos independientes.",
                victoryCondition: "Ver actualizarse el texto de la pantalla al emitir la señal.",
                godotNodes: ["Connect Signal -> Receiver Node"]
              },
              {
                id: "P16-06",
                title: "Paso P16.6: Resumen: señales para áreas, daño y eventos (StateSignalLab)",
                youtubeId: GDSCRIPT_VIDEO_8_ID,
                startTime: 358,
                endTime: 410,
                duration: "1 min",
                categoryTag: "Esencial",
                description: "Consolida StateSignalLab: el botón emite la señal, el nodo principal recibe la señal y el Label muestra '¡Misión Completada!'.",
                actionObjective: "Revisar cómo se usan señales para detectar áreas (Area3D), daño y cambios de escena.",
                victoryCondition: "Comprobación de la Misión P16: Explicar que la señal permite avisar sin que el personaje conozca los detalles de la UI.",
                godotNodes: ["StateSignalLab Complete System"],
                badgeUnlock: "b_event_director"
              }
            ]
          }
        ]
      }
    ]
  }
];

// Flat modules mapping for existing application hooks and state management
export const courseData: Module[] = worldsData.flatMap(world =>
  world.units.flatMap(unit =>
    unit.missions.map(mission => ({
      id: mission.id,
      title: `${unit.title} — ${mission.title}`,
      submodules: mission.submodules
    }))
  )
);
