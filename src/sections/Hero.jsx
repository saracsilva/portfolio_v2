import SmileFace from "../components/smileFace";

function Hero() {
  return (
    <div className="flex flex-col items-center gap-8 font-serif my-20">
      <h1 className="text-9xl tracking-widest ">Sara Silva</h1>
      <div className="flex gap-1">
        <h2 className="text-5xl italic">Brazilian</h2>{" "}
        <SmileFace animated={true} />
      </div>
      <div className="text-4xl">
        <h2>
          I’m a{" "}
          <span className="font-mono">
            FrontEnd Developer
            <span className="text-primary">_</span>
          </span>
        </h2>
        <h2 className="text-4xl tracking-[.13em]">Based in Enschede, NL.</h2>
      </div>
    </div>
  );
}

export default Hero;
