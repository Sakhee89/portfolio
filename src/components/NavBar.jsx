export function Navbar() {
  return (
    <>
      <nav className="bg-black text-white py-2 sticky top-0 z-30 backdrop-blur-[50px]">
        <div className="max-w-[1300px] flex items-center justify-between py-4 mb-auto">
          <h1 className="px-4">Portfolio</h1>
          <ul className="flex items-center gap-2 list-none">
            <li className="mx-6">
              <a className="no-underline text-[0.9rem] font-medium relative cursor-pointer before:content-[ ] before:w-8 before:h-[0.2rem] before:bg-gradient-to-r before:from-cyan-500 before:to-blue-500 before:rounded-lg before:absolute before:bottom-[-0.6rem] before:opacity-0 before:translate-x-[-1.5rem] before:transition before:ease-linear before:duration-300 before:hover:w-full before:hover:translate-x-0 before:hover:opacity-100">
                Home
              </a>
            </li>
            <li className="mx-6">
              <a className="no-underline text-[0.9rem] font-medium relative cursor-pointer before:content-[ ] before:w-8 before:h-[0.2rem] before:bg-gradient-to-r before:from-cyan-500 before:to-blue-500 before:rounded-lg before:absolute before:bottom-[-0.6rem] before:opacity-0 before:translate-x-[-1.5rem] before:transition before:ease-linear before:duration-300 before:hover:w-full before:hover:translate-x-0 before:hover:opacity-100">
                About
              </a>
            </li>
            <li className="mx-6">
              <a className="no-underline text-[0.9rem] font-medium relative cursor-pointer before:content-[ ] before:w-8 before:h-[0.2rem] before:bg-gradient-to-r before:from-cyan-500 before:to-blue-500 before:rounded-lg before:absolute before:bottom-[-0.6rem] before:opacity-0 before:translate-x-[-1.5rem] before:transition before:ease-linear before:duration-300 before:hover:w-full before:hover:translate-x-0 before:hover:opacity-100">
                Projects
              </a>
            </li>
            <li className="mx-6">
              <a className="no-underline text-[0.9rem] font-medium relative cursor-pointer before:content-[ ] before:w-8 before:h-[0.2rem] before:bg-gradient-to-r before:from-cyan-500 before:to-blue-500 before:rounded-lg before:absolute before:bottom-[-0.6rem] before:opacity-0 before:translate-x-[-1.5rem] before:transition before:ease-linear before:duration-300 before:hover:w-full before:hover:translate-x-0 before:hover:opacity-100">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
