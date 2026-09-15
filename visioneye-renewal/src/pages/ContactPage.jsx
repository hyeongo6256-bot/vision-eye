import { clinicHours, clinicHoursNote, clinicContact, mapEmbedUrl } from "../data/contactContent";
import "../styles/pageHero.css";
import "../styles/contactPage.css";

function ContactPage() {
  return (
    <main id="container" className="contact-page">
      {/* 원본 사이트와 동일하게, 배너 이미지 자체에 있는 문구를 그대로 사용합니다. */}
      <section className="page-hero page-hero--contact" />

      <p className="contact-page__thanks">
        <strong>평택 비전안과의원</strong>을 찾아주셔서 감사합니다.
      </p>

      <div className="contact-page__brand">
        <img src="/img/common/favicon-visioneye-20260908.svg" alt="" className="contact-page__brand-icon" />
        <span className="contact-page__brand-text">평택 비전안과의원</span>
      </div>

      <div className="contact-page__info">
        <div className="contact-page__hours">
          <h3>진료안내</h3>
          <ul>
            {clinicHours.map((row) => (
              <li key={row.label}>
                <span>{row.label}</span>
                <span>{row.time}</span>
              </li>
            ))}
          </ul>
          <p className="contact-page__hours-note">{clinicHoursNote}</p>
        </div>

        <div className="contact-page__contact">
          <h3>상담문의</h3>
          <p className="contact-page__phone">{clinicContact.phone}</p>
          <h3>오시는길</h3>
          {clinicContact.address.map((line) => (
            <p key={line} className="contact-page__address">
              {line}
            </p>
          ))}
        </div>
      </div>

      <div className="contact-page__map">
        <iframe
          src={mapEmbedUrl}
          width="1200"
          height="900"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="평택비전안과의원 오시는 길"
        />
      </div>
    </main>
  );
}

export default ContactPage;
