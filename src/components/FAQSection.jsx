"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection, { AnimatedItem } from "@/components/AnimatedSection";
import Section from "@/components/Section";

export default function FAQSection({ faq = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <Section
      eyebrow="FAQ"
      title="자주 묻는 질문"
      desc="궁금한 점이 있으신가요? 자주 묻는 질문을 확인해보세요."
      className="bg-gradient-to-b from-neutral-50/50 to-white"
    >
      <AnimatedSection stagger={true}>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faq.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <AnimatedItem key={idx}>
                  <div
                    className={[
                      "group relative overflow-hidden rounded-2xl border border-neutral-200/60 bg-white p-6",
                      "transition-all duration-300",
                      "hover:shadow-lg hover:border-neutral-300",
                    ].join(" ")}
                  >
                    {/* 배경 효과 */}
                    <div className={`absolute top-0 right-0 w-24 h-24 bg-purple-100/10 rounded-full -mr-12 -mt-12 blur-2xl transition-colors ${isOpen ? 'bg-purple-200/20' : ''}`} />
                    
                    <div className="relative z-10">
                      <button
                        onClick={() => toggleFAQ(idx)}
                        className="w-full text-left cursor-pointer"
                      >
                        {/* Q 레이블과 질문 */}
                        <div className="flex items-start gap-3">
                          <span className="text-sm font-bold text-neutral-500 uppercase tracking-wider flex-shrink-0 pt-1">Q</span>
                          <div className="flex-1">
                            <div className="font-bold text-neutral-900 text-base flex items-center justify-between">
                              <span>{item.question}</span>
                              <span className={`text-neutral-400 transition-transform text-xl ml-4 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                                ▼
                              </span>
                            </div>
                            
                            {/* 답변 영역 */}
                            <AnimatePresence>
                              {isOpen && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                  animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                  transition={{ duration: 0.3, ease: "easeInOut" }}
                                  className="overflow-hidden"
                                >
                                  <div className="pt-4 border-t border-neutral-200 text-neutral-600 leading-relaxed text-sm">
                                    {item.answer}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </AnimatedItem>
              );
            })}
          </div>
        </div>
      </AnimatedSection>
    </Section>
  );
}

