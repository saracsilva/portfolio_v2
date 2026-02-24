import SmileFace from "../components/SmileFace";
import Button from "../components/Button";
import { RiLinkedinFill } from "react-icons/ri";
import { TbBrandGithubFilled } from "react-icons/tb";

function Hero() {
  return (
    <div className="flex flex-col items-center gap-8 font-serif my-20">
      <h1 className="text-8xl md:text-9xl text-center tracking-widest ">
        Sara Silva
      </h1>
      <div className="flex gap-1">
        <h2 className="text-3xl md:text-5xl italic">Brazilian</h2>{" "}
        <SmileFace animated={true} />
      </div>
      <div>
        <div className="text-2xl md:text-4xl">
          <h2>
            I’m a{" "}
            <span className="font-mono bg-secondary">
              FrontEnd Developer
              <span className="text-primary">_</span>
            </span>
          </h2>
          <h2 className="text-2xl md:text-4xl tracking-[.13em]">
            Based in Enschede, NL.
          </h2>
        </div>
        <div className="mt-8 flex gap-3 place-self-end">
          <Button
            variant="default"
            pill
            href="https://github.com/saracsilva"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TbBrandGithubFilled />
          </Button>

          <Button
            variant="default"
            pill
            href="https://linkedin.com/in/sara-carolina-silva/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiLinkedinFill />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
