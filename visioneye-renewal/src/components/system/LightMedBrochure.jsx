import { useEffect, useRef } from "react";

// 사용자가 제작한 LightMed YAG 브로슈어 v2(정적 HTML, lightlas-yag-brochure_1.html)를 옮긴 컴포넌트입니다.
// 스크롤에 따라 페이지가 한 장씩 넘어가는 '북' 형태 프레젠테이션이라, 마크업은 원본 그대로 렌더링하고
// (SVG가 많아 JSX로 옮기지 않음) 페이지 전환을 담당하던 원본 <script>의 로직만 useEffect로 옮겼습니다.
const LIGHTMED_BROCHURE_HTML = `
<div class="lmb" id="lmb">
<div class="book">
<div class="stage">
<div class="prog"></div>

<!-- ============ P1 COVER ============ -->
<article class="pg cover">
  <div class="cover-main">
    <div class="cover-txt">
      <div class="brand rv">
        <svg width="42" height="42" viewBox="0 0 44 44" aria-hidden="true"><g fill="none" stroke="#1f7fc4" stroke-width="3"><rect x="10" y="10" width="24" height="24" transform="rotate(45 22 22)"/><rect x="15" y="15" width="14" height="14" transform="rotate(45 22 22)"/></g></svg>
        <div><div class="brand-name">LIGHTMED</div><div class="brand-tag en">Enlightening Vision</div></div>
      </div>
      <div class="rv">
        <div class="kicker en">THE WORLD'S PREMIER LASER PHOTODISRUPTOR</div>
        <h1>LIGHTLas <b>YAG</b></h1>
        <div class="sub en">LASER PHOTODISRUPTOR</div>
      </div>
      <p class="desc rv">고급 임상 치료에 최적화된 멀티모달리티 YAG 레이저.<br>전안부부터 후안부까지, 하나의 장비로 정밀하게.</p>
    </div>
    <div class="cover-img"><img src="/img/page/system/lightlas-hero.jpg" alt="LIGHTLas YAG 레이저 장비"></div>
  </div>
  <div class="stats">
    <div class="stat"><div class="v en">±500<small>μm</small></div><div class="l">레이저 오프셋 범위</div></div>
    <div class="stat"><div class="v en">5<small>단</small></div><div class="l">내장 배율 변환기</div></div>
    <div class="stat"><div class="v en">8<small>μm</small></div><div class="l">포커스 스팟 사이즈</div></div>
    <div class="stat"><div class="v en">Crystal</div><div class="l">Q-Switch 레이저 기술</div></div>
  </div>
</article>

<!-- ============ P2 WHY ============ -->
<article class="pg why">
  <div class="body one">
    <div class="rv">
      <div class="eyebrow en">Why LightMed</div>
      <h3 class="title">LightMed YAG LASER를 선택해야 하는 이유</h3>
    </div>
    <div class="why-grid rv">
      <div class="card"><div class="num en">01</div><h4>긴 수명, 안정적인 출력</h4><p>Crystal Cavity 구조로 수명이 훨씬 길고, POWER가 안정적으로 유지됩니다.</p></div>
      <div class="card"><div class="num en">02</div><h4>정확한 조준</h4><p>타사 레이저는 POWER 변화가 심하거나 Focus beam 위치에 Laser beam이 정확히 맞지 않는 경우가 많지만, LightMed 레이저는 이러한 결점이 없습니다.</p></div>
      <div class="card"><div class="num en">03</div><h4>업계 최대 오프셋 ±500μm</h4><p>타제품 ±150μm 대비 최대 ±500μm까지 변환 가능하여 더욱 미세한 조작이 가능합니다.</p>
        <div class="cmp-row"><span>LightMed</span><div class="bar"><i style="width:100%;background:var(--blue)"></i></div><span class="val" style="color:var(--blue)">±500μm</span></div>
        <div class="cmp-row"><span>타제품</span><div class="bar"><i style="width:30%;background:var(--steel)"></i></div><span class="val" style="color:var(--mute)">±150μm</span></div>
      </div>
      <div class="card"><div class="num en">04</div><h4>5단 확대 배율</h4><p>미세 구조부터 망막 광시야까지, 5단 Magnification(확대배율)으로 편안한 작업 거리에서 진단 능력을 높입니다.</p></div>
    </div>
  </div>
</article>

<!-- ============ P3 ANTERIOR/POSTERIOR ============ -->
<article class="pg">
  <header class="head"><div class="no en">03 — CAPABILITIES</div><h2>ADVANCED ANTERIOR AND POSTERIOR CAPABILITIES</h2><p>업계 최대 범위의 초점면 이동과 정밀 광학계를 결합해, 정밀한 시술과 최적의 결과를 지원합니다.</p></header>
  <div class="body">
    <div class="rv">
      <div class="fg">
        <h4>후방/전방 레이저 오프셋: ±500μm</h4>
        <ul>
          <li><b>큰 초점 이동</b> — 편안함을 해치지 않고 치료 초점을 세밀하게 조정하며, 렌즈 피팅(pitting) 가능성을 방지</li>
          <li><b>임상적 다양성</b> — 다양한 IOL 타입이 사용되는 다환자 환경에 필수</li>
          <li><b>폭넓은 설정 범위</b> — ±500μm의 광범위한 조정으로 더 높은 정확도와 제어력</li>
        </ul>
      </div>
      <div class="fg">
        <h4>고품질 정밀 광학계</h4>
        <ul>
          <li><b>탁월한 전안부 시술</b> — 고해상도 세극등과 고품질 부품으로 최적화된 설계</li>
          <li><b>선명한 시야</b> — 빔 스플리터가 없는 설계와 내부 코팅된 안전 광학계로 비교할 수 없는 시술 시야 확보</li>
        </ul>
      </div>
    </div>
    <div class="figs rv" style="--fh:24vh">
      <figure class="fig">
        <svg viewBox="0 0 400 250" role="img" aria-label="±500μm 오프셋 개념도">
          <circle cx="200" cy="120" r="100" fill="#fff" stroke="#3b5f8f" stroke-width="3"/>
          <line x1="110" y1="120" x2="290" y2="120" stroke="#b8c6d4" stroke-dasharray="4 4"/>
          <g stroke="#3aa0dc" stroke-width="2.2" fill="none"><path d="M104 70 L150 120 L104 170"/><path d="M296 70 L250 120 L296 170"/></g>
          <path d="M160 58 L200 120 L240 58" stroke="#8fa6bd" stroke-width="1.8" fill="none"/>
          <circle cx="150" cy="120" r="5" fill="#1f7fc4"/><circle cx="250" cy="120" r="5" fill="#1f7fc4"/><circle cx="200" cy="120" r="5" fill="#8fa6bd"/>
          <g stroke="#2b3440" stroke-width="1.2"><line x1="154" y1="150" x2="196" y2="150"/><line x1="204" y1="150" x2="246" y2="150"/><line x1="200" y1="140" x2="200" y2="160"/></g>
          <g font-family="Montserrat,Noto Sans KR,sans-serif" font-size="11" fill="#2b3440" text-anchor="middle">
            <text x="175" y="168">500μm</text><text x="225" y="168">500μm</text>
            <text x="200" y="44" fill="#66727f">Aiming Beam 초점</text>
            <text x="95" y="242" fill="#1f7fc4">Laser Beam 초점</text><text x="305" y="242" fill="#1f7fc4">Laser Beam 초점</text>
          </g>
        </svg>
        <figcaption>조준빔 초점 기준 전·후방 각 500μm까지 레이저 초점 이동</figcaption>
      </figure>
      <figure class="fig">
        <svg viewBox="0 0 400 170" role="img" aria-label="시야 비교" style="max-height:16vh">
          <circle cx="200" cy="85" r="78" fill="#a9cdea"/><circle cx="200" cy="85" r="52" fill="#e3e8ee"/>
          <line x1="152" y1="78" x2="248" y2="78" stroke="#8a96a3" stroke-dasharray="4 3"/>
          <line x1="124" y1="100" x2="276" y2="100" stroke="#1f7fc4" stroke-width="2" stroke-dasharray="5 3"/>
          <g font-family="Noto Sans KR,sans-serif" font-size="11" text-anchor="middle"><text x="200" y="70" fill="#66727f">타사 시야</text><text x="200" y="118" fill="#1f7fc4" font-weight="600">LIGHTLas YAG 시야</text></g>
        </svg>
        <figcaption>동급 경쟁 제품 대비 더 넓은 시야(Field of View)</figcaption>
      </figure>
    </div>
  </div>
</article>

<!-- ============ P4 PERFORMANCE 1 ============ -->
<article class="pg">
  <header class="head"><div class="no en">04 — PERFORMANCE</div><h2>SUPERIOR PERFORMANCE IN A CLASS OF ITS OWN</h2><p>업계에서 가장 많이 사용되는 레이저 광파괴기. 뛰어난 기능성, 안전성, 다용도성을 모두 갖췄습니다.</p></header>
  <div class="body">
    <figure class="fig rv">
      <svg viewBox="0 0 400 200" role="img" aria-label="8μm 스팟 포커싱">
        <g fill="#e8573f">
          <circle cx="70" cy="50" r="30"/><circle cx="105" cy="58" r="27"/><circle cx="140" cy="67" r="24"/><circle cx="172" cy="76" r="20"/><circle cx="200" cy="84" r="16"/><circle cx="224" cy="90" r="12"/><circle cx="242" cy="95" r="8"/>
          <circle cx="70" cy="140" r="30"/><circle cx="105" cy="132" r="27"/><circle cx="140" cy="123" r="24"/><circle cx="172" cy="114" r="20"/><circle cx="200" cy="106" r="16"/><circle cx="224" cy="100" r="12"/><circle cx="242" cy="96" r="8"/>
        </g>
        <line x1="252" y1="20" x2="252" y2="170" stroke="#66727f" stroke-dasharray="3 3"/>
        <g font-family="Montserrat,sans-serif" font-size="11" fill="#2b3440"><text x="262" y="30">Focal Plane</text><text x="262" y="100">8μm Spot</text><text x="40" y="192">Defocused</text><text x="210" y="192">Focused</text></g>
        <line x1="110" y1="186" x2="195" y2="186" stroke="#8a96a3" stroke-width="2"/><path d="M195 181 L204 186 L195 191Z" fill="#8a96a3"/>
      </svg>
      <figcaption>두 개의 조준빔이 초점면에서 하나로 수렴 — 선명하고 읽기 쉬운 8μm 스팟</figcaption>
    </figure>
    <div class="rv">
      <div class="fg">
        <h4>내장 5단 배율 변환기</h4>
        <ul><li><b>탁월한 관찰</b> — 미세 구조부터 망막 광시야까지, 통합 배율 변환기가 편안한 작업 거리에서 진단 능력 향상</li></ul>
      </div>
      <div class="fg">
        <h4>트윈 조준 포커싱 시스템</h4>
        <ul><li><b>쉬운 정밀함</b> — 미세 포커싱 조준빔 두 개가 목표 초점에서 수렴해 선명하고 식별하기 쉬운 스팟 형성</li></ul>
      </div>
      <div class="fg">
        <h4>변함없는 장기 성능</h4>
        <ul>
          <li><b>자동 보정(Auto-Calibration)</b> — 출력이 설정 수준 이하로 저하되면 마이크로프로세서가 감지해 자동 보정</li>
          <li><b>자가 진단 기능</b> — 최상의 성능을 위해 내부 파라미터를 자동으로 최적화</li>
        </ul>
      </div>
    </div>
  </div>
</article>

<!-- ============ P5 PERFORMANCE 2 ============ -->
<article class="pg">
  <header class="head"><div class="no en">05 — LASER TECHNOLOGY</div><h2>SUPERB CRYSTAL Q-SWITCH LASER TECHNOLOGY</h2><p>독자적인 레이저 캐비티로 업계 최저 수준의 에너지에서 정밀하고 일관된 절개를 구현합니다.</p></header>
  <div class="body">
    <div class="rv">
      <div class="fg">
        <h4>Crystal Q-Switch 레이저 기술</h4>
        <ul>
          <li><b>견고한 설계</b> — 시스템에 통합된 laser-fire Q-Switch로 구동</li>
          <li><b>독자적 레이저 캐비티</b> — 업계 최저 수준의 광학 파괴 에너지에서 최적의 절개 정밀도와 일관된 샷 출력</li>
          <li><b>고급 소음 저감</b> — 환자 순응도를 높이고, 더 낮은 에너지로 시술하여 부작용과 렌즈 피팅 감소</li>
        </ul>
      </div>
      <div class="fg">
        <h4>Crystal Cavity — 긴 수명, 안정된 POWER</h4>
        <ul><li>타사 레이저에서 흔한 <b>POWER 변동</b>이나 <b>조준빔–레이저빔 불일치</b> 문제가 없습니다.</li></ul>
      </div>
    </div>
    <figure class="fig rv">
      <svg viewBox="0 0 400 200" role="img" aria-label="광학 파괴 에너지 분포 비교">
        <defs><linearGradient id="lmg" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#2b3aa0"/><stop offset=".35" stop-color="#3aa0dc"/><stop offset=".6" stop-color="#f2d33a"/><stop offset=".85" stop-color="#e8573f"/><stop offset="1" stop-color="#b3202a"/></linearGradient>
        <linearGradient id="lmg2" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#2b3aa0"/><stop offset=".45" stop-color="#3aa0dc"/><stop offset=".85" stop-color="#9fd35a"/><stop offset="1" stop-color="#f2d33a"/></linearGradient></defs>
        <path d="M60 170 C85 170 95 30 110 30 C125 30 135 170 160 170Z" fill="url(#lmg)"/>
        <path d="M240 170 C255 170 250 75 275 72 L305 72 C330 75 325 170 340 170Z" fill="url(#lmg2)"/>
        <line x1="60" y1="30" x2="340" y2="30" stroke="#2b3440" stroke-dasharray="4 3"/>
        <line x1="240" y1="72" x2="340" y2="72" stroke="#2b3440" stroke-dasharray="4 3"/>
        <line x1="40" y1="170" x2="360" y2="170" stroke="#b8c6d4"/>
        <g font-family="Noto Sans KR,sans-serif" font-size="11" text-anchor="middle" fill="#2b3440"><text x="110" y="190">기존 방식</text><text x="290" y="190" fill="#1f7fc4" font-weight="600">LIGHTLas YAG</text></g>
      </svg>
      <figcaption>광학 파괴(Optical Breakdown) 비교 — 더 낮은 최적 에너지로 정밀 절개</figcaption>
    </figure>
  </div>
</article>

<!-- ============ P6 UPGRADE ============ -->
<article class="pg">
  <header class="head"><div class="no en">06 — UPGRADEABILITY</div><h2>ULTIMATE UPGRADEABILITY</h2><p>LIGHTLas YAG와 LIGHTLas SLT Deux(YAG/SLT 복합 레이저)는 V-시리즈로 업그레이드해 유리체 용해술(Vitreolysis) 기능을 더할 수 있습니다.</p></header>
  <div class="body one">
    <div class="rv">
      <div class="eyebrow en">V-Series</div>
      <h3 class="title">성공적인 유리체 용해술을 위한 유연성</h3>
      <p class="lead">전·후방 YAG 레이저 치료에 모두 최적화된 LIGHTLas YAG-V — 하나의 장비로 전·후안부 멀티 워크스테이션을 구성합니다.</p>
    </div>
    <div class="models rv">
      <div class="model"><div class="t">LIGHTLas YAG<br>LIGHTLas SLT Deux</div><div class="d">YAG 단독 / YAG·SLT 복합</div></div>
      <div class="arrow"><svg width="40" height="20" viewBox="0 0 40 20"><path d="M2 10 H32 M26 4 L34 10 L26 16" stroke="#1f7fc4" stroke-width="2.4" fill="none"/></svg>업그레이드</div>
      <div class="model v"><div class="t">LIGHTLas YAG-V<br>LIGHTLas SLT Deux-V</div><div class="d">+ 유리체 용해술(Vitreolysis) 기능</div></div>
    </div>
    <div class="uses rv">
      <div class="use"><b>낭 절개술</b>차세대 IOL 환경의 전·후낭 절개</div>
      <div class="use"><b>주변부 홍채절개술</b>녹내장 치료</div>
      <div class="use"><b>유리체 용해술</b>유리체 부유물·혼탁 치료</div>
    </div>
  </div>
</article>

<!-- ============ P7 VITREOLYSIS ============ -->
<article class="pg">
  <header class="head"><div class="no en">07 — VITREOLYSIS</div><h2>NON-INVASIVE, SAFE VITREOUS TREATMENT</h2><p>LIGHTLas YAG-V는 유리체 섬유에 대한 비침습적이고 안전한 치료를 제공합니다.</p></header>
  <div class="body">
    <div class="rv">
      <div class="fg">
        <ul>
          <li>독창적인 설계로 유리체 깊숙이까지 조명</li>
          <li>가림 없는 레이저 빔으로 시술마다 더 높은 제어력·편의성·정밀도 제공</li>
          <li>투포인트 조준 시스템과 넓은 오프셋 범위로 광학 파괴 위치를 정확히 잡고 인접 조직 보호</li>
        </ul>
      </div>
      <blockquote class="quote">
        <p>“LIGHTMED YAG-V 레이저와 유리체 용해술 성능, 언제든 SLT 기능을 추가할 수 있는 확장성에 깊은 인상을 받았습니다. 모든 상황에서 완벽하게 작동했습니다. 비문증 때문에 유리체 절제술을 예약했던 한 환자는 치료 후 만족해 수술을 취소하기도 했습니다.”</p>
        <cite>Stewart Galloway, MD · Crossville, TN</cite>
      </blockquote>
    </div>
    <figure class="fig rv">
      <svg viewBox="0 0 400 205" role="img" aria-label="안구 단면도">
        <ellipse cx="205" cy="95" rx="120" ry="82" fill="#f2cf85" stroke="#3b5f8f" stroke-width="4"/>
        <path d="M92 55 Q70 95 92 135" fill="#fff" stroke="#8fa6bd" stroke-width="3"/>
        <ellipse cx="108" cy="95" rx="12" ry="30" fill="#dfe6ee" stroke="#8fa6bd" stroke-width="2"/>
        <path d="M322 90 L390 120 L390 132 L320 104Z" fill="#f2cf85" stroke="#b3202a" stroke-width="1.5"/>
        <g fill="none" stroke="#9a6b3a" stroke-width="1.6" opacity=".7"><path d="M180 60 q12 10 4 22 q-8 10 6 20"/><path d="M230 120 q10 -6 18 4"/><circle cx="215" cy="75" r="3"/><circle cx="198" cy="128" r="2.5"/></g>
        <text x="205" y="199" font-family="Noto Sans KR,sans-serif" font-size="11" fill="#66727f" text-anchor="middle">유리체 내 부유물(혼탁·섬유)</text>
      </svg>
      <figcaption>유리체 혼탁을 기화시키고 섬유를 절단해 비문증(날파리증)으로 인한 시각적 불편을 해소</figcaption>
    </figure>
  </div>
</article>

<nav class="dots" aria-label="페이지 이동"></nav>
<div class="count en"><b>01</b> / 07</div>
<div class="hint en">SCROLL<i></i></div>
</div>
</div>
</div>
`;

