import { useEffect } from "react";

function Podcast() {
  useEffect(() => {
    document.title = "Enjoy the latest podcasts";
  }, []);
  return (
    <>
      <h2>Podcasts</h2>
    </>
  );
}

export default Podcast;
