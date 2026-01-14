"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1], // 더 부드러운 ease-out
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

export default function AnimatedSection({ children, className = "", stagger = false }) {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={stagger ? staggerContainer : fadeInUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const AnimatedItem = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.div>
  );
};

