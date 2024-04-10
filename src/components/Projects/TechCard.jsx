/* eslint-disable react/prop-types */
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

export function TechCard({ icon, index }) {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 550,
      }}
      className="rounded-[10px] py-1 px-1 flex justify-evenly items-center
        flex-col"
    >
      <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)}>
        <img src={icon} alt="tech icon" className="w-20 h-20 object-contain" />
      </motion.div>
    </Tilt>
  );
}
