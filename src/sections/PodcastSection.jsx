import { Link } from "react-router-dom";

function PodcastSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 font-poppins">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-yellow-300 text-2xl md:text-3xl font-bold mb-16">
          LATEST PODCAST
        </h2>

        <div className="w-full md:w-1/2 aspect-video bg-gray-300 rounded-xl overflow-hidden">
          {/* Video Placeholder */}
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/y2bJFrdcUjU" // Replace with your actual video
            title="Latest Podcast"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          {/* Text Column */}
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-yellow-400 text-sm uppercase mb-2">Listen</p>
            <h3 className="text-3xl md:text-4xl font-bold text-blue mb-4 leading-tight">
              Tune In to Our Latest Podcast
            </h3>
            <p className="text-gray-700 text-base mb-6 leading-relaxed">
              Join us as we explore powerful prayers and uplifting testimonies.
              Our latest episode is filled with inspiration to start your day.
            </p>
            <Link to="/podcast">
              <button className="bg-yellow-300 hover:bg-yellow-400 text-white font-semibold py-2 px-6 rounded transition duration-300">
                View all
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PodcastSection;
