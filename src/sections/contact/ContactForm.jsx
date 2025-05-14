import { useState } from "react";

function ContactForm() {
  const [subject, setSubject] = useState("");

  return (
    <div className="bg-blue p-8 rounded-lg shadow-lg space-y-6 ">
      <p className="text-white mb-10">
        Great! We're excited to hear from you and let's start something special
        together. Call us for any inquiry.
      </p>

      <form className="space-y-6">
        <div className="grid gap-10">
          <input
            type="text"
            placeholder="Name"
            className="w-full text-white border-b border-white focus:outline-none focus:border-orange mb-5"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full text-white border-b border-white focus:outline-none focus:border-orange mb-5"
          />
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full bg-transparent border-b border-white focus:outline-none focus:border-orange text-white mb-5"
          >
            <option value="" disabled>
              Select subject
            </option>
            <option value="Prayer Request" className="text-blue">
              Prayer Request
            </option>
            <option value="Testimony" className="text-blue">
              Testimony
            </option>
          </select>
        </div>

        <textarea
          rows="4"
          placeholder="Tell us more..."
          className="w-full text-white border-b border-white focus:outline-none focus:border-orange resize-none"
        ></textarea>

        <button
          type="submit"
          className="bg-orange text-black font-semibold py-3 px-6 rounded w-full hover:bg-yellow-300 transition duration-300 cursor-pointer"
        >
          Send to us
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
