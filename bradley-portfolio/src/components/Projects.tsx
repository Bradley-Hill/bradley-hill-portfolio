import React, { useState, useEffect } from "react";
import { Transition } from "react-transition-group";
import "../app/styles/Projects.css";
import ExpandedProject from "./ExpandedProject";
import ProjectItem from "./ProjectItem";

export interface Project {
  id: number;
  title: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  largeImage: string;
}

const projectsData = [
  {
    id: 1,
    title: "Project 1",
    shortDescription:
      "This is a short description of Project 1. lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    longDescription:
      "This is a long description of Project 1.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam similique sint perferendis ratione amet dolore voluptatem alias exercitationem voluptates quos. Laudantium dolor earum ratione alias, vero, temporibus similique, atque unde natus in labore! Animi magnam, eligendi distinctio placeat, nihil quas ducimus laboriosam suscipit, dignissimos est repellendus dolore accusamus ipsa rem!",
    image: "/images/Seen birdsong.jpg",
    largeImage: "/images/Seen birdsong.jpg",
  },
  {
    id: 2,
    title: "Project 2",
    shortDescription:
      "This is a short description of Project 2. lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    longDescription:
      "This is a long description of Project 2.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam similique sint perferendis ratione amet dolore voluptatem alias exercitationem voluptates quos. Laudantium dolor earum ratione alias, vero, temporibus similique, atque unde natus in labore! Animi magnam, eligendi distinctio placeat, nihil quas ducimus laboriosam suscipit, dignissimos est repellendus dolore accusamus ipsa rem!",
    image: "/images/Spider with a droplet.jpg",
    largeImage: "/images/Spider with a droplet.jpg",
  },
  // More projects...
];

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<Project | null>(null);
  const [isExpandedProjectVisible, setIsExpandedProjectVisible] =
    useState(false);

  useEffect(() => {
    console.log("expandedProject changed", expandedProject);
  }, [expandedProject]);

  const handleExpand = (project: Project) => {
    setExpandedProject(project);
    setIsExpandedProjectVisible(true);
  };

  const handleCollapse = () => {
    setIsExpandedProjectVisible(false);
    setTimeout(() => {
      setExpandedProject(null);
    }, duration);
  };

  const duration = 300;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
    unmounted: { opacity: 0 },
  };

  return (
    <div id="projects" className="projects-container">
      <h1 className="text-gray-600 font-semibold tracking-wide uppercase">
        Projects
      </h1>
      <Transition in={isExpandedProjectVisible} timeout={duration}>
        {(state) =>
          expandedProject && (
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
              className="expandedProject-container"
            >
              <ExpandedProject
                project={expandedProject}
                onCollapse={handleCollapse}
              />
            </div>
          )
        }
      </Transition>
      {!expandedProject &&
        projectsData.map((project) => (
          <ProjectItem
            key={project.id}
            project={project}
            onExpand={handleExpand}
          />
        ))}
    </div>
  );
}
