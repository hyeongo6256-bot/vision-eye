// 의료진 소개 페이지 데이터.

export const doctors = [
  {
    key: "park-geonsik",
    clinicName: "평택비전안과의원",
    clinicNameEn: "PYEONTAEK VISION EYE CLINIC",
    photo: "/img/page/doctor/doctor_01_circle.png",
    // [강조할 부분, 나머지 부분]으로 이루어진 줄 단위 배열
    quoteLines: [
      ["밝은 눈", "으로 세상을 볼 수 있게"],
      ["힘이", " 되어드리겠습니다."],
    ],
    specialty: "안과 전문의",
    name: "박건식",
    role: "대표원장",
    credentialGroups: [
      [
        "서울 중앙대학교병원 안과 인턴, 레지던트 수료",
        "서울 중앙대학교 의과대학 안과학 의학박사",
        "서울 중앙대학교 의과대학 안과학 교실 외래교수",
        "서울 중앙대학교병원 안과 교수",
        "(백내장, 망막, 유리체, 녹내장, 라식전공)",
        "전) 원주밝은안과 원장",
      ],
      [
        "ARVO 미국 안과학회 정회원",
        "ASCRS 미국 백내장 굴절수술학회 정회원",
        "대한 의과학회 정회원",
        "대한 의학레이저학회 정회원",
        "KSCRS 한국 백내장 굴절수술학회 정회원",
        "ESCRS 유럽 백내장 굴절수술학회 정회원",
      ],
      ["한국 녹내장학회 정회원", "한국 망막학회 정회원", "한국 콘텍트렌즈 연구회 정회원"],
    ],
  },
];

export const doctorStatementHeading = "평택비전안과의원은";

export const doctorStatement = {
  lines: [
    ["", "환자의 안전과 수준 높은 의료서비스를 제공하기 위해"],
    ["꾸준한 연구", "를 멈추지 않습니다."],
  ],
};

export const doctorPromoColumns = [
  {
    key: "treatment",
    photo: "/img/page/doctor/promo_treatment.png",
    title: "앞서가는 진료",
    description:
      "정밀 검사 프로그램과 한번 더 확인하는 꼼꼼한 검진을 통해 환자 맞춤형 수술방법을 제시합니다.",
  },
  {
    key: "safety",
    photo: "/img/page/doctor/promo_safety.png",
    title: "앞서가는 안전시스템",
    description:
      "대학 병원급 첨단 의료 장비를 도입해 최적의 수술 및 치료 시스템으로 안전성을 높였습니다.",
  },
  {
    key: "staff",
    photo: "/img/page/doctor/promo_staff.png",
    title: "나아가는 의료진",
    description:
      "경력에 안일하지 않고 더 나은 의료 서비스를 위해 배우고 연구하며 환자분들이 믿고 맡기실 수 있는 의료진이 되겠습니다.",
  },
  {
    key: "service",
    photo: "/img/page/doctor/promo_service.png",
    title: "앞서가는 서비스",
    description:
      "환자의 입장에서 환자의 안전을 최우선으로 생각하는 공정함과 배려심을 갖춘 의료진이 함께합니다.",
  },
];
