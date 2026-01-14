import Link from "next/link";
import Section from "@/components/Section";
import Card from "@/components/Card";
import { site, business } from "@/data/site";

export default function BusinessPage() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="border-b bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center animate-fade-up">
            <p className="text-xs font-medium uppercase tracking-widest text-neutral-500 mb-2">
              Business Partnership
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-4">
              비즈니스 제안
            </h1>
            <p className="max-w-2xl mx-auto text-neutral-600 mb-8">
              대회/협회/브랜드와의 협업을 통해 스포츠 현장의 전문 의무지원과
              컨디셔닝을 제공합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${site.phone}`}
                className="px-8 py-3 bg-neutral-900 text-white rounded-lg hover:opacity-90 transition font-medium"
              >
                협업 문의하기
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3 border-2 border-neutral-900 text-neutral-900 rounded-lg hover:bg-neutral-900 hover:text-white transition font-medium"
              >
                인스타그램 보기
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <Section
        eyebrow="Services"
        title="제공 서비스"
        desc="다양한 스포츠 행사와 협업 형태에 맞춘 전문 의무지원 서비스를 제공합니다."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {business.offerings.map((offering, idx) => (
            <Card
              key={idx}
              className={`animate-fade-up transition duration-200 hover:-translate-y-1 hover:shadow-md ${
                idx === 0
                  ? "[animation-delay:80ms]"
                  : idx === 1
                  ? "[animation-delay:160ms]"
                  : idx === 2
                  ? "[animation-delay:240ms]"
                  : "[animation-delay:320ms]"
              }`}
            >
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                {offering.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {offering.desc}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Proof Points */}
      <Section className="bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-neutral-900 mb-12">
            지원 현황
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {business.proof.map((item, idx) => (
              <div
                key={idx}
                className={`text-center p-6 bg-white rounded-xl border animate-fade-up ${
                  idx === 0
                    ? "[animation-delay:80ms]"
                    : idx === 1
                    ? "[animation-delay:160ms]"
                    : "[animation-delay:240ms]"
                }`}
              >
                <p className="text-sm text-neutral-600 mb-2">{item.label}</p>
                <p className="text-lg font-semibold text-neutral-900">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Collaboration Info */}
      <Section
        eyebrow="Partnership"
        title="협업 안내"
        desc="효율적인 협업을 위해 아래 정보를 포함해 주시면 더 빠르게 진행할 수 있습니다."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="animate-fade-up">
            <h3 className="text-lg font-semibold text-neutral-900 mb-4">
              이런 협업이 잘 맞아요
            </h3>
            <ul className="space-y-2 text-neutral-700">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>마라톤/러닝 대회 부스 운영 + 테이핑/컨디셔닝</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>골프대회/협회 행사 케어존 운영</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  브랜드 협찬(소모품/테이핑/기기)과 현장 노출 운영
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>교육/실습 파견 프로그램(현장 중심)</span>
              </li>
            </ul>
          </Card>

          <Card className="animate-fade-up [animation-delay:120ms]">
            <h3 className="text-lg font-semibold text-neutral-900 mb-4">
              제안 시 포함하면 좋은 정보
            </h3>
            <ul className="space-y-2 text-neutral-700">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>행사명/일정/장소/참가 규모</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>지원 범위(부스/응급/테이핑/컨디셔닝)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>협찬 형태(부스 노출/유니폼/콘텐츠)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>연락 채널(이메일/전화/담당자)</span>
              </li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            협업을 시작하세요
          </h2>
          <p className="text-xl text-neutral-300 mb-8">
            전문 팀과 함께 성공적인 스포츠 행사를 만들어가세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${site.phone}`}
              className="px-8 py-3 bg-white text-neutral-900 rounded-lg hover:bg-neutral-100 transition-colors font-medium"
            >
              전화 문의
            </a>
            <a
              href={`mailto:${site.email}`}
              className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-neutral-900 transition-colors font-medium"
            >
              이메일 문의
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-neutral-900 transition-colors font-medium"
            >
              인스타그램
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}

