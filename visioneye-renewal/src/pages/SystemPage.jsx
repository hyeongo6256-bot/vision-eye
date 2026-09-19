import { equipmentList, equipmentDetails } from "../data/systemContent";
import "../styles/pageHero.css";
import "../styles/systemPage.css";

function SystemPage() {
  return (
    <main id="container" className="system-page">
      <section className="page-hero page-hero--system page-hero--full">
        <div className="system-hero">
          <div className="system-hero__row">
            <h1 className="system-hero__brand">
              <span>VISION</span>
              <span>EYE</span>
              <span>CENTER</span>
            </h1>

            <div className="system-hero__info">
              <div className="system-hero__info-top">
                <p className="system-hero__title">진료시스템</p>
                <p className="system-hero__subtitle">SYSTEM</p>
              </div>
              <div className="system-hero__info-bottom">
                <h2 className="system-hero__heading">대학병원 수준의 안과 시술 장비</h2>
                <p className="system-hero__desc">
                  <span>정밀한 교차진단, 안전한 수술을 위한 평택비전안과의원</span>
                  <span>첨단 진료 장비라인업으로 수준 높은 의료 서비스를 제공합니다.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="equipment-grid">
        {equipmentList.map((item) => (
          <div key={item.key} className="equipment-grid__item">
            <div className="equipment-grid__photo">
              <img src={item.photo} alt={item.name} />
            </div>
            <p className="equipment-grid__name">
              {item.name} <span>{item.model}</span>
            </p>
          </div>
        ))}
      </section>

      <section className="equipment-detail">
        {equipmentDetails.map((item) => (
          <article key={item.key} className="equipment-detail__card">
            <div className="equipment-detail__photo">
              <img src={item.photo} alt={item.name} />
            </div>
            <div className="equipment-detail__body">
              <p className="equipment-detail__tagline">{item.tagline}</p>
              <h3 className="equipment-detail__name">{item.name}</h3>
              <ul className="equipment-detail__points">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default SystemPage;
