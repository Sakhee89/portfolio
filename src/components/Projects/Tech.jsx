import { SectionWrapper } from "../hoc/SectionWrapper";
import { technologies } from "../../constants";
import { TechCard } from "./TechCard";
import { motion } from "framer-motion";
import { textVariant } from "../../utils/motion";

function Tech() {
  return (
    <section>
      <motion.div variants={textVariant()}>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mt-[-50px]">
          Skillset.
        </h2>
      </motion.div>
      <div className="mt-10 flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology, index) => (
          <div className="w-70 h-70" key={technology.name}>
            <TechCard icon={technology.icon} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
}

const WrappedTech = SectionWrapper(Tech, "tech");
export default WrappedTech;
