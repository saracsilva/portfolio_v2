import SmileFace from "../components/SmileFace";

function Navbar() {
  return (
    <nav className="border-t-8 border-b border-black sticky top-0 bg-background z-50">
      <ul className="container flex justify-end font-serif text-2xl">
        <li className="border-r p-6 hover:border-text hover:bg-text/10 hover:text-primary">
          <a href="#projects">Projects</a>
        </li>
        <li className="border-r p-6 hover:border-text hover:bg-text/10 hover:text-primary">
          <a href="#technologies">Technologies</a>
        </li>
        <li className="border-r p-6 hover:border-text hover:bg-text/10 hover:text-primary">
          <div className="flex gap-1">
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
    </nav>
  );
}

export default Navbar;
