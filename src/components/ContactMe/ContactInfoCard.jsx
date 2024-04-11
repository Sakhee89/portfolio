import { SocialIcon } from "react-social-icons";
import PropTypes from "prop-types";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

// eslint-disable-next-line react/prop-types
export function ContactInfoCard({ text, url, index }) {
  ContactInfoCard.propTypes = {
    url: PropTypes.string.isRequired,
  };

  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
    >
      <motion.div
        variants={fadeIn("right", "spring", index + 2.5 * 0.3, 0.2)}
        className="flex flex-col items-center justify-center bg-[#130f2a] rounded-[0.65rem] border-[1.5px] border-solid border-[#6751b9] p-6 mb-8"
      >
        <div className="w-16 h-16 flex flex-col items-center justify-center rounded-lg bg-[#130f2a] mb-[0.8rem]">
          <SocialIcon url={url} />
        </div>
        <a href={text} className="font-[400] text-[0.9rem]">
          {text}
        </a>
      </motion.div>
    </Tilt>
  );
}
