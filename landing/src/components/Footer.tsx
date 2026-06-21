import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/data/projects";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t-2 border-foreground bg-foreground text-background relative">
      <div className="h-3 flex">
        <div className="flex-1 bg-pop-yellow" />
        <div className="flex-1 bg-pop-coral" />
        <div className="flex-1 bg-pop-cobalt" />
        <div className="flex-1 bg-pop-mint" />
        <div className="flex-1 bg-pop-lilac" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          <div>
            <p className="font-serif text-5xl leading-none">M<span className="serif-italic">f</span></p>
            <p className="text-xs uppercase tracking-[0.25em] mt-3 opacity-70">Portfolio Editorial</p>
          </div>
          <div className="text-sm space-y-1">
            <p className="text-[10px] uppercase tracking-[0.3em] opacity-70 mb-2">Coordenadas</p>
            <p className="font-serif text-xl">{personalInfo.email}</p>
            <p className="font-serif text-xl">{personalInfo.phone}</p>
            <p className="opacity-70">{personalInfo.location}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] opacity-70 mb-3">Síganme</p>
            <div className="flex gap-3">
              {[
                { icon: Github, href: personalInfo.github },
                { icon: Linkedin, href: personalInfo.linkedin },
                { icon: Mail, href: `mailto:${personalInfo.email}` },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-background/30 hover:bg-background hover:text-foreground transition"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-6 border-t border-background/20 flex flex-col sm:flex-row justify-between gap-3 text-xs uppercase tracking-[0.2em] opacity-70">
          <span>© {year} {personalInfo.name}</span>
          <span className="font-serif normal-case tracking-normal serif-italic text-base">Impreso en Montevideo</span>
          <span>Vol. 01 · MMXXVI</span>
        </div>
      </div>
    </footer>
  );
};
