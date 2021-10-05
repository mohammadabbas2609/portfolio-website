import { motion } from "framer-motion";

const Project = ({ project }) => {
  return (
    <>
      {project && (
        <div className="card">
          <motion.a
            whileHover={{ scale: 0.8 }}
            transition={{ duration: 0.2 }}
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="project-repo"
          ></motion.a>
          <motion.a
            whileHover={{ scale: 0.8 }}
            transition={{ duration: 0.2 }}
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="project-live"
          ></motion.a>
          <div className="card-header">
            <img src={project.image} alt={project.title} />
          </div>
          <div className="card-body">
            <h4>{project.title}</h4>
            <p>{project.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Project;
