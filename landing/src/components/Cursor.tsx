import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const Cursor = () => {
  const [active, setActive] = useState(false);
  const [hovering, setHovering] = useState(false);

  const mx = useMotionValue(-200);
  const my = useMotionValue(-200);
  const rx = useSpring(mx, { stiffness: 300, damping: 26, mass: 0.5 });
  const ry = useSpring(my, { stiffness: 300, damping: 26, mass: 0.5 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) return;

    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
      if (!active) setActive(true);
    };
    

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(!!t.closest("a, button"));
    };

    document.documentElement.classList.add("custom-cursor");
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);

    return () => {
      document.documentElement.classList.remove("custom-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [mx, my, active]);

  const isTouch =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0);
  if (isTouch) return null;

  return (
    <>
      {/* Dot: sits exactly at the pointer, inverts whatever color is beneath it */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-2 h-2 rounded-full bg-white mix-blend-difference"
        style={{ x: mx, y: my, marginLeft: -4, marginTop: -4 }}
        animate={{ opacity: active ? 1 : 0 }}
      />
      {/* Ring: spring-delayed, expands on interactive elements */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full border border-foreground/35"
        style={{ x: rx, y: ry }}
        animate={{
          width: hovering ? 54 : 36,
          height: hovering ? 54 : 36,
          marginLeft: hovering ? -27 : -18,
          marginTop: hovering ? -27 : -18,
          opacity: active ? (hovering ? 0.65 : 0.3) : 0,
        }}
        transition={{ duration: 0.18, ease: "easeOut" }}
      />
    </>
  );
};
