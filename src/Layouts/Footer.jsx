import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTelegramPlane,
  FaYoutube,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-blue font-poppins text-white px-6 py-10 lg:px-24">
      <div className="flex flex-col md:flex-row md:justify-between gap-12">
        {/* Branding */}
        <div>
          <h2 className="text-3xl font-extrabold">YOUNG AND READY</h2>
          <h3 className="text-2xl font-extrabold">DAWN PRAYERS</h3>
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.youtube.com/@pensa_pu"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full p-2 text-blue hover:scale-110 transition"
            >
              <FaYoutube size={24} />
            </a>
            <a
              href="https://www.facebook.com/pensapentvars"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full p-2 text-blue hover:scale-110 transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://t.me/yardpm2024"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full p-2 text-blue hover:scale-110 transition"
            >
              <FaTelegramPlane size={20} />
            </a>
          </div>
        </div>

        {/* Main Menu with <Link> */}
        <div>
          <h4 className="text-lg font-semibold text-orange mb-4">MAIN MENU</h4>
          <ul className="space-y-2 font-medium">
            <li>
              <Link to="/" className="hover:underline">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                CONTACT
              </Link>
            </li>
            <li>
              <Link to="/podcast" className="hover:underline">
                PODCAST
              </Link>
            </li>
            <li>
              <Link to="/team" className="hover:underline">
                TEAM
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-orange mb-4">CONTACT US</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaPhone /> 55-188-8255
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> Pentecost University
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> info@youngandready.pu
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-10 pt-6 border-t border-white/20 text-sm">
        <p>2025 © Copyright - All Right Reserved</p>
        <a
          href="https://aurova.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange mt-2 md:mt-0"
        >
          Built by Aurova
        </a>
      </div>
    </footer>
  );
}

export default Footer;
