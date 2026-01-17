import Image from "next/image";
import Section from "@/components/Section";
import Placeholder from "@/components/Placeholder";
import { site, team } from "@/data/site";

export default function TeamPage() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="border-b bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center animate-fade-up">
            <p className="text-xs font-medium uppercase tracking-widest text-neutral-500 mb-2">
              Our Team
            </p>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-4">
              전문 팀 소개
            </h1>
            <p className="max-w-2xl mx-auto text-neutral-600 text-sm md:text-base">
              현장 의무지원의 전문성을 갖춘 올케어랩스 팀을 소개합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <Section>
        <div className="max-w-5xl mx-auto space-y-16 md:space-y-24">
          {team.map((member, idx) => (
            <div
              key={idx}
              className={[
                "rounded-2xl border bg-white overflow-hidden",
                "transition duration-200 hover:shadow-xl",
                "animate-fade-up",
                "flex flex-col md:flex",
                idx === 0 ? "[animation-delay:80ms]" : "",
                idx === 1 ? "[animation-delay:160ms]" : "",
                idx === 2 ? "[animation-delay:240ms]" : "",
                // 짝수 인덱스는 좌우 반전 레이아웃
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse",
              ].join(" ")}
            >
              {/* 이미지 섹션 */}
              <div className="md:w-1/2 aspect-square md:aspect-[4/5] relative bg-neutral-100">
                {member.image && member.image !== "/images/team/placeholder.jpg" ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Placeholder className="w-full h-full" />
                  </div>
                )}
              </div>

              {/* 정보 섹션 */}
              <div className="md:w-1/2 p-6 md:p-12 flex flex-col justify-center">
                {/* 역할 태그 */}
                <div className="mb-4">
                  <span className="inline-block px-4 py-1 bg-neutral-900 text-white text-sm font-medium rounded-full">
                    {member.role}
                  </span>
                </div>

                {/* 이름 */}
                <h2 className="text-2xl md:text-4xl font-bold text-neutral-900 mb-4">
                  {member.name}
                </h2>

                {/* 소개 */}
                <p className="text-base md:text-lg text-neutral-700 mb-6 leading-relaxed">
                  {member.bio}
                </p>

                {/* 전문 분야 */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-3">
                    전문 분야
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-neutral-100 text-neutral-700 text-sm rounded-lg font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 경력 */}
                {member.career && member.career.length > 0 && (
                  <div className="pt-6 border-t">
                    <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-4">
                      주요 경력
                    </h3>
                    <ul className="space-y-2">
                      {member.career.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-neutral-400 mt-1">•</span>
                          <span className="text-neutral-700 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            함께 시작하세요
          </h2>
          <p className="text-xl text-neutral-300 mb-8">
            전문 팀과 함께 스포츠 현장의 의무지원을 제공합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <a
              href={`tel:${site.phone}`}
              className="px-6 py-2.5 md:px-8 md:py-3 bg-white text-neutral-900 rounded-lg hover:bg-neutral-100 transition-colors font-medium text-sm md:text-base"
            >
              전화 문의
            </a>
            <a
              href={`mailto:${site.email}`}
              className="px-6 py-2.5 md:px-8 md:py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-neutral-900 transition-colors font-medium text-sm md:text-base"
            >
              이메일 문의
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}

