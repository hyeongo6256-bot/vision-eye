import HeroSlider from "../components/home/HeroSlider";
import SpecialtyShowcase from "../components/home/SpecialtyShowcase";
import TreatmentHighlights from "../components/home/TreatmentHighlights";
import VisionTv from "../components/home/VisionTv";
import ClinicTabs from "../components/home/ClinicTabs";

function HomePage() {
  return (
    <main id="container">
      <HeroSlider />
      <SpecialtyShowcase />
      <TreatmentHighlights />
      <VisionTv />
      <ClinicTabs />
    </main>
  );
}

export default HomePage;
