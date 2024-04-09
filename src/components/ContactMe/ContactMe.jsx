import { EmailForm } from "./EmailForm";
import { ContactInfoCard } from "./ContactInfoCard";
import { SectionWrapper } from "../hoc/SectionWrapper";

function ContactMe() {
  return (
    <section className="relative">
      <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
        Get in touch
      </p>
      <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
        Contact.
      </h3>
      <div className="md:flex md:gap-12 mt-12">
        <div className="md:w-1/2 md:order-2 mb-12 md:mb-0">
          <EmailForm />
        </div>
        <div className="md:w-1/2 md:order-1">
          <ContactInfoCard
            urlText="https://github.com/Sakhee89/"
            iconText="https://github.com/Sakhee89/"
          />
          <ContactInfoCard
            urlText="https://www.linkedin.com/in/kevin-chan-b7103b135/"
            iconText="https://www.linkedin.com/in/kevin-chan-b7103b135/"
          />
          <ContactInfoCard
            urlText="KevinChan01@outlook.com"
            iconText="mailto:KevinChan01@outlook.com"
          />
        </div>
      </div>
    </section>
  );
}

const WrappedContactMe = SectionWrapper(ContactMe, "contact");
export default WrappedContactMe;
