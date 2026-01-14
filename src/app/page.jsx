import Link from "next/link";
import Image from "next/image";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Placeholder from "@/components/Placeholder";
import ImageSlider from "@/components/ImageSlider";
import LogoSlider from "@/components/LogoSlider";
import { site, highlights, business, heroImages, heroText, partnerLogos } from "@/data/site";

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
                  협업/의뢰하기
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
        desc="대회 성격에 따라 동선/인력/장비를 구성하고, 응급 상황을 대비한 프로토콜로 안정적으로 지원합니다."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map((h, idx) => (
            <div
              key={h.title}
              className={[
                "rounded-xl border p-6 bg-white flex flex-col",
                "transition duration-200",
                "hover:-translate-y-1 hover:shadow-md",
                "animate-fade-up",
                idx === 0 ? "[animation-delay:80ms]" : "",
                idx === 1 ? "[animation-delay:160ms]" : "",
                idx === 2 ? "[animation-delay:240ms]" : "",
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
          ))}
        </div>
      </Section>

      {/* 브랜드 로고 슬라이더 */}
      <LogoSlider logos={partnerLogos} />

      {/* 협업 CTA */}
      <Section
        eyebrow="Partner"
        title="대회/협회/브랜드 협업"
        desc="부스 운영부터 협찬·브랜디드 운영(PPL 포함)까지, 참가자 경험을 해치지 않는 '자연스러운 노출'로 설계합니다."
      >
        <div className="grid gap-4 md:grid-cols-2 md:items-stretch">
          <div className="rounded-2xl border bg-white p-6 animate-fade-up flex flex-col">
            <h3 className="text-lg font-semibold mb-6">이런 협업이 잘 맞아요</h3>
            <div className="grid gap-4 grid-cols-2 flex-1 auto-rows-fr">
              {business.offerings.map((offering, idx) => (
                <div
                  key={idx}
                  className={[
                    "rounded-xl border bg-neutral-50 p-4",
                    "transition duration-200",
                    "hover:-translate-y-1 hover:shadow-md",
                    "flex flex-col h-full",
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

          <div className="rounded-2xl border bg-neutral-50 p-6 animate-fade-up [animation-delay:120ms] flex flex-col">
            <h3 className="text-lg font-semibold mb-6">제안 시 포함하면 좋은 정보</h3>
            <div className="grid gap-4 grid-cols-2 flex-1 auto-rows-fr">
              {business.proposalInfo.map((info, idx) => (
                <div
                  key={idx}
                  className={[
                    "rounded-xl border bg-white p-4",
                    "transition duration-200",
                    "hover:-translate-y-1 hover:shadow-md",
                    "flex flex-col h-full",
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
        </div>

        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Link
            className="rounded-md bg-neutral-900 px-6 py-3 text-white hover:opacity-90 transition font-medium"
            href="/business"
          >
            비즈니스 상세 보기
          </Link>
          
        </div>
      </Section>
    </main>
  );
}
