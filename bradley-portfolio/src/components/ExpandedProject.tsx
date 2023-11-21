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
      <button className="collapse-button" onClick={onCollapse}>
        Collapse
      </button>
    </div>
  );
}
