# 작업 로그

vision eye 리뉴얼 프로젝트(`visioneye-renewal/`) 작업 기록입니다. 프로젝트 코드는 이 폴더 한 곳에서만 관리하고, 날짜별 작업 내용은 이 파일에 섹션으로 누적합니다.

## 2026-09-09

- 기존 `visioneye.co.kr/` 정적 스냅샷을 참고해 Vite + React 리뉴얼 프로젝트(`visioneye-renewal/`) 최초 생성
- Header, Footer, HeroSlider, SpecialtyShowcase, TreatmentHighlights, VisionTv, ClinicTabs 컴포넌트 구현
- 히어로 섹션 디자인 다수 반복 (SUIT 폰트 적용, 텍스트 정렬/자간, 로고 아이콘+워드마크 분리)
- 헤더 스크롤 시 투명 → 흰 배경 전환 구현
- 저장소 git 초기화 후 GitHub(`hyeongo6256-bot/vision-eye`)에 최초 커밋 푸시 (SSH 인증)

## 2026-09-14

- SpecialtyShowcase 커버플로우 카드 크기/간격 조정, 비활성 카드 블러 처리
- ClinicTabs를 "our CLINIC" 번호 목록 + 원형 사진 + 고정 인용구 레이아웃으로 재구성, 클릭 대신 호버로 전환되도록 변경
- 진료분야(TreatmentHighlights) 벤토 그리드 디자인, "다이얼" 형태 디자인을 각각 시도했으나 최종적으로 원래 레이아웃으로 되돌림
- 변경사항 커밋 및 푸시

## 2026-09-15

- 홈페이지 섹션 순서 변경: 히어로 → SPECIALITY → our CLINIC → 진료분야 → 비전 TV(마지막)
- SPECIALITY 제목 폰트를 our CLINIC과 동일하게 맞추고 따옴표 제거
- 신규 "Blue Eye Center" 섹션 추가: 남색 배경 고정(패럴랙스) + 안경 이미지 히어로 + 진료분야 5개 항목이 좌우 번갈아 배치되는 스크롤 목록
- **작업 방식 정리**: 매일 프로젝트 전체를 날짜 폴더로 복사하던 방식을 중단하고, 프로젝트를 저장소 최상단 `visioneye-renewal/` 한 곳으로 통합. 이후 날짜 폴더는 만들지 않고, 이 `WORKLOG.md`에 날짜별로 작업 내용만 기록함.
- Blue Eye Center 스크롤 방식을 여러 차례 시도(연속 이동 애니메이션 → 정적 나열 → sticky 스택) 끝에, 화면 한 자리(sticky stage)에서 안경 배너/진료분야 1~5번 내용이 순서대로 교체되는 방식으로 확정
- 레거시 `common.css`의 `body { overflow: hidden }`이 `position: sticky`를 무력화시키는 원인이었음을 확인하고 `src/index.css`에서 `overflow: visible`로 되돌려 수정
- 진료분야 1~5번 카드는 opacity 페이드로 전환되고, 안경 배너는 페이드 없이 스크롤량에 비례해 위로 이동하며 사라지도록 구현
- 진료분야 카드의 사진/텍스트/폰트 크기를 소폭 확대
- `react-router-dom` 도입, 서브페이지 라우팅 구조 추가 (`/system`, `/doctor`, `/contact`)
- 서브페이지 공통 히어로 배너(`page-hero`) 컴포넌트 스타일 추가 — 서브페이지에서는 헤더가 항상 흰 배경으로 고정되도록 `Header`에 라우트 인식 로직 추가
- "의료진 소개"(`/doctor`) 페이지 구현: 병원명/원형 사진/인용구 + 전문의 약력·학회 목록 2단 레이아웃, 원본 사이트의 서브페이지 공통 하단 배너(`/img/page/bottom-common.jpg`) 내용을 텍스트로 재구성해 추가
- "오시는 길"(`/contact`) 페이지 구현: 진료안내/연락처/주소 + 원본 사이트의 구글 지도 embed 연결
- 하단 4단 배너(`doctor-statement`, `doctor-promo`)를 `sitePromo.css`로 분리해 여러 서브페이지에서 재사용 가능하도록 정리
