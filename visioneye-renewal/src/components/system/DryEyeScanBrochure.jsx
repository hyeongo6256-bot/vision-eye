import { useEffect, useRef } from "react";

// 사용자가 제작한 Dry Eye Scan 브로슈어(정적 HTML, dryeyescan-brochure.html)를 옮긴 컴포넌트입니다.
// LightMedBrochure와 같은 스크롤 기반 '북' 프레젠테이션 패턴이라 구조도 동일합니다
// (마크업은 SVG가 많아 원본 그대로 렌더링, 페이지 전환 로직만 useEffect로 이식).
const DRYEYESCAN_BROCHURE_HTML = `
<div class="des" id="des">
<div class="book">
<div class="stage">
<div class="prog"></div>

<!-- ============ P1 COVER ============ -->
<article class="pg">
  <div class="cover-main">
    <div>
      <p class="tag rv">마이봄샘 기능평가를 활용한<br>안구 표면 분석용 통합 시스템</p>
      <img class="logo rv" src="/img/page/system/dryeyescan-logo.png" alt="Dry eye scan">
      <p class="lead rv"><b>Dry Eye Scan</b>을 통해 안구건조증 관련 항목을<br>정확히 진단하여 불편함으로부터<br>벗어나실 수 있습니다.</p>
    </div>
    <div class="cover-img"><img src="/img/page/system/dryeyescan-cover.jpg" alt="Dry Eye Scan 장비와 안구 이미지"></div>
  </div>
  <div class="stats">
    <div class="stat"><div class="v">7<span style="font-size:.6em">가지</span></div><div class="l">정밀 검사 항목</div></div>
    <div class="stat"><div class="v">3D</div><div class="l">마이봄샘 이미징 (Meibography)</div></div>
    <div class="stat"><div class="v">NIBUT</div><div class="l">눈물막 깨짐 시간 측정</div></div>
    <div class="stat"><div class="v">Blinking</div><div class="l">눈 깜빡임 완전도 검사</div></div>
  </div>
</article>

<!-- ============ P2 DIAGNOSTICS ============ -->
<article class="pg p2">
  <header class="head"><div class="no en">02 — DIAGNOSTICS</div><h2>한 번의 검사로 안구 표면을 종합 분석합니다</h2></header>
  <div class="body">
    <figure class="shot rv"><img src="/img/page/system/dryeyescan-shot.jpg" alt="Dry Eye Scan 분석 소프트웨어 화면"></figure>
    <ul class="checks rv">
      <li><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="#6cc04a"/><path d="M7 12.5l3.2 3.2L17 9" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg><span>눈물 지질층 두께 측정<small>자동 간섭측정</small></span></li>
      <li><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="#6cc04a"/><path d="M7 12.5l3.2 3.2L17 9" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg><span>눈물샘 분포도 측정</span></li>
      <li><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="#6cc04a"/><path d="M7 12.5l3.2 3.2L17 9" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg><span>3D 시연을 포함한 향상된 Meibography<small>구조와 분비물 관점의 완전한 분석</small></span></li>
      <li><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="#6cc04a"/><path d="M7 12.5l3.2 3.2L17 9" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg><span>눈물막 깨짐 시간 측정<small>NIBUT</small></span></li>
      <li><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="#6cc04a"/><path d="M7 12.5l3.2 3.2L17 9" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg><span>눈 깜빡임 완전도 검사<small>Blinking Quality Detection</small></span></li>
      <li><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="#6cc04a"/><path d="M7 12.5l3.2 3.2L17 9" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg><span>눈물의 양 측정<small>수분을 함유한 건조안</small></span></li>
      <li><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="#6cc04a"/><path d="M7 12.5l3.2 3.2L17 9" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg><span>징후학 / 수량화된 구결막 발적 / 동공측정 테스트</span></li>
    </ul>
  </div>
</article>

<!-- ============ P3 BENEFITS ============ -->
<article class="pg p3">
  <header class="head"><div class="no en">03 — BENEFITS</div><h2>Dry Eye Scan을 통해</h2></header>
  <div class="body">
    <div class="rv">
      <div class="eyebrow en">3D MEIBOGRAPHY</div>
      <h3 class="title">눈꺼풀 속 마이봄샘을<br>눈으로 직접 확인합니다</h3>
      <figure class="meibo"><img src="/img/page/system/dryeyescan-meibo.jpg" alt="3D 마이봄샘 이미지"><figcaption>마이봄샘 3D 이미지</figcaption></figure>
    </div>
    <div class="benefits rv">
      <div class="ben"><span class="n">01</span><p>최초로 3D 이미지가 눈꺼풀 구조의 이해를 도울 수 있습니다.</p></div>
      <div class="ben"><span class="n">02</span><p>가능한 마이봄샘 질병과 건강한 마이봄샘과의 차이점을 확인할 수 있습니다.</p></div>
      <div class="ben"><span class="n">03</span><p>환자분들이 왜 안구 불편함과 시력 불안정을 겪는지 스스로 알 수 있습니다.</p></div>
      <div class="ben"><span class="n">04</span><p>왜 특정 치료가 권유되는지 환자분들이 쉽게 이해할 수 있습니다.</p></div>
    </div>
  </div>
</article>

<!-- ============ P4 DRY EYE ============ -->
<article class="pg p4">
  <header class="head"><div class="no en">04 — DRY EYE SYNDROME</div><h2>안구건조증이란?</h2></header>
  <div class="body">
    <div class="txt rv">
      <p>안구건조증후군은 눈물 양의 감소, 눈물의 질 변화로 인해, 혹은 눈물이 안구 표면에서 안정적인 막을 만들지 못해 발생하는 <b>실제 질병</b>입니다.</p>
      <p>안구가 충분히 수분을 공급받지 못해 보호받지 못하게 되면 안구 표면의 손상으로 이어져 시력 감소 및 안구 불편증을 일으킬 수 있으며, <span class="warn">치료하지 않은 채로 두면 실명까지 이어질 수도 있습니다.</span></p>
      <p>이러한 불편증은 눈물막에 의한 보호 손실, 혹은 급속한 눈물막 분리로 각막이 공기 중에 직접 노출되어 발생합니다.</p>
    </div>
    <div class="rv">
      <div class="sym-t">이런 증상이 있다면 검사를 받아보세요</div>
      <div class="sym">
        <span>붉어짐</span><span>가려움</span><span>화끈거림</span>
        <span>시각적 피로함</span><span>이물감</span><span>따끔함</span>
        <span>건조함</span><span>과한 눈물</span><span>간헐적 흐린 시야</span>
      </div>
      <p class="note">※ 위 증상들을 포함하지만 이에 국한되지 않습니다.</p>
    </div>
  </div>
</article>

<nav class="dots" aria-label="페이지 이동"></nav>
<div class="count en"><b>01</b> / 04</div>
<div class="hint en">SCROLL<i></i></div>
</div>
</div>
</div>
`;

