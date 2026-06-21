import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import { skills, personalInfo } from "@/data/projects";

const avg = (arr: { level: number }[]) =>
  Math.round(arr.reduce((s, x) => s + x.level, 0) / arr.length);

const radarData = [
  { subject: "Backend",   level: avg(skills.backend) },
  { subject: "Frontend",  level: avg(skills.frontend) },
  { subject: "Databases", level: avg(skills.databases) },
  { subject: "Tooling",   level: avg(skills.tools) },
];

const timeline = [
  {
    period: "2023 — hoy",
    title: "Analista en Tecnologías de la Información",
    org: "ORT Uruguay",
    tag: "En curso",
    color: "bg-pop-cobalt text-background",
  },
  {
    period: "2022",
    title: "Programador Web Certificado",
    org: "ORT Uruguay",
    tag: "Completado",
    color: "bg-pop-mint text-foreground",
  },
  {
    period: "2021",
    title: "Cambridge B2 First — Inglés",
    org: "Cambridge Assessment English",
    tag: "Certificado",
    color: "bg-pop-yellow text-foreground",
  },
];

const interests = [
  { label: "Desarrollo Backend", color: "bg-pop-cobalt text-background" },
  { label: "APIs RESTful", color: "bg-pop-yellow text-foreground" },
  { label: "Arquitectura de Software", color: "bg-pop-coral text-foreground" },
  { label: "Patrones de Diseño", color: "bg-pop-mint text-foreground" },
  { label: "Bases de Datos", color: "bg-pop-lilac text-foreground" },
  { label: "Cloud Computing", color: "bg-foreground text-background" },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Theme-aware radar chart colors
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const check = () =>
      setIsDark(document.documentElement.classList.contains("dark"));
    check();
    const obs = new MutationObserver(check);
    obs.observe(document.documentElement, { attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  const cobalHsl = isDark ? "hsl(217,82%,68%)" : "hsl(222,47%,22%)";
  const gridHsl = isDark ? "hsl(0,0%,18%)" : "hsl(38,15%,78%)";
  const labelHsl = isDark ? "hsl(44,40%,93%)" : "hsl(0,0%,8%)";

  return (
    <section id="sobre-mi" ref={ref} className="relative py-24 sm:py-32 border-t-2 border-foreground">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="flex items-end justify-between border-b-2 border-foreground pb-4 mb-16">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/60 mb-2">
              <span className="bg-pop-yellow text-foreground px-2 py-0.5 border border-foreground">Capítulo 02</span>
            </p>
            <h2 className="text-display text-5xl sm:text-6xl md:text-7xl mt-3">
              Sobre <em className="marker-yellow">el autor</em>
            </h2>
          </div>
          <span className="hidden md:block font-mono text-xs text-foreground/60">P. 02 / 04</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Featured article */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <p className="font-serif text-3xl sm:text-4xl leading-snug mb-8">
              <span className="serif-italic text-5xl text-pop-coral">«</span>
              Soy <em>{personalInfo.name}</em>, una persona{" "}
              <span className="marker-mint">responsable</span>, proactiva y
              organizada, con una genuina pasión por el desarrollo de software y
              las tecnologías de la información.
              <span className="serif-italic text-5xl text-pop-coral">»</span>
            </p>

            <div className="columns-1 sm:columns-2 gap-8 text-[15px] leading-relaxed text-foreground/85 space-y-4">
              <p className="first-letter:font-serif first-letter:text-6xl first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:leading-none first-letter:text-pop-cobalt">
                Estudiante avanzado de{" "}
                <em>Analista en Tecnologías de la Información</em> en ORT
                Uruguay. Mi camino comenzó por curiosidad y se transformó en una
                búsqueda constante por entender cómo funcionan los sistemas que
                sostienen el software moderno.
              </p>
              <p>
                Hoy busco mi primera experiencia laboral donde aplicar mis
                conocimientos en Java, Spring Boot, C# y .NET, construyendo APIs
                robustas y arquitecturas escalables. Me interesan los patrones de
                diseño, el código limpio y los proyectos donde el detalle importa.
              </p>
            </div>

            {/* Education timeline */}
            <div className="mt-12 pt-8 border-t-2 border-foreground">
              <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/60 mb-6">
                Formación
              </p>
              <ol className="relative pl-5 timeline-line space-y-7">
                {timeline.map((item, i) => (
                  <motion.li
                    key={item.title}
                    initial={{ opacity: 0, x: -12 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
                    className="relative"
                  >
                    {/* Dot on the line */}
                    <span className="absolute -left-[1.35rem] top-[6px] w-2.5 h-2.5 rounded-full border-2 border-foreground bg-background" />
                    <div className="flex flex-wrap items-baseline gap-3 mb-0.5">
                      <span className={`text-[10px] uppercase tracking-[0.2em] px-2 py-0.5 border border-foreground font-medium ${item.color}`}>
                        {item.tag}
                      </span>
                      <span className="font-mono text-[10px] text-foreground/55">{item.period}</span>
                    </div>
                    <p className="font-serif text-xl leading-tight">{item.title}</p>
                    <p className="text-sm text-foreground/60 mt-0.5">{item.org}</p>
                  </motion.li>
                ))}
              </ol>
            </div>

            {/* Languages */}
            <div className="mt-10 pt-6 border-t-2 border-foreground">
              <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/60 mb-4">Idiomas</p>
              <div className="grid grid-cols-3 gap-4">
                {personalInfo.languages.map((lang, i) => (
                  <div
                    key={lang.name}
                    className={`p-4 border-2 border-foreground ${
                      ["bg-pop-yellow text-foreground", "bg-pop-coral text-foreground", "bg-pop-mint text-foreground"][i % 3]
                    }`}
                  >
                    <p className="font-serif text-2xl">{lang.name}</p>
                    <p className="text-xs uppercase tracking-wider mt-1 opacity-80">{lang.level}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.article>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 space-y-10"
          >
            {/* Interests */}
            <div className="border-2 border-foreground p-6 bg-background shadow-pop">
              <div className="flex items-center justify-between mb-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em]">Intereses</p>
                <span className="font-mono text-[10px] text-foreground/60">06 ítems</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {interests.map((item) => (
                  <span
                    key={item.label}
                    className={`px-3 py-1.5 border border-foreground text-xs uppercase tracking-wider font-medium ${item.color}`}
                  >
                    {item.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Radar chart — skills overview */}
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-foreground">
                <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/60">
                  Mapa de habilidades
                </p>
                <span className="font-mono text-[10px] text-foreground/50">nivel / 100</span>
              </div>

              <div className="h-[240px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="68%">
                    <PolarGrid stroke={gridHsl} strokeWidth={1} />
                    <PolarAngleAxis
                      dataKey="subject"
                      tick={{
                        fontSize: 10,
                        fill: labelHsl,
                        fontFamily: "Inter, Work Sans, sans-serif",
                        fontWeight: 500,
                        letterSpacing: "0.08em",
                      }}
                    />
                    <Radar
                      dataKey="level"
                      stroke={cobalHsl}
                      fill={cobalHsl}
                      fillOpacity={0.12}
                      strokeWidth={1.5}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>

              {/* Individual skills as compact tags */}
              <div className="mt-6 space-y-4">
                {[
                  { label: "Backend", items: skills.backend },
                  { label: "Frontend", items: skills.frontend },
                  { label: "Bases de Datos", items: skills.databases },
                ].map((cat) => (
                  <div key={cat.label}>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/55 mb-2">
                      {cat.label}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.items.map((s) => (
                        <span
                          key={s.name}
                          title={`${s.level}%`}
                          style={{ opacity: 0.45 + (s.level / 100) * 0.55 }}
                          className="font-mono text-[10px] uppercase tracking-wider border border-foreground/40 bg-background px-2 py-0.5 hover:border-pop-cobalt hover:text-pop-cobalt transition-colors duration-200"
                        >
                          {s.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};
