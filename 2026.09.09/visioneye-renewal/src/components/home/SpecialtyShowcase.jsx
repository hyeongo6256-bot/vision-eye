import { useEffect, useState } from "react";
import { specialtySlides, specialtySubtitle } from "../../data/homeContent";
import "../../styles/specialtyShowcase.css";

const AUTO_PLAY_MS = 4500;
const count = specialtySlides.length;

function wrapDiff(diff) {
  if (diff > count / 2) return diff - count;
  if (diff < -count / 2) return diff + count;
  return diff;
}

function SpecialtyShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = specialtySlides[activeIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % count);
    }, AUTO_PLAY_MS);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index) => setActiveIndex(((index % count) + count) % count);

  return (
    <section id="sec1" className="specialty-grid">
      <h2 className="specialty-grid__heading">
        <span className="specialty-grid__quote">‘</span>
        SPECIALITY
        <span className="specialty-grid__quote">’</span>
      </h2>
      <p className="specialty-grid__subtitle">
        {specialtySubtitle.map((line, index) => (
          <span key={line}>
            {line}
            {index < specialtySubtitle.length - 1 && <br />}
          </span>
        ))}
      </p>

      <div className="specialty-coverflow">
        <button
          type="button"
          className="specialty-coverflow__nav specialty-coverflow__nav--prev"
          onClick={() => goTo(activeIndex - 1)}
          aria-label="이전 진료분야"
        >
          ‹
        </button>

        {specialtySlides.map((slide, index) => {
          const diff = wrapDiff(index - activeIndex);
          const distance = Math.abs(diff);
          const style = {
            transform: `translate(-50%, -50%) translateX(${diff * 150}px) scale(${1 - distance * 0.12})`,
            zIndex: 10 - distance,
            opacity: distance > 2 ? 0 : 1,
            pointerEvents: distance > 2 ? "none" : "auto",
          };
          return (
            <button
              key={slide.key}
              type="button"
              className="specialty-card"
              style={style}
              onClick={() => goTo(index)}
              aria-label={slide.label}
              aria-current={diff === 0}
            >
              <img src={slide.image} alt={slide.label} />
            </button>
          );
        })}

        <button
          type="button"
          className="specialty-coverflow__nav specialty-coverflow__nav--next"
          onClick={() => goTo(activeIndex + 1)}
          aria-label="다음 진료분야"
        >
          ›
        </button>
      </div>

      <div key={active.key} className="specialty-detail">
        <h3 className="specialty-detail__title">{active.label}</h3>
        <p className="specialty-detail__tagline">{active.title}</p>
        <p className="specialty-detail__desc">{active.description}</p>
        {active.note && <p className="specialty-detail__note">{active.note}</p>}
      </div>
    </section>
  );
}

export default SpecialtyShowcase;
