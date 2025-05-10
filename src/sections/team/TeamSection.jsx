import TeamCard from "../../components/TeamMemberCard";
import { teamMembers, groupLeaders } from "../../data/teamPageData";

function TeamSection() {
  return (
    <section className="max-w-7xl mx-auto py-16 px-6 md:px-20 font-poppins">
      {/* Main Team Section */}
      <div className="text-center mb-14">
        <h2 className="text-3xl text-blue md:text-4xl font-bold mb-4">
          Meet our team of{" "}
          <span className="italic font-light text-black">
            bible lover, Christ Centered, and world-class problem solvers
          </span>
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          To be the company our customers want us to be, it takes an eclectic
          group of passionate operators. Get to know the people{" "}
          <span className="italic font-medium text-blue">
            leading the way at Young and Ready Dawn Prayer Meeting
          </span>
          .
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center mb-20">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>

      {/* Group Leaders Section */}
      <div className="text-left mb-10">
        <h3 className="text-blue text-2xl md:text-3xl font-bold mb-4">
          Group Leaders
        </h3>
        <p className="text-gray-700 max-w-3xl">
          To be the company our customers want us to be, it takes an eclectic
          group of passionate operators. Get to know the people{" "}
          <span className="italic font-medium text-blue">
            leading the way at Young and Ready Dawn Prayer Meeting
          </span>
          .
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
        {groupLeaders.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
    </section>
  );
}

export default TeamSection;
