import { Project } from "./Projects";
import "../app/styles/ExpandedProject.css";

interface ExpandedProjectProps {
  project: Project;
  onCollapse: () => void;
}

export default function ExpandedProject({
  project,
  onCollapse,
}: ExpandedProjectProps) {
  return (
    <div className="expanded-project">
      <img src={project.largeImage} alt={project.title} />
      <p>{project.longDescription}</p>
      <button onClick={onCollapse}>Collapse</button>
    </div>
  );
}