function LightMedBrochure() {
  const rootRef = useRef(null);

  useEffect(() => {
    // rootRef.current는 React가 렌더링한 바깥 래퍼 div이고, 실제 ".lmb" 루트(원본 스크립트가
    // getElementById로 찾던 그 엘리먼트)는 dangerouslySetInnerHTML로 그 안에 주입된 자식이라
    // 한 단계 더 들어가서 찾아야 합니다. (안 그러면 classList 조작이 래퍼에 적용되어
    // .lmb.flat 같은 CSS 규칙이 전혀 매치되지 않습니다.)
    const root = rootRef.current?.querySelector(".lmb");
    if (!root) return;

    const book = root.querySelector(".book");
    const stage = root.querySelector(".stage");
    const pages = Array.from(root.querySelectorAll(".pg"));
    const n = pages.length;
    const dots = root.querySelector(".dots");
    const count = root.querySelector(".count");
    const prog = root.querySelector(".prog");
    const hint = root.querySelector(".hint");
    const PER = 0.9; // 한 페이지 넘기는 데 필요한 스크롤 거리(화면 높이 배수)
    const mq = window.matchMedia("(max-width:860px),(max-height:560px)");
    let cur = -1;
    const pad = (i) => (i < 10 ? "0" : "") + i;

    count.innerHTML = `<b>01</b> / ${pad(n)}`;
    const dotButtons = pages.map((_, i) => {
      const b = document.createElement("button");
      b.setAttribute("aria-label", `${i + 1}페이지`);
      b.onclick = () => go(i);
      dots.appendChild(b);
      return b;
    });

    function stageH() {
      return stage.clientHeight;
    }
    function layout() {
      if (mq.matches) {
        root.classList.add("flat");
        book.style.height = "";
        pages.forEach((p) => p.classList.add("on"));
        return;
      }
      root.classList.remove("flat");
      book.style.height = `${stageH() + (n - 1) * stageH() * PER}px`;
      cur = -1;
      update();
    }
    function set(i) {
      if (i === cur) return;
      cur = i;
      pages.forEach((p, k) => {
        p.classList.toggle("on", k === i);
        p.classList.toggle("past", k < i);
      });
      dotButtons.forEach((b, k) => b.classList.toggle("on", k === i));
      count.innerHTML = `<b>${pad(i + 1)}</b> / ${pad(n)}`;
      prog.style.width = `${((i + 1) / n) * 100}%`;
      hint.style.opacity = i === 0 ? 1 : 0;
      count.style.opacity = i === 0 ? 0 : 1;
    }
    function update() {
      if (root.classList.contains("flat")) return;
      const top =
        -book.getBoundingClientRect().top +
        (parseFloat(getComputedStyle(root).getPropertyValue("--lmb-top")) || 0);
      const i = Math.round(top / (stageH() * PER));
      set(Math.max(0, Math.min(n - 1, i)));
    }
    function go(i) {
      const y =
        book.getBoundingClientRect().top +
        window.pageYOffset -
        (parseFloat(getComputedStyle(root).getPropertyValue("--lmb-top")) || 0) +
        i * stageH() * PER;
      window.scrollTo({ top: y, behavior: "smooth" });
    }

    const onScroll = () => requestAnimationFrame(update);
    const onMqChange = () => layout();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", layout);
    if (mq.addEventListener) mq.addEventListener("change", onMqChange);
    else mq.addListener(onMqChange);

    layout();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", layout);
      if (mq.removeEventListener) mq.removeEventListener("change", onMqChange);
      else mq.removeListener(onMqChange);
      dots.innerHTML = "";
    };
  }, []);

  return <div ref={rootRef} dangerouslySetInnerHTML={{ __html: LIGHTMED_BROCHURE_HTML }} />;
}

export default LightMedBrochure;
