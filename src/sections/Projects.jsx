import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";

function Projects() {
  return (
    <section id="projects">
      <SectionTitle title="Projects" />
      <div className="container my-28 px-16">
        <div className="grid grid-cols-4 gap-8">
          <Card title="Upmanager" image="/projects/project_02.png" />
          <Card title="Upmanager" image="/projects/project_02.png" />
          <Card title="Upmanager" image="/projects/project_02.png" />
          <Card title="Upmanager" image="/projects/project_02.png" />
        </div>
      </div>
    </section>
  );
}

export default Projects;
