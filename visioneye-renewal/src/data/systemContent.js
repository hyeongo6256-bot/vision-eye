// 진료시스템 페이지의 장비 그리드 데이터.
// 원본 사이트(visioneye.co.kr/system.html)의 장비 목록을 그대로 옮긴 것입니다.

export const equipmentList = [
  { key: "9000system", name: "9000시스템", model: "9000system", photo: "/img/page/system/equipment/9000system.png" },
  { key: "hrd9000", name: "HRD9000", model: "HRD9000", photo: "/img/page/system/equipment/hrd9000.png" },
  { key: "hlm", name: "HLM", model: "HLM", photo: "/img/page/system/equipment/hlm.png" },
  { key: "hoct", name: "HOCT", model: "HOCT", photo: "/img/page/system/equipment/hoct.png" },
  { key: "hrk", name: "HRK", model: "HRK", photo: "/img/page/system/equipment/hrk.png" },
  { key: "hrk7000", name: "리플렉션테이블", model: "HRK-7000", photo: "/img/page/system/equipment/hrk7000.png" },
  { key: "statim", name: "소독기", model: "statim", photo: "/img/page/system/equipment/statim.png" },
  { key: "hs7000", name: "슬릿램프", model: "HS-7000", photo: "/img/page/system/equipment/hs7000.png" },
  { key: "ap250", name: "자동시야계", model: "ap250", photo: "/img/page/system/equipment/ap250.png" },
  { key: "hnt1", name: "자동안압계", model: "HNT-1", photo: "/img/page/system/equipment/hnt1.png" },
  { key: "ht5000", name: "접촉식안압계", model: "HT-5000", photo: "/img/page/system/equipment/ht5000.png" },
  { key: "hcp7000", name: "차트프로젝터", model: "HCP-7000", photo: "/img/page/system/equipment/hcp7000.png" },
];

// 원본 사이트에 있던 장비별 상세 소개(브로슈어/논문 요약)를 우리 사이트 디자인에 맞게 정리한 내용입니다.
export const equipmentDetails = [
  {
    key: "lightmed",
    name: "LightMed YAG Laser",
    tagline: "세계적인 레이저 포토디스럽터",
    photo: "/img/page/system/lightmed.png",
    points: [
      "LightMed사의 YAG LASER는 Crystal Cavity로 보다 수명이 훨씬 길고 POWER가 안정되어 있습니다.",
      "타사의 LASER 사용시 POWER의 심한 변화가 있거나 Focus beam의 위치에 Laser beam이 정확하게 맞지 않는 경우가 많은데 비해 LightMed사의 LASER는 이러한 결점이 없습니다.",
      "Offset기능이 타제품은 ±150㎛ 인데 반하여 본제품은 ±500㎛까지 변환 가능하여 더욱 미세한 조작이 가능합니다.",
      "본 제품의 Magnifications(확대배율)은 5배율로 되어있습니다.",
    ],
    // 원본 브로슈어(sub_03.png)에 실려있던 영문 스펙시트 원본 이미지. 텍스트는 위에서 이미 우리말로 옮겼지만,
    // 원본 자료 자체도 함께 보여달라는 요청으로 카드 하단에 참고 이미지로 첨부합니다.
    brochureImage: "/img/page/system/lightmed-spec-sheet.png",
  },
  {
    key: "dryeyescan",
    name: "Dry Eye Scan",
    tagline: "마이봄샘 기능평가를 활용한 안구 표면 분석용 통합 시스템",
    photo: "/img/page/system/dryeyescan.png",
    points: [
      "눈물 지질층 두께 측정(자동 간섭측정)",
      "눈물막 깨짐 시간 측정(NIBUT)",
      "눈물샘 분포도 측정",
      "눈 깜빡임 완전도 검사(Blinking Quality Detection)",
      "3D 시연을 포함한 향상된 Meibography: 구조와 분비물 관점의 완전한 분석",
      "눈물의 양 측정(수분을 함유한 건조안)",
      "징후학/수량화된 구근 발적/동공측정 테스트",
    ],
    sections: [
      {
        heading: "Dry Eye Scan을 통해",
        items: [
          "최초로 3D 이미지가 눈꺼풀 구조의 이해를 도울 수 있습니다.",
          "가능한 마이봄샘 질병과 건강한 마이봄샘과의 차이점을 확인 가능합니다.",
          "환자분들이 왜 안구 불편함과 시력불안정을 겪는지 스스로 알 수 있습니다.",
          "왜 특정 치료가 권유되는지 환자분들이 쉽게 이해할 수 있습니다.",
        ],
      },
    ],
    note: {
      heading: "안구건조증이란?",
      body: "눈물 양의 감소나 눈물의 질 변화로 안구 표면에 안정적인 막을 만들지 못해 발생하는 실제 질병입니다. 충분히 보호받지 못한 안구 표면은 손상되어 시력 감소나 불편증을 일으킬 수 있고, 방치하면 실명까지 이어질 수 있습니다.",
    },
    tags: ["붉어짐", "가려움", "화끈거림", "시각적 피로함", "이질감", "따끔함", "건조함", "과한 눈물", "간헐적 흐린 시야"],
    // 원본 사이트에 있던 Dry Eye Scan 소프트웨어 실제 화면 캡처
    brochureImage: "/img/page/system/dryeyescan-dashboard.png",
  },
];
