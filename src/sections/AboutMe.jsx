import SectionTitle from "../components/SectionTitle";

function AboutMe() {
  return (
    <section id="about" className="scroll-mt-24">
      <SectionTitle title="About Me" isAbout />
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 my-28 px-8 md:px-16 lg:px-32 justify-items-center items-start">
        <div className="border-2 p-4">
          <img
            src="/about_me/about_me.png"
            alt=""
            className="border block max-h-140"
          />
        </div>
        <div className="xl:text-lg">
          <div className=" space-y-6">
            <p>
              I'm Sara, from the warm lands of Brazil, in a city called Itajaí
              by the beach. I’m a Frontend Developer currently living in the
              Netherlands and slightly allergic to messy UI.
            </p>
            <p>
              {" "}
              My career started in design and animation, which gave me a strong
              foundation in visual thinking, user experience, and attention to
              detail.{" "}
            </p>
            <p>
              In 2022, I transitioned fully into frontend development after
              completing a bootcamp at Ironhack. I now have 2+ years of
              experience, working professionally with Ruby on Rails, and
              frontend UI development.
            </p>
            <p>
              {" "}
              I’m passionate about building thoughtful, user-centered interfaces
              and I’m currently looking for a Frontend Developer role where I
              can grow and contribute to meaningful products.
            </p>
          </div>
          <h2 className="font-mono font-bold mt-6">Currently</h2>
          <p>- In Enschede.</p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
