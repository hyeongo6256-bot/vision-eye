import { useState } from "react";
import { clinicTabs } from "../../data/homeContent";

function ClinicTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = clinicTabs[activeIndex];

  return (
    <section id="sec2">
      <div className="inner">
        <div className="sec2_con show">
          <div className="container">
            <div className="sec2_con_right">
              <ul>
                {clinicTabs.map((tab, index) => (
                  <li key={tab.key} className={index === activeIndex ? "on" : ""}>
                    <img src={tab.image} alt={tab.navLabel} />
                  </li>
                ))}
              </ul>
            </div>

            <div className="sec2_con_center">
              <ul>
                <li className="on" style={{ display: "block" }}>
                  <p className="sec2_p1">
                    {activeTab.heading[0]}
                    <br />
                    {activeTab.heading[1]}
                  </p>
                  <p className="sec2_p2">{activeTab.description}</p>
                </li>
              </ul>
            </div>

            <div className="sec2_con_left">
              <ul className="pcv">
                {clinicTabs.map((tab, index) => (
                  <li key={tab.key} className={index === activeIndex ? "on" : ""}>
                    <a
                      href="#"
                      onClick={(event) => {
                        event.preventDefault();
                        setActiveIndex(index);
                      }}
                    >
                      <em className="aventa">{tab.number}</em>
                      <p>{tab.navLabel}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClinicTabs;
