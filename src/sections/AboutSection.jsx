import { Link } from "react-router-dom";
import AboutImage from "../assets/bgimage.png";

function AboutSection() {
  return (
    <section className="px-6 lg:px-24 py-20 lg:py-32 bg-white">
      <h2
        className="text-center text-3xl md:text-4xl font-bold text-orange mb-12 md:my-12"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        ABOUT YAR
      </h2>

      <div className="flex flex-col md:flex-row items-center md:items-start max-w-6xl mx-auto gap-10 lg:gap-20">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={AboutImage}
            alt="About Young and Ready"
            className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-xl"
            data-aos="fade-up"
            data-aos-duration="1500"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h3
            className="text-xl md:text-2xl lg:text-3xl font-bold text-blue mb-4 max-w-lg"
            data-aos="fade-up"
            data-aos-duration="1900"
          >
            WELCOME TO YOUNG AND READY DAWN PRAYERS
          </h3>
          <p
            className="text-gray-700 mb-6 leading-relaxed max-w-prose text-base lg:text-lg"
            data-aos="fade-up"
            data-aos-duration="2100"
          >
            At Young and Ready Dawn Prayers (YAR), we are a community of
            believers who come together every dawn to seek God's presence
            through prayer. Our mission is to strengthen our faith, uplift one
            another, and grow spiritually through shared prayers, Bible study,
            and testimonies.
          </p>
          <button
            className="bg-orange hover:bg-yellow-400 text-white font-semibold py-2 px-5 rounded-full"
            data-aos="fade-up"
            data-aos-duration="2500"
          >
            <Link to="/about">Know more about us</Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
