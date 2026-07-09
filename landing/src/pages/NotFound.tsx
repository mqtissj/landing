import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404: intento de acceso a una ruta inexistente:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <div className="text-center">
        <h1 className="mb-4 text-display text-6xl">404</h1>
        <p className="mb-4 text-xl text-foreground/70">Esta página no existe.</p>
        <a href="/" className="hover-underline text-pop-cobalt">
          Volver al inicio
        </a>
      </div>
    </div>
  );
};

export default NotFound;
