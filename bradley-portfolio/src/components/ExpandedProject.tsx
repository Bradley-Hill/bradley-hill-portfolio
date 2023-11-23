import { Project } from "./Projects";
import "../app/styles/ExpandedProject.css";

interface ExpandedProjectProps {
  project: Project | null;
  onCollapse: () => void;
}

export default function ExpandedProject({
  project,
  onCollapse,
}: ExpandedProjectProps) {
  if (!project) {
    return null;
  }
  return (
    <div className="expandedProject-container">
      <img
        className="expandedProject-image"
        src={project.largeImage}
        alt={project.title}
      />
      <p className="expandedProject-description">{project.longDescription}</p>
      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
        <button className="github-button">View on GitHub</button>
      </a>
      <button className="collapse-button" onClick={onCollapse}>
        Collapse
      </button>
    </div>
  );
}
