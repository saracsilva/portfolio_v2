import project1Img from "/projects/project_01.webp";
import project2Img from "/projects/project_02.webp";
import project3Img from "/projects/project_03.webp";
import project4Img from "/projects/project_04.webp";

export const projects = [
  {
    id: 1,
    title: "My Dictionary",
    image: project1Img,
    description: {
      what: "A clean, English dictionary app, search any word and get its definition, phonetics, and examples instantly.",
      stack: "React · Dictionary API",
      role: "Solo project. Integrated the Dictionary API, handled state and search logic, and designed the interface.",
    },
    github: "https://github.com/saracsilva/dictionary",
    live: "https://glowing-stardust-4eab74.netlify.app/search",
  },
  {
    id: 2,
    title: "UpManager",
    image: project2Img,
    description: {
      what: "A project and event management tool for companies, track tasks, people, and deadlines in one place.",
      stack: "React · Material UI · Mantine · MongoDB · Express · Node.js",
      role: "Final bootcamp project, built with Shirin and Stephanie. Designed the UI myself and contributed across the full stack, (frontend, backend, and database).",
    },
    github: {
      frontend: "https://github.com/stephahos/upmanager",
      backend: "https://github.com/stephahos/up_manager_api",
    },
    live: "https://precious-starship-8d8098.netlify.app/",
  },
  {
    id: 3,
    title: "Could be pizza",
    image: project3Img,
    description: {
      what: "A community app for discovering and sharing unusual pizza combinations. Because someone has to document that pineapple is not the limit.",
      stack: "JavaScript · EJS · CSS · Bootstrap · Express · MongoDB",
      role: "Built with Andrea during Ironhack. Designed the UI and contributed across the full stack (frontend, backend, and database).",
    },
    github: "https://github.com/andreiacpafonso/couldbepizza",
    live: "https://lilac-drill-cuff.cyclic.app/",
  },
  {
    id: 4,
    title: "Dinocorn Game",
    image: project4Img,
    description: {
      what: "A browser game inspired by Chrome's offline dinosaur, rebuilt with a cuter aesthetic. Pink, sparkly, and more fun to lose at.",
      stack: "JavaScript · HTML · CSS",
      role: "Solo project. Built the game logic, designed the visual style, and handled everything from sprite movement to score tracking.",
    },
    github: "https://github.com/saracsilva/the-dinocorn-game",
    live: "https://saracsilva.github.io/the-dinocorn-game/",
  },
];
