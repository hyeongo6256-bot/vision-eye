import { clinicHours, clinicHoursNote, clinicContact, mapEmbedUrl } from "../data/contactContent";
import "../styles/pageHero.css";
import "../styles/contactPage.css";

function ContactPage() {
  return (
    <main id="container" className="contact-page">
      {/* 의료진 소개 배너와 동일하게, 문구를 이미지 자체에 합성해두었습니다 (좌우/상하 모두 픽셀 단위로 중앙 정렬). */}
      <section className="page-hero page-hero--contact" />

      <div className="contact-page__body">
        <div className="contact-page__brand">
          <img src="/img/common/favicon-visioneye-20260908.svg" alt="" className="contact-page__brand-icon" />
          <h2 className="contact-page__brand-name">평택비전안과의원</h2>
          <p className="contact-page__brand-name-en">PYEONTAEK VISION EYE CLINIC</p>
          <p className="contact-page__thanks">평택 비전안과의원을 찾아주셔서 감사합니다</p>
        </div>

        <div className="contact-page__info">
          <div className="contact-page__block">
            <span className="contact-page__badge">진료안내</span>
            <ul className="contact-page__hours">
              {clinicHours.map((row) => (
                <li key={row.label}>
                  <span className="contact-page__hours-label">{row.label}</span>
                  <span className="contact-page__hours-ampm">AM</span>
                  <span className="contact-page__hours-time">{row.from}</span>
                  <span className="contact-page__hours-dash">-</span>
                  <span className="contact-page__hours-ampm">PM</span>
                  <span className="contact-page__hours-time">{row.to}</span>
                </li>
              ))}
            </ul>
            <p className="contact-page__hours-note">{clinicHoursNote}</p>
          </div>

          <hr className="contact-page__rule" />

          <div className="contact-page__block">
            <span className="contact-page__badge">상담문의</span>
            <p className="contact-page__phone">{clinicContact.phone}</p>
          </div>

          <hr className="contact-page__rule" />

          <div className="contact-page__block">
            <span className="contact-page__badge">오시는길</span>
            <p className="contact-page__address">{clinicContact.address}</p>
          </div>
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
