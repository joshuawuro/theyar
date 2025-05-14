function ContactInfo() {
  const mapLink = "https://maps.app.goo.gl/jh7tQpEAfV2Bb9wP8";

  return (
    <div className="space-y-6">
      <h2 className="text-5xl text-blue md:text-8xl font-extrabold leading-tight">
        Let’s get in touch
      </h2>
      <p className="text-orange font-semibold">
        Don’t be afraid to say hello with us!
      </p>

      <div className="text-sm space-y-2">
        <p className="text-blue font-semibold">Phone</p>
        <p className="text-black font-medium">(+233) 551-888-255</p>
      </div>

      <div className="text-sm space-y-2">
        <p className="text-blue font-semibold">Email</p>
        <p className="text-black font-medium">info@youngandready.pu</p>
      </div>

      <div className="text-sm space-y-2">
        <p className="text-blue font-semibold">Office</p>
        <p className="text-black font-medium">
          Pentecost University Street, <br />
          Sowutuom
        </p>
        <a
          href={mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          See on Google Map ↗
        </a>
      </div>
    </div>
  );
}

export default ContactInfo;
