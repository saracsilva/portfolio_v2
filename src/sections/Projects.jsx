import { useRef, useState, useEffect } from "react";
import SectionTitle from "../components/SectionTitle";
import { projects } from "../data/projects";
import Card from "../components/Card";
import Modal from "../components/Modal";

function Projects() {
  const dialogRef = useRef(null);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    if (activeProject && dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    }
  }, [activeProject]);

  const openModal = (project) => setActiveProject(project);

  const closeModal = () => {
    dialogRef.current?.close();
    setActiveProject(null);
  };

  return (
    <>
      <section id="projects" className="scroll-mt-24">
        <SectionTitle title="Projects" />
        <div className="container my-28 px-8 md:px-16">
          <p className="mb-12">
            These projects span my journey from bootcamp to frontend developer.
            The earlier ones are from Ironhack in 2022, where it all started. A
            personal Rails project is in there too, built when I was teaching
            myself Rails before going professional. More is on the way.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                title={project.title}
                image={project.image}
                onOpen={() => openModal(project)}
              />
            ))}
          </ul>
        </div>
      </section>

      {activeProject && (
        <Modal ref={dialogRef} project={activeProject} onClose={closeModal} />
      )}
    </>
  );
}

export default Projects;
