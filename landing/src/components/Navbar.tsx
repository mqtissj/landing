import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/data/projects";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { name: "Índice", href: "#inicio", num: "01" },
  { name: "Perfil", href: "#sobre-mi", num: "02" },
  { name: "Obra", href: "#proyectos", num: "03" },
  { name: "Contacto", href: "#contacto", num: "04" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
        <a href="#inicio" className="flex items-baseline gap-2 group">
          <span className="font-serif text-3xl leading-none">M<span className="serif-italic">f</span></span>
          <span className="hidden sm:inline text-xs uppercase tracking-[0.2em] text-muted-foreground">Portfolio · 2026</span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group flex items-baseline gap-1.5 text-sm"
            >
              <span className="font-mono text-[10px] text-muted-foreground">{link.num}</span>
              <span className="hover-underline">{link.name}</span>
            </a>
          ))}
          <div className="flex items-center gap-2">
            <a
              href={personalInfo.cv.es}
              download
              className="btn-pop flex items-center gap-2 px-3 py-2 text-[11px] uppercase tracking-[0.2em] bg-pop-yellow text-foreground font-medium"
            >
              <Download size={14} />
              CV ES
            </a>
            <a
              href={personalInfo.cv.en}
              download
              className="btn-pop flex items-center gap-2 px-3 py-2 text-[11px] uppercase tracking-[0.2em] bg-pop-mint text-foreground font-medium"
            >
              <Download size={14} />
              EN
            </a>
            <ThemeToggle />
          </div>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 border border-border"
            aria-label="Menú"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="container mx-auto px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-baseline gap-3 text-2xl font-serif"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="font-mono text-xs text-muted-foreground">{link.num}</span>
                  {link.name}
                </a>
              ))}
              <div className="flex flex-wrap gap-2 mt-4">
                <a
                  href={personalInfo.cv.es}
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-[0.18em] bg-foreground text-background"
                >
                  <Download size={14} /> CV Español
                </a>
                <a
                  href={personalInfo.cv.en}
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-[0.18em] bg-pop-mint text-foreground border border-foreground"
                >
                  <Download size={14} /> CV English
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
