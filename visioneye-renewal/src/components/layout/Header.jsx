import { useEffect, useState } from "react";
import { navMenu } from "../../data/homeContent";
import LogoWordmark from "./LogoWordmark";
import "../../styles/header.css";

const SCROLL_THRESHOLD = 60;

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="header" className={scrolled ? "header--scrolled" : ""}>
      <div className="submenu-dim" />
      <nav id="gnb" className="inner-box clearfix">
        <div id="header-menu">
          <div className="wrapper">
            <a href="/" className="logo" style={{ marginTop: 30 }}>
              <img src="/img/common/favicon-visioneye-20260908.svg" alt="" className="logo_icon" />
              <LogoWordmark className="logo_wordmark" />
            </a>
            <ul className="menu">
              <li>
                <a href="/" />
              </li>
              {navMenu.map((item) => (
                <li key={item.href} className="menu110">
                  <a href={item.href} className="big-menu">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
