import { motion } from "framer-motion";

export function Home() {
  return (
    <div>
      <h1 className="flex justify-center text-[1.3rem] font-semibold">
        <motion.div animate={{ y: 100 }}>Welcome to my Portfolio</motion.div>
      </h1>
    </div>
  );
}
