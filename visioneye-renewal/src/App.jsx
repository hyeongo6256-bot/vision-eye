import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import SystemPage from "./pages/SystemPage";
import DoctorPage from "./pages/DoctorPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import PayPage from "./pages/PayPage";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 원본 사이트와 동일하게 스크롤 시 나타나는 애니메이션 라이브러리(AOS)를 초기화합니다.
    AOS.init();
  }, []);

  useEffect(() => {
    // React Router는 일반 링크 이동과 달리 페이지를 이동해도 스크롤 위치를 그대로 유지하므로,
    // 메뉴로 다른 페이지에 넘어갈 때마다 스크롤을 맨 위로 되돌립니다.
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div id="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/system" element={<SystemPage />} />
        <Route path="/doctor" element={<DoctorPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pay" element={<PayPage />} />
      </Routes>
      {pathname !== "/pay" && <Footer />}
    </div>
  );
}

export default App;
