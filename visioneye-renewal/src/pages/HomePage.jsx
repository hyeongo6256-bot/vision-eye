import HeroSlider from "../components/home/HeroSlider";
import SpecialtyShowcase from "../components/home/SpecialtyShowcase";
import BlueEyeCenter from "../components/home/BlueEyeCenter";
import VisionTv from "../components/home/VisionTv";
import ClinicTabs from "../components/home/ClinicTabs";

function HomePage() {
  return (
    <main id="container">
      <HeroSlider />
      <SpecialtyShowcase />
      <BlueEyeCenter />
      <ClinicTabs />
      <VisionTv />
    </main>
  );
}

export default HomePage;
