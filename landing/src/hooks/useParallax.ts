import { useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

export const useParallax = (offset: number = 50) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return { ref, y, opacity, scrollYProgress };
};

export const useParallaxRange = (
  scrollYProgress: MotionValue<number>,
  inputRange: number[],
  outputRange: number[]
) => {
  return useTransform(scrollYProgress, inputRange, outputRange);
};

export const useMouseParallax = () => {
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    mouseX.current = (e.clientX - rect.left - rect.width / 2) / rect.width;
    mouseY.current = (e.clientY - rect.top - rect.height / 2) / rect.height;
  };

  return { mouseX, mouseY, handleMouseMove };
};
