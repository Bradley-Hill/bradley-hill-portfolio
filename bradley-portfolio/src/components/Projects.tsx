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
  githubLink: string;
}

const projectsData = [
  {
    id: 1,
    title: "Rock,Paper,Scissors",
    shortDescription:
      "This project is a simple implementation of the classic game Rock,Paper,Scissors, made using JavaScript.",
    longDescription:
      "This was one of the first of my efforts to create a working program with JavaScript, and despite its very rudimentary nature, I am still proud of it. I was able to create a working program that could take user input and use it to generate a random computer choice, and then compare the two to determine a winner. I was also able to create a simple UI to display the results of the game. I learned a lot about the basics of JavaScript while working on this project, and it was a great introduction to the language.",
    image: "/images/code2.jpg",
    largeImage: "/images/code2.jpg",
    githubLink: "https://github.com/Bradley-Hill/rock-paper-scissors",
  },
  {
    id: 2,
    title: "Calculator",
    shortDescription:
      "A responsive JavaScript calculator that performs basic arithmetic operations with a clean user interface.",
    longDescription:
      "The JavaScript Calculator project is a responsive web application that offers users a simple yet dynamic tool for performing arithmetic calculations. Built using HTML, CSS, and JavaScript, the calculator supports addition, subtraction, multiplication, division, and percentage calculations. The clean and intuitive user interface, coupled with responsive design, ensures a seamless experience on different devices. The calculator also features a 'delete' button for corrections and a 'clear' button to reset calculations, making it a practical and user-friendly showcase of front-end development skills.",
    image: "/images/Spider with a droplet.jpg",
    largeImage: "/images/Spider with a droplet.jpg",
    githubLink: "https://github.com/Bradley-Hill/Calculator",
  },
  {
    id: 3,
    title: "Noughts and Crosses (Tic-Tac-Toe)",
    shortDescription:
      "A two-player tic-tac-toe game implemented in JavaScript, HTML, and CSS. The game features dynamic player creation, marker validation, and interactive gameplay with a responsive design.",
    longDescription:
      "This project is a web-based two-player tic-tac-toe game built using JavaScript, HTML, and CSS. The game introduces a modular design with distinct functional modules to handle player creation, game logic, and user interface interactions. Players enter their names and choose markers (X or O), with real-time validation ensuring unique markers for each          The Game Board module sets up the tic-tac-toe grid and manages the game state, allowing players to make moves and resetting the board after each game. The Player module defines player objects with customizable names and markers, emphasizing error handling for valid inputs. The core of the game is the Game module, which orchestrates the overall game flow. It determines the starting player through a random selection, keeps track of the current player, and checks for win or draw states after each move. The user interface module handles the display of the game board, updates the active player, and maintains a dynamic scoreboard reflecting each player's score.",
    image: "/images/first meow.jpg",
    largeImage: "/images/first meow.jpg",
    githubLink: "https://github.com/Bradley-Hill/noughts-and-crosses",
  },
  {
    id: 4,
    title: "Etch-a-Sketch",
    shortDescription:
      "A dynamic grid generator built with JavaScript, HTML, and CSS, allowing users to create and customize grids of varying sizes. The interactive interface supports rainbow coloring and opacity effects for an engaging visual experience.",
    longDescription:
      "This project is a versatile grid generator implemented using JavaScript, HTML, and CSS. The application enables users to dynamically create customizable grids by specifying the number of cells they want. The grid size is user-decided, offering flexibility and control over the visual layout.The user interface is interactive, featuring a color palette that includes a default blue fill, a randomized rainbow effect, and an opacity option for a unique visual experience. The rainbow effect introduces a burst of colors to the grid cells, while the opacity feature gradually increases the transparency of the cells, creating a distinctive visual effect. The application incorporates event listeners to respond to user actions, such as grid creation and color selection. Additionally, it employs prompt and alert dialogs to guide users in providing valid inputs and receiving feedback on their choices.",
    image: "/images/liquid sunset .jpg",
    largeImage: "/images/liquid sunset .jpg",
    githubLink: "https://github.com/Bradley-Hill/Etch-a-Sketch",
  },
  {
    id: 5,
    title: "The mouse and his house",
    shortDescription:
      "A charming Pico-8 game where a mouse navigates a garden, collecting vegetables to unlock a door and join its friends inside the house. Implemented with Lua, the game features dynamic animations, a scoring system, and a delightful visual style.",
    longDescription:
      "This Pico-8 game, coded in Lua, features a mouse navigating a garden to collect vegetables and fruits, unlocking a door to access an interior space. The game employs dynamic animations, responsive player movement, and a scoring system. The camera intelligently focuses on the gameplay area, and various technical features include flag-based map interactions, sprite animations, and real-time scoring updates. The project serves as a collaborative example, showcasing proficiency in game development using Pico-8 and Lua scripting.",
    image: "/images/Spiderman.jpg",
    largeImage: "/images/Spiderman.jpg",
    githubLink:
      "https://github.com/Bradley-Hill/projet-collectif---pico-8-eline-bradley-france",
  },
  {
    id: 6,
    title: "Choose Your Career",
    shortDescription:
      "This is a web project aiding developers in career decisions by providing real-time insights into job trends across French departments. Using the Pole Emploi API, the site dynamically visualizes data on programming languages, experience levels, and contract types.",
    longDescription:
      "This is a web project designed for developers seeking valuable insights into job trends. Utilizing the Pole Emploi API, the site offers real-time information on developer job postings across different French departments. The interactive interface allows users to explore trends in programming languages, experience levels, frameworks, and contract types. The project showcases proficiency in web development, API integration, and dynamic data visualization techniques.",
    image: "/images/Daft Punk.jpg",
    largeImage: "/images/Daft Punk.jpg",
    githubLink:
      "https://github.com/Bradley-Hill/projet-collectif-dataviz-myriam-romane-bradley-mehdi",
  },
  {
    id: 7,
    title: "Sweet Web",
    shortDescription:
      "'Sweet Web' is a Chrome extension designed to enhance online experiences by allowing users to replace specific words with positive symbols and easily add custom ban words. With a friendly interface, it aims to create a more enjoyable and personalized browsing environment.",
    longDescription:
      "'Sweet Web' is a Chrome extension crafted to transform online interactions into a more positive and tailored experience. The extension enables users to replace designated words with uplifting symbols, contributing to a more pleasant online atmosphere. Additionally, users have the flexibility to expand the list of blocked words by effortlessly adding custom ban words through a user-friendly interface. The extension blends functionality with simplicity, providing users with a tool to shape their online environment according to their preferences.",
    image: "/images/puppy.jpg",
    largeImage: "/images/puppy.jpg",
    githubLink:
      "https://github.com/Bradley-Hill/projet-collectif-extension-navigateur-sweetweb-alex-brad-nathan-laure",
  },
  {
    id: 8,
    title: "To-Do-App",
    shortDescription:
      "This To-Do-App was created to help me deepen my understanding of TypeScript and how it is an improvement over JavaScript.",
    longDescription:
      "This project is a technical demonstration of TypeScript in action, serving as a hands-on exploration of TypeScript's core features. Developed without external frameworks, this application highlights the implementation of TypeScript for building interactive and data-driven web applications. Users can leverage the app to create, edit, and prioritize tasks, offering a real-world illustration of TypeScript's role in enhancing code maintainability and scalability. The app utilizes local storage for data persistence, contributing to a deeper understanding of how TypeScript can be employed for practical, client-side solutions.",
    image: "/images/twitch plays Pokemon.png",
    largeImage: "/images/twitch plays Pokemon.png",
    githubLink: "https://github.com/Bradley-Hill/To-Do-App",
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
