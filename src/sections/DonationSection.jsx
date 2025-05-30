function DonationSection() {
  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-6 text-center  relative">
      <h4
        className="text-yellow-400 mb-2 uppercase tracking-wider"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Contribute to the mission
      </h4>
      <h2
        className="text-2xl md:text-3xl font-extrabold mb-6"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        GIVING IS AN ACT OF FAITH
      </h2>
      <p
        className="max-w-3xl mx-auto mb-8 text-gray-300"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        At Young and Ready Dawn Prayers, we truly believe in the power of
        giving. The same way our savior gave his life on the cross to save the
        world, your donation can contribute to life, hope, and love to the
        world.
      </p>
      <button
        className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 font-semibold py-2 px-6 rounded"
        data-aos="fade-up"
        data-aos-duration="1300"
      >
        DONATE
      </button>
    </section>
  );
}

export default DonationSection;
