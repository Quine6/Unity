export interface Submodule {
  id: string;
  title: string;
}

export interface Module {
  id: string; // e.g., "01"
  title: string; // e.g., "INICIOS"
  submodules: Submodule[];
}

export const courseData: Module[] = [
  {
    id: "01",
    title: "INICIOS",
    submodules: [
      { id: "01-01", title: "Instalación de Unity" },
      { id: "01-02", title: "Versiones de Unity y SRP" },
      { id: "01-03", title: "Instalación de Visual Studio Community" },
      { id: "01-04", title: "Otros IDE" },
      { id: "01-05", title: "Interfaz de Unity" },
    ],
  },
  {
    id: "02",
    title: "BASES DE PROGRAMACIÓN",
    submodules: [
      { id: "02-01", title: "Variables/Propiedades primitivas" },
      { id: "02-02", title: "Comentarios" },
      { id: "02-03", title: "Operaciones" },
      { id: "02-04", title: "Conversiones" },
      { id: "02-05", title: "Condicionales" },
      { id: "02-06", title: "Ámbitos, private, public" },
      { id: "02-07", title: "Funciones y clases" },
      { id: "02-08", title: "Arrays, listas y bucles" },
    ],
  },
  {
    id: "03",
    title: "PRIMER PROYECTO",
    submodules: [
      { id: "03-01", title: "Creación de un proyecto en Unity" },
      { id: "03-02", title: "Escenas" },
      { id: "03-03", title: "Funciones de Unity, MonoBehaviour" },
      { id: "03-04", title: "GameObject y Componentes" },
      { id: "03-05", title: "Instanciar Objetos y Prefabs" },
      { id: "03-06", title: "Movimiento Básico" },
      { id: "03-07", title: "Transform.position" },
      { id: "03-08", title: "Time.DeltaTime" },
      { id: "03-09", title: "Corrutinas" },
      { id: "03-10", title: "Interpolación Lineal" },
      { id: "03-11", title: "LinearVelocity" },
      { id: "03-12", title: "Cámara del personaje" },
      { id: "03-13", title: "Gravedad" },
      { id: "03-14", title: "Detección del suelo" },
      { id: "03-15", title: "Raycast" },
      { id: "03-16", title: "Spherecast" },
      { id: "03-17", title: "Physics Material" },
      { id: "03-18", title: "Salto" },
      { id: "03-19", title: "Correr" },
      { id: "03-20", title: "Movimiento 2D" },
      { id: "03-21", title: "Importar y exportar" },
      { id: "03-22", title: "Build de un proyecto" },
    ],
  },
  {
    id: "04",
    title: "INICIOS DEL PROYECTO FINAL",
    submodules: [
      { id: "04-01", title: "Idea" },
      { id: "04-02", title: "Viabilidad" },
      { id: "04-03", title: "Inicio del proyecto" },
    ],
  },
  {
    id: "05",
    title: "MAPEADO",
    submodules: [
      { id: "05-01", title: "Package Manager" },
      { id: "05-02", title: "Pro Builder" },
      { id: "05-03", title: "Unity Store" },
      { id: "05-04", title: "Unity Terrain" },
      { id: "05-05", title: "Diseño de mapa" },
      { id: "05-06", title: "Directional Light" },
      { id: "05-07", title: "Luz Ambiental" },
    ],
  },
  {
    id: "06",
    title: "PERSONAJE",
    submodules: [
      { id: "06-01", title: "Controles" },
      { id: "06-02", title: "Inputs y movimiento básico" },
      { id: "06-03", title: "Rigidbody" },
    ],
  },
  {
    id: "07",
    title: "ILUMINACIÓN",
    submodules: [
      { id: "07-01", title: "Luces de la escena" },
      { id: "07-02", title: "Post Procesado" },
      { id: "07-03", title: "Bloom" },
      { id: "07-04", title: "Ambient Occlusion" },
      { id: "07-05", title: "Materiales" },
    ],
  },
  {
    id: "08",
    title: "INTERACCIONES CON MAPEADO",
    submodules: [
      { id: "08-01", title: "On Trigger y On Collision" },
      { id: "08-02", title: "Interfaces en programación" },
      { id: "08-03", title: "Herencias" },
      { id: "08-04", title: "Consumibles" },
      { id: "08-05", title: "Animaciones" },
      { id: "08-06", title: "Eventos" },
      { id: "08-07", title: "Música y Sonidos" },
      { id: "08-08", title: "Decals" },
    ],
  },
  {
    id: "09",
    title: "ENEMIGO",
    submodules: [
      { id: "09-01", title: "NavMesh" },
      { id: "09-02", title: "NavMeshAgent" },
      { id: "09-03", title: "Patrulla entre puntos de control" },
      { id: "09-04", title: "Detectar y perseguir" },
      { id: "09-05", title: "Atacar al personaje" },
      { id: "09-06", title: "Mixamo" },
      { id: "09-07", title: "Animaciones del enemigo" },
      { id: "09-08", title: "NavMesh Link" },
    ],
  },
  {
    id: "10",
    title: "INTERFAZ VISUAL",
    submodules: [
      { id: "10-01", title: "Menú principal" },
      { id: "10-02", title: "Cambios de escena" },
      { id: "10-03", title: "Opciones" },
      { id: "10-04", title: "Interfaz visual de vida" },
      { id: "10-05", title: "Interfaz visual de coleccionables" },
    ],
  },
  {
    id: "11",
    title: "SEGUIMIENTO PROYECTO FINAL",
    submodules: [
      { id: "11-01", title: "Animaciones en el proyecto" },
      { id: "11-02", title: "Escena del proyecto" },
      { id: "11-03", title: "Menú principal del proyecto" },
      { id: "11-04", title: "Iluminación inicial del proyecto" },
      { id: "11-05", title: "Pasados Proyectos finales" },
      { id: "11-06", title: "Interfaz inicial" },
      { id: "11-07", title: "Estado de la industria" },
      { id: "11-08", title: "Orientación Laboral" },
    ],
  },
  {
    id: "12",
    title: "SISTEMA DE GUARDADO",
    submodules: [
      { id: "12-01", title: "Serialización" },
      { id: "12-02", title: "Json" },
      { id: "12-03", title: "Guardado" },
      { id: "12-04", title: "Carga" },
      { id: "12-05", title: "Binario" },
    ],
  },
  {
    id: "13",
    title: "PULIDO FINAL",
    submodules: [
      { id: "13-01", title: "Técnicas de optimización" },
      { id: "13-02", title: "Llamadas de renderizado" },
      { id: "13-03", title: "Occlusion Culling" },
      { id: "13-04", title: "Luces bakeadas" },
      { id: "13-05", title: "Movimiento en escaleras y rampas" },
      { id: "13-06", title: "Cinemáticas" },
      { id: "13-07", title: "Modo Debug" },
      { id: "13-08", title: "Errores comunes" },
      { id: "13-09", title: "Límites del mapa" },
    ],
  },
  {
    id: "14",
    title: "HISTORIA Y OTROS MOTORES",
    submodules: [
      { id: "14-01", title: "Historia de videojuegos" },
      { id: "14-02", title: "Unreal" },
      { id: "14-03", title: "Diferencias de Unreal" },
      { id: "14-04", title: "RPGMaker" },
      { id: "14-05", title: "Game Maker" },
      { id: "14-06", title: "Godot" },
    ],
  },
  {
    id: "15",
    title: "FINAL DEL PROYECTO",
    submodules: [
      { id: "15-01", title: "Toques finales al proyecto final" },
      { id: "15-02", title: "Sistema de guardado en el proyecto" },
      { id: "15-03", title: "Testeo" },
    ],
  },
];
