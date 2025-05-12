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
            Declaration for the day
          </p>

          <blockquote className="italic my-4 text-sm md:text-xl leading-relaxed">
            “More than a mere wish, you exist. Deeper than a conviction, you are
            my description. As the deer pants for waters, my soul pants after
            you. In the race of life, I ask for grace for life. To the God of
            all grace, I pray for all grace. In this month of all grace, I shall
            declare; I am graced. I am favored. I am chosen. My spot is secured.
            My life is complete. My destiny is fulfilled. I see grace this
            morning. I walk with grace in the afternoon. I extend grace in the
            evening. To see me is to see GRACE. May! My month of ALL GRACE
            AYAYAYAYAYAYAYAYAY!”
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
