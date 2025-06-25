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
            {/* Declaration for the month */}
            June Declaration
          </p>

          <blockquote className="italic my-4 text-sm md:text-xl leading-relaxed">
            “A sound beckons. A voice shouts yet in stillness. A man speaks so
            loud yet so calm. The master calleth You have always wanted to have
            fellowship with me. And Yes you have made it all possible for me to
            hear you. In my time of waiting on you, you have come to speak.
            Therefore; In this month of hearing, I shall declare; I am a servant
            of God I am God's sheep My ears are given to my Lord My ears are
            given to my Master Because you are my shepherd, when you speak I
            listen, when I listen I hear, when I hear I follow and when I follow
            I become a true son Juneeeeee; my month of hearing”
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
