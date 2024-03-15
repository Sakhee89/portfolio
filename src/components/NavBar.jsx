export function Navbar() {
  return (
    <>
      <nav className="bg-black text-white pt-2 sticky top-0 z-30 backdrop-blur-[50px]">
        <div className="max-w-[1300px] flex items-center justify-between pt-4 mb-auto">
          <h1>Kevin Chan</h1>
          <ul className="flex items-center gap-2 list-none">
            <li className="mb-6">
              <a className="no-underline text-[0.9rem] font-medium relative cursor-pointer">
                Home
              </a>
            </li>
            <li className="mb-6">
              <a className="no-underline text-[0.9rem] font-medium relative cursor-pointer">
                About
              </a>
            </li>
            <li className="mb-6">
              <a className="no-underline text-[0.9rem] font-medium relative cursor-pointer">
                Projects
              </a>
            </li>
            <li className="mb-6">
              <a className="no-underline text-[0.9rem] font-medium relative cursor-pointer">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
