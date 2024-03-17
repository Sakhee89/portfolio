export function Navbar() {
  const aStyling =
    "text-[0.9rem] font-medium relative cursor-pointer before:w-8 before:h-[0.2rem] before:bg-gradient-to-r before:from-[#a993f3] before:to-[#7e61e7] before:rounded-lg before:absolute before:bottom-[-0.6rem] before:opacity-0 before:translate-x-[-1.5rem] before:transition-all before:ease-linear before:duration-300 before:hover:w-full before:hover:translate-x-0 before:hover:opacity-100";

  return (
    <>
      <nav className="bg-black text-white py-2 sticky top-0 z-30 backdrop-blur-[50px] px-8 md:px-0">
        <div className="max-w-[1700px] flex items-center justify-between py-4 mb-auto">
          <h1 className="px-4">Portfolio</h1>
          <ul className="hidden items-center gap-2 list-none md:flex">
            <li className="mx-6">
              <a className={`${aStyling}`}>Home</a>
            </li>
            <li className="mx-6">
              <a className={`${aStyling}`}>About</a>
            </li>
            <li className="mx-6">
              <a className={`${aStyling}`}>Projects</a>
            </li>
            <li className="mx-6">
              <a className={`${aStyling}`}>Contact Me</a>
            </li>
          </ul>
          <button className="menu-button" onClick={() => {}}>
            <span
              className={"material-symbols-outlined"}
              style={{ fontSize: "1.8rem" }}
            >
              Menu
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}
