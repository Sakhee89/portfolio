import PropTypes from "prop-types";
import { mobilelogo } from "../../assets";

export function MobileNavBar({ isOpen, toggleMenu }) {
  MobileNavBar.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired,
  };

  return (
    <div
      className={`w-screen h-screen block bg-black text-white bg-opacity-30 fixed left-0 top-0 mobile-nav-z-index custom-box-shadow transition-all duration-300 ease-in-out md:hidden ${
        isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-100vw]"
      }`}
      onClick={toggleMenu}
    >
      <div className="w-[45vw] h-screen bg-[#342864] p-8">
        <img
          src={mobilelogo}
          alt="logo"
          className="w-9 h-9 object-contain mb-12"
        />
        <ul className="flex flex-col gap-8 list-none ml-[-1.5rem]">
          <li className="mx-6">
            <a className="navBar-a-styling">Home</a>
          </li>
          <li className="mx-6">
            <a className="navBar-a-styling">About</a>
          </li>
          <li className="mx-6">
            <a className="navBar-a-styling">Projects</a>
          </li>
          <li className="mx-6">
            <a className="navBar-a-styling">Contact Me</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
