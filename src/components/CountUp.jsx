"use client";

import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CountUp({ value, duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    // 숫자 추출 (예: "50+", "10,000+", "98%")
    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
    const suffix = value.replace(/[0-9.,]/g, ""); // +, % 등

    if (isNaN(numericValue)) {
      setCount(value);
      return;
    }

    const startTime = Date.now();
    const endValue = numericValue;

    const animate = () => {
      const now = Date.now();
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);

      const currentValue = Math.floor(easeOut * endValue);

      // 천 단위 콤마 추가
      const formattedValue = currentValue.toLocaleString();

      setCount(formattedValue + suffix);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animate();
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count || value}
    </span>
  );
}

