import project6Img from "/projects/project_06.webp";
import project5Img from "/projects/project_05.webp";
import project4Img from "/projects/project_04.webp";
import project3Img from "/projects/project_03.webp";
import project2Img from "/projects/project_02.webp";
import project1Img from "/projects/project_01.webp";

export const projects = [
  {
    id: 6,
    title: "Emotion tracker",
    image: project6Img,
    description: {
      what: "Something new is on the way. A personal project about emotions, currently in progress.",
      stack: "React · Tailwind CSS · MongoDB · Express · Node.js",
      role: "Solo project. Built and designed entirely by me.",
    },
    github: {
      frontend: "https://github.com/saracsilva/emotion-tracker-client",
      backend: "https://github.com/saracsilva/emotion-tracker-api",
    },
  },
  {
    id: 5,
    title: "Warp reviews",
    image: project5Img,
    description: {
      what: "A review app for Star Trek series, because the franchise has 800+ episodes and opinions about all of them. Built solo to learn Ruby on Rails before going professional.",
      stack: "Ruby on Rails · HTML · CSS",
      role: "Solo project. Built entirely by me as a deliberate learning exercise, my first Rails app, written to get job-ready.",
    },
    github: "https://github.com/saracsilva/warp-reviews",
    live: "https://warp-reviews.onrender.com/",
  },
  {
    id: 4,
    title: "My Dictionary",
    image: project4Img,
    description: {
      what: "A clean, English dictionary app, search any word and get its definition, phonetics, and examples instantly.",
      stack: "React · Dictionary API",
      role: "Solo project. Integrated the Dictionary API, handled state and search logic, and designed the interface.",
    },
    github: "https://github.com/saracsilva/dictionary",
    live: "https://glowing-stardust-4eab74.netlify.app/search",
  },
  {
    id: 3,
    title: "UpManager",
    image: project3Img,
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
    id: 2,
    title: "Could be pizza",
    image: project2Img,
    description: {
      what: "A community app for discovering and sharing unusual pizza combinations. Because someone has to document that pineapple is not the limit.",
      stack: "JavaScript · EJS · CSS · Bootstrap · Express · MongoDB",
      role: "Built with Andrea during Ironhack. Designed the UI and contributed across the full stack (frontend, backend, and database).",
    },
    github: "https://github.com/andreiacpafonso/couldbepizza",
    live: "https://lilac-drill-cuff.cyclic.app/",
  },
  {
    id: 1,
    title: "Dinocorn Game",
    image: project1Img,
    description: {
      what: "A browser game inspired by Chrome's offline dinosaur, rebuilt with a cuter aesthetic. Pink, sparkly, and more fun to lose at.",
      stack: "JavaScript · HTML · CSS",
      role: "Solo project. Built the game logic, designed the visual style, and handled everything from sprite movement to score tracking.",
    },
    github: "https://github.com/saracsilva/the-dinocorn-game",
    live: "https://saracsilva.github.io/the-dinocorn-game/",
  },
];
