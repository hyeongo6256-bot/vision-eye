import { clinicInfo } from "../../data/homeContent";

function Footer() {
  return (
    <footer id="footer">
      <div className="foot_wrap">
        <div className="foot_ver1">
          <h3 className="foot_logo">
            <img src="/img/common/footer-logo.svg" alt="" />
          </h3>
          <ul className="foot_member">
            <li>{clinicInfo.name}</li>
            <li>대표자 : {clinicInfo.ceo}</li>
            <li>사업자등록번호 : {clinicInfo.registrationNumber}</li>
            <li>주소 : {clinicInfo.address}</li>
            <li>대표전화 : {clinicInfo.phone}</li>
          </ul>
          <p className="copyright_txt mgt30">
            COPYRIGHT ⓒ 2020 VISIONEYE CENTER ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
