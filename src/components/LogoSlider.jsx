"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LogoSlider({ logos = { row1: [], row2: [], row3: [] } }) {
  // 각 줄의 로고 배열
  const rows = [logos.row1 || [], logos.row2 || [], logos.row3 || []];

  // 모든 줄이 비어있으면 렌더링하지 않음
  if (rows.every((row) => row.length === 0)) {
    return null;
  }

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {rows.map((row, rowIdx) => {
            // 줄이 비어있으면 렌더링하지 않음
            if (row.length === 0) return null;

            // 각 줄마다 다른 속도 (15s, 18s, 21s)
            const duration = 15 + rowIdx * 3;
            // 원형 구조를 위해 로고를 3번 반복
            const duplicatedRow = [...row, ...row, ...row];

            return (
              <div key={rowIdx} className="overflow-hidden">
                <motion.div
                  className="flex gap-12 items-center"
                  animate={{
                    x: ["0%", "-33.333%"], // 원형 구조: 첫 세트가 사라지면 두 번째 세트가 시작 위치로
                  }}
                  transition={{
                    duration: duration,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {duplicatedRow.map((logo, idx) => (
                    <motion.div
                      key={`${rowIdx}-${idx}`}
                      className="flex-shrink-0 w-32 h-16 relative grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                      whileHover={{ scale: 1.05 }}
                    >
                      {logo.type === "image" ? (
                        <Image
                          src={logo.src}
                          alt={logo.alt || `로고 ${idx + 1}`}
                          fill
                          className="object-contain"
                        />
                      ) : (
                        <div className="w-full h-full bg-neutral-200 rounded flex items-center justify-center">
                          <span className="text-xs text-neutral-400">로고</span>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

