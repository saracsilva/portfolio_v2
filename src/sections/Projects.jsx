import SectionTitle from "../components/SectionTitle";
import { projects } from "../data/projects";
import Card from "../components/Card";

function Projects() {
  return (
    <section id="projects">
      <SectionTitle title="Projects" />
      <div className="container my-28 px-8 md:px-16">
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              title={project.title}
              image={project.image}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Projects;
