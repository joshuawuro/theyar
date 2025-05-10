import { useEffect } from "react";
import PopupModal from "../components/PopupModal";
import Header from "../sections/about/Header";
import AboutSection from "../sections/about/AboutSection";
import MissionSection from "../sections/about/MissionSection";
import VisionSection from "../sections/about/VisionSection";

function About() {
  useEffect(() => {
    document.title = "About Young And Ready Dawn Prayers";
  }, []);

  return (
    <>
      <PopupModal />
      <Header />
      <AboutSection />
      <MissionSection />
      <VisionSection />
    </>
  );
}

export default About;
