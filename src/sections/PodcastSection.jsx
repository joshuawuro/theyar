import { Link } from "react-router-dom";

function PodcastSection() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2
          className="text-center text-3xl sm:text-4xl font-extrabold text-blue mb-12 tracking-tight"
          data-aos="fade-down"
        >
          Latest Podcast
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Video Container */}
          <div
            className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl"
            data-aos="zoom-in-up"
          >
            <iframe
              className="w-full h-full absolute top-0 left-0"
              src="https://www.youtube.com/embed/y2bJFrdcUjU"
              title="Latest Podcast"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Text Content */}
          <div
            className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">
              Listen Now
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Tune In to Our Latest Podcast
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-md">
              Join us as we explore powerful prayers and uplifting testimonies.
              Our latest episode is filled with inspiration to start your day.
            </p>
            <Link to="/podcast">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-blue font-semibold text-sm uppercase tracking-wide py-3 px-8 rounded-full transition duration-300 shadow-md hover:shadow-lg cursor-pointer">
                View All Episodes
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PodcastSection;
