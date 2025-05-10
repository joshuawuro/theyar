function MessageSection() {
  return (
    <section className="py-16 px-6 font-poppins text-center">
      <div className="max-w-4xl mx-auto">
        {/* Text Content */}
        <h2 className="text-orange text-xl font-semibold mb-2">THE MESSAGE</h2>
        <p className="text-strokegray mb-6">
          Message from the Papa of the House
        </p>

        {/* Responsive Video */}
        <div className="aspect-video rounded-xl overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/UXRvEkVZiLk"
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
