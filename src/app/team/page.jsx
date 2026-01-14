import Section from "@/components/Section";
import Card from "@/components/Card";
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
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-4">
              전문 팀 소개
            </h1>
            <p className="max-w-2xl mx-auto text-neutral-600">
              전문 물리치료사 팀입니다.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {team.map((member, idx) => (
            <Card
              key={idx}
              className={`animate-fade-up ${
                idx === 0
                  ? "[animation-delay:80ms]"
                  : idx === 1
                  ? "[animation-delay:160ms]"
                  : "[animation-delay:240ms]"
              }`}
            >
              <div className="mb-4">
                <Placeholder className="h-48 w-full" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                {member.name}
              </h3>
              <p className="text-sm text-neutral-600 mb-4">{member.role}</p>
              <p className="text-neutral-700 mb-4 leading-relaxed">
                {member.bio}
              </p>
              <div className="flex flex-wrap gap-2">
                {member.specialties.map((specialty, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-neutral-100 text-neutral-700 text-xs rounded-full"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </Card>
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
          </div>
        </div>
      </Section>
    </main>
  );
}

