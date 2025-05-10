import { Link } from "react-router-dom";
import { FaRegSadTear } from "react-icons/fa";

function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 py-16 font-poppins text-center">
      <FaRegSadTear className="text-blue text-7xl md:text-8xl mb-6 opacity-80" />
      <h1 className="text-4xl md:text-5xl font-bold text-blue mb-4">404</h1>
      <p className="text-lg md:text-xl text-gray-700 mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/">
        <button className="bg-orange hover:bg-yellow-400 text-white font-semibold py-2 px-6 rounded cursor-pointer">
          Go Back Home
        </button>
      </Link>
    </section>
  );
}

export default NotFound;
