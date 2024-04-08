import {
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  threejs,
  knowledgenest,
  newsfe,
  newsbe,
} from "../assets";

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const projects = [
  {
    name: "News Server (FrontEnd)",
    description:
      "Web-based platform that allows users to to explore a range of articles contributed by various users. Users can add and remove comments and vote on articles. The platform offers filtering based on topics, sort articles by comments, counts, votes and date created",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
    ],
    image: newsfe,
    source_code_link: "https://sakhee-news.netlify.app/",
  },
  {
    name: "News Server (BackEnd)",
    description:
      "Backend application that serves as a data provider for our frontend application. It accepts requests from the frontend, using HTTP requests such as GET, POST, PUT, and DELETE, and responds in a JSON format.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "",
      },
      {
        name: "express.js",
        color: "",
      },
      {
        name: "jest",
        color: "",
      },
      {
        name: "REST API",
        color: "",
      },
      {
        name: "postgreSQL",
        color: "",
      },
    ],
    image: newsbe,
    source_code_link: "https://sakhee-news.onrender.com/api",
  },
  {
    name: "Knowledge Nest",
    description:
      "Web application that enables users to seek services from the various users who are advertising them. It has a built in chat system where the users can communicate with each other, and the ability to sign in by email or google login.",
    tags: [
      {
        name: "vue.js",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "axios",
        color: "pink-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: knowledgenest,
    source_code_link: "https://knowledge-nest-fe.vercel.app/",
  },
];

export { services, technologies, projects };
