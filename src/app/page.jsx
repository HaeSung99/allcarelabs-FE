"use client";

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
import { site, highlights, business, heroImages, heroText, partnerLogos, stats, process, testimonials, faq } from "@/data/site";

export default function HomePage() {
  return (
    <main>
      {/* HERO - 좌측 섹션 */}
      <section className="border-b min-h-[80vh] flex items-center">
        <div className="mx-auto max-w-[95%] md:max-w-[90%] lg:max-w-[85%] px-2 md:px-4 py-16 w-full">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 mb-6 animate-slide-in-left">
                {heroText.main}
              </h1>
              <p className="text-lg md:text-xl text-neutral-600 mb-8 leading-relaxed animate-fade-up-delay-200">
                {heroText.sub1}
                <br />
                {heroText.sub2}
              </p>

              <div className="mt-8 flex flex-wrap gap-3 animate-fade-up-delay-400">
                <Link
                  className="rounded-md bg-neutral-900 px-6 py-3 text-white hover:opacity-90 transition font-medium"
                  href="/business"
                >
                  협업 · 의뢰하기
                </Link>
                <Link
                  className="rounded-md border-2 border-neutral-900 px-6 py-3 hover:bg-neutral-50 transition font-medium"
                  href="/team"
                >
                  팀 소개
                </Link>
                <a
                  className="rounded-md border-2 border-neutral-900 px-6 py-3 hover:bg-neutral-50 transition font-medium"
                  href={site.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </div>

              <div className="mt-12 grid gap-3 sm:grid-cols-3">
                {business.proof.map((p, idx) => (
                  <div
                    key={p.label}
                    className={[
                      "rounded-xl border p-4 bg-white",
                      "animate-fade-up",
                      idx === 0 ? "[animation-delay:120ms]" : "",
                      idx === 1 ? "[animation-delay:220ms]" : "",
                      idx === 2 ? "[animation-delay:320ms]" : "",
                    ].join(" ")}
                  >
                    <div className="text-xs text-neutral-500">{p.label}</div>
                    <div className="mt-1 font-semibold">{p.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 우측 섹션 - 이미지 슬라이더 */}
            <div className="animate-fade-up [animation-delay:120ms]">
              <ImageSlider images={heroImages} />
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
          <div className="grid gap-4 md:grid-cols-3">
            {highlights.map((h, idx) => (
              <AnimatedItem key={h.title}>
                <div
                  className={[
                    "rounded-xl border p-6 bg-white flex flex-col",
                    "transition duration-200",
                    "hover:-translate-y-1 hover:shadow-md",
                  ].join(" ")}
                >
              {/* 이모티콘 - 일러스트 자리 */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
                  <Placeholder className="w-10 h-10 rounded-full" />
                </div>
              </div>

              {/* 텍스트 */}
              <h3 className="text-lg font-semibold text-center mb-2">{h.title}</h3>
              <p className="text-sm text-neutral-600 text-center mb-4">{h.desc}</p>

              {/* 이미지 영역 - 사진 자리 (16:9 비율) */}
              <div className="flex justify-center mt-auto">
                <div className="w-full max-w-[3000px] aspect-[16/9] relative rounded-lg overflow-hidden bg-neutral-200">
                  {h.image && (
                    <Image
                      src={h.image}
                      alt={h.title}
                      fill
                      className="object-cover"
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
        className="bg-neutral-50"
      >
        <AnimatedSection stagger={true}>
          <div className="grid gap-6 md:grid-cols-3">
            {stats.map((stat, idx) => (
              <AnimatedItem key={idx}>
                <motion.div
                  className={[
                    "rounded-xl border bg-white p-6 text-center",
                    "transition duration-200",
                    "hover:-translate-y-1 hover:shadow-md",
                  ].join(" ")}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2">
                    <CountUp value={stat.value} duration={2} />
                  </div>
                  <div className="text-lg font-semibold text-neutral-700 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-neutral-500">{stat.desc}</div>
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
                    "rounded-xl border bg-white p-6",
                    "transition duration-200",
                    "hover:-translate-y-1 hover:shadow-md",
                  ].join(" ")}
                  whileHover={{ y: -4 }}
                >
              <div className="text-3xl font-bold text-neutral-400 mb-3">
                {item.step}
              </div>
              <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* 고객 후기/추천사 섹션 */}
      <Section
        eyebrow="Testimonials"
        title="고객 후기"
        desc="실제로 서비스를 경험한 고객들의 생생한 후기를 확인하세요."
        className="bg-neutral-50"
      >
        <AnimatedSection stagger={true}>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, idx) => (
              <AnimatedItem key={idx}>
                <motion.div
                  className={[
                    "rounded-xl border bg-white p-6",
                    "transition duration-200",
                    "hover:-translate-y-1 hover:shadow-md",
                  ].join(" ")}
                  whileHover={{ y: -4 }}
                >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-neutral-700 mb-4 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="border-t pt-4">
                <div className="font-semibold text-neutral-900">
                  {testimonial.name}
                </div>
                <div className="text-sm text-neutral-500">{testimonial.role}</div>
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
      >
        <AnimatedSection>
          <div className="grid gap-4 md:grid-cols-2">
            <AnimatedItem>
              <div className="rounded-2xl border bg-white p-6 flex flex-col h-full">
                <h3 className="text-lg font-semibold mb-6">이런 협업이 잘 맞아요</h3>
                <div className="grid gap-4 grid-cols-2 flex-1">
                  {business.offerings.map((offering, idx) => (
                    <div
                      key={idx}
                      className={[
                        "rounded-xl border bg-neutral-50 p-4",
                        "transition duration-200",
                        "hover:-translate-y-1 hover:shadow-md",
                        "flex flex-col",
                      ].join(" ")}
                    >
                      <h4 className="text-sm font-semibold mb-2">{offering.title}</h4>
                      <p className="text-xs text-neutral-600 leading-relaxed">
                        {offering.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedItem>

            <AnimatedItem>
              <div className="rounded-2xl border bg-neutral-50 p-6 flex flex-col h-full">
                <h3 className="text-lg font-semibold mb-6">제안 시 포함하면 좋은 정보</h3>
                <div className="grid gap-4 grid-cols-2 flex-1">
                  {business.proposalInfo.map((info, idx) => (
                    <div
                      key={idx}
                      className={[
                        "rounded-xl border bg-white p-4",
                        "transition duration-200",
                        "hover:-translate-y-1 hover:shadow-md",
                        "flex flex-col",
                      ].join(" ")}
                    >
                      <h4 className="text-sm font-semibold mb-2">{info.title}</h4>
                      <p className="text-xs text-neutral-600 leading-relaxed">
                        {info.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedItem>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Link
            className="rounded-md bg-neutral-900 px-6 py-3 text-white hover:opacity-90 transition font-medium"
            href="/business"
          >
            비즈니스 상세 보기
          </Link>
          </div>
        </AnimatedSection>
      </Section>

      {/* FAQ 섹션 */}
      <Section
        eyebrow="FAQ"
        title="자주 묻는 질문"
        desc="궁금한 점이 있으신가요? 자주 묻는 질문을 확인해보세요."
      >
        <AnimatedSection stagger={true}>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faq.map((item, idx) => (
                <AnimatedItem key={idx}>
                  <details
                    className={[
                      "group rounded-xl border bg-white p-6",
                      "transition duration-200",
                      "hover:shadow-md",
                    ].join(" ")}
                  >
                <summary className="font-semibold text-neutral-900 cursor-pointer list-none flex items-center justify-between">
                  <span>{item.question}</span>
                  <span className="text-neutral-400 group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <div className="mt-4 pt-4 border-t text-neutral-600 leading-relaxed">
                  {item.answer}
                </div>
              </details>
                </AnimatedItem>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </Section>

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
