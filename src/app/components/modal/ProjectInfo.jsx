import { CircleX, Github, ExternalLink } from "lucide-react";

const ProjectInfo = ({ project, onClose, onNext, onPrev }) => (
  <div className="modal-description">
    <CircleX className="modal-close-button" onClick={onClose} />
    <h2 className="modal-title">{project.title}</h2>
    <h3>About</h3>
    <p>{project.description}</p>

    <div className="tech-stack-container">
      <h3 className="tech-stack">Technologies</h3>
      <div className="badges">
        {project.tech.frontend.map((tech, i) => (
          <span className="badges-frontend" key={`fe-${i}`}>
            {tech}
          </span>
        ))}
        {project.tech.backend.map((tech, i) => (
          <span className="badges-backend" key={`be-${i}`}>
            {tech}
          </span>
        ))}
      </div>
    </div>

    <div className="modal-links">
      <a
        className="github-button"
        href={project.links.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github className="github-icon" /> View Code
      </a>
      <a
        className="visit-website-button"
        href={project.links.live}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ExternalLink className="external-link-icon" /> Visit Website
      </a>
    </div>

    <div className="nav-buttons">
      <button className="nav-button" onClick={onPrev}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path d="m12 19-7-7 7-7" />
          <path d="M19 12H5" />
        </svg>
      </button>
      <button className="nav-button" onClick={onNext}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
);

export default ProjectInfo;
