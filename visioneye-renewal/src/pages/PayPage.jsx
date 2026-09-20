import { payIntro, paySections, payFooter } from "../data/payContent";
import "../styles/payPage.css";

function PayPage() {
  return (
    <main id="container" className="pay-page">
      <div className="pay-page__backdrop" style={{ backgroundImage: `url(${payIntro.heroImage})` }}>
        <div className="pay-page__backdrop-overlay" />
      </div>

      <div className="pay-page__hero">
        <header className="pay-page__head">
          <p className="pay-page__eyebrow">{payIntro.eyebrow}</p>
          <h1 className="pay-page__title">
            {payIntro.title.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <p className="pay-page__note">{payIntro.note}</p>
        </header>
      </div>

      <div className="pay-page__body">
        {paySections.map((section) => (
          <section
            key={section.key}
            className="pay-page__section"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <div className="pay-page__section-head">
              <span className="pay-page__section-index">{section.index}</span>
              <h2 className="pay-page__section-heading">{section.heading}</h2>
              <span className="pay-page__section-en">{section.headingEn}</span>
              <span className="pay-page__section-count">{section.count}</span>
            </div>

            <ul className="pay-page__list">
              {section.items.map((item, j) => (
                <li key={`${item.name}-${j}`}>
                  <span className="pay-page__item-name">{item.name}</span>
                  <span className="pay-page__spacer" />
                  {item.unit && <span className="pay-page__item-unit">{item.unit}</span>}
                  <span
                    className={
                      item.price === "FREE" ? "pay-page__item-price pay-page__item-price--free" : "pay-page__item-price"
                    }
                  >
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <footer className="pay-page__footer">
          <span>{payFooter.clinicName}</span>
          <span>·</span>
          <span>{payFooter.phone}</span>
        </footer>
      </div>
    </main>
  );
}

export default PayPage;
