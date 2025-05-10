import heroImage from "../assets/bgimage.png"; // replace with your actual image path

function Header() {
  return (
    <header className="relative h-[80vh] w-full ">
      <div className="w-full h-full bg-blue opacity-25 absolute z-10"></div>
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Hero"
        className="w-full h-full object-cover brightness-75"
      />

      {/* Overlay Text */}
      <div
        className="absolute z-20 inset-0 flex flex-col items-center justify-center text-center px-4 "
        data-aos="fade-up"
      >
        <h1 className="text-4xl text-orange md:text-6xl lg:text-7xl font-bold font-poppins lg:w-6xl">
          Start Your Day with Prayer Join Us Every Dawn
        </h1>
        <p className="mt-4 text-lg text-white md:text-2xl font-light font-poppins">
          A community of young believers committed to seeking God every morning
        </p>
      </div>
    </header>
  );
}

export default Header;
