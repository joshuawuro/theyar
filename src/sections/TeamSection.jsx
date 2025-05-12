// src/components/TeamSection.js

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import teamData from "../data/teamData";

function TeamSection() {
  const topThree = teamData.slice(0, 3);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section className="bg-blue text-white py-16 px-6 text-center">
      <h2
        className="text-orange text-xl font-semibold mb-2"
        data-aos="fade-down"
      >
        MEET THE TEAM
      </h2>
      <p className="mb-12" data-aos="fade-up">
        Meet the team of incredible individuals working hard to ensure you
        receive your testimonies
      </p>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        data-aos="fade-up"
      >
        {topThree.map(({ id, name, title, image }, index) => (
          <div
            key={id}
            className="space-y-4"
            data-aos="zoom-in"
            data-aos-delay={index * 150}
          >
            <img
              src={image}
              alt={name}
              className="w-full object-cover rounded-lg"
            />
            <div>
              <p className="font-bold">{name}</p>
              <p className="text-sm text-orange">{title}</p>
            </div>
          </div>
        ))}
      </div>
      <Link to="/team" data-aos="fade-up">
        <button className="mt-10 bg-orange hover:bg-yellow-300 text-blue font-semibold py-2 px-6 rounded-full transition">
          Meet the whole team
        </button>
      </Link>
    </section>
  );
}

export default TeamSection;
