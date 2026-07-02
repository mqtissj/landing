import trackeadorImg from "@/assets/projects/trackeador-objetivos.jpg";
import alimentosImg from "@/assets/projects/manejo-alimentos.jpg";
import atletasImg from "@/assets/projects/gestion-atletas.jpg";
import egaImg from "@/assets/projects/ega-web.jpg";
import librosImg from "@/assets/projects/alquiler-libros.jpg";
import peajesImg from "@/assets/projects/sistema-peajes.jpg";

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
