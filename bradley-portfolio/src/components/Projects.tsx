import React, { useState } from "react";
import { StaticImageData } from "next/image";
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
    shortDescription: "This is a short description of Project 1.",
    longDescription: "This is a long description of Project 1.",
    image: "/images/Seen birdsong.jpg",
    largeImage: "/images/Seen birdsong.jpg",
  },
  {
    id: 2,
    title: "Project 2",
    shortDescription: "This is a short description of Project 2.",
    longDescription: "This is a long description of Project 2.",
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
    <div className="projects-container">
      <h1>Projects</h1>
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
