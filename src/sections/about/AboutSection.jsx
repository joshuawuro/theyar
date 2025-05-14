import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); // repeat animations
  }, []);

  return (
    <section
      className="py-16 px-6 md:px-20 bg-white text-center"
      data-aos="fade-up"
    >
      <h2
        className="text-yellow-500 text-2xl font-bold mb-6 uppercase"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        About Us
      </h2>
      <p
        className="text-gray-700 max-w-4xl mx-auto text-lg leading-relaxed"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        To be the company that customers want us to be, it takes an eclectic
        group of passionate operators. Get to know the people leading the way at
        Young and Ready Dawn Prayer Meetings. Our mission is to strengthen our
        faith, uplift one another, and grow spiritually through shared prayers,
        Bible study, and testimonies.
      </p>
    </section>
  );
}

export default AboutSection;
