import contactImage from "../../assets/contact image.jpg";

function Header() {
  return (
    <header className="relative h-[50vh] w-full ">
      <div className="w-full h-full bg-blue-950 opacity-60 absolute z-10"></div>
      {/* Background Image */}
      <img
        src={contactImage}
        alt="Hero"
        className="w-full h-full object-cover brightness-75"
      />

      {/* Overlay Text */}
      <div className="absolute z-20 inset-0 flex flex-col items-center justify-center text-center px-4 ">
        <h1 className="text-4xl text-white md:text-6xl lg:text-7xl font-bold  lg:w-6xl uppercase">
          Reach out to us now!
        </h1>
        <p className="mt-4 text-lg text-white md:text-2xl font-light ">
          Knowing that someone is on the other side of the phone willing to
          listen to you is by Grace.
        </p>
      </div>
    </header>
  );
}

export default Header;
