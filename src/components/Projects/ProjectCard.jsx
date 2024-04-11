/* eslint-disable react/prop-types */
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { github } from "../../assets";
import { fadeIn } from "../../utils/motion";
import { link } from "../../assets";

export function ProjectCard({
  index,
  name,
  description,
  tags,
  image,
  websiteLink,
  githubLink,
}) {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-between m-3">
            <div
              onClick={() => window.open(githubLink, "_blank")}
              className="bg-black w-6 h-6 rounded-full flex justify-center items-center cursor-pointer"
            >
              <motion.img
                whileHover={{ scale: 1.25 }}
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            <div
              onClick={() => window.open(websiteLink, "_blank")}
              className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <motion.img
                whileHover={{ scale: 1.25 }}
                src={link}
                alt="hosted site"
                className="w-1/2 h-1/2 object-contain mt-[-18px]"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
}
