import { useEffect } from "react";
import Header from "../components/Header";
import CountdownTimer from "../components/CountdownTimer";
import AboutSection from "../sections/AboutSection";
import StatsSection from "../sections/StatsSection";
import PodcastSection from "../sections/PodcastSection";
import BibleQuoteSection from "../sections/BibleQuoteSection";
import MessageSection from "../sections/MessageSection";
import TeamSection from "../sections/TeamSection";
import TestimonialsSection from "../sections/TestimonialsSection";
import DonationSection from "../sections/DonationSection";
import PopupModal from "../components/PopupModal";
import ContactSection from "../sections/ContactSection";
import FAQ from "../components/FAQ";

function Home() {
  useEffect(() => {
    document.title = "Welocome to YAR - Join The Prayer Prayers";
  }, []);

  return (
    <>
      <PopupModal />
      <Header />
      <CountdownTimer />
      <AboutSection />
      <StatsSection />
      <PodcastSection />
      <BibleQuoteSection />
      <MessageSection />
      <TeamSection />
      <TestimonialsSection />
      <FAQ />
      <ContactSection />
      <DonationSection />
    </>
  );
}

export default Home;