function DryEyeScanBrochure() {
  const wrapperRef = useRef(null);

  useEffect(() => {
    // wrapperRef.current는 React가 렌더링한 바깥 래퍼 div이고, 실제 ".des" 루트는
    // dangerouslySetInnerHTML로 그 안에 주입된 자식이라 한 단계 더 들어가서 찾아야 합니다.
    const root = wrapperRef.current?.querySelector(".des");
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
    const mq = window.matchMedia("(max-height:560px)");
    let cur = -1;
    const pad = (i) => (i < 10 ? "0" : "") + i;
    const topOff = () =>
      parseFloat(getComputedStyle(root).getPropertyValue("--des-top")) || 0;

    const dotButtons = pages.map((_, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.setAttribute("aria-label", `${i + 1}페이지`);
      b.onclick = () => go(i);
      dots.appendChild(b);
      return b;
    });

    function H() {
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
      book.style.height = `${H() + (n - 1) * H() * PER}px`;
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
      const i = Math.round((-book.getBoundingClientRect().top + topOff()) / (H() * PER));
      set(Math.max(0, Math.min(n - 1, i)));
    }
    function go(i) {
      window.scrollTo({
        top: book.getBoundingClientRect().top + window.pageYOffset - topOff() + i * H() * PER,
        behavior: "smooth",
      });
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

  return <div ref={wrapperRef} dangerouslySetInnerHTML={{ __html: DRYEYESCAN_BROCHURE_HTML }} />;
}

export default DryEyeScanBrochure;
