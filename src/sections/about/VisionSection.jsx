import AboutImage from "../../assets/bgimage.png";

function VisionSection() {
  return (
    <section className="py-16 px-6 md:px-20 bg-white font-poppins">
      <h2 className="text-yellow-500 text-2xl font-bold text-center mb-12 uppercase">
        Our Vision
      </h2>

      <div className="flex flex-col md:flex-row-reverse items-center gap-10 max-w-5xl mx-auto">
        <div className="md:w-1/2 text-left order-2 md:order-1">
          <h3 className="text-xl font-semibold text-blue-900 mb-3">
            Welcome to Young and Ready Dawn Prayers
          </h3>
          <p className="text-gray-700 text-md leading-relaxed mb-4">
            At Prayer Group Name, we are a community of believers who come
            together every morning to seek God’s presence through dawn prayer.
            Our vision is to strengthen our faith, uplift one another, and grow
            spiritually through shared prayers, Bible study, and testimonies.
          </p>
        </div>

        {/* Placeholder image box */}
        <div className="w-full md:w-1/2">
          <img
            src={AboutImage}
            alt="About Young and Ready"
            className="w-full  h-64 md:h-80 object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default VisionSection;
