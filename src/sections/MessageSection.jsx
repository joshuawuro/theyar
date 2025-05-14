function MessageSection() {
  const youtubeLink = "https://www.youtube.com/embed/UXRvEkVZiLk";
  return (
    <section className="py-16 px-6  text-center">
      <div className="max-w-4xl mx-auto">
        {/* Text Content */}
        <h2
          className="text-orange text-xl font-semibold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          THE MESSAGE
        </h2>
        <p
          className="text-gray-700 mb-6"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Message from the Papa of the House
        </p>

        {/* Responsive Video */}
        <div
          className="aspect-video rounded-xl overflow-hidden"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <iframe
            className="w-full h-full"
            src={youtubeLink}
            title="How To Shoot Luxury Real Estate With Eric Visuals"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default MessageSection;
