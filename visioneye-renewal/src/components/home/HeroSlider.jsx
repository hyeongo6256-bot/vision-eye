import { useEffect, useState } from "react";
import { heroSlides, heroContent } from "../../data/homeContent";
import "../../styles/heroSlider.css";

const AUTO_PLAY_MS = 5000;

function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroSlides.length);
    }, AUTO_PLAY_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="main-slider">
      <div className="visual">
        <div className="bx-wrapper">
          <div className="bx-viewport">
            <ul id="mainSlide">
              {heroSlides.map((slide, index) => (
                <li key={slide.key} className={index === activeIndex ? "on" : ""}>
                  <div className={`v_bg ${slide.bgClass}`} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 슬라이드가 넘어가도 이 문구 영역은 다시 그려지지 않아 깜빡이지 않습니다. */}
        <div className="hero_overlay">
          <div className="hero_overlay_top">
            <p className="hero_eyebrow">{heroContent.eyebrow}</p>
            <h1 className="hero_title">{heroContent.titleKo}</h1>
          </div>
          {/* 영문 문구와 오른쪽 설명 문구를 같은 줄(같은 높이)에 나란히 배치합니다. */}
          <div className="hero_overlay_bottom">
            <p className="hero_title_en">{heroContent.titleEn}</p>
            <div className="hero_overlay_right">
              {heroContent.description.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSlider;
