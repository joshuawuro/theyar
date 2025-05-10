import { useEffect, useState } from "react";
import PrayerStatusBanner from "./PrayerStatusBanner";

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({});
  const [isPrayerTime, setIsPrayerTime] = useState(false);

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const gmtNow = new Date(now.toUTCString().slice(0, -4)); // Get GMT+0 time
      const target = new Date(gmtNow);
      target.setUTCHours(5, 0, 0, 0); // 5:00 AM GMT+0

      // If past 5:00 AM, set it for the next day
      if (gmtNow > target) target.setUTCDate(target.getUTCDate() + 1);

      const diff = target - gmtNow;

      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ hours, minutes, seconds });

      // Check if it's between 5:00 - 6:00 AM GMT+0
      const hour = gmtNow.getUTCHours();
      const minute = gmtNow.getUTCMinutes();
      setIsPrayerTime(hour === 5); // between 5:00 and 5:59
    };

    updateTimer(); // run immediately
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  if (isPrayerTime) return <PrayerStatusBanner />;

  return (
    <div className="w-full lg:w-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 flex items-center justify-center gap-5 text-center text-indigo-700 font-semibold bg-white p-3 lg:rounded-xl shadow-lg shadow-indigo-500/50 absolute lg:bottom-10 bottom-1 z-30">
      <div>
        <p className="text-indigo-400 md:text-2xl text-left">
          Next prayer <br />
          Session in
        </p>
      </div>

      {/* <p className="text-4xl lg:text-7xl font-bold">:</p> */}
      <div>
        <p className="text-4xl lg:text-7xl font-bold">
          {String(timeLeft.hours).padStart(2, "0")}
        </p>
        <p className="text-xs">Hours</p>
      </div>
      <p className="text-4xl lg:text-7xl font-bold">:</p>
      <div>
        <p className="text-4xl lg:text-7xl font-bold">
          {String(timeLeft.minutes).padStart(2, "0")}
        </p>
        <p className="text-xs">Mins</p>
      </div>
      <p className="text-4xl lg:text-7xl font-bold">:</p>
      <div>
        <p className="text-4xl lg:text-7xl font-bold">
          {String(timeLeft.seconds).padStart(2, "0")}
        </p>
        <p className="text-xs">Secs</p>
      </div>
    </div>
  );
}

export default CountdownTimer;
