import React, { useState } from "react";
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

  const handleExpand = (project: Project) => {
    setExpandedProject(project);
  };

  const handleCollapse = () => {
    setExpandedProject(null);
  };

  return (
    <div id="projects" className="projects-container">
      <h1 className="text-gray-600 font-semibold tracking-wide uppercase">
        Projects
      </h1>
      {expandedProject ? (
        <ExpandedProject
          project={expandedProject}
          onCollapse={handleCollapse}
        />
      ) : (
        projectsData.map((project) => (
          <ProjectItem
            key={project.id}
            project={project}
            onExpand={handleExpand}
          />
        ))
      )}
    </div>
  );
}
