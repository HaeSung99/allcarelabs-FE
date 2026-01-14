// 기본 사이트 정보
export const site = {
  name: "올케어랩스",
  enName: "AllCareLabs",
  tagline: "스포츠 현장 의무지원 · 컨디셔닝 · 교육 파견",
  phone: "010-0000-0000",
  email: "contact@allcarelabs.kr",
  address: "서울 (예시)",
  instagram: "https://www.instagram.com/allcarelabs_official/",
};

// HERO 섹션
export const heroText = {
  main: "의무지원 · 엘리트케어",
  sub1: "스포츠 현장에서 필요한 의무지원을 중심으로,",
  sub2: "테이핑/컨디셔닝까지 일관된 프로토콜로 운영합니다.",
};

export const heroImages = [
  {
    type: "placeholder",
    alt: "현장 의무지원 이미지 1",
  },
  {
    type: "placeholder",
    alt: "현장 의무지원 이미지 2",
  },
  {
    type: "placeholder",
    alt: "현장 의무지원 이미지 3",
  },
  // 실제 이미지 사용 시:
  // {
  //   type: "image",
  //   src: "/images/hero-1.jpg",
  //   alt: "마라톤 대회 의무지원",
  // },
];

export const business = {
  proof: [
    { label: "지원 종목", value: "마라톤 · 골프 · 협회" },
    { label: "지원 범위", value: "부스 · 테이핑 · 컨디셔닝" },
    { label: "협업 형태", value: "운영 · 협찬 · 교육" },
  ],
  offerings: [
    {
      title: "마라톤/러닝 대회 의무지원",
      desc: "부스 운영 · 테이핑 · 컨디셔닝 · 참가자 케어 동선 설계",
    },
    {
      title: "골프대회/협회 행사 지원",
      desc: "라운딩 전후 컨디셔닝 · 통증 대응 · 선수 · 관계자 케어 운영",
    },
    {
      title: "협찬/브랜디드 운영(PPL 포함)",
      desc: "현장 지원과 함께 자연스러운 브랜드 노출(부스 · 유니폼 · 콘텐츠)을 설계합니다.",
    },
    {
      title: "교육·인력 파견",
      desc: "전문가 교육 및 현장 실습 파견(프로그램형)을 지원합니다.",
    },
  ],
  proposalInfo: [
    {
      title: "행사 정보",
      desc: "행사명 · 일정 · 장소 · 참가 규모",
    },
    {
      title: "지원 범위",
      desc: "부스 · 테이핑 · 컨디셔닝",
    },
    {
      title: "협찬 형태",
      desc: "부스 노출 · 유니폼 · 콘텐츠",
    },
    {
      title: "연락 채널",
      desc: "이메일 · 전화 · 담당자",
    },
  ],
};

// What we do 섹션
export const highlights = [
  {
    title: "현장 의무지원",
    desc: "마라톤·골프대회·협회/이벤트 현장 부스 운영, 테이핑/컨디셔닝을 지원합니다.",
    image: "/images/highlight-medical.jpg", // 사진 영역 이미지 URL
  },
  {
    title: "프리미엄 컨디셔닝",
    desc: "대회 전/중/후 컨디셔닝 프로토콜로 참가자 안전과 퍼포먼스 유지를 돕습니다.",
    image: "/images/highlight-conditioning.jpg", // 사진 영역 이미지 URL
  },
  {
    title: "교육·파견",
    desc: "물리치료/스포츠 재활 기반의 교육 및 현장 실습·인력 파견 프로그램을 운영합니다.",
    image: "/images/highlight-education.jpg", // 사진 영역 이미지 URL
  },
];

