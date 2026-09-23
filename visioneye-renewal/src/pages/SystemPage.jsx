import { equipmentList } from "../data/systemContent";
import { doctorStatementHeading, doctorStatement, doctorPromoColumns } from "../data/doctorContent";
import LightMedBrochure from "../components/system/LightMedBrochure";
import DryEyeScanBrochure from "../components/system/DryEyeScanBrochure";
import "../styles/pageHero.css";
import "../styles/systemPage.css";
import "../styles/sitePromo.css";
import "../styles/lightmedBrochure.css";
import "../styles/dryeyescanBrochure.css";

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

      <LightMedBrochure />

      <DryEyeScanBrochure />

      {/* 원본 사이트(system.html)와 동일하게, 장비 소개 다음에는 다른 서브페이지와 공통인
          하단 배너(진료/안전시스템/의료진/서비스)로 마무리합니다. */}
      <div className="doctor-promo-heading">
        <h2>{doctorStatementHeading}</h2>
      </div>

      <section className="doctor-promo">
        {doctorPromoColumns.map((col) => (
          <div key={col.key} className="doctor-promo__col">
            <img className="doctor-promo__photo" src={col.photo} alt="" />
            <div className="doctor-promo__overlay">
              <h3>{col.title}</h3>
              <p>{col.description}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="doctor-statement">
        {doctorStatement.lines.map(([bold, rest], i) => (
          <p key={i}>
            {bold && <strong>{bold}</strong>}
            {rest}
          </p>
        ))}
      </section>
    </main>
  );
}

export default SystemPage;
