import { EmailForm } from "./EmailForm";
import { ContactInfoCard } from "./ContactInfoCard";
import { SectionWrapper } from "../hoc/SectionWrapper";
import { textVariant, fadeIn } from "../../utils/motion";
import { motion } from "framer-motion";
import { contacts } from "../../constants";

function ContactMe() {
  return (
    <section className="relative">
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          Get in touch
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Contact.
        </h2>
      </motion.div>

      <div className="md:flex md:gap-12 mt-12">
        <motion.div
          variants={fadeIn("right", "spring", 0.5, 0.75)}
          className="md:w-1/2 md:order-2 mb-12 md:mb-0"
        >
          <EmailForm />
        </motion.div>
        <div className="md:w-1/2 md:order-1">
          {contacts.map((contact, index) => (
            <ContactInfoCard
              key={`contact-${index}`}
              index={index}
              {...contact}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const WrappedContactMe = SectionWrapper(ContactMe, "contact");
export default WrappedContactMe;
