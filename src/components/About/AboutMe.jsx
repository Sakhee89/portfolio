import { motion } from "framer-motion";
import { services } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import ServiceCard from "./ServiceCard";
import { SectionWrapper } from "../hoc/SectionWrapper";

function AboutMe() {
  return (
    <section>
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          Introduction
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I&apos;m a Junior software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React.js, Vue.js, and
        Node.js. I&apos;m a quick learner and am currently learning about
        Three.js, and have implemented it into this portfolio. I am passionate
        about continuous personal development and am committed to exploring new
        projects and technologies to broaden my skill set and contribute
        meaningfully to the tech community.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  );
}

const WrappedAboutMe = SectionWrapper(AboutMe, "about");
export default WrappedAboutMe;
