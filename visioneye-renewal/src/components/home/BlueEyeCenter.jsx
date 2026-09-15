import { treatmentHighlights } from "../../data/homeContent";
import "../../styles/blueEyeCenter.css";

function BlueEyeCenter() {
  return (
    <section className="blue-eye-center">
      <img
        className="blue-eye-center__hero-img"
        src="/img/page/blue-eye-center.png"
        alt="Blue Eye Center"
      />

      <ul className="blue-eye-center__list">
        {treatmentHighlights.map((item, index) => (
          <li
            key={item.key}
            className={`blue-eye-center__row ${
              index % 2 === 1 ? "blue-eye-center__row--reverse" : ""
            }`}
          >
            <div className="blue-eye-center__photo">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="blue-eye-center__text">
              <span className="blue-eye-center__number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="blue-eye-center__title">{item.title}</h3>
              <p className="blue-eye-center__desc">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default BlueEyeCenter;
