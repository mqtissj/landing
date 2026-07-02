import { motion, useInView } from "framer-motion";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { skills, personalInfo } from "@/data/projects";

const SkillsRadar = lazy(() => import("@/components/SkillsRadar"));

const avg = (arr: { level: number }[]) =>
  Math.round(arr.reduce((s, x) => s + x.level, 0) / arr.length);

const radarData = [
  { subject: "Backend",   level: avg(skills.backend) },
  { subject: "Frontend",  level: avg(skills.frontend) },
  { subject: "Databases", level: avg(skills.databases) },
  { subject: "Tooling",   level: avg(skills.tools) },
  { subject: "IA & Datos", level: avg(skills.aiData) },
];

const timeline = [
  {
    period: "Jul. 2026",
    title: "Curso de Python",
    org: "Santander Open Academy",
    tag: "Completado",
    color: "bg-pop-yellow text-foreground",
  },
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
  { label: "Bases de Datos", color: "bg-pop-lilac text-foreground" },
  { label: "Inteligencia Artificial", color: "bg-pop-mint text-foreground" },
  { label: "Data Science", color: "bg-pop-yellow text-foreground" },
  { label: "Ciberseguridad", color: "bg-pop-coral text-foreground" },
];

// "Stack en expansión" — read as a package-manager install log: what's
// already shipped (Python, via the Santander certificate) vs. what's in progress.
const expansionStack = [
  { pkg: "python-basics==2026.07", note: "Santander Open Academy · 8h", done: true },
  { pkg: "ia-fundamentos==0.1", note: "en formación", done: false },
  { pkg: "data-science==0.1", note: "en formación", done: false },
  { pkg: "ciberseguridad==0.1", note: "en formación", done: false },
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
              <p>
                En paralelo completé el curso de <em>Python</em> de Santander Open
                Academy, el lenguaje que uso como puente hacia dos áreas que me
                apasionan: <span className="marker-mint">inteligencia artificial</span> y{" "}
                <span className="marker-mint">data science</span>. A eso se suma un
                interés creciente en <em>ciberseguridad</em> — un tercer frente que
                estoy empezando a formar.
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
            {/* Stack en expansión — read as a terminal install log */}
            <div className="border-2 border-foreground bg-foreground text-background p-6 shadow-pop font-mono text-[13px] leading-relaxed">
              <div className="flex items-center gap-1.5 mb-4 pb-3 border-b border-background/20">
                <span className="w-2.5 h-2.5 rounded-full bg-pop-coral/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-pop-yellow/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-pop-mint/70" />
                <span className="ml-2 text-[10px] uppercase tracking-[0.25em] text-background/45">stack-en-expansión.sh</span>
              </div>
              <p className="text-background/45">$ pip install --upgrade matias</p>
              <p className="mt-2 text-background/60">Successfully installed</p>
              <ul className="mt-1.5 space-y-1.5">
                {expansionStack.map((row) => (
                  <li key={row.pkg} className="flex flex-wrap items-baseline gap-x-2">
                    <span className={row.done ? "text-pop-mint" : "text-pop-yellow"}>
                      {row.done ? "✓" : "~"}
                    </span>
                    <span className="text-background">{row.pkg}</span>
                    <span className="text-background/40 text-[11px]">{row.note}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 pt-3 border-t border-background/15 text-background/60">
                &gt;&gt;&gt; por qué Python<span className="animate-pulse">_</span>
              </p>
              <p className="mt-1 text-background/50 text-[12.5px] leading-relaxed">
                Puente hacia <span className="text-pop-mint">IA</span> y{" "}
                <span className="text-pop-mint">Data Science</span>; en paralelo, un
                interés creciente en <span className="text-pop-mint">ciberseguridad</span>.
              </p>
            </div>

            {/* Interests */}
            <div className="border-2 border-foreground p-6 bg-background shadow-pop">
              <div className="flex items-center justify-between mb-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em]">Intereses</p>
                <span className="font-mono text-[10px] text-foreground/60">{String(interests.length).padStart(2, "0")} ítems</span>
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
                <Suspense fallback={<div className="w-full h-full animate-pulse bg-secondary/60" />}>
                  <SkillsRadar data={radarData} cobalHsl={cobalHsl} gridHsl={gridHsl} labelHsl={labelHsl} />
                </Suspense>
              </div>

              {/* Individual skills as compact tags */}
              <div className="mt-6 space-y-4">
                {[
                  { label: "Backend", items: skills.backend },
                  { label: "Frontend", items: skills.frontend },
                  { label: "Bases de Datos", items: skills.databases },
                  { label: "IA & Datos", items: skills.aiData },
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
