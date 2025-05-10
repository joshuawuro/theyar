import { useEffect } from "react";
import PopupModal from "../components/PopupModal";
import TeamSection from "../sections/team/TeamSection";

function Team() {
  useEffect(() => {
    document.title = "A team of dedicated individuals";
  }, []);
  return (
    <>
      <PopupModal />
      <TeamSection />
    </>
  );
}

export default Team;
