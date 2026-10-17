import trackeadorImg from "@/assets/projects/trackeador-objetivos.jpg";
import alimentosImg from "@/assets/projects/manejo-alimentos.jpg";
import atletasImg from "@/assets/projects/gestion-atletas.jpg";
import librosImg from "@/assets/projects/alquiler-libros.jpg";
import peajesImg from "@/assets/projects/sistema-peajes.jpg";
import malapataImg from "@/assets/projects/malapata.svg";
import routeevImg from "@/assets/projects/routeev.jpg";
import pfInmobiliariaImg from "@/assets/projects/pf-inmobiliaria.jpg";
import realidadImg from "@/assets/projects/realidad-uy.png";

export interface Project {
  id: number;
  title: string;
  emoji: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  features: string[];
  image: string;
  // Most projects link to their repo. A couple (client work, in-progress
  // pieces) don't have a public one — those set liveUrl instead so the
  // modal points at the real, working thing rather than nothing.
  github?: string;
  liveUrl?: string;
  // Los destacados abren la sección con una fila ancha propia, en el orden
  // en que aparecen acá; el resto entra en la grilla.
  featured?: boolean;
  category: string;
}

export const projects: Project[] = [
  {
    id: 8,
    title: "RouteEV",
    emoji: "🔋",
    shortDescription: "El problema del auto eléctrico no es el auto: es no saber si llegás. RouteEV mete la batería adentro del cálculo de la ruta y contesta si llegás y dónde parar a cargar. Web en routeev.uy y app en las dos tiendas.",
    fullDescription: "El problema. Un navegador común contesta cuál es el camino más rápido. El que maneja un auto eléctrico necesita otra respuesta: ¿llego con la carga que tengo y, si no, dónde paro? La autonomía del folleto no es la real, y las estaciones del país no son todas iguales: cambia el conector, la potencia y el precio.\n\nLa solución. Meter la batería adentro de la búsqueda, en vez de calcular la ruta y buscar cargadores después. Valhalla resuelve el camino por las calles reales y un A* propio elige las paradas entre las 261 estaciones del país: cargar deja de ser un parche y pasa a ser parte de la ruta óptima. Arriba de eso, lo que termina de decidir un viaje — costo en pesos con el tarifario de UTE, peajes, radares y el estado en vivo de cada cargador. Son tres piezas: API en Python/FastAPI, web en React y app en React Native, publicada en App Store y Google Play.",
    technologies: ["Python", "FastAPI", "Valhalla", "PostgreSQL", "React 19 + TypeScript", "React Native (Expo)", "MapLibre + OpenFreeMap", "Docker Compose", "JWT + Apple/Google", "Claude API", "Oracle Cloud + Vercel"],
    features: [
      "App publicada en App Store y Google Play, con el front rediseñado sobre un sistema de diseño propio",
      "Dos capas: Valhalla resuelve las calles y un A* propio elige las paradas sobre un grafo de 262 nodos",
      "Dos optimizaciones medidas: 317× menos estados al pasar a Valhalla, y de 5,8 s a 0,9 s con la poda por dominancia",
      "261 estaciones reales (213 de UTE Movilidad y 48 privadas), con estado en vivo y reportes de la comunidad",
      "Tres modos de ruta —eficiente, rápido y económico— que nunca tocan el margen de batería pedido",
      "Peajes cobrados por geometría con el tarifario real, 253 radares avisados y comercios a pie desde cada parada",
      "Showroom público sin cuenta: 587 modelos con autonomía real, costos en pesos y simulación de un viaje concreto",
      "Más de 550 tests con pytest y CI en GitHub Actions con Semgrep en cada push"
    ],
    image: routeevImg,
    // Los repos de RouteEV siguen fuera del perfil público: el botón principal va al sitio.
    github: "https://github.com/mqtissj",
    liveUrl: "https://routeev.uy",
    featured: true,
    category: "Full Stack · En producción"
  },
  {
    id: 10,
    title: "realidad.uy",
    emoji: "🇺🇾",
    shortDescription: "Los datos públicos del país están publicados, pero desparramados en boletines PDF. realidad.uy los junta en mapas, fichas y comparaciones por territorio, con la fuente y la metodología de cada cifra a la vista.",
    fullDescription: "El problema. Los datos del país son públicos, pero no están disponibles: el desempleo sale en un informe del INE, el PIB en un cuadro del BCU, las elecciones en la Corte Electoral, cada uno en su PDF y con su formato. Para saber cómo le va a tu departamento hay que cazar un boletín por indicador, y lo que circula en redes son cifras sin fuente.\n\nLa solución. Una sola plataforma donde esos datos quedan explorables por territorio y cada cifra dice de dónde sale: fuente, período, unidad, link al boletín original y el conjunto del Catálogo Nacional de Datos Abiertos. Sin backend — las observaciones viven tipadas en el repo y una tarea mensual las actualiza, valida y despliega sola. Y la regla que ordena todo lo demás: nunca inventar un dato; lo que no existe se declara faltante en vez de estimarse.",
    technologies: ["Next.js 15", "TypeScript", "Tailwind CSS v4", "d3-geo", "Recharts", "SSG", "GitHub Actions", "Vercel"],
    features: [
      "22 indicadores del INE, BCU, MTSS y Corte Electoral, cada uno con ficha, serie histórica y metodología",
      "Cada cifra comparada contra el período anterior: interanual por mes, trimestre, semestre o año",
      "Mapa coroplético en SVG con d3-geo, navegable por teclado y con \"Ver datos\" en cada gráfico",
      "Provenance por observación: fuente, período, unidad, estado, URL del boletín y conjunto del Catálogo Nacional de Datos Abiertos",
      "19 departamentos y 136 municipios en el modelo territorial; donde no hay dato público, se dice que no lo hay",
      "Comparador de hasta tres territorios, con vista general de todos los indicadores lado a lado",
      "1.396 observaciones en 41 páginas estáticas sin backend, con embeds de mapa y ranking para citar los datos",
      "Ingesta mensual automática (GitHub Actions, día 5) con validación de integridad, sumas y outliers"
    ],
    image: realidadImg,
    liveUrl: "https://realidad.uy",
    featured: true,
    category: "Datos abiertos · En producción"
  },
  {
    id: 9,
    title: "PF Negocios Inmobiliarios",
    emoji: "🏠",
    shortDescription: "Sitio y panel de gestión para una inmobiliaria de Tacuarembó, en producción en pfinmobiliaria.uy: catálogo con filtros que viven en la URL, carga de propiedades sin tocar código y contacto directo por WhatsApp.",
    fullDescription: "Primer cliente real, con mantenimiento mensual contratado. No son tres proyectos sino uno solo sobre la misma base de datos: el panel escribe, la web pública lee y el asistente virtual —todavía en desarrollo— consulta. Está hecho con Next.js 16 (App Router) y TypeScript, Tailwind CSS v4, Supabase para Postgres, Auth y Storage, y deploy en Vercel, sin dependencias de más: el criterio es que cada línea se pueda explicar. La regla que ordena todo el diseño es de seguridad: el público nunca lee la tabla de propiedades, lee una view que devuelve el precio en null cuando el dueño eligió no publicarlo y anula dirección y coordenadas cuando la propiedad no las muestra; RLS filtra filas, no columnas, y por eso es una view y no una política. Urbano y rural conviven en el mismo modelo: una casa se describe con dormitorios y metros edificados, un campo con hectáreas, índice CONEAT y acceso a agua. Del lado del negocio resuelve lo que la inmobiliaria necesita mostrar y cobrar: los convenios de garantía de alquiler, el financiamiento como agente MiCasa de Banco Santander y el contacto real, con WhatsApp, agenda de citas y formulario para publicar una propiedad.",
    technologies: ["Next.js 16", "React", "TypeScript", "Tailwind CSS v4", "Supabase (Postgres)", "Supabase Auth + Storage", "Server Components", "Vercel"],
    features: [
      "Filtros combinables (operación, tipo, dormitorios, baños, comodidades, mascotas) reflejados en la URL: cada búsqueda queda compartible e indexable",
      "Panel propio: la inmobiliaria publica, edita y sube fotos sin tocar código ni pedirme nada",
      "El público lee una view, no la tabla: precio en null si no es público, dirección y coordenadas anuladas si no se muestran",
      "Row Level Security en todas las tablas; los leads solo se escriben desde el servidor, nunca desde el navegador",
      "Propiedades urbanas y rurales en el mismo esquema (dormitorios y m² edificados, o hectáreas e índice CONEAT)",
      "Convenios de garantía de alquiler (MAPFRE, SURA, Porto Seguro, Sancor) y financiamiento como agente MiCasa de Banco Santander",
      "Contacto real del negocio: WhatsApp con el mensaje ya armado, agenda de citas, formulario para publicar y preguntas frecuentes"
    ],
    image: pfInmobiliariaImg,
    liveUrl: "https://pfinmobiliaria.uy",
    category: "Full Stack · Cliente real"
  },
  {
    id: 1,
    title: "Trackeador de Objetivos",
    emoji: "🎯",
    shortDescription: "Dashboard interactivo para seguimiento y gestión de objetivos personales y profesionales.",
    fullDescription: "Sistema completo de seguimiento de objetivos desarrollado en React. Permite a los usuarios crear, monitorear y evaluar el progreso de sus metas. Incluye visualizaciones de datos, métricas de rendimiento y reportes personalizados para mantener el enfoque en lo que realmente importa.",
    technologies: ["React", "JavaScript", "CSS3", "HTML5"],
    features: [
      "Dashboard interactivo con métricas en tiempo real",
      "Creación y gestión de objetivos SMART",
      "Visualización de progreso con gráficos",
      "Sistema de notificaciones y recordatorios",
      "Reportes exportables"
    ],
    image: trackeadorImg,
    github: "https://github.com/mqtissj/obgR",
    category: "Frontend"
  },
  {
    id: 2,
    title: "Manejo de Alimentos",
    emoji: "🍽️",
    shortDescription: "Sistema de gestión nutricional con tracking de alimentos y control de inventario.",
    fullDescription: "Aplicación web para el control y gestión de alimentos. Permite registrar productos, controlar fechas de vencimiento, gestionar inventarios y llevar un seguimiento nutricional. Ideal para hogares, restaurantes o negocios del rubro alimenticio.",
    technologies: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
    features: [
      "Registro completo de alimentos",
      "Control de fechas de vencimiento",
      "Gestión de inventario en tiempo real",
      "Alertas de stock bajo",
      "Interfaz intuitiva y responsive"
    ],
    image: alimentosImg,
    github: "https://github.com/mqtissj/OBGTALLER",
    category: "Frontend"
  },
  {
    id: 3,
    title: "Sistema de Gestión de Atletas",
    emoji: "⚽",
    shortDescription: "Plataforma completa para gestión de deportistas con base de datos SQL Server.",
    fullDescription: "Sistema integral desarrollado en C# con .NET para la administración de atletas y equipos deportivos. Cuenta con integración a SQL Server para persistencia de datos, permitiendo gestionar perfiles de atletas, estadísticas, entrenamientos y competencias de manera profesional.",
    technologies: ["C#", ".NET", "SQL Server", "Windows Forms"],
    features: [
      "CRUD completo de atletas",
      "Base de datos SQL Server integrada",
      "Gestión de estadísticas y rendimiento",
      "Control de equipos y categorías",
      "Reportes y exportación de datos",
      "Autenticación de usuarios"
    ],
    image: atletasImg,
    github: "https://github.com/mqtissj/gestionDeAtletas",
    category: "Full Stack"
  },
  {
    id: 5,
    title: "Sistema de Alquiler de Libros",
    emoji: "📚",
    shortDescription: "Aplicación de gestión bibliotecaria con sistema de préstamos y devoluciones.",
    fullDescription: "Sistema completo para la administración de una biblioteca. Permite gestionar el catálogo de libros, registrar usuarios, controlar préstamos y devoluciones, y generar reportes de uso. Desarrollado con enfoque en usabilidad y eficiencia.",
    technologies: ["Java", "Swing", "POO", "Patrones de Diseño"],
    features: [
      "Catálogo de libros con búsqueda avanzada",
      "Sistema de préstamos y devoluciones",
      "Registro de usuarios/socios",
      "Control de multas por atraso",
      "Historial de préstamos",
      "Aplicación de patrones de diseño"
    ],
    image: librosImg,
    github: "https://github.com/mqtissj/proyectoAlgoritmos",
    category: "Backend"
  },
  {
    id: 6,
    title: "Sistema de Peajes",
    emoji: "🛣️",
    shortDescription: "API REST para gestión de peajes vehiculares desarrollada con Spring Boot.",
    fullDescription: "Backend robusto desarrollado en Java con Spring Boot para la gestión integral de un sistema de peajes. Implementa una API RESTful completa con arquitectura por capas, patrones de diseño enterprise y documentación Swagger. Permite registrar vehículos, gestionar tarifas por categoría, procesar pagos y generar reportes de tráfico.",
    technologies: ["Java", "Spring Boot", "REST API", "Maven", "Postman"],
    features: [
      "API RESTful completa con CRUD",
      "Registro y clasificación de vehículos",
      "Gestión de tarifas por categoría",
      "Procesamiento de pagos de peajes",
      "Arquitectura en capas (Controller/Service/Repository)",
      "Patrones de diseño enterprise",
      "Documentación de endpoints",
      "Testing con Postman"
    ],
    image: peajesImg,
    github: "https://github.com/mqtissj",
    category: "Backend"
  },
  {
    id: 7,
    title: "Malapata: Apuestas Hípicas",
    emoji: "🐴",
    shortDescription: "Plataforma de apuestas hípicas en tiempo real, con tableros de jugador y administrador sincronizados vía Server-Sent Events.",
    fullDescription: "Sistema de apuestas hípicas desarrollado en Java 21 con Spring Boot 4. Modela jornadas, carreras, caballos y jugadores con una arquitectura orientada a patrones de diseño: State para el ciclo de vida de cada carrera (abierta, cerrada, definida, finalizada), Factory para las modalidades de apuesta (simple, super, triple), Observer/Command para propagar eventos en vivo al tablero, y una Fachada de servicios que coordina todo. El frontend (HTML/CSS/JS) recibe las actualizaciones en tiempo real por SSE, sin necesidad de refrescar la página.",
    technologies: ["Java 21", "Spring Boot 4", "Server-Sent Events", "Lombok", "Jackson", "Maven"],
    features: [
      "Tablero de jugador y de administrador en tiempo real (SSE)",
      "Patrón State para el ciclo de vida de cada carrera",
      "Patrón Factory para modalidades de apuesta (simple, super, triple)",
      "Patrón Observer/Command para la propagación de eventos",
      "Fachada de servicios (Facade) para desacoplar la capa de presentación",
      "DTOs dedicados y manejo global de excepciones"
    ],
    image: malapataImg,
    github: "https://github.com/mqtissj/malapata",
    category: "Full Stack"
  }
];

