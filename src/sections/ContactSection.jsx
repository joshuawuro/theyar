import { Link } from "react-router-dom";

function ContactSection() {
  return (
    <section className=" text-blue py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-orange">
          Got a Prayer Request or Testimony?
        </h2>
        <p className="text-lg mb-8">
          We would love to pray with you and celebrate what God is doing in your
          life. Share your testimony or let us stand in faith with you through
          your prayer needs.
        </p>

        <Link to="/contact">
          <button className="bg-orange hover:bg-yellow-500 text-blue font-semibold py-3 px-8 rounded-full transition duration-300 cursor-pointer">
            Share Now
          </button>
        </Link>
      </div>
    </section>
  );
}

export default ContactSection;
