import { doctors, doctorStatementHeading, doctorStatement, doctorPromoColumns } from "../data/doctorContent";
import "../styles/pageHero.css";
import "../styles/doctorPage.css";
import "../styles/sitePromo.css";

function DoctorPage() {
  return (
    <main id="container" className="doctor-page">
      {/* 원본 사이트와 동일하게, 배너 이미지 자체에 있는 문구를 그대로 사용합니다. */}
      <section className="page-hero page-hero--doctor" />

      {doctors.map((doctor) => (
        <section key={doctor.key} className="doctor-profile">
          <div className="doctor-profile__intro">
            <h2 className="doctor-profile__clinic-name">{doctor.clinicName}</h2>
            <p className="doctor-profile__clinic-name-en">{doctor.clinicNameEn}</p>
            <div className="doctor-profile__photo">
              <img src={doctor.photo} alt={doctor.name} />
            </div>
            <p className="doctor-profile__quote">
              <span className="doctor-profile__quote-mark" aria-hidden="true">
                “
              </span>
              <span className="doctor-profile__quote-lines">
                {doctor.quoteLines.map(([bold, rest], i) => (
                  <span key={i} className="doctor-profile__quote-line">
                    <strong>{bold}</strong>
                    {rest}
                  </span>
                ))}
              </span>
              <span className="doctor-profile__quote-mark" aria-hidden="true">
                ”
              </span>
            </p>
          </div>

          <div className="doctor-profile__info">
            <p className="doctor-profile__specialty">{doctor.specialty}</p>
            <p className="doctor-profile__name-row">
              <span className="doctor-profile__role">{doctor.role}</span>
              <span className="doctor-profile__name">{doctor.name.split("").join(" ")}</span>
            </p>

            <div className="doctor-profile__credentials">
              {doctor.credentialGroups.map((group, i) => (
                <ul key={i}>
                  {group.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </section>
      ))}

      <hr className="doctor-page__divider" />

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

export default DoctorPage;
