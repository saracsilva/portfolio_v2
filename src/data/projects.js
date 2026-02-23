import project1Img from "/projects/project_01.png";
import project2Img from "/projects/project_02.png";
import project3Img from "/projects/project_03.png";
import project4Img from "/projects/project_04.png";

export const projects = [
  {
    id: 1,
    title: "My Dictionary",
    image: project1Img,
    description:
      "This is a personal project, an English Dictionary React app using an API.",
    github: "https://github.com/saracsilva/dictionary",
    live: "https://glowing-stardust-4eab74.netlify.app/search",
  },
  {
    id: 2,
    title: "UpManager",
    image: project2Img,
    description:
      "This projects was executed during my Ironhack Bootcamp. It's the final project and I did it together with my colegues Shirin and Stephanie. We decided to make a management tool to help to organize projects and events from a company.\n\nWe used MongoDB for the Database, Express for the BackEnd and React in the FronEnd. To give a better look to the APP, we used Material UI and Mantine.",
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
    description:
      "This was the second project. I made it together with my colleague Andrea. We decided to make an App where you can put all kinds of crazy pizza flavors on it, so everybody that visits the app can know the different types of pizza that exist in the world.\n\nWe used MongoDB for the Database, Express for the BackEnd and JavaScript and EJS in the FrontEnd. To give a better look to the APP, we used CSS and a bit of Bootstrap.",
    github: "https://github.com/andreiacpafonso/couldbepizza",
    live: "https://lilac-drill-cuff.cyclic.app/",
  },
  {
    id: 4,
    title: "Dinocorn Game",
    image: project4Img,
    description:
      "This was my first project. It is a game like the original dinosaur one from Chrome. I've decided to give a happier look to the game to make it more enjoyable.\n\nIt's all made with JavaScript, CSS and HTML.",
    github: "https://github.com/saracsilva/the-dinocorn-game",
    live: "https://saracsilva.github.io/the-dinocorn-game/",
  },
];
