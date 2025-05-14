function Maps() {
  const MapLink =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d496.3245344935432!2d-0.2741857895960875!3d5.6264617840080335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf98c25ce18e1d%3A0xa488794859304f7!2sPentecost%20University!5e0!3m2!1sen!2sgh!4v1747225407331!5m2!1sen!2sgh";
  return (
    <>
      <div className="w-full h-96">
        <iframe
          src={MapLink}
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default Maps;
