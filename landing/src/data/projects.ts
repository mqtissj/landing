import trackeadorImg from "@/assets/projects/trackeador-objetivos.jpg";
import alimentosImg from "@/assets/projects/manejo-alimentos.jpg";
import atletasImg from "@/assets/projects/gestion-atletas.jpg";
import egaImg from "@/assets/projects/ega-web.jpg";
import librosImg from "@/assets/projects/alquiler-libros.jpg";
import peajesImg from "@/assets/projects/sistema-peajes.jpg";
import malapataImg from "@/assets/projects/malapata.svg";
import routeevImg from "@/assets/projects/routeev.png";

export interface Project {
  id: number;
  title: string;
  emoji: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  features: string[];
  image: string;
  github: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: 8,
    title: "RouteEV",
    emoji: "🔋",
    shortDescription: "Ruteo inteligente para vehículos eléctricos en Uruguay: calcula la ruta más eficiente sobre el grafo vial real del país, revisa la batería tramo a tramo y agrega paradas de carga reales cuando hacen falta. Actualmente en desarrollo.",
    fullDescription: "Proyecto que estoy desarrollando actualmente: un planificador de rutas para autos eléctricos que trabaja sobre el grafo vial real de los 19 departamentos de Uruguay (~63.800 intersecciones y ~97.300 tramos desde OpenStreetMap). Cada calle pesa lo que realmente cuesta recorrerla — tiempo, energía, tráfico y peaje — y el sistema verifica la batería antes de cada tramo; si no alcanza, inserta automáticamente una parada en una de las 209 estaciones reales de la red pública UTE Movilidad. Backend en Python con FastAPI y SQLite, frontend con Leaflet.js, autenticación JWT con login de Google, e integración opcional con la API de Claude para identificar modelos de auto no catalogados.",
    technologies: ["Python", "FastAPI", "Leaflet.js", "OpenStreetMap", "SQLite", "JWT + Google OAuth", "Claude API", "GitHub Actions"],
    features: [
      "Grafo vial real de todo Uruguay: ~63.800 intersecciones y ~97.300 tramos de OpenStreetMap",
      "Verificación de batería tramo a tramo según el modelo de auto elegido",
      "Paradas de carga automáticas en las 209 estaciones reales de UTE Movilidad",
      "Pesos de ruta por tiempo, energía, tráfico y peajes",
      "Autenticación JWT + inicio de sesión con Google",
      "CI con GitHub Actions, análisis de seguridad con Semgrep y tests con pytest"
    ],
    image: routeevImg,
    // El repo de RouteEV todavía es privado: apunta al perfil hasta que se publique.
    github: "https://github.com/mqtissj",
    category: "Full Stack · En desarrollo"
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
    id: 4,
    title: "EGA Web",
    emoji: "🚌",
    shortDescription: "Sitio web corporativo para empresa de transporte con diseño moderno.",
    fullDescription: "Página web profesional desarrollada para EGA (Empresa General Artigas), compañía de transporte de pasajeros. Incluye información de servicios, horarios, destinos y contacto. Diseño responsive y optimizado para SEO.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    features: [
      "Diseño corporativo profesional",
      "Información de servicios y destinos",
      "Consulta de horarios",
      "Formulario de contacto",
      "100% responsive",
      "Optimización SEO"
    ],
    image: egaImg,
    github: "https://github.com/mqtissj/paginaEGA",
    category: "Frontend"
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
    title: "Malapata — Apuestas Hípicas",
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
    { name: "Inglés", level: "B2 — Cambridge" },
    { name: "Portugués", level: "Básico" },
  ],
  cv: {
    es: "/CV-Matias-Filgueiras-ES.pdf",
    en: "/CV-Matias-Filgueiras-EN.pdf",
  },
};
