import { motion } from "framer-motion";
import { Download, ArrowUpRight, Sparkles, Star } from "lucide-react";
import { personalInfo } from "@/data/projects";
import profilePhoto from "@/assets/profile-photo.jpeg";

const charVariant = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] },
  }),
};

const AnimatedWord = ({
  text,
  baseDelay,
  className,
}: {
  text: string;
  baseDelay: number;
  className?: string;
}) => (
  <span className={className} aria-label={text}>
    {text.split("").map((char, i) => (
      <motion.span
        key={i}
        custom={baseDelay / 0.04 + i}
        variants={charVariant}
        initial="hidden"
        animate="visible"
        style={{ display: "inline-block" }}
        aria-hidden="true"
      >
        {char}
      </motion.span>
    ))}
  </span>
);

export const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-32 pb-12 overflow-hidden grain hero-bg-grid"
    >
      {/* Color blobs background */}
      <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-pop-yellow/40 blur-3xl" />
        <div className="absolute top-40 right-0 w-[24rem] h-[24rem] rounded-full bg-pop-cobalt/20 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 w-[22rem] h-[22rem] rounded-full bg-pop-coral/25 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12">
        {/* Masthead */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-foreground/70 border-y-2 border-foreground py-3 mb-12"
        >
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-pop-mint animate-pulse" />
            Vol. 01 · Montevideo
          </span>
          <span>MMXXVI</span>
        </motion.div>

        {/* Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left rail */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3 space-y-6 text-sm"
          >
            <div className="inline-block sticker animate-wiggle">
              <Sparkles size={12} /> Open to work
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/60 mb-2">Sección</p>
              <p className="font-serif text-2xl leading-tight">Perfil del<br/><em>desarrollador</em></p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/60 mb-2">Disciplina</p>
              <p>
                <span className="marker-yellow">Backend</span> · APIs · Arquitectura
              </p>
            </div>
            <div className="bg-pop-cobalt text-background p-4 border-2 border-foreground shadow-pop glow-cobalt">
              <p className="text-[10px] uppercase tracking-[0.25em] opacity-80 mb-1">Stack principal</p>
              <p className="font-mono text-xs leading-relaxed">Java · Spring Boot<br/>C# · .NET · SQL</p>
            </div>
          </motion.aside>

          {/* Headline */}
          <div className="lg:col-span-6 relative">
            <motion.p
              className="t-eyebrow mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hola — soy
            </motion.p>

            <h1 className="text-display text-[3.75rem] sm:text-7xl md:text-8xl lg:text-[7.75rem] mb-8 relative">
              <AnimatedWord text="Matías" baseDelay={0.32} />
              <br />
              <em className="serif-italic">
                <AnimatedWord text="Filgueiras" baseDelay={0.58} />
              </em>
              <motion.span
                className="text-pop-cobalt"
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.02, duration: 0.4, ease: "backOut" }}
              >
                .
              </motion.span>
              <Star
                className="absolute -top-4 -right-2 sm:right-8 text-foreground/30 animate-spin-slow"
                size={42}
                strokeWidth={1}
              />
            </h1>

            <motion.p
              className="t-lead max-w-2xl mb-10"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1 }}
            >
              <em className="serif-italic">Programador Web</em> certificado por ORT Uruguay y futuro
              Analista Programador. Base sólida en
              <span className="marker-mint"> backend, APIs REST y testing</span>,
              ahora en formación hacia <span className="marker-mint">IA, Data Science y ciberseguridad</span>.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.22 }}
            >
              <a
                href="#proyectos"
                className="group btn-pop inline-flex items-center gap-3 px-6 py-3 bg-pop-cobalt text-background text-sm uppercase tracking-[0.18em]"
              >
                Ver la obra
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </a>
              <a
                href={personalInfo.cv.es}
                download
                className="group btn-pop inline-flex items-center gap-2 px-6 py-3 bg-pop-yellow text-foreground text-sm uppercase tracking-[0.18em]"
              >
                <Download size={16} />
                CV (ES)
              </a>
              <a
                href={personalInfo.cv.en}
                download
                className="group btn-pop inline-flex items-center gap-2 px-6 py-3 bg-pop-mint text-foreground text-sm uppercase tracking-[0.18em]"
              >
                <Download size={16} />
                CV (EN)
              </a>
            </motion.div>
          </div>

          {/* Portrait */}
          <motion.figure
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="lg:col-span-3 lg:mt-12"
          >
            <div className="relative group">
              {/* Color frame stack */}
              <div className="absolute -top-3 -left-3 w-full h-full bg-pop-coral border-2 border-foreground transition-transform duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1" />
              <div className="absolute -top-1.5 -left-1.5 w-full h-full bg-pop-yellow border-2 border-foreground" />
              <img
                src={profilePhoto}
                alt="Retrato de Matías Filgueiras"
                className="relative w-full aspect-[3/4] object-cover border-2 border-foreground hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute -bottom-3 -right-3 bg-pop-mint text-foreground px-3 py-1.5 border-2 border-foreground shadow-pop">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-semibold">Hola 👋</span>
              </div>
            </div>
            <figcaption className="mt-6 text-xs text-foreground/65 border-t-2 border-foreground pt-3">
              <em className="serif-italic font-serif text-base text-foreground">Retrato del autor</em><br/>
              {personalInfo.location} — disponible inmediato.
            </figcaption>
          </motion.figure>
        </div>
      </div>

    </section>
  );
};
