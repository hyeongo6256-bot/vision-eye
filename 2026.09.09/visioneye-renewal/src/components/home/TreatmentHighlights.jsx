import { treatmentHighlights } from "../../data/homeContent";

function TreatmentHighlights() {
  return (
    <div className="mb01_wrap">
      <p className="cub" />
      <div className="bgblue">
        <ul>
          <li>
            <div className="sectionw">
              <div className="sectdiv">
                <img src="/img/main/c_210806_04.png" alt="" />
              </div>
            </div>
          </li>
          {treatmentHighlights.map((item) => (
            <li key={item.key}>
              <div className="sectionw">
                <div className="imgbox">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="txtbox">
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TreatmentHighlights;
