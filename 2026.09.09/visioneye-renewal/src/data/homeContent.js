// 홈페이지에 들어가는 모든 텍스트/이미지 경로를 한 곳에 모아둔 데이터입니다.
// 리뉴얼 시 문구나 이미지를 바꿀 때는 컴포넌트 코드가 아니라 이 파일만 수정하면 됩니다.

export const navMenu = [
  { label: "비전안과 소개", href: "/about" },
  { label: "의료진 소개", href: "/doctor" },
  { label: "진료시스템", href: "/system" },
  { label: "오시는 길", href: "/contact" },
  { label: "비급여항목", href: "/pay" },
];

// 히어로 배경 4장의 사진만 슬라이드로 넘어가고, 문구는 heroContent 하나로 고정됩니다.
export const heroSlides = [
  {
    key: "01",
    bgClass: "v_bg1",
  },
  {
    key: "02",
    bgClass: "v_bg4",
  },
  {
    key: "03",
    bgClass: "v_bg2",
  },
  {
    key: "04",
    bgClass: "v_bg3",
  },
];

// 슬라이드가 바뀌어도 깜빡이지 않도록, 문구는 슬라이드와 분리된 고정값입니다.
export const heroContent = {
  eyebrow: "안질환 전문 치료기관",
  titleKo: "평택비전안과의원",
  titleEn: "PYEONTAEK VISION EYE CLINIC",
  description: [
    "안전하고 완성도 높은 수술과 치료를 위해",
    "평택비전안과 의료진은 끊임없이 연구하고 있습니다.",
  ],
};

export const specialtySubtitle = [
  "정밀한 진단과 전문적인 진료 시스템을 바탕으로,",
  "개개인의 눈에 가장 적합한 맞춤 의료 서비스를 제공합니다.",
];

export const specialtySlides = [
  {
    key: 1,
    image: "/img/page/index/sec1_1.png",
    label: "노안·백내장",
    note: "(단일의사기준)",
    title: "수술은 실력입니다.",
    description:
      "평택비전안과의원에서는 혼탁해진 수정체에 다초점 인공수정체를 삽입하는 한번의 수술로 노안과 백내장을 동시에 교정가능합니다.",
  },
  {
    key: 2,
    image: "/img/page/index/sec1_2.png",
    label: "망막·녹내장 질환",
    title: "질환 중심 전문의료기관",
    description:
      "평택비전안과의원은 대학병원 교수 출신 의료진과 안질환 중심 집중치료체계를 갖추어 안질환 중심의 치료가 가능한 안질환 전문의료기관입니다.",
  },
  {
    key: 3,
    image: "/img/page/index/sec1_3.png",
    label: "안질환 중심, 맞춤 진료",
    title: "수준 높은 맞춤 의료 시스템",
    description:
      "평택비전안과의원은 대학병원급 장비와 시설, 맞춤 의료 시스템을 통해 수준 높은 진료를 약속합니다.",
  },
  {
    key: 4,
    image: "/img/page/index/sec1_4.png",
    label: "소아 사시 진단",
    title: "소아 사시",
    description:
      "평택비전안과의원은 첨단장비와 전문 의료진이 개인에 맞는 맞춤형 소아 사시 진료를 정확하게 진단합니다.",
  },
  {
    key: 5,
    image: "/img/page/index/sec1_5.png",
    label: "내 눈을 위한 렌즈 처방",
    title: "전문의가 권하는 개인별 맞춤 렌즈 제안",
    description:
      "평택비전안과의원은 경험이 풍부한 콘텍트렌즈 전문의가 고객님의 눈에 알맞은 렌즈를 처방합니다.",
  },
];

export const treatmentHighlights = [
  {
    key: "cataract",
    image: "/img/main/cont_01_01.jpg",
    title: "노안/백내장",
    description: "한치의 오차없이 노안과 백내장을 정확하게 진단하는 첨단 의료장비 시스템",
  },
  {
    key: "vision-correction",
    image: "/img/main/cont_01_02.png",
    title: "시력교정",
    description: "개인의 일상과 라이프스타일에 가장 적합한 맞춤형 시력교정",
  },
  {
    key: "glaucoma",
    image: "/img/main/cont_01_03.png",
    title: "녹내장",
    description: "방수 출구인 섬유주만 고주파를 사용해 넓혀주는 치료법",
  },
  {
    key: "premium-iol",
    image: "/img/main/cont_01_04.png",
    title: "프리미엄 인공수정",
    description: "환자의 일상에 포커스를 맞추다",
  },
  {
    key: "floaters",
    image: "/img/main/cont_01_05.png",
    title: "비문증",
    description: "정확한 진단으로 시야를 깨끗하게 치료",
  },
];

export const visionTv = {
  title: "비전 TV",
  youtubeId: "EIudcR28PkU",
};

export const clinicTabs = [
  {
    key: "cataract",
    number: 1,
    navLabel: "노안·백내장 클리닉",
    heading: ["노안백내장", "클리닉"],
    description:
      "수술은 케이스가 실력입니다. 평택비전안과는 고객의 눈 상태에 맞춘 맞춤형 수술을 진행합니다.",
    image: "/img/page/index/sec2_img1.png",
  },
  {
    key: "retina",
    number: 2,
    navLabel: "망막 클리닉",
    heading: ["망막", "클리닉"],
    description:
      "국내 최고 수준의 검증된 의료진과 질환 중심의 맞춤 진료시스템을 갖춘 평택비전안과입니다.",
    image: "/img/page/index/sec2_img2.png",
  },
  {
    key: "vision-correction",
    number: 3,
    navLabel: "시력교정 클리닉",
    heading: ["시력교정", "클리닉"],
    description:
      "대학병원급 검사장비를 통한 체계적인 검진으로 고객의 눈에 적합한 맞춤 수술을 진행합니다.",
    image: "/img/page/index/sec2_img3.png",
  },
  {
    key: "lens",
    number: 4,
    navLabel: "렌즈처방 클리닉",
    heading: ["렌즈처방", "클리닉"],
    description:
      "고객님의 소중한 눈을 위해 렌즈전문의가 개인별 맞춤렌즈를 제안합니다.",
    image: "/img/page/index/sec2_img4.png",
  },
  {
    key: "dry-eye",
    number: 5,
    navLabel: "안구건조증 클리닉",
    heading: ["안구건조증", "클리닉"],
    description:
      "안구건조증의 근본적인 원인을 개선하기 위한 개인별 맞춤 진료를 진행합니다.",
    image: "/img/page/index/sec2_img5.png",
  },
];

export const clinicInfo = {
  name: "평택비전안과의원",
  ceo: "박건식",
  registrationNumber: "258-99-01204",
  address: "경기도 평택시 비전5로 20-26, 3층 314호",
  phone: "031-656-2256",
};
