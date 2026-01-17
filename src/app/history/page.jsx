import Image from "next/image";
import Section from "@/components/Section";
import Placeholder from "@/components/Placeholder";
import { history } from "@/data/site";

export default function HistoryPage() {
  // 연도별로 그룹화
  const groupedHistory = history.reduce((acc, item) => {
    if (!acc[item.year]) {
      acc[item.year] = [];
    }
    acc[item.year].push(item);
    return acc;
  }, {});

  // 연도 내림차순 정렬
  const sortedYears = Object.keys(groupedHistory).sort((a, b) => b - a);

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="border-b bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center animate-fade-up">
            <p className="text-xs font-medium uppercase tracking-widest text-neutral-500 mb-2">
              Our History
            </p>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-4">
              연혁
            </h1>
            <p className="max-w-2xl mx-auto text-neutral-600 text-sm md:text-base">
              올케어랩스가 진행해온 의무지원 활동과 주요 이벤트를 확인하세요.
            </p>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <Section>
        <div className="max-w-7xl mx-auto">
          {sortedYears.map((year, yearIdx) => (
            <div key={year} className="mb-20">
              {/* Year Header */}
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-4xl font-bold text-neutral-900">
                  {year}년
                </h2>
              </div>

              {/* Timeline Items - 중심선 기준 좌우 교차 */}
              <div className="relative">
                {/* 중심선 */}
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-neutral-300 transform -translate-x-1/2 hidden md:block"></div>

                {groupedHistory[year].map((item, idx) => {
                  const isEven = idx % 2 === 0; // 짝수: 좌사진우소개, 홀수: 우사진좌소개
                  
                  return (
                    <div
                      key={`${year}-${idx}`}
                      className={[
                        "relative mb-16 md:mb-24 animate-fade-up",
                        idx === 0 ? "[animation-delay:80ms]" : "",
                        idx === 1 ? "[animation-delay:120ms]" : "",
                        idx === 2 ? "[animation-delay:160ms]" : "",
                        idx === 3 ? "[animation-delay:200ms]" : "",
                        idx === 4 ? "[animation-delay:240ms]" : "",
                      ].join(" ")}
                    >
                      {/* 중심선 점 */}
                      <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-neutral-900 rounded-full border-4 border-white z-10"></div>

                      {/* 모바일: 세로 배치 */}
                      <div className="md:hidden space-y-4">
                        <div className="aspect-video relative rounded-lg overflow-hidden bg-neutral-200 shadow-lg">
                          {item.image && item.image !== "/images/history/placeholder.jpg" ? (
                            <Image
                              src={item.image}
                              alt={item.eventName}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <Placeholder className="w-full h-full" />
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-sm font-medium text-neutral-500">
                              {item.year}.{item.month}
                            </span>
                            <span className="w-1 h-1 bg-neutral-400 rounded-full"></span>
                            <span className="text-sm text-neutral-500">의무지원</span>
                          </div>
                          <h3 className="text-xl font-bold text-neutral-900 mb-3">
                            {item.eventName}
                          </h3>
                          <p className="text-neutral-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* 데스크톱: 중심선 기준 좌우 교차 */}
                      <div className="hidden md:flex items-center gap-8">
                        {isEven ? (
                          // 짝수: 좌측 사진, 우측 소개
                          <>
                            <div className="w-1/2 pr-8">
                              <div className="aspect-video relative rounded-lg overflow-hidden bg-neutral-200 shadow-lg">
                                {item.image && item.image !== "/images/history/placeholder.jpg" ? (
                                  <Image
                                    src={item.image}
                                    alt={item.eventName}
                                    fill
                                    className="object-cover"
                                  />
                                ) : (
                                  <Placeholder className="w-full h-full" />
                                )}
                              </div>
                            </div>
                            <div className="w-1/2 pl-8">
                              <div className="flex items-center gap-3 mb-3">
                                <span className="text-sm font-medium text-neutral-500">
                                  {item.year}.{item.month}
                                </span>
                                <span className="w-1 h-1 bg-neutral-400 rounded-full"></span>
                                <span className="text-sm text-neutral-500">의무지원</span>
                              </div>
                              <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                                {item.eventName}
                              </h3>
                              <p className="text-neutral-600 leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </>
                        ) : (
                          // 홀수: 우측 사진, 좌측 소개
                          <>
                            <div className="w-1/2 pr-8 text-right">
                              <div className="flex items-center gap-3 mb-3 justify-end">
                                <span className="text-sm font-medium text-neutral-500">
                                  {item.year}.{item.month}
                                </span>
                                <span className="w-1 h-1 bg-neutral-400 rounded-full"></span>
                                <span className="text-sm text-neutral-500">의무지원</span>
                              </div>
                              <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                                {item.eventName}
                              </h3>
                              <p className="text-neutral-600 leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                            <div className="w-1/2 pl-8">
                              <div className="aspect-video relative rounded-lg overflow-hidden bg-neutral-200 shadow-lg">
                                {item.image && item.image !== "/images/history/placeholder.jpg" ? (
                                  <Image
                                    src={item.image}
                                    alt={item.eventName}
                                    fill
                                    className="object-cover"
                                  />
                                ) : (
                                  <Placeholder className="w-full h-full" />
                                )}
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            함께 만들어갈 연혁
          </h2>
          <p className="text-xl text-neutral-300 mb-8">
            다음 대회에서 올케어랩스와 함께하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <a
              href={`mailto:contact@allcarelabs.kr`}
              className="px-6 py-2.5 md:px-8 md:py-3 bg-white text-neutral-900 rounded-lg hover:bg-neutral-100 transition-colors font-medium text-sm md:text-base"
            >
              이메일 문의
            </a>
            <a
              href={`tel:010-0000-0000`}
              className="px-6 py-2.5 md:px-8 md:py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-neutral-900 transition-colors font-medium text-sm md:text-base"
            >
              전화 문의
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}

