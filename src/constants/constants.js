import battleshipScreenshot from "/home/matthew/repos/portfolio/src/assets/projects/battleship-screenshot.png";
import weatherAppScreenshot from "/home/matthew/repos/portfolio/src/assets/projects/weather-app-screenshot.png";
/* import ticTacToeScreenshot from "/home/matthew/repos/portfolio/src/assets/projects/tic-tac-toe-screenshot.png"; */
import portfolioScreenshot from "/home/matthew/repos/portfolio/src/assets/projects/portfolio-screenshot.png";

export const PROJECTS = [
  {
    title: "Battleship",
    image: {
      src: battleshipScreenshot,
      alt: "Battleship Website",
    },
    description:
      "This project is a web-based implementation of the classic Battleship game where you play against an intelligent AI that attacks using probability maps. Care to challenge the computer?",
    technologies: ["HTML", "CSS", "Javascript", "Jest"],
    link: {
      live: "https://mattheweng1.github.io/project-battleship/",
      code: "https://github.com/Mattheweng1/project-battleship",
    },
  },
  {
    title: "Weather App",
    image: {
      src: weatherAppScreenshot,
      alt: "Weather App Website",
    },
    description:
      "This is a simple weather app that can show you the forecast for locations all over the world. Wondering what the forecast is?",
    technologies: ["HTML", "CSS", "Javascript"],
    link: {
      live: "https://mattheweng1.github.io/project-weather-app/",
      code: "https://github.com/Mattheweng1/project-weather-app",
    },
  } /* 
  {
    title: "Tic Tac Toe",
    image: {
      src: ticTacToeScreenshot,
      alt: "Tic Tac Toe Website",
    },
    description:
      "This is a website to play the classic game of tic-tac-toe! Play a friend locally or challenge one of the bots! Unfortunately, one of them is unbeatable. Why not try a game?",
    technologies: ["HTML", "CSS", "Javascript"],
    link: {
      live: "https://mattheweng1.github.io/project-tic-tac-toe/",
      code: "https://github.com/Mattheweng1/project-tic-tac-toe",
    },
  }, */,
  {
    title: "Portfolio Website",
    image: {
      src: portfolioScreenshot,
      alt: "Portfolio Website",
    },
    description:
      "A personal portfolio website showcasing projects, skills, and contact information. It's the website you're on right now!",
    technologies: ["React", "Tailwind", "Framer Motion"],
    link: {
      live: "https://mattheweng1.github.io/portfolio/",
      code: "https://github.com/Mattheweng1/portfolio",
    },
  },
];

export const LINKS = {
  linkedIn: "https://www.linkedin.com/in/matthew-caleb-eng/",
  gitHub: "https://github.com/Mattheweng1",
  theOdinProject: "https://www.theodinproject.com/about",
};
