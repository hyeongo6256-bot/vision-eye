import { aboutIntro, aboutPromiseCircles } from "../data/aboutContent";
import "../styles/pageHero.css";
import "../styles/aboutPage.css";

function AboutPage() {
  return (
    <main id="container" className="about-page">
      <section className="page-hero page-hero--about page-hero--full">
        <div className="about-hero__overlay">
          <h1 className="about-hero__brand">
            <span>VISION</span>
            <span>EYE</span>
            <span>CENTER</span>
          </h1>
          <p className="about-hero__greeting">
            안녕하세요.
            <br />
            평택 비전안과의원입니다.
          </p>
          <p className="about-hero__greeting-en">Hello, this is Pyeongtaek Vision Eye Clinic.</p>
        </div>
      </section>

      <section className="about-intro">
        <p className="about-intro__lead">
          {aboutIntro.lead.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>

        <p className="about-intro__body">
          {aboutIntro.body.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>

        <p className="about-intro__promise">
          {aboutIntro.promise.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>

        <p className="about-intro__signature">
          {aboutIntro.signatureRole}
          <strong>{aboutIntro.signatureName}</strong>
        </p>
      </section>

      <section className="about-promise">
        <div className="about-promise__connectors" aria-hidden="true">
          <span className="about-promise__line about-promise__line--tl" />
          <span className="about-promise__line about-promise__line--tr" />
          <span className="about-promise__line about-promise__line--bl" />
          <span className="about-promise__line about-promise__line--br" />
        </div>
        {aboutPromiseCircles.map((item) => (
          <div key={item.key} className={`about-promise__circle about-promise__circle--${item.position}`}>
            <p className="about-promise__lead">{item.lead}</p>
            <p className="about-promise__highlight">{item.highlight}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

export default AboutPage;