// 브랜드 로고 슬라이더
export const partnerLogos = {
  row1: [
    {
      type: "placeholder",
      alt: "1줄 브랜드 로고 1",
    },
    {
      type: "placeholder",
      alt: "1줄 브랜드 로고 2",
    },
    {
      type: "placeholder",
      alt: "1줄 브랜드 로고 3",
    },
    {
      type: "placeholder",
      alt: "1줄 브랜드 로고 4",
    },
    // 실제 로고 사용 시:
    // {
    //   type: "image",
    //   src: "/images/partners/brand-1.png",
    //   alt: "브랜드명",
    // },
  ],
  row2: [
    {
      type: "placeholder",
      alt: "2줄 브랜드 로고 1",
    },
    {
      type: "placeholder",
      alt: "2줄 브랜드 로고 2",
    },
    {
      type: "placeholder",
      alt: "2줄 브랜드 로고 3",
    },
    {
      type: "placeholder",
      alt: "2줄 브랜드 로고 4",
    },
  ],
  row3: [
    {
      type: "placeholder",
      alt: "3줄 브랜드 로고 1",
    },
    {
      type: "placeholder",
      alt: "3줄 브랜드 로고 2",
    },
    {
      type: "placeholder",
      alt: "3줄 브랜드 로고 3",
    },
    {
      type: "placeholder",
      alt: "3줄 브랜드 로고 4",
    },
  ],
};

// 팀 소개 (다른 페이지에서 사용)
export const team = [
  {
    name: "김OO",
    role: "현장 총괄 / 스포츠 재활",
    bio: "현장 프로토콜 설계와 팀 운영을 담당합니다. 안전과 효율을 최우선으로 합니다.",
    specialties: ["현장 의무지원", "프로토콜 설계", "스포츠 재활"],
    image: "/images/team/member-1.jpg", // 팀원 사진 URL (없으면 placeholder)
    career: [
      "물리치료사 자격증 보유",
      "스포츠 재활 전문가 10년 경력",
      "대형 마라톤 대회 의무지원 50회+",
      "프로 골프 선수 컨디셔닝 경력",
    ],
  },
  {
    name: "박OO",
    role: "테이핑 & 컨디셔닝",
    bio: "대회 현장에서 빠른 상태 판단과 테이핑/컨디셔닝을 제공합니다.",
    specialties: ["스포츠 테이핑", "컨디셔닝", "응급 대응"],
    image: "/images/team/member-2.jpg", // 팀원 사진 URL (없으면 placeholder)
    career: [
      "스포츠 테이핑 전문가",
      "응급처치 전문가 자격증",
      "마라톤 대회 현장 지원 30회+",
      "골프 대회 컨디셔닝 전문",
    ],
  },
  {
    name: "이OO",
    role: "교육 파견 / 실습 운영",
    bio: "교육 콘텐츠 구성과 파견 운영을 담당합니다. 현장 중심으로 체계화합니다.",
    specialties: ["교육 콘텐츠", "실습 파견", "현장 운영"],
    image: "/images/team/member-3.jpg", // 팀원 사진 URL (없으면 placeholder)
    career: [
      "물리치료 교육 전문가",
      "현장 실습 프로그램 개발",
      "협회 교육 파견 20회+",
      "스포츠 의학 강의 경력",
    ],
  },
];

// 연혁 데이터
export const history = [
  {
    year: "2024",
    month: "12",
    eventName: "서울 마라톤 대회 의무지원",
    description: "5만 명 규모의 대형 마라톤 대회에서 전 구간 의무지원 및 테이핑 서비스 제공",
    image: "/images/history/2024-12-seoul-marathon.jpg", // 연혁 사진 URL (없으면 placeholder)
  },
  {
    year: "2024",
    month: "11",
    eventName: "프로 골프 대회 컨디셔닝 지원",
    description: "프로 골프 선수 대상 라운딩 전후 컨디셔닝 및 통증 관리 서비스",
    image: "/images/history/2024-11-golf-tournament.jpg",
  },
  {
    year: "2024",
    month: "10",
    eventName: "스포츠 협회 교육 파견",
    description: "협회 실무진 대상 현장 의무지원 교육 및 실습 프로그램 운영",
    image: "/images/history/2024-10-education.jpg",
  },
  {
    year: "2024",
    month: "09",
    eventName: "지역 마라톤 대회 의무지원",
    description: "지역 마라톤 대회 부스 운영 및 참가자 케어 서비스 제공",
    image: "/images/history/2024-09-regional-marathon.jpg",
  },
  {
    year: "2025",
    month: "08",
    eventName: "골프 대회 협찬 운영",
    description: "브랜드 협찬과 함께 현장 의무지원 및 컨디셔닝 서비스 제공",
    image: "/images/history/2024-08-golf-sponsor.jpg",
  },
  // 실제 연혁 추가 시 위 형식으로 site.js에 추가하면 자동으로 반영됩니다
];

