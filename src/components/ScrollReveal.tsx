"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export function ScrollReveal({
  children,
  className = "",
  as: Component = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: keyof typeof motion;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.05,
    once: false,
  });

  const MotionTag = motion[Component] as typeof motion.div;

  return (
    <MotionTag
      ref={ref}
      initial={fadeUp.initial}
      animate={isInView ? fadeUp.animate : fadeUp.initial}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
