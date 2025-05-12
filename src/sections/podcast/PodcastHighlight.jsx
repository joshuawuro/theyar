function PodcastHighlight() {
  const youtubeLink = "https://www.youtube.com/embed/UXRvEkVZiLk";
  return (
    <section className="py-16 px-6  text-center bg-blue">
      <div className="max-w-4xl mx-auto">
        {/* Text Content */}
        <h2
          className="text-orange text-2xl font-semibold mb-10 uppercase"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          our latest podcast
        </h2>

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

export default PodcastHighlight;
