import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "../index.css";
import video from "../assets/popupmodalprayer.mp4";

function PopupModal() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!showModal) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={() => setShowModal(false)}
    >
      <div
        className="bg-white w-11/12 md:max-w-2xl rounded-xl overflow-hidden shadow-2xl relative animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-white bg-red-600 p-1 rounded-full hover:bg-red-700 cursor-pointer"
          onClick={() => setShowModal(false)}
        >
          <AiOutlineClose className="text-xl" />
        </button>

        {/* Video Section */}
        <div className="w-full h-60 md:h-72 bg-black">
          <video
            className="w-full h-full object-cover"
            src={video}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        {/* Text Section */}
        <div className="bg-red-100 text-center p-6">
          <h2 className="text-2xl md:text-3xl font-bold text-red-700 mb-4 animate-pulse">
            🔴 LIVE PRAYER IN SESSION
          </h2>
          <button
            onClick={() => window.open("https://t.me/yardpm2024", "_blank")}
            className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition font-semibold shadow-md"
          >
            Join Live Session Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopupModal;
