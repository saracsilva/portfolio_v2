import SectionTitle from "../components/SectionTitle";

function AboutMe() {
  return (
    <section id="about" className="scroll-mt-24">
      <SectionTitle title="About Me" isAbout />
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 my-28 px-8 md:px-16 lg:px-32 justify-items-center items-start">
        <div className="border-2 p-4">
          <img
            src="/about_me/about_me.webp"
            alt=""
            className="border block max-h-140"
          />
        </div>
        <div className="xl:text-lg">
          <div className="space-y-6">
            <p>
              I'm Sara, from the warm lands of Brazil, in a city called Itajaí
              by the beach. I’m a Frontend Developer based in Enschede, the
              Netherlands, and slightly allergic to messy UI.
            </p>
            <p>
              My career started in design and animation, which gave me a strong
              foundation in visual thinking, attention to detail, and
              understanding what makes an interface feel right. In 2022, I made
              the full transition into frontend development after a bootcamp at
              Ironhack, and I haven't looked back.
            </p>
            <p>
              Since then I've spent 2.5+ years working professionally with Ruby
              on Rails and Hotwire, building and maintaining a design system
              used across multiple production applications, and caring deeply
              about the details:
            </p>
            <p className="border-l-4 pl-6 border-primary font-serif text-xl">
              how a component is named, how a developer uses it, how a user
              feels navigating it.
            </p>
            <p>
              I’m passionate about building thoughtful, user-centered interfaces
              and I’m currently looking for a Frontend Developer role where
              craft and consistency actually matter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
