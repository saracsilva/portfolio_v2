import SectionTitle from "../components/SectionTitle";

function Technologies() {
  return (
    <section id="technologies" className="scroll-mt-24">
      <SectionTitle title="Technologies" />
      <div className="container my-28 px-8 md:px-16 border-y border-text">
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 font-mono font-medium">
          <li>
            <ul className="flex flex-col items-center border-r py-4">
              <li>JavaScript</li>
              <li>Ruby on Rails</li>
              <li>HTML5</li>
              <li>CSS</li>
            </ul>
          </li>

          <li>
            <ul className="flex flex-col items-center border-r py-4 h-full">
              <li>React</li>
              <li>Tailwind</li>
            </ul>
          </li>

          <li>
            <ul className="flex flex-col items-center py-4">
              <li>Git / GitHub</li>
              <li>Figma</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Technologies;
