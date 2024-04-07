import { useState } from "react";
import { Link } from "react-router-dom";
import { MobileNavBar } from "./MobileNavBar";
import { logo } from "../../assets";

export function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [active, setActive] = useState("");

  function toggleMenu() {
    setOpenMenu(!openMenu);
  }

  return (
    <nav className="bg-gradient-to-r from-[#100534] to-[#050112] text-white py-2 fixed top-0 z-30 backdrop-blur-[50px] px-8 md:px-14 w-full">
      <MobileNavBar isOpen={openMenu} toggleMenu={toggleMenu} />
      <div className="max-w-[1700px] flex items-center justify-between py-4 mb-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Kevin &nbsp;
            <span className="sm:block hidden"> | &nbsp;Developer</span>
          </p>
        </Link>
        <ul className="hidden items-center gap-2 list-none md:flex">
          <li
            className="mx-6"
            onClick={() => {
              setActive("Home");
            }}
          >
            <a className="navBar-a-styling">Home</a>
          </li>
          <li
            className="mx-6"
            onClick={() => {
              setActive("About");
            }}
          >
            <a className="navBar-a-styling">About</a>
          </li>
          <li
            className="mx-6"
            onClick={() => {
              setActive("Projects");
            }}
          >
            <a className="navBar-a-styling">Projects</a>
          </li>
          <li
            className="mx-6"
            onClick={() => {
              setActive("Contact Me");
            }}
          >
            <a className="navBar-a-styling">Contact Me</a>
          </li>
        </ul>
        <button
          className="w-10 h-10 text-[1.5rem] flex items-center justify-center rounded-[0.4rem] text-white border-transparent custom-background leading-[0] cursor-pointer transition-all duration-[400] ease-in-out md:hidden hover:text-[#f2f1f4] hover:bg-gradient-to-r hover:from-transparent hover:border hover:border-solid hover:border-[#4f4e51]"
          onClick={toggleMenu}
        >
          <span
            className={"material-symbols-outlined"}
            style={{ fontSize: "1.8rem" }}
          >
            {openMenu ? "close" : "menu"}
          </span>
        </button>
      </div>
    </nav>
  );
}
