import Divider from "./Divider";
import "../styles/projects.css";
import Project from "./Project";
import projects from "../_data/projects";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <Divider
        color="#275dad"
        position={{ top: "0px", left: "0px" }}
        height="113px"
      />
      <h3>Projects</h3>
      <div className="project-cards container">
        {projects.map(project => (
          <Project project={project} key={project.title} />
        ))}
        <Project />
      </div>
    </div>
  );
};

export default Projects;
