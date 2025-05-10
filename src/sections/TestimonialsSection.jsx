import testimonialData from "../data/testimonialData";

function TestimonialsSection() {
  return (
    <section className="bg-white text-center py-20 px-6 my-10 font-poppins">
      <div className="my-5">
        <h2 className="text-yellow-400 text-2xl font-semibold mb-4 tracking-wide">
          MEMBER TESTIMONIALS
        </h2>
        <p className="text-blue text-lg mb-14 max-w-3xl mx-auto">
          Hear what our members are saying about the impact this ministry is
          making in their lives.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto ">
        {testimonialData.map((item, index) => (
          <div
            key={index}
            className="rounded-xl p-8 bg-blue text-left shadow-sm hover:shadow-md transition-shadow"
          >
            <p className="text-lg italic text-white mb-6 leading-relaxed">
              “{item.quote}”
            </p>
            <p className="text-orange font-medium text-right">{item.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
