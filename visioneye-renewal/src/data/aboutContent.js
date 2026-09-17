// 비전안과 소개 페이지 데이터. 원본 사이트(visioneye.co.kr/about.html) 본문 내용을 옮긴 것입니다.

export const aboutIntro = {
  lead: ["평택비전안과의원은 20년 이상 경력의 안과 전문의가 이끄는", "전문성을 가진 안과의원입니다."],
  body: [
    "우리에게 세상을 보여주는 시신경은 한번 망가지면 그 기능을 원상태로 되돌리기 어렵습니다.",
    "지금은 괜찮은 듯 여겨질 때, 한발 '앞서' 눈 건강을 도로보고 챙긴다면 100세 시대, 더 많은 사람들이 길어진",
    "수명만큼 오래가는 건강한 눈과 시력을 유지할 수 있을 것이라 생각합니다.",
  ],
  promise: ["평택비전안과의원은", "모든 사람이 밝은 눈으로 행복해하는 그날까지 항상 건강한 눈을 약속하겠습니다."],
  signatureRole: "안과 전문의",
  signatureName: "박 건 식",
};

// 하단 원형 다이어그램: 중앙 원(잃기 전에) + 모서리 4개 원. position은 배경 사진 기준 % 좌표.
export const aboutPromiseCircles = [
  {
    key: "vision",
    position: "top-left",
    lead: "떨어지기 전에",
    highlight: "시력 유지하고",
  },
  {
    key: "checkup",
    position: "top-right",
    lead: "아프기전에",
    highlight: "안과 검진 받고",
  },
  {
    key: "center",
    position: "center",
    lead: "잃기 전에",
    highlight: "반드시 지키세요",
  },
  {
    key: "treat",
    position: "bottom-left",
    lead: "불편하기 전에",
    highlight: "치료하고",
  },
  {
    key: "cataract",
    position: "bottom-right",
    lead: "더 흐려지기 전에",
    highlight: "백내장 챙기고",
  },
];
