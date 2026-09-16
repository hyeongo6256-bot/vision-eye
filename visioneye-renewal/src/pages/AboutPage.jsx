import "../styles/pageHero.css";
import "../styles/aboutPage.css";

function AboutPage() {
  return (
    <main id="container" className="about-page">
      <section className="page-hero page-hero--about page-hero--full">
        <div className="page-hero__overlay">
          <p className="page-hero__eyebrow">Vision Eye Center</p>
          <h1 className="page-hero__title">안과 소개</h1>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
