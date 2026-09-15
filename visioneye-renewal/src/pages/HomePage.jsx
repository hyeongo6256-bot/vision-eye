import HeroSlider from "../components/home/HeroSlider";
import SpecialtyShowcase from "../components/home/SpecialtyShowcase";
import BlueEyeCenter from "../components/home/BlueEyeCenter";
import TreatmentHighlights from "../components/home/TreatmentHighlights";
import VisionTv from "../components/home/VisionTv";
import ClinicTabs from "../components/home/ClinicTabs";

function HomePage() {
  return (
    <main id="container">
      <HeroSlider />
      <SpecialtyShowcase />
      <BlueEyeCenter />
      <ClinicTabs />
      <TreatmentHighlights />
      <VisionTv />
    </main>
  );
}

export default HomePage;
