import { SocialIcon } from "react-social-icons";
import PropTypes from "prop-types";

export function ContactInfoCard({ urlText }) {
  ContactInfoCard.propTypes = {
    urlText: PropTypes.string.isRequired,
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#130f2a] rounded-[0.65rem] border-[1.5px] border-solid border-[#6751b9] p-6 mb-8">
      <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-[#3d3072] mb-[0.8rem]">
        <SocialIcon url={urlText} />
      </div>
      <a href={urlText} className="font-[400] text-[0.9rem]">
        {urlText}
      </a>
    </div>
  );
}
