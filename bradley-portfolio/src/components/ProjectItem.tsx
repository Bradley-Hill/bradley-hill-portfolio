import { Project } from "./Projects";
import "../app/styles/ProjectItem.css";

interface ProjectItemProps {
  project: Project;
  onExpand: (project: Project) => void;
}

export default function ProjectItem({ project, onExpand }: ProjectItemProps) {
  return (
    <div className="project-item" onClick={() => onExpand(project)}>
      <img src={project.image} alt={project.title} className="project-image" />
      <p className="project-description">{project.shortDescription}</p>
    </div>
  );
}
