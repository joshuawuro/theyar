import { useEffect } from "react";
import ContactForm from "../sections/contact/ContactForm";
import ContactInfo from "../sections/contact/ContactInfo";
import Maps from "../sections/contact/Maps";

function Contact() {
  useEffect(() => {
    document.title = "YAR | Reachout out to us anytime";
  }, []);
  return (
    <>
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
      <Maps />
    </>
  );
}

export default Contact;
