import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404: intento de acceso a una ruta inexistente:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden grain bg-background text-foreground px-6">
      <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-24 -left-24 w-[24rem] h-[24rem] rounded-full bg-pop-coral/25 blur-3xl" />
        <div className="absolute bottom-10 right-0 w-[22rem] h-[22rem] rounded-full bg-pop-cobalt/20 blur-3xl" />
      </div>

      <div className="text-center max-w-md">
        <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/60 mb-4">
          <span className="bg-pop-coral text-foreground px-2 py-0.5 border border-foreground">Página fuera de tirada</span>
        </p>
        <h1 className="text-display text-7xl sm:text-8xl mb-4">
          4<em className="serif-italic text-pop-cobalt">0</em>4
        </h1>
        <p className="font-serif text-xl mb-8 text-foreground/80">
          Esta página no forma parte de esta edición:{" "}
          <code className="font-mono text-sm bg-secondary px-1.5 py-0.5 border border-foreground/30">{location.pathname}</code>{" "}
          no existe.
        </p>
        <a href="/" className="group btn-pop inline-flex items-center gap-2 px-6 py-3 bg-pop-cobalt text-background text-sm uppercase tracking-[0.18em]">
          Volver al inicio
          <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
        </a>
      </div>
    </div>
  );
};

export default NotFound;
