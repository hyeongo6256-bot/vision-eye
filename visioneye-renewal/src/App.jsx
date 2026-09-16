import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import SystemPage from "./pages/SystemPage";
import DoctorPage from "./pages/DoctorPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";

function App() {
  useEffect(() => {
    // 원본 사이트와 동일하게 스크롤 시 나타나는 애니메이션 라이브러리(AOS)를 초기화합니다.
    AOS.init();
  }, []);

  return (
    <div id="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/system" element={<SystemPage />} />
        <Route path="/doctor" element={<DoctorPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
