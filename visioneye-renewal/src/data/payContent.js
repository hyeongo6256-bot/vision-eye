// 비급여 항목 페이지 데이터.
// 제공받은 다크 테마 리스트 디자인(B · 리스트 (다크))의 문구/금액을 그대로 옮긴 것입니다.

export const payIntro = {
  eyebrow: "Vision Eye Center",
  title: ["평택비전안과", "비급여 항목"],
  note: "금액 단위는 원(₩)입니다. 아래로 스크롤해 확인하세요.",
  heroImage: "/img/page/pay/hero.webp",
};

export const payFooter = {
  clinicName: "평택비전안과의원",
  phone: "대표전화 031-656-2256",
};

export const paySections = [
  {
    key: "examination",
    index: "01",
    heading: "검색 및 치료",
    headingEn: "Examination & Treatment",
    count: "13개 항목",
    items: [
      { name: "눈계측검사 (초음파)", unit: "단안", price: "50,000" },
      { name: "안구광학단층검사 (CT)", unit: "단안", price: "30,000" },
      { name: "치료용렌즈 (T렌즈)", unit: "단안", price: "10,000" },
      { name: "각막두께 검사", unit: "양안", price: "5,000" },
      { name: "일반 백내장 수술", unit: "단안", price: "240,000" },
      { name: "단초점 난시 교정 (IQ TORIC)", unit: "단안", price: "1,200,000" },
      { name: "단초점 난시 교정 (ENVISTA TORIC)", unit: "단안", price: "1,200,000" },
      { name: "원, 중 거리 교정 (EYHANCE)", unit: "단안", price: "1,300,000" },
      { name: "원, 중 거리+ 난시 교정 (EYHANCE TORIC)", unit: "단안", price: "1,500,000" },
      { name: "노안교정 (원, 중, 근) PANOPTIX", unit: "단안", price: "3,500,000" },
      { name: "노안교정 (원, 중, 근)+ 난시 PANOPTIX TORIC", unit: "단안", price: "3,800,000" },
      { name: "노안교정 (원, 중, 근) VIVITY", unit: "단안", price: "3,500,000" },
      { name: "노안교정 (원, 중, 근)+ 난시 VIVITY TORIC", unit: "단안", price: "3,800,000" },
    ],
  },
  {
    key: "lens",
    index: "02",
    heading: "렌즈 및 소모품",
    headingEn: "Lenses & Supplies",
    count: "10개 항목",
    items: [
      { name: "하드렌즈 구면 (ADVANCE)", unit: "단안", price: "110,000" },
      { name: "하드렌즈 비구면 (EXTRA)", unit: "단안", price: "150,000" },
      { name: "드림렌즈 CH2 (루시드 코리아)", unit: "단안", price: "400,000" },
      { name: "드림렌즈 PREMIER (루시드 코리아)", unit: "단안", price: "500,000" },
      { name: "드림렌즈 난시교정 (루시드 코리아)", unit: "단안", price: "550,000" },
      { name: "드림렌즈 CRT (PARAGON)", unit: "단안", price: "500,000" },
      { name: "드림렌즈 CRT 난시교정 (PARAGON)", unit: "단안", price: "550,000" },
      { name: "보존액", unit: "", price: "9,000~16,000" },
      { name: "세척액", unit: "", price: "8,000~13,000" },
      { name: "식염수", unit: "", price: "1,000" },
    ],
  },
  {
    key: "documents",
    index: "03",
    heading: "서류",
    headingEn: "Certificates & Records",
    count: "11개 항목",
    items: [
      { name: "일반 진단서", unit: "", price: "10,000" },
      { name: "수술 진단서", unit: "", price: "10,000" },
      { name: "영문 진단서", unit: "", price: "20,000" },
      { name: "상해 진단서 (3주 미만)", unit: "", price: "100,000" },
      { name: "상해 진단서 (3주 이상)", unit: "", price: "150,000" },
      { name: "장애 진단서", unit: "", price: "15,000" },
      { name: "진료 확인서", unit: "코드 O", price: "3,000" },
      { name: "진료 확인서", unit: "코드 X", price: "FREE" },
      { name: "검사 결과지", unit: "장당", price: "2,000" },
      { name: "차트복사", unit: "장당 / 5장 이상 장당", price: "1,000 / 100" },
      { name: "진료의뢰서, 진료영수증, 진료비세부내역", unit: "", price: "FREE" },
    ],
  },
];
