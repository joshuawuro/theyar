import { useEffect } from "react";
import Header from "../sections/podcast/Header";
import InspirationSection from "../sections/podcast/InspirationSection";
import PodcastHighlight from "../sections/podcast/PodcastHighlight";

function Podcast() {
  useEffect(() => {
    document.title = "Enjoy the latest podcasts";
  }, []);
  return (
    <>
      <Header />
      <InspirationSection />
      <PodcastHighlight />
    </>
  );
}

export default Podcast;