// 통계/실적 섹션
export const stats = [
  {
    value: "50+",
    label: "지원 대회",
    desc: "누적 지원 대회 수",
  },
  {
    value: "10,000+",
    label: "케어 참가자",
    desc: "누적 케어 제공 인원",
  },
  {
    value: "98%",
    label: "만족도",
    desc: "고객 만족도",
  },
];

// 프로세스/워크플로우
export const process = [
  {
    step: "01",
    title: "사전 기획",
    desc: "대회 정보 파악 및 현장 답사, 동선 설계, 인력/장비 배치 계획 수립",
  },
  {
    step: "02",
    title: "프로토콜 수립",
    desc: "대회 특성에 맞는 의무지원 프로토콜 및 응급 대응 매뉴얼 작성",
  },
  {
    step: "03",
    title: "현장 운영",
    desc: "부스 운영, 테이핑/컨디셔닝 제공, 실시간 모니터링 및 응급 대응",
  },
  {
    step: "04",
    title: "사후 관리",
    desc: "대회 종료 후 리포트 작성, 피드백 수집 및 개선사항 도출",
  },
];

// 고객 후기/추천사
export const testimonials = [
  {
    name: "마라톤 대회 주최자",
    role: "서울 마라톤 협회",
    content: "올케어랩스 팀의 체계적인 의무지원 덕분에 대회가 안전하게 진행되었습니다. 참가자들의 만족도도 매우 높았어요.",
    rating: 5,
  },
  {
    name: "골프 대회 참가자",
    role: "프로 골퍼",
    content: "라운딩 전후 컨디셔닝 서비스가 정말 도움이 되었습니다. 전문성과 친절함이 인상적이었어요.",
    rating: 5,
  },
  {
    name: "협회 관계자",
    role: "스포츠 협회",
    content: "교육 파견 프로그램이 실무진들에게 큰 도움이 되었습니다. 현장 중심의 교육이 특히 좋았습니다.",
    rating: 5,
  },
];

// FAQ
export const faq = [
  {
    question: "어떤 규모의 대회까지 지원 가능한가요?",
    answer: "소규모 이벤트부터 대규모 마라톤 대회까지 다양한 규모의 행사에 맞춰 인력과 장비를 조정하여 지원합니다. 최소 100명부터 수만 명 규모까지 경험이 있습니다.",
  },
  {
    question: "의무지원 비용은 어떻게 책정되나요?",
    answer: "대회 규모, 지원 범위, 기간, 장소 등을 종합적으로 고려하여 맞춤형 견적을 제공합니다. 상세한 문의를 주시면 정확한 견적을 안내해드립니다.",
  },
  {
    question: "어떤 장비를 갖추고 있나요?",
    answer: "테이핑 재료, 응급처치 키트, 컨디셔닝 도구, 모니터링 장비 등 현장 의무지원에 필요한 전문 장비를 모두 보유하고 있습니다.",
  },
  {
    question: "협찬/브랜디드 운영은 어떻게 진행되나요?",
    answer: "참가자 경험을 해치지 않는 자연스러운 방식으로 브랜드 노출을 설계합니다. 부스 운영, 유니폼, 콘텐츠 등 다양한 형태로 협업이 가능합니다.",
  },
  {
    question: "사전 답사는 필수인가요?",
    answer: "대규모 대회나 복잡한 코스의 경우 사전 답사를 통해 최적의 동선과 배치를 계획하는 것을 권장합니다. 소규모 행사는 온라인 상담으로도 충분히 가능합니다.",
  },
];

