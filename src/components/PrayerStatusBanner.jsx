import { FaCircle } from "react-icons/fa";
import { LuMousePointerClick } from "react-icons/lu";

function PrayerStatusBanner() {
  const handleJoinLive = () => {
    window.open("https://t.me/yardpm2024", "_blank");
  };

  return (
    <div className="w-full bg-red-200 text-red-800 px-6 py-10  text-center shadow-md absolute bottom-0.5 z-30">
      <div className="flex items-center justify-center gap-2 animate-pulse">
        <FaCircle className="text-red-600 animate-ping w-3 h-3" />
        <h2 className="text-2xl lg:text-4xl font-bold uppercase tracking-widest py-4">
          Live Prayer in Session
        </h2>
      </div>
      <button
        onClick={handleJoinLive}
        className="bg-red-600 text-white px-5 py-3 rounded-full hover:bg-red-700 transition font-semibold cursor-pointer animate-pulse"
      >
        🔴 Join Live Session (Click Here Now ){/* <LuMousePointerClick /> */}
      </button>
    </div>
  );
}

export default PrayerStatusBanner;
