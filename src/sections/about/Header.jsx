import { useEffect } from "react";
import prayer from "../../assets/prayer.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Header() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); // `once: false` makes animations repeat
  }, []);

  return (
    <header className="relative h-[50vh] w-full">
      <div className="w-full h-full bg-blue opacity-25 absolute z-10"></div>

      {/* Background Image */}
      <img
        src={prayer}
        alt="Hero"
        className="w-full h-full object-cover brightness-75"
      />

      {/* Overlay Text */}
      <div
        className="absolute z-20 inset-0 flex flex-col items-center justify-center text-center px-4"
        data-aos="fade-up"
      >
        <h1
          className="text-4xl text-white md:text-6xl lg:text-7xl font-bold uppercase"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Get to know about us
        </h1>
        <p
          className="mt-4 text-lg text-white md:text-2xl font-light"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Good to know why we are here and what we are here to do
        </p>
      </div>
    </header>
  );
}

export default Header;
