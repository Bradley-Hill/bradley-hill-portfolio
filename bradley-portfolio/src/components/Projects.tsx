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
  {
    id: 3,
    title: "Project 3",
    shortDescription:
      "This is a short description of Project 3. lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    longDescription:
      "This is a long description of Project 3.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam similique sint perferendis ratione amet dolore voluptatem alias exercitationem voluptates quos. Laudantium dolor earum ratione alias, vero, temporibus similique, atque unde natus in labore! Animi magnam, eligendi distinctio placeat, nihil quas ducimus laboriosam suscipit, dignissimos est repellendus dolore accusamus ipsa rem!",
    image: "/images/first meow.jpg",
    largeImage: "/images/first meow.jpg",
  },
  {
    id: 4,
    title: "Project 4",
    shortDescription:
      "This is a short description of Project 4. lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    longDescription:
      "This is a long description of Project 4.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam similique sint perferendis ratione amet dolore voluptatem alias exercitationem voluptates quos. Laudantium dolor earum ratione alias, vero, temporibus similique, atque unde natus in labore! Animi magnam, eligendi distinctio placeat, nihil quas ducimus laboriosam suscipit, dignissimos est repellendus dolore accusamus ipsa rem!",
    image: "/images/Fox Stretch.jpg",
    largeImage: "/images/liquid sunset .jpg",
  },
  {
    id: 5,
    title: "Project 5",
    shortDescription:
      "This is a short description of Project 5. lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    longDescription:
      "This is a long description of Project 5.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam similique sint perferendis ratione amet dolore voluptatem alias exercitationem voluptates quos. Laudantium dolor earum ratione alias, vero, temporibus similique, atque unde natus in labore! Animi magnam, eligendi distinctio placeat, nihil quas ducimus laboriosam suscipit, dignissimos est repellendus dolore accusamus ipsa rem!",
    image: "/images/Spiderman.jpg",
    largeImage: "/images/Spiderman.jpg",
  },
  {
    id: 6,
    title: "Project 6",
    shortDescription:
      "This is a short description of Project 6. lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    longDescription:
      "This is a long description of Project 6.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam similique sint perferendis ratione amet dolore voluptatem alias exercitationem voluptates quos. Laudantium dolor earum ratione alias, vero, temporibus similique, atque unde natus in labore! Animi magnam, eligendi distinctio placeat, nihil quas ducimus laboriosam suscipit, dignissimos est repellendus dolore accusamus ipsa rem!",
    image: "/images/Daft Punk.jpg",
    largeImage: "/images/Daft Punk.jpg",
  },
  {
    id: 7,
    title: "Project 7",
    shortDescription:
      "This is a short description of Project 7. lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    longDescription:
      "This is a long description of Project 7.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam similique sint perferendis ratione amet dolore voluptatem alias exercitationem voluptates quos. Laudantium dolor earum ratione alias, vero, temporibus similique, atque unde natus in labore! Animi magnam, eligendi distinctio placeat, nihil quas ducimus laboriosam suscipit, dignissimos est repellendus dolore accusamus ipsa rem!",
    image: "/images/puppy.jpg",
    largeImage: "/images/puppy.jpg",
  },
  {
    id: 8,
    title: "Project 8",
    shortDescription:
      "This is a short description of Project 8. lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    longDescription:
      "This is a long description of Project 8.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam similique sint perferendis ratione amet dolore voluptatem alias exercitationem voluptates quos. Laudantium dolor earum ratione alias, vero, temporibus similique, atque unde natus in labore! Animi magnam, eligendi distinctio placeat, nihil quas ducimus laboriosam suscipit, dignissimos est repellendus dolore accusamus ipsa rem!",
    image: "/images/twitch plays Pokemon.png",
    largeImage: "/images/twitch plays Pokemon.png",
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
      <h1 className="my-2 text-gray-600 font-extrabold tracking-wide uppercase">
        My Projects
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
