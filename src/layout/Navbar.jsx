import SmileFace from "../components/smileFace";

function Navbar() {
  return (
    <nav className="border-t-8 border-b border-black">
      <ul className="container flex justify-end font-serif text-2xl">
        <li className="border-r p-6">
          <a href="#projects">Projects</a>
        </li>
        <li className="border-r p-6">
          <a href="#tecnologies">Tecnologies</a>
        </li>
        <li className="border-r p-6">
          <div className="flex gap-1">
            <a href="#about" className="italic">
              About me
            </a>
            <SmileFace small={true} />
          </div>
        </li>
        <li className="p-6">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
