import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navMenu } from "../../data/homeContent";
import LogoWordmark from "./LogoWordmark";
import "../../styles/header.css";

const SCROLL_THRESHOLD = 60;

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  // 홈페이지는 히어로 사진 위에 투명하게 얹히지만, 서브페이지는 항상 흰 배경 헤더로 고정합니다.
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;
    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const isScrolled = !isHome || scrolled;

  return (
    <header id="header" className={isScrolled ? "header--scrolled" : ""}>
      <div className="submenu-dim" />
      <nav id="gnb" className="inner-box clearfix">
        <div id="header-menu">
          <div className="wrapper">
            <Link to="/" className="logo" style={{ marginTop: 30 }}>
              <img src="/img/common/favicon-visioneye-20260908.svg" alt="" className="logo_icon" />
              <LogoWordmark className="logo_wordmark" />
            </Link>
            <ul className="menu">
              <li>
                <Link to="/" />
              </li>
              {navMenu.map((item) =>
                item.href === "/system" ||
                item.href === "/doctor" ||
                item.href === "/contact" ||
                item.href === "/about" ||
                item.href === "/pay" ? (
                  <li key={item.href} className="menu110">
                    <Link to={item.href} className="big-menu">
                      {item.label}
                    </Link>
                  </li>
                ) : (
                  <li key={item.href} className="menu110">
                    <a href={item.href} className="big-menu">
                      {item.label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
