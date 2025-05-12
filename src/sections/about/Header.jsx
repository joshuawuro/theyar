import prayer from "../../assets/prayer.png";

function Header() {
  return (
    <header className="relative h-[80vh] w-full ">
      <div className="w-full h-full bg-blue opacity-25 absolute z-10"></div>
      {/* Background Image */}
      <img
        src={prayer}
        alt="Hero"
        className="w-full h-full object-cover brightness-75"
      />

      {/* Overlay Text */}
      <div className="absolute z-20 inset-0 flex flex-col items-center justify-center text-center px-4 ">
        <h1 className="text-4xl text-white md:text-6xl lg:text-7xl font-bold  lg:w-6xl uppercase">
          Get to know about us
        </h1>
        <p className="mt-4 text-lg text-white md:text-2xl font-light ">
          Good to know why we are here and what we are here to do
        </p>
      </div>
    </header>
  );
}

export default Header;
