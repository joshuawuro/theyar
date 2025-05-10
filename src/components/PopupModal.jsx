import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import bibleImage from "../assets/bible.jpg";
import "../index.css";

function PopupModal() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!showModal) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 animate-fade-in"
      onClick={() => setShowModal(false)}
    >
      <div
        className="bg-white w-11/12 md:max-w-3xl rounded-xl overflow-hidden shadow-xl flex flex-col md:flex-row transition-transform duration-300 animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Image */}
        <div className="md:w-1/3 w-full">
          <img
            src={bibleImage}
            alt="Bible reading"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Content */}
        <div className="p-6 md:p-8 bg-blue text-white relative md:w-2/3 w-full text-center font-poppins">
          {/* Close Button using Icon */}
          <button
            className="absolute top-3 right-3 text-white text-2xl hover:text-yellow-400 cursor-pointer"
            onClick={() => setShowModal(false)}
            aria-label="Close"
          >
            <AiOutlineClose />
          </button>

          {/* <h2 className="text-4xl font-bold mb-2 text-white">YAR</h2> */}
          <a href="#" className="text-yellow-300 text-lg font-bold uppercase">
            Have you read your <br /> Bible today?
          </a>

          <blockquote className="italic my-4 text-lg md:text-xl leading-relaxed">
            “Do not be anxious about anything, but in everything by prayer and
            supplication with thanksgiving let your requests be made known to
            God.”
          </blockquote>

          <p className="text-right text-lg italic text-blue-300">
            Philippians 4:6
          </p>

          <div className="mt-4">
            <Link
              to="/podcast"
              className="text-lg text-white underline hover:text-yellow-300"
            >
              Listen to the latest podcast
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopupModal;
