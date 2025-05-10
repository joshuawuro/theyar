import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaUsers, FaStar, FaPrayingHands } from "react-icons/fa";

function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section className="bg-blue text-white py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <div className="flex flex-col md:flex-row justify-center gap-12 lg:gap-32 text-center">
          {/* Stat 1 */}
          <div className="flex-1">
            <FaUsers className="text-5xl lg:text-9xl mx-auto mb-4" />
            <h2 className="text-4xl lg:text-5xl font-bold">
              {inView && <CountUp end={3736} duration={3} suffix="+" />}
            </h2>
            <p className="text-yellow-400 mt-3 text-2xl">Active Members</p>
          </div>

          {/* Stat 2 */}
          <div className="flex-1">
            <FaStar className="text-5xl lg:text-9xl mx-auto mb-4" />
            <h2 className="text-4xl lg:text-5xl font-bold">
              {inView && <CountUp end={270} duration={3} suffix="+" />}
            </h2>
            <p className="text-yellow-400 mt-3 text-2xl">Testimonies</p>
          </div>

          {/* Stat 3 */}
          <div className="flex-1">
            <FaPrayingHands className="text-5xl lg:text-9xl mx-auto mb-4" />
            <h2 className="text-4xl lg:text-5xl font-bold">
              {inView && <CountUp end={100} duration={3} suffix="+" />}
            </h2>
            <p className="text-yellow-400 mt-3 text-2xl">Prayer Requests</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
