import { useEffect, useRef, useState } from "react";
import { treatmentHighlights } from "../../data/homeContent";
import "../../styles/blueEyeCenter.css";

const TOTAL_SLIDES = treatmentHighlights.length + 1; // 안경 배너 + 5개 카드

function BlueEyeCenter() {
  const wrapperRef = useRef(null);
  const heroRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let frameId;
    let lastIndex = 0;

    const update = () => {
      const wrapper = wrapperRef.current;
      if (wrapper) {
        const rect = wrapper.getBoundingClientRect();
        const maxScroll = Math.max(1, rect.height - window.innerHeight);
        const progress = Math.min(1, Math.max(0, -rect.top) / maxScroll);
        const rawIndex = progress * TOTAL_SLIDES;
        const index = Math.min(TOTAL_SLIDES - 1, Math.floor(rawIndex));
        if (index !== lastIndex) {
          lastIndex = index;
          setActiveIndex(index);
        }

        // 안경 배너는 페이드 없이, 스크롤한 만큼만 위로 이동해서 사라짐
        if (heroRef.current) {
          const heroProgress = Math.min(1, Math.max(0, rawIndex));
          heroRef.current.style.transform = `translateY(${heroProgress * -120}vh)`;
        }
      }
      frameId = requestAnimationFrame(update);
    };

    frameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="blue-eye-center-wrapper"
      style={{ height: `${TOTAL_SLIDES * 100}vh` }}
    >
      <div className="blue-eye-center-stage">
        <div ref={heroRef} className="blue-eye-center-slide blue-eye-center-slide--hero">
          <img
            className="blue-eye-center__hero-img"
            src="/img/page/blue-eye-center.png"
            alt="Blue Eye Center"
          />
        </div>

        {treatmentHighlights.map((chapter, i) => {
          const slideIndex = i + 1;
          const isReverse = i % 2 === 1;
          return (
            <div
              key={chapter.key}
              className={`blue-eye-center-slide ${
                activeIndex === slideIndex ? "is-active" : ""
              }`}
            >
              <div
                className={`blue-eye-center__chapter ${
                  isReverse ? "blue-eye-center__chapter--reverse" : ""
                }`}
              >
                <div className="blue-eye-center__chapter-photo">
                  <img src={chapter.image} alt={chapter.title} />
                </div>
                <div className="blue-eye-center__chapter-text">
                  <p className="blue-eye-center__chapter-eyebrow">BLUE EYE CENTER</p>
                  <p className="blue-eye-center__chapter-bracket">[ {chapter.title} ]</p>
                  <h3 className="blue-eye-center__chapter-question">
                    치료가
                    <br />
                    필요하세요 ?
                  </h3>
                  <span className="blue-eye-center__chapter-divider" aria-hidden="true" />
                  <p className="blue-eye-center__chapter-desc">{chapter.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BlueEyeCenter;
