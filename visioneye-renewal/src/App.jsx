import { useEffect } from "react";
import AOS from "aos";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";

function App() {
  useEffect(() => {
    // 원본 사이트와 동일하게 스크롤 시 나타나는 애니메이션 라이브러리(AOS)를 초기화합니다.
    AOS.init();
  }, []);

  return (
    <div id="wrapper">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
