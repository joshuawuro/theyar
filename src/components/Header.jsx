import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import heroImage from "../assets/bgimage.png";

function Header() {
  const prayertelegramlink = "https://t.me/yardpm2024";
  const [hideButton, setHideButton] = useState(false);

  useEffect(() => {
    const checkTime = () => {
      const now = new Date();
      const gmtNow = new Date(now.toUTCString().slice(0, -4)); // Get GMT+0 time
      const hour = gmtNow.getUTCHours();

      setHideButton(hour === 5); // Between 5:00 and 5:59 AM
    };

    checkTime(); // Run immediately
    const interval = setInterval(checkTime, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    AOS.init(() => {});
  }, []);

  return (
    <header className="relative h-[80svh] w-full ">
      <div className="w-full h-full bg-blue-950 opacity-50 absolute z-10"></div>

      {/* Background Image */}
      <img
        src={heroImage}
        alt="Hero"
        className="w-full h-full object-cover brightness-75"
      />

      {/* Overlay Text */}
      <div className="absolute z-20 inset-0 flex flex-col items-center justify-center text-center px-4 ">
        <h1
          className="text-4xl text-white md:text-6xl lg:text-7xl font-bold  lg:w-6xl lg:relative lg:bottom-10"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Start Your Day with Prayer Join Us Every Dawn
        </h1>
        <p
          className="mt-4 text-lg text-white md:text-2xl font-light  lg:relative lg:bottom-10"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          A community of young believers committed to seeking God every morning
        </p>

        {!hideButton && (
          <a
            href={prayertelegramlink}
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            <button className="text-blue text-lg font-semibold bg-orange py-4 px-9 my-6 rounded-full shadow-lg shadow-amber-400/45 border-2 border-orange cursor-pointer hover:text-blue-700 hover:bg-yellow-300">
              Join Us Now
            </button>
          </a>
        )}
      </div>
    </header>
  );
}

export default Header;
