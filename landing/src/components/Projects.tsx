import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ExternalLink, Github, X, ArrowUpRight } from "lucide-react";
import { projects, Project, personalInfo } from "@/data/projects";

const ProjectRow = ({
  project,
  index,
  featured,
  onClick,
}: {
  project: Project;
  index: number;
  featured?: boolean;
  onClick: () => void;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const accents = ["bg-pop-yellow", "bg-pop-coral", "bg-pop-cobalt", "bg-pop-mint", "bg-pop-lilac"];
  const accent = accents[index % accents.length];
  const textOn = accent === "bg-pop-cobalt" || accent === "bg-pop-coral" ? "text-background" : "text-foreground";

  if (featured) {
    return (
      <motion.article
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        onClick={onClick}
        className="group cursor-pointer col-span-full grid lg:grid-cols-12 gap-8 pb-12 border-b-2 border-foreground"
      >
        <div className="lg:col-span-7 relative">
          <div className={`absolute -top-3 -left-3 w-full h-full ${accent} border-2 border-foreground`} />
          <div className="relative aspect-[16/10] overflow-hidden border-2 border-foreground bg-secondary">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className={`font-mono text-[10px] uppercase tracking-[0.25em] px-2 py-1 border border-foreground ${accent} ${textOn}`}>
                ★ Portada · {project.category}
              </span>
              <span className="font-mono text-[10px] text-foreground/60">№ {String(index + 1).padStart(2, "0")}</span>
            </div>
            <h3 className="text-display text-5xl sm:text-6xl mb-5 group-hover:italic transition-all duration-500">
              {project.title}
            </h3>
            <p className="font-serif text-xl leading-snug text-foreground/85 mb-6">
              {project.shortDescription}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.slice(0, 5).map((t) => (
                <span key={t} className="font-mono text-[11px] uppercase tracking-wider border border-foreground bg-background px-2 py-0.5">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] font-medium self-start btn-pop bg-foreground text-background px-4 py-2">
            Leer artículo
            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      onClick={onClick}
      className="group cursor-pointer flex flex-col"
    >
      <div className="relative mb-4">
        <div className={`absolute -top-2 -left-2 w-full h-full ${accent} border-2 border-foreground transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1`} />
        <div className="relative aspect-[4/3] overflow-hidden border-2 border-foreground bg-secondary">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
      <div className="flex items-center justify-between mb-2">
        <span className={`font-mono text-[10px] uppercase tracking-[0.25em] px-2 py-0.5 border border-foreground ${accent} ${textOn}`}>
          {project.category}
        </span>
        <span className="font-mono text-[10px] text-foreground/60">№ {String(index + 1).padStart(2, "0")}</span>
      </div>
      <h3 className="text-display text-3xl mb-2 group-hover:italic transition-all duration-300">
        {project.title}
      </h3>
      <p className="text-sm text-foreground/75 leading-relaxed mb-4 line-clamp-3">
        {project.shortDescription}
      </p>
      <div className="mt-auto flex items-center gap-2 text-xs uppercase tracking-[0.2em]">
        <span className="hover-underline">Continuá</span>
        <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
      </div>
    </motion.article>
  );
};


const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/40 backdrop-blur-sm"
  >
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 30, opacity: 0 }}
      transition={{ duration: 0.4 }}
      onClick={(e) => e.stopPropagation()}
      className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-background border border-foreground shadow-card"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 bg-background border border-foreground hover:bg-foreground hover:text-background transition"
      >
        <X className="w-4 h-4" />
      </button>

      <div className="aspect-[16/9] overflow-hidden border-b-2 border-foreground bg-secondary">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
      </div>


      <div className="p-8 sm:p-12">
        <div className="flex items-center gap-3 mb-4 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <span className="font-mono">{project.category}</span>
          <span className="w-8 h-px bg-foreground" />
          <span>Artículo extendido</span>
        </div>
        <h2 className="text-display text-5xl sm:text-6xl mb-8">
          {project.title}
        </h2>

        <p className="font-serif text-2xl leading-snug mb-10 text-foreground/85 border-l-2 border-foreground pl-6">
          {project.fullDescription}
        </p>

        <div className="grid sm:grid-cols-2 gap-10 mb-10">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4 pb-2 border-b border-foreground">
              Características
            </p>
            <ul className="space-y-2">
              {project.features.map((f, i) => (
                <li key={i} className="flex items-baseline gap-3 text-sm">
                  <span className="font-mono text-[10px] text-muted-foreground">0{i + 1}</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4 pb-2 border-b border-foreground">
              Tecnologías
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span key={t} className="font-mono text-xs uppercase tracking-wider border border-foreground px-3 py-1">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-xs uppercase tracking-[0.2em] hover:bg-foreground/85 transition"
        >
          <Github className="w-4 h-4" /> Ver en GitHub
          <ArrowUpRight size={14} />
        </a>
      </div>
    </motion.div>
  </motion.div>
);

export const Projects = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  const [featured, ...rest] = projects;

  return (
    <section id="proyectos" className="relative py-24 sm:py-32 border-t-2 border-foreground bg-pop-yellow/15">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between border-b-2 border-foreground pb-4 mb-16">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] mb-2">
              <span className="bg-pop-coral text-background px-2 py-0.5 border border-foreground">Capítulo 03</span>
            </p>
            <h2 className="text-display text-5xl sm:text-6xl md:text-7xl mt-3">
              La <em className="marker-coral">obra</em>
            </h2>
          </div>
          <span className="hidden md:block font-mono text-xs text-foreground/60">P. 03 / 04</span>
        </div>


        {/* Magazine layout: featured + grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          <ProjectRow project={featured} index={0} featured onClick={() => setSelected(featured)} />
          {rest.map((p, i) => (
            <ProjectRow key={p.id} project={p} index={i + 1} onClick={() => setSelected(p)} />
          ))}
        </div>

        <div className="mt-20 pt-8 border-t-2 border-foreground flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="font-serif serif-italic text-2xl">Continuá explorando el catálogo completo.</p>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pop inline-flex items-center gap-2 px-6 py-3 bg-pop-cobalt text-background text-xs uppercase tracking-[0.2em]"
          >
            <Github className="w-4 h-4" />
            Archivo en GitHub
            <ExternalLink size={14} />
          </a>
        </div>


        <AnimatePresence>
          {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
        </AnimatePresence>
      </div>
    </section>
  );
};
