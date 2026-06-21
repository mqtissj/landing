import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills, personalInfo } from "@/data/projects";

const interests = [
  { label: "Desarrollo Backend", color: "bg-pop-cobalt text-background" },
  { label: "APIs RESTful", color: "bg-pop-yellow text-foreground" },
  { label: "Arquitectura de Software", color: "bg-pop-coral text-background" },
  { label: "Patrones de Diseño", color: "bg-pop-mint text-foreground" },
  { label: "Bases de Datos", color: "bg-pop-lilac text-foreground" },
  { label: "Cloud Computing", color: "bg-foreground text-background" },
];

const catColors = ["bg-pop-cobalt", "bg-pop-coral", "bg-pop-mint", "bg-pop-yellow"];

const allSkills = [
  { label: "Backend", items: skills.backend },
  { label: "Frontend", items: skills.frontend },
  { label: "Bases de Datos", items: skills.databases },
  { label: "Herramientas", items: skills.tools },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
              Soy <em>{personalInfo.name}</em>, una persona <span className="marker-mint">responsable</span>,
              proactiva y organizada, con una genuina pasión por el
              desarrollo de software y las tecnologías de la información.
              <span className="serif-italic text-5xl text-pop-coral">»</span>
            </p>

            <div className="columns-1 sm:columns-2 gap-8 text-[15px] leading-relaxed text-foreground/85 space-y-4">
              <p className="first-letter:font-serif first-letter:text-6xl first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:leading-none first-letter:text-pop-cobalt">
                Estudiante avanzado de <em>Analista en Tecnologías de la Información</em> en
                ORT Uruguay. Mi camino comenzó por curiosidad y se transformó en una
                búsqueda constante por entender cómo funcionan los sistemas que sostienen
                el software moderno.
              </p>
              <p>
                Hoy busco mi primera experiencia laboral donde aplicar mis conocimientos
                en Java, Spring Boot, C# y .NET, construyendo APIs robustas y arquitecturas
                escalables. Me interesan los patrones de diseño, el código limpio y los
                proyectos donde el detalle importa.
              </p>
            </div>

            {/* Languages */}
            <div className="mt-12 pt-6 border-t-2 border-foreground">
              <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/60 mb-4">Idiomas</p>
              <div className="grid grid-cols-3 gap-4">
                {personalInfo.languages.map((lang, i) => (
                  <div
                    key={lang.name}
                    className={`p-4 border-2 border-foreground ${
                      [
                        "bg-pop-yellow text-foreground",
                        "bg-pop-coral text-background",
                        "bg-pop-mint text-foreground",
                      ][i % 3]
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
            {/* Interests chips */}
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

            {/* Stack ledger */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/60 mb-4 pb-3 border-b-2 border-foreground">
                Stack & Herramientas
              </p>
              <div className="space-y-6">
                {allSkills.map((cat, ci) => (
                  <div key={cat.label}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`w-3 h-3 ${catColors[ci]} border border-foreground`} />
                      <p className="font-serif serif-italic text-lg">{cat.label}</p>
                    </div>
                    <ul className="space-y-2">
                      {cat.items.map((s) => (
                        <li key={s.name}>
                          <div className="flex items-baseline justify-between text-sm mb-1">
                            <span>{s.name}</span>
                            <span className="font-mono text-xs text-foreground/60">{s.level}%</span>
                          </div>
                          <div className="h-1.5 bg-secondary border border-foreground overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${s.level}%` } : {}}
                              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                              className={`h-full ${catColors[ci]}`}
                            />
                          </div>
                        </li>
                      ))}
                    </ul>
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
