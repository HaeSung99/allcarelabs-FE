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
  sub2: "테이핑/컨디셔닝/응급 대응까지 일관된 프로토콜로 운영합니다.",
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
    { label: "지원 범위", value: "부스 · 테이핑 · 응급" },
    { label: "협업 형태", value: "운영 · 협찬 · 교육" },
  ],
  offerings: [
    {
      title: "마라톤/러닝 대회 의무지원",
      desc: "부스 운영 · 응급대응 · 테이핑/컨디셔닝 · 참가자 케어 동선 설계",
    },
    {
      title: "골프대회/협회 행사 지원",
      desc: "라운딩 전후 컨디셔닝 · 통증 대응 · 선수/관계자 케어 운영",
    },
    {
      title: "협찬/브랜디드 운영(PPL 포함)",
      desc: "현장 지원과 함께 자연스러운 브랜드 노출(부스/유니폼/콘텐츠)을 설계합니다.",
    },
    {
      title: "교육·인력 파견",
      desc: "전문가 교육 및 현장 실습 파견(프로그램형)을 지원합니다.",
    },
  ],
  proposalInfo: [
    {
      title: "행사 정보",
      desc: "행사명/일정/장소/참가 규모",
    },
    {
      title: "지원 범위",
      desc: "부스/응급/테이핑/컨디셔닝",
    },
    {
      title: "협찬 형태",
      desc: "부스 노출/유니폼/콘텐츠",
    },
    {
      title: "연락 채널",
      desc: "이메일/전화/담당자",
    },
  ],
};

// What we do 섹션
export const highlights = [
  {
    title: "현장 의무지원",
    desc: "마라톤·골프대회·협회/이벤트 현장 부스 운영, 응급 대응, 테이핑/컨디셔닝을 지원합니다.",
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
  },
  {
    name: "박OO",
    role: "테이핑 & 컨디셔닝",
    bio: "대회 현장에서 빠른 상태 판단과 테이핑/컨디셔닝을 제공합니다.",
    specialties: ["스포츠 테이핑", "컨디셔닝", "응급 대응"],
  },
  {
    name: "이OO",
    role: "교육 파견 / 실습 운영",
    bio: "교육 콘텐츠 구성과 파견 운영을 담당합니다. 현장 중심으로 체계화합니다.",
    specialties: ["교육 콘텐츠", "실습 파견", "현장 운영"],
  },
];

