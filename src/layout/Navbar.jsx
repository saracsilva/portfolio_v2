import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import SmileFace from "../components/SmileFace";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-t-8 border-b border-black sticky top-0 bg-background z-50 font-serif">
      <div className="container flex justify-end items-center text-2xl">
        {/* Desktop menu */}
        <ul className="hidden md:flex">
          <li className="border-r p-6 hover:border-text hover:bg-text/10 hover:text-primary">
            <a href="#projects">Projects</a>
          </li>
          <li className="border-r p-6 hover:border-text hover:bg-text/10 hover:text-primary">
            <a href="#technologies">Technologies</a>
          </li>
          <li className="border-r p-6 hover:border-text hover:bg-text/10 hover:text-primary">
            <div className="flex gap-1 items-center">
              <a href="#about" className="italic">
                About me
              </a>
              <SmileFace size="small" />
            </div>
          </li>
          <li className="p-6 hover:bg-text/10 hover:text-primary">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-4 text-2xl border-x"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile popover */}
      {open && (
        <div className="md:hidden absolute w-72 right-0 top-full border border-black bg-background text-xl">
          <ul className="flex flex-col">
            <li className="p-4 pl-8 border-b hover:bg-text/10">
              <a
                href="#projects"
                onClick={() => setOpen(false)}
                className="block w-full h-full"
              >
                Projects
              </a>
            </li>
            <li className="p-4 pl-8 border-b hover:bg-text/10">
              <a
                href="#technologies"
                onClick={() => setOpen(false)}
                className="block w-full h-full"
              >
                Technologies
              </a>
            </li>
            <li className="p-4 pl-8 border-b hover:bg-text/10 hover:border-text hover:text-primary italic">
              <a
                href="#about"
                onClick={() => setOpen(false)}
                className="flex gap-2 w-full h-full"
              >
                <span>About me</span>
                <SmileFace size="small" />
              </a>
            </li>
            <li className="p-4 pl-8 hover:bg-text/10">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block w-full h-full"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
