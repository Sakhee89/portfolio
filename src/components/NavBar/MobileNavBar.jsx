import PropTypes from "prop-types";

export function MobileNavBar({ isOpen, toggleMenu }) {
  MobileNavBar.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired,
  };

  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="w-[45vw] h-screen bg-[#342864] p-8 active:opacity-[1] active:translate-x-0">
          <h1 className="mb-12">Portfolio</h1>
          <ul className="flex flex-col gap-8 list-none ml-[-1.5rem]">
            <li className="mx-6">
              <a className="a-style">Home</a>
            </li>
            <li className="mx-6">
              <a className="a-style">About</a>
            </li>
            <li className="mx-6">
              <a className="a-style">Projects</a>
            </li>
            <li className="mx-6">
              <a className="a-style">Contact Me</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