export const skills = {
  backend: [
    { name: "Java", level: 85 },
    { name: "Spring Boot", level: 80 },
    { name: "C#", level: 75 },
    { name: ".NET", level: 70 },
    { name: "REST APIs", level: 85 },
  ],
  frontend: [
    { name: "React", level: 65 },
    { name: "JavaScript", level: 75 },
    { name: "HTML5", level: 90 },
    { name: "CSS3", level: 85 },
    { name: "Tailwind CSS", level: 70 },
  ],
  databases: [
    { name: "SQL Server", level: 80 },
    { name: "MySQL", level: 75 },
    { name: "MongoDB", level: 60 },
  ],
  tools: [
    { name: "Git & GitHub", level: 85 },
    { name: "VS Code", level: 90 },
    { name: "IntelliJ IDEA", level: 85 },
    { name: "Postman", level: 80 },
    { name: "AWS Academy", level: 50 },
    { name: "Azure", level: 45 },
  ],
  aiData: [
    { name: "Python", level: 45 },
    { name: "Fundamentos IA/ML", level: 20 },
    { name: "Data Science", level: 20 },
    { name: "Ciberseguridad", level: 20 },
  ],
};

export const personalInfo = {
  name: "Matías Filgueiras",
  role: "Profesional IT Junior · Desarrollo · QA & Testing · Soporte IT",
  email: "mfilgueirass13@gmail.com",
  phone: "+598 92 346 566",
  location: "Montevideo, UY",
  github: "https://github.com/mqtissj",
  linkedin: "https://www.linkedin.com/in/matiszn/",
  languages: [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "B2, Cambridge" },
    { name: "Portugués", level: "Básico" },
  ],
  cv: {
    es: "/CV-Matias-Filgueiras-ES.pdf",
    en: "/CV-Matias-Filgueiras-EN.pdf",
  },
};
