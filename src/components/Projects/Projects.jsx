import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc/SectionWrapper";
import { projects } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import { ProjectCard } from "./ProjectCard";

function Projects() {
  return (
    <section>
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          My work
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Projects.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and hosted sites. It reflects my ability to
          solve complex problems, work with different technologies, and manage
          projects effectively.
          <br />
          <br />
          Please click on the github and web icons to be redirected to the sites
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
}

const WrappedProjects = SectionWrapper(Projects, "projects");
export default WrappedProjects;
