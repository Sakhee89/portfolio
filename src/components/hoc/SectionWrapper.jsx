import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/motion";

export function SectionWrapper(Component, idName) {
  return function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0"
      >
        <span className="mt-[-100px] pb-[100px] block" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };
}
