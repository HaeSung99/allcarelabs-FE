"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Placeholder from "@/components/Placeholder";
import ImageSlider from "@/components/ImageSlider";
import LogoSlider from "@/components/LogoSlider";
import AnimatedSection, { AnimatedItem } from "@/components/AnimatedSection";
import CountUp from "@/components/CountUp";
import Typewriter from "@/components/Typewriter";
import SimpleTypewriter from "@/components/SimpleTypewriter";
import FAQSection from "@/components/FAQSection";
import { site, highlights, business, heroImages, heroText, partnerLogos, stats, process, testimonials, faq } from "@/data/site";

export default function HomePage() {
  // navbar에서 홈 버튼 클릭 시 타이핑 오버레이 건너뛰기
  const [showTypewriter, setShowTypewriter] = useState(() => {
    if (typeof window !== 'undefined') {
      return !sessionStorage.getItem('skipTypewriter');
    }
    return true;
  });
  const [showHero, setShowHero] = useState(() => {
    if (typeof window !== 'undefined') {
      return !!sessionStorage.getItem('skipTypewriter');
    }
    return false;
  });
  const [isTestimonialsVisible, setIsTestimonialsVisible] = useState(false);

  // Typewriter 오버레이 표시 중 스크롤 막기
  useEffect(() => {
    // navbar에서 온 경우 세션 스토리지 플래그 제거
    if (typeof window !== 'undefined' && sessionStorage.getItem('skipTypewriter')) {
      sessionStorage.removeItem('skipTypewriter');
    }

    if (showTypewriter) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showTypewriter]);

  // 고객 후기 섹션 가시성 감지
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsTestimonialsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const testimonialsSection = document.getElementById('testimonials-section');
    if (testimonialsSection) {
      observer.observe(testimonialsSection);
    }

    return () => {
      if (testimonialsSection) {
        observer.unobserve(testimonialsSection);
      }
    };
  }, []);

  const handleTypewriterComplete = () => {
    setShowTypewriter(false);
    // 약간의 딜레이 후 hero 섹션 나타남
    setTimeout(() => setShowHero(true), 300);
  };

  return (
    <main>
      {/* Typewriter 오버레이 */}
      {showTypewriter && (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
          <div className="text-center px-4 w-full">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900">
              <Typewriter 
                texts={[
                  "스포츠의학 석•박사 및 물리치료사로 구성된 헬스케어팀",
                  "스포츠의무지원 | 셀럽케어 | 교육파견",
                  "전문가가 제공하는 프리미엄 컨디셔닝",
                  "현장에서 검증된 전문 케어"
                ]}
                typingSpeed={50}
                deletingSpeed={25}
                pauseTime={1500}
                onComplete={handleTypewriterComplete}
                className="inline-block"
              />
            </h1>
          </div>
          {/* 스킵 버튼 - 우측 하단 고정 */}
          <button
            onClick={handleTypewriterComplete}
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 px-5 py-2.5 text-sm font-medium text-neutral-500 hover:text-neutral-900 border border-neutral-200 rounded-full hover:border-neutral-900 hover:bg-neutral-50 transition-all duration-200 backdrop-blur-sm bg-white/80"
          >
            SKIP <span className="hidden md:inline"> &nbsp;▶▶</span>
          </button>
        </div>
      )}

      {/* HERO - 이미지 우선 레이아웃 */}
      <section className={`relative min-h-screen flex items-end transition-opacity duration-500 overflow-hidden ${showHero ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {/* 큰 이미지 영역 - 배경으로 */}
        <div className="absolute inset-0 w-full h-full">
          <div className="relative w-full h-full animate-fade-up [&>div]:rounded-none [&>div]:border-0">
            <ImageSlider images={heroImages} />
          </div>
          {/* 이미지 오버레이 그라디언트 - 모바일에서 더 밝게 */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent md:from-black/70 md:via-black/30 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 md:to-black/40 z-10" />
        </div>

        {/* 텍스트 콘텐츠 - 하단 오버레이 */}
        <div className="relative z-20 w-full px-4 md:px-8 lg:px-12 pb-8 md:pb-16 lg:pb-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl space-y-4 md:space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/90 backdrop-blur-sm border border-white/20 text-neutral-900 text-xs md:text-sm font-medium animate-fade-up shadow-lg">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-pulse" />
                전문 헬스케어팀
              </div>

              {/* 헤드라인 - 흰색 텍스트 */}
              <div className="space-y-3 md:space-y-4 animate-fade-up-delay-200">
                <h1 className="text-2xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.1] drop-shadow-2xl">
                  {heroText.main}
                </h1>
                <p className="text-sm md:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-xl drop-shadow-lg">
                  {heroText.sub1}
                  <br />
                  <span className="text-white font-medium">{heroText.sub2}</span>
                </p>
              </div>

              {/* CTA 버튼 */}
              <div className="flex flex-wrap gap-3 md:gap-4 pt-2 md:pt-4 animate-fade-up-delay-400">
                <Link
                  className="group relative inline-flex items-center gap-2 px-5 py-2.5 md:px-8 md:py-4 bg-white text-neutral-900 rounded-lg hover:bg-neutral-100 transition-all duration-300 font-semibold text-sm md:text-base shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
                  href="/business"
                >
                  협업 · 의뢰하기
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
                <Link
                  className="inline-flex items-center gap-2 px-5 py-2.5 md:px-8 md:py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300 font-semibold text-sm md:text-base"
                  href="/team"
                >
                  팀 소개
                </Link>
                <a
                  className="inline-flex items-center gap-2 px-4 py-2.5 md:px-6 md:py-4 text-white/80 hover:text-white transition-colors font-medium text-sm md:text-base"
                  href={site.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Instagram
                </a>
              </div>

              {/* 통계 카드 - 이미지 하단에 */}
              <div className="grid gap-3 md:gap-4 sm:grid-cols-3 pt-6 md:pt-8 animate-fade-up-delay-600">
                {business.proof.map((p, idx) => {
                  const icons = ['🏃', '⚕️', '🤝'];
                  return (
                    <div
                      key={p.label}
                      className={[
                        "group relative overflow-hidden rounded-xl md:rounded-2xl border border-white/30 px-4 py-4 md:px-[29px] md:py-6 bg-white/10 backdrop-blur-md",
                        "hover:bg-white/20 hover:border-white/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300",
                        idx === 0 ? "[animation-delay:120ms]" : "",
                        idx === 1 ? "[animation-delay:220ms]" : "",
                        idx === 2 ? "[animation-delay:320ms]" : "",
                      ].join(" ")}
                    >
                      {/* 배경 효과 */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-white/20 transition-colors" />
                      
                      {/* 콘텐츠 */}
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                          <div className="text-xl md:text-2xl">{icons[idx]}</div>
                          <div className="text-[10px] md:text-xs font-semibold text-white/90 uppercase tracking-wider">{p.label}</div>
                        </div>
                        <div className="text-sm md:text-base font-bold text-white leading-tight drop-shadow-md whitespace-nowrap">
                          {p.value}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 핵심 영역 */}
      <Section
        eyebrow="What we do"
        title="현장 의무지원에 최적화된 운영"
        desc="대회 성격에 따라 동선/인력/장비를 구성하고, 체계적인 프로토콜로 안정적으로 지원합니다."
      >
        <AnimatedSection stagger={true}>
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((h, idx) => (
              <AnimatedItem key={h.title}>
                <div
                  className={[
                    "group relative overflow-hidden rounded-2xl border border-neutral-200/60 p-8 bg-gradient-to-br from-white to-neutral-50/50 flex flex-col",
                    "transition-all duration-300",
                    "hover:-translate-y-2 hover:shadow-xl hover:border-neutral-300",
                  ].join(" ")}
                >
                  {/* 배경 그라디언트 효과 */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-green-100/30 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-green-200/40 transition-colors" />
                  
                  {/* 이모티콘 - 일러스트 자리 */}
                  <div className="relative z-10 flex justify-center mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Placeholder className="w-12 h-12 rounded-xl" />
                    </div>
                  </div>

                  {/* 텍스트 */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-center mb-3 text-neutral-900">{h.title}</h3>
                    <p className="text-sm text-neutral-600 text-center mb-6 leading-relaxed">{h.desc}</p>
                  </div>

                  {/* 이미지 영역 - 사진 자리 (16:9 비율) */}
                  <div className="flex justify-center mt-auto relative z-10">
                    <div className="w-full aspect-[16/9] relative rounded-xl overflow-hidden bg-neutral-200 shadow-md group-hover:shadow-xl transition-shadow">
                      {h.image && (
                        <Image
                          src={h.image}
                          alt={h.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* 브랜드 로고 슬라이더 */}
      <LogoSlider logos={partnerLogos} />

      {/* 통계/실적 섹션 */}
      <Section
        eyebrow="Our Impact"
        title="검증된 실적과 신뢰"
        desc="다년간의 현장 경험으로 쌓아온 실적과 고객 만족도를 확인하세요."
        className="bg-gradient-to-b from-white to-neutral-50/50"
      >
        <AnimatedSection stagger={true}>
          <div className="grid gap-6 md:grid-cols-3">
            {stats.map((stat, idx) => (
              <AnimatedItem key={idx}>
                <motion.div
                  className={[
                    "group relative overflow-hidden rounded-2xl border border-neutral-200/60 bg-white p-8 text-center",
                    "transition-all duration-300",
                    "hover:-translate-y-2 hover:shadow-xl hover:border-neutral-300",
                  ].join(" ")}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* 배경 그라디언트 */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-green-100/20 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-green-200/30 transition-colors" />
                  
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-extrabold bg-gradient-to-br from-neutral-900 to-neutral-700 bg-clip-text text-transparent mb-3">
                      <CountUp value={stat.value} duration={2} />
                    </div>
                    <div className="text-xl font-bold text-neutral-900 mb-2">
                      {stat.label}
                    </div>
                    <div className="text-sm text-neutral-500 font-medium">{stat.desc}</div>
                  </div>
                </motion.div>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* 프로세스/워크플로우 섹션 */}
      <Section
        eyebrow="How we work"
        title="체계적인 운영 프로세스"
        desc="대회 전부터 사후까지 단계별로 체계화된 프로세스로 안정적인 지원을 제공합니다."
      >
        <AnimatedSection stagger={true}>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item, idx) => (
              <AnimatedItem key={idx}>
                <motion.div
                  className={[
                    "group relative overflow-hidden rounded-2xl border border-neutral-200/60 bg-gradient-to-br from-white to-neutral-50/30 p-6",
                    "transition-all duration-300",
                    "hover:-translate-y-2 hover:shadow-xl hover:border-neutral-300",
                  ].join(" ")}
                  whileHover={{ y: -4 }}
                >
                  {/* 배경 효과 */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100/20 rounded-full -mr-12 -mt-12 blur-2xl group-hover:bg-blue-200/30 transition-colors" />
                  
                  <div className="relative z-10">
                    <div className="text-4xl font-extrabold text-neutral-300 mb-4 group-hover:text-neutral-400 transition-colors">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-3">{item.title}</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* 고객 후기/추천사 섹션 */}
      <Section
        id="testimonials-section"
        eyebrow="Testimonials"
        title="고객 후기"
        desc="실제로 서비스를 경험한 고객들의 생생한 후기를 확인하세요."
        className="bg-gradient-to-b from-neutral-50 to-white"
      >
        <AnimatedSection stagger={true}>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, idx) => (
              <AnimatedItem key={idx}>
                <motion.div
                  className={[
                    "group relative overflow-hidden rounded-2xl border border-neutral-200/60 bg-white p-8",
                    "transition-all duration-300",
                    "hover:-translate-y-2 hover:shadow-xl hover:border-neutral-300",
                  ].join(" ")}
                  whileHover={{ y: -4 }}
                >
                  {/* 배경 효과 */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-100/20 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-yellow-200/30 transition-colors" />
                  
                  <div className="relative z-10">
                    <div className="flex mb-5 gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">★</span>
                      ))}
                    </div>
                    <p className="text-neutral-700 mb-6 leading-relaxed text-[15px] font-medium">
                      "<SimpleTypewriter 
                        text={testimonial.content}
                        typingSpeed={50}
                        isVisible={isTestimonialsVisible}
                        showCursor={false}
                      />"
                    </p>
                    <div className="border-t border-neutral-200 pt-5">
                      <div className="font-bold text-neutral-900 text-base">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-neutral-500 mt-1">{testimonial.role}</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* 협업 CTA */}
      <Section
        eyebrow="Partner"
        title="대회 · 협회 · 브랜드 협업"
        desc="부스 운영부터 협찬·브랜디드 운영(PPL 포함)까지, 참가자 경험을 해치지 않는 '자연스러운 노출'로 설계합니다."
        className="bg-gradient-to-b from-white to-neutral-50/50"
      >
        <AnimatedSection>
          <div className="grid gap-6 md:grid-cols-2">
            <AnimatedItem>
              <div className="group relative overflow-hidden rounded-2xl border border-neutral-200/60 bg-gradient-to-br from-white to-neutral-50/30 p-8 flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-neutral-300">
                {/* 배경 효과 */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100/20 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-blue-200/30 transition-colors" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-xl font-bold mb-6 text-neutral-900 h-[32px]">이런 협업이 잘 맞아요</h3>
                  <div className="grid gap-4 grid-cols-2 flex-1">
                    {business.offerings.map((offering, idx) => (
                      <div
                        key={idx}
                        className={[
                          "group/item rounded-xl border border-neutral-200/60 bg-white/80 backdrop-blur-sm p-5",
                          "transition-all duration-300",
                          "hover:-translate-y-1 hover:shadow-lg hover:border-neutral-300",
                          "flex flex-col h-full",
                        ].join(" ")}
                      >
                        <h4 className="text-sm font-bold mb-3 text-neutral-900 min-h-[40px]">{offering.title}</h4>
                        <p className="text-xs text-neutral-600 leading-relaxed flex-1">
                          {offering.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedItem>

            <AnimatedItem>
              <div className="group relative overflow-hidden rounded-2xl border border-neutral-200/60 bg-gradient-to-br from-neutral-50/50 to-white p-8 flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-neutral-300">
                {/* 배경 효과 */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-green-100/20 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-green-200/30 transition-colors" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-xl font-bold mb-6 text-neutral-900 h-[32px]">제안 시 포함하면 좋은 정보</h3>
                  <div className="grid gap-4 grid-cols-2 flex-1">
                    {business.proposalInfo.map((info, idx) => (
                      <div
                        key={idx}
                        className={[
                          "group/item rounded-xl border border-neutral-200/60 bg-white/90 backdrop-blur-sm p-5",
                          "transition-all duration-300",
                          "hover:-translate-y-1 hover:shadow-lg hover:border-neutral-300",
                          "flex flex-col h-full",
                        ].join(" ")}
                      >
                        <h4 className="text-sm font-bold mb-3 text-neutral-900 min-h-[40px]">{info.title}</h4>
                        <p className="text-xs text-neutral-600 leading-relaxed flex-1">
                          {info.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedItem>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Link
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              href="/business"
            >
              비즈니스 상세 보기
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </AnimatedSection>
      </Section>

      {/* FAQ 섹션 */}
      <FAQSection faq={faq} />

      {/* 최종 CTA 섹션 */}
      <Section
        eyebrow="Contact"
        title="협업 문의하기"
        desc="대회나 행사 의무지원이 필요하신가요? 언제든지 문의해주세요."
        className="bg-neutral-900 text-white"
      >
        <AnimatedSection>
          <div className="text-center">
            <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
              올케어랩스는 스포츠 현장에서 필요한 모든 의무지원 서비스를 제공합니다.
              <br />
              대회 규모와 성격에 맞는 맞춤형 솔루션을 제안해드립니다.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={`mailto:${site.email}`}
                className="rounded-md bg-white text-neutral-900 px-6 py-3 hover:opacity-90 transition font-medium"
              >
                이메일 문의
              </a>
              <a
                href={`tel:${site.phone}`}
                className="rounded-md border-2 border-white text-white px-6 py-3 hover:bg-white hover:text-neutral-900 transition font-medium"
              >
                전화 문의
              </a>
              <Link
                href="/business"
                className="rounded-md border-2 border-white text-white px-6 py-3 hover:bg-white hover:text-neutral-900 transition font-medium"
              >
                비즈니스 상세 보기
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </main>
  );
}
