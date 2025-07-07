import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import bibleImage from "../assets/bible.jpg";
import LivePopupModal from "./LivePopupModal"; // Import the alternate component
import "../index.css";

function PopupModal() {
  const [showModal, setShowModal] = useState(false);
  const [isLiveHour, setIsLiveHour] = useState(false);
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    // Show popup after 6 seconds
    const timer = setTimeout(() => setShowModal(true), 6000);

    // Check current hour in GMT
    const now = new Date();
    const hour = now.getUTCHours();
    setIsLiveHour(hour === 5); // 5:00 - 5:59 AM GMT

    // Format current date: "Monday, 12th May, 2025"
    const options = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    const formattedDate = now
      .toLocaleDateString("en-GB", options)
      .replace(
        /(\d+)/,
        (d) => `${d}${["st", "nd", "rd"][((d % 10) - 1) % 3] || "th"}`
      );

    setCurrentDate(formattedDate);

    return () => clearTimeout(timer);
  }, []);

  if (!showModal) return null;

  // Show the LivePopupModal if it's between 5:00 and 6:00 AM GMT
  if (isLiveHour) {
    return <LivePopupModal />;
  }

  // Function to set an alarm (Android users)
  const setAlarm = () => {
    window.location.href =
      "intent://com.android.deskclock/#Intent;scheme=clock;action=android.intent.action.SET_ALARM;S.HOUR=5;S.MINUTES=0;S.MESSAGE=Next Prayer Session;end";
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 animate-fade-in"
      onClick={() => setShowModal(false)}
    >
      <div
        className="bg-white w-11/12 md:max-w-3xl rounded-xl overflow-hidden shadow-xl flex flex-col md:flex-row transition-transform duration-300 animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Right Content */}
        <div className="p-6 md:p-8 bg-blue text-white relative w-full text-center ">
          {/* Close Button using Icon */}
          <button
            className="absolute top-3 right-3 text-white text-2xl hover:text-yellow-400 cursor-pointer"
            onClick={() => setShowModal(false)}
            aria-label="Close"
          >
            <AiOutlineClose />
          </button>

          <p className="text-orange text-lg font-bold uppercase underline">
            DECLARATION FOR THE MONTH OF JULY!
          </p>

          <blockquote className="italic my-4 text-sm md:text-xl leading-relaxed">
            “And it was good - says your word concerning everything you did. All
            you do are perfectly excellent, flawlessly unique and beautifully
            magnificent. Nothing you ever made has ever needed an upgrade.
            Everything you made has only been perfect encapsulating the
            understanding of creature. You created me however with the same
            identity, the same nature and the same Spirit. I am excellent by
            making, perfect by destiny and examplary by requirement. As you are
            so am I in this world. Therefore I shall declare; I am excecellent.
            I walk, talk, think and act in excellence I declare, my default
            nature is excellence. My going out is excellent. My coming in is
            excellent. My thought parttens are excellent. My love for God is
            excellent. I shun anything short of excellence. My light so shines
            in this dark world. Jesus is glorified because of my excellent way
            of life. JULLLYYYYYYYYY: MY MONTH OF EXCELLENCE!❤️✨”
          </blockquote>

          {/* Current Date Display */}
          <p className="text-right text-sm italic text-blue-300">
            {currentDate}
          </p>

          {/* Set Alarm Link */}
          <div className="mt-4">
            <button
              onClick={setAlarm}
              className="text-sm md:text-lg text-orange underline hover:text-yellow-300 animate-pulse"
            >
              Set Alarm for the Next Prayer Session
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopupModal;
