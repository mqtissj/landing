import { useEffect, useState } from "react";

export const ScrollProgress = () => {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const calc = () => {
      const el = document.documentElement;
      const total = el.scrollHeight - el.clientHeight;
      setPct(total > 0 ? (el.scrollTop / total) * 100 : 0);
    };
    window.addEventListener("scroll", calc, { passive: true });
    return () => window.removeEventListener("scroll", calc);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[9996] h-[2px] bg-transparent pointer-events-none">
      <div
        className="h-full bg-pop-cobalt origin-left"
        style={{ width: `${pct}%`, transition: "width 60ms linear" }}
      />
    </div>
  );
};
