# CLAUDE.md

이 파일은 이 저장소에서 작업할 때 Claude Code(claude.ai/code)에게 제공되는 가이드입니다.

## 이 저장소의 정체

이 저장소에는 두 가지가 함께 들어 있습니다.

1. **`visioneye-renewal/`** — 아래 스냅샷을 참고해 진행 중인 **React(Vite) 리뉴얼 프로젝트**. 실제 개발은 전부 이 폴더 안에서 이루어집니다.
2. **`visioneye.co.kr/`** — visioneye.co.kr(평택비전안과의원) 홈페이지를 **브라우저로 저장한 스냅샷**(정적 캡처본, 리뉴얼 작업의 원본 디자인/콘텐츠 참고용). "완전한 웹페이지로 저장" 방식으로 캡처되어, 요청한 페이지뿐 아니라 그 페이지가 참조하는 모든 리소스(스크립트, 스타일, 폰트, 아이프레임, 트래킹 픽셀 등)가 각 리소스의 출처 도메인 이름별 폴더에 함께 내려받아져 있습니다. 빌드 시스템도, 유지보수할 코드도 아닙니다 — 참고용 정적 캡처본입니다.

## 작업 기록 관리

**매일 작업할 때마다 프로젝트 폴더를 새로 복사하지 마세요.** `visioneye-renewal/`은 위치가 고정된 단일 프로젝트입니다. 그날그날 무엇을 작업했는지는 저장소 최상단의 **`WORKLOG.md`**에 날짜별 섹션(`## YYYY-MM-DD`)으로 이어서 기록합니다.

## 디렉터리 구조

- `visioneye.co.kr/visioneye.co.kr/` — 실제 사이트 콘텐츠: `index.html`(홈페이지)과 `css/`, `js/`, `img/`. 병원 자체 사이트를 나타내는 유일한 디렉터리입니다.
- `visioneye.co.kr/` 하위의 그 외 최상위 폴더들(`ajax.googleapis.com/`, `cdnjs.cloudflare.com/`, `fonts.googleapis.com/`, `fonts.gstatic.com/`, `unpkg.com/`, `wcs.naver.com/`, `wcs.naver.net/`, `cr.acecounter.com/`, `a21.smlog.co.kr/`, `sas.techhub.co.kr/`, `teralog.techhub.co.kr/`, `dgc7.acecounter.com*/`, `gtp8.acecounter.com/`, `googleads.g.doubleclick.net/`, `static.doubleclick.net/`, `i.ytimg.com/`, `www.youtube.com/`, `www.google.com/`, `jnn-pa.googleapis.com/`, `ssl.pstatic.net/`)는 **서드파티 리소스**입니다. 페이지를 저장할 때 브라우저가 자동으로 함께 받아온 것들로, CDN에 호스팅된 라이브러리(jQuery/AOS 등 미러본), 웹폰트, 방문자 분석/트래킹 스크립트(AceCounter, 네이버 WCS, smlog, techhub), 광고 기술(더블클릭/구글 광고), 유튜브 임베드 관련 자산 등입니다. 이들은 캡처 과정에서 부수적으로 딸려온 것일 뿐, 유지보수해야 할 코드가 아닙니다.
- 실제 사이트 디렉터리 최상단에는 `index.html`만 존재합니다 — 내비게이션은 `about.html` 등 다른 페이지로 링크되어 있지만 이번 캡처에 포함되지 않아 로컬에는 존재하지 않습니다.

## 사이트 기술 스택 (`index.html` 기준)

- 프레임워크나 번들러 없는 순수 HTML/CSS/JS.
- `g4_`로 시작하는 전역 JS 변수들과 `js/g_common.js` 스크립트로 볼 때, 실제 서비스 중인 사이트는 **그누보드(Gnuboard)**(한국의 PHP 기반 CMS/게시판 프레임워크) 위에서 동작하는 것으로 보입니다. 다만 이 저장소에는 프론트엔드 자산만 포함되어 있습니다.
- 사용된 프론트엔드 라이브러리: AOS(스크롤 애니메이션), Slick, Swiper, Owl Carousel, bxSlider — CDN(`unpkg.com`) 미러본과 사이트 자체 `css/`/`js/` 폴더 양쪽에서 로드됩니다.
- 페이지 언어/로케일은 한국어(`lang="ko"`)입니다.

## 이 저장소에서 작업할 때

- **실제 리뉴얼 개발은 `visioneye-renewal/` 안에서** 진행하세요 (`npm install` 후 `npm run dev`). 새 날짜 폴더를 만들어 프로젝트를 복사하지 말고, 작업 내용은 `WORKLOG.md`에 날짜별로 기록하세요.
- `visioneye.co.kr/` 서드파티 도메인 폴더들은 캡처 과정에서 딸려온 부수물로 취급하고 수정하지 마세요. 이 스냅샷을 편집할 일이 있다면 범위를 `visioneye.co.kr/visioneye.co.kr/`로 한정하세요.
- 스냅샷은 서버나 빌드 단계 없이 `visioneye.co.kr/visioneye.co.kr/index.html`을 브라우저에서 직접 열거나 아무 정적 파일 서버로 서빙해서 볼 수 있습니다.
