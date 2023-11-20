import { Project } from "./Projects";

interface ProjectItemProps {
  project: Project;
  onExpand: (project: Project) => void;
}

export default function ProjectItem({ project, onExpand }: ProjectItemProps) {
  return (
    <div className="project-item" onClick={() => onExpand(project)}>
      <img src={project.image} alt={project.title} />
      <p>{project.shortDescription}</p>
    </div>
  );
}
