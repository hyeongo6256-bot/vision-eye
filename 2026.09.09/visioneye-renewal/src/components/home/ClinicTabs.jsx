import { useState } from "react";
import { clinicTabs } from "../../data/homeContent";
import "../../styles/clinicTabs.css";

function ClinicTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = clinicTabs[activeIndex];

  return (
    <section id="sec2" className="clinic">
      <div className="clinic-inner">
        <div className="clinic-header">
          <h2 className="clinic-heading">
            <span className="clinic-heading__lower">our</span> CLINIC
          </h2>
          <p className="clinic-eyebrow">(IN DETAIL)</p>
        </div>

        <div className="clinic-body">
          <ul className="clinic-list">
            {clinicTabs.map((tab, index) => {
              const isActive = index === activeIndex;
              return (
                <li key={tab.key} className="clinic-list__row">
                  <button
                    type="button"
                    className={`clinic-list__item ${isActive ? "clinic-list__item--active" : ""}`}
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    aria-current={isActive}
                  >
                    <span className="clinic-list__bar" aria-hidden="true" />
                    <span className="clinic-list__number">
                      ({String(tab.number).padStart(2, "0")})
                    </span>
                    <span className="clinic-list__label">{tab.navLabel}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="clinic-photo">
            <img src={activeTab.image} alt={activeTab.navLabel} />
          </div>
        </div>
      </div>

      <div className="clinic-quote">
        <span className="clinic-quote__mark">“</span>
        <p className="clinic-quote__text">{activeTab.description}</p>
        <span className="clinic-quote__mark">”</span>
      </div>
    </section>
  );
}

export default ClinicTabs;
