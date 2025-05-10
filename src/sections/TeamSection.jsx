import { Link } from "react-router-dom";
import teamData from "../data/teamData";

function TeamSection() {
  const topThree = teamData.slice(0, 3); // Get only the first 3 entries

  return (
    <section className="bg-blue text-white py-16 px-6 font-poppins text-center">
      <h2 className="text-orange text-xl font-semibold mb-2">MEET THE TEAM</h2>
      <p className="mb-12">
        Meet the team of incredible individuals working hard to ensure you
        receive your testimonies
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {topThree.map(({ id, name, title, image }) => (
          <div key={id} className="space-y-4">
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
      <Link to="/team">
        <button className="mt-10 bg-orange hover:bg-yellow-300 text-blue font-semibold py-2 px-6 rounded transition">
          See More
        </button>
      </Link>
    </section>
  );
}

export default TeamSection;
