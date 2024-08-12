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
  knowledgenest,
  newsfe,
  newsbe,
  postgreSQL,
  vue,
  hotelBooking,
  eventsPlatform,
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
    name: "vue",
    icon: vue,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "postgreSQL",
    icon: postgreSQL,
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
        color: "text-[#2f80ed]",
      },
      {
        name: "react",
        color: "text-[#2f80ed]",
      },
      {
        name: "bootstrap",
        color: "text-[#2f80ed]",
      },
    ],
    image: newsfe,
    githubLink: "https://github.com/Sakhee89/fe-sakhee-news",
    websiteLink: "https://sakhee-news.netlify.app/",
  },
  {
    name: "News Server (BackEnd)",
    description:
      "Backend application that serves as a data provider for our frontend application. It accepts requests from the frontend, using HTTP requests such as GET, POST, PUT, and DELETE, and responds in a JSON format.",
    tags: [
      {
        name: "JavaScript",
        color: "text-[#2f80ed]",
      },
      {
        name: "node.js",
        color: "text-[#2f80ed]",
      },
      {
        name: "express.js",
        color: "text-[#2f80ed]",
      },
      {
        name: "jest",
        color: "text-[#2f80ed]",
      },
      {
        name: "REST API",
        color: "text-[#2f80ed]",
      },
      {
        name: "postgreSQL",
        color: "text-[#2f80ed]",
      },
    ],
    image: newsbe,
    githubLink: "https://github.com/Sakhee89/sakhee-server",
    websiteLink: "https://sakhee-news.onrender.com/api",
  },
  {
    name: "Knowledge Nest",
    description:
      "Web application that enables users to seek services from the various users who are advertising them. It has a built in chat system where the users can communicate with each other, and the ability to sign in by email or google login.",
    tags: [
      {
        name: "vue.js",
        color: "text-[#2f80ed]",
      },
      {
        name: "restapi",
        color: "text-[#2f80ed]",
      },
      {
        name: "axios",
        color: "text-[#2f80ed]",
      },
      {
        name: "TypeScript",
        color: "text-[#2f80ed]",
      },
      {
        name: "firebase",
        color: "text-[#2f80ed]",
      },
      {
        name: "tailwind",
        color: "text-[#2f80ed]",
      },
    ],
    image: knowledgenest,
    websiteLink: "https://knowledge-nest-fe.vercel.app/",
    githubLink: "https://github.com/TomMirfin/knowledge-nest-FE",
  },
  {
    name: "Hotel Booking",
    description:
      "A dynamic hotel booking platform using TypeScript, Next.js, and React. Integrated Sanity CMS for content management and Stripe for secure payments. Enabled user authentication with NextAuth.js and enhanced the UI with Tailwind CSS and real-time notifications via react-hot-toast. Implemented efficient data fetching with SWR and intuitive date selection using react-datepicker.",
    tags: [
      {
        name: "Next.js",
        color: "text-[#2f80ed]",
      },
      {
        name: "Sanity CMS",
        color: "text-[#2f80ed]",
      },
      {
        name: "axios",
        color: "text-[#2f80ed]",
      },
      {
        name: "TypeScript",
        color: "text-[#2f80ed]",
      },
      {
        name: "Stripe",
        color: "text-[#2f80ed]",
      },
      {
        name: "tailwind",
        color: "text-[#2f80ed]",
      },
    ],
    image: hotelBooking,
    websiteLink: "https://hotel-booking-xi-five.vercel.app/",
    githubLink: "https://github.com/Sakhee89/hotel-booking-site",
  },
  {
    name: "Events Platform",
    description:
      "A community events platform enabling businesses to create, share, and manage events with local members. Built using TypeScript, React.js, and Node.js, with MongoDB and Stripe integration. Implemented Google Calendar API for event syncing and ensured secure user authentication and payment processing. Designed a responsive, user-friendly interface and provided detailed documentation for hosting and local setup.",
    tags: [
      {
        name: "React.js",
        color: "text-[#2f80ed]",
      },
      {
        name: "MongoDB",
        color: "text-[#2f80ed]",
      },
      {
        name: "Express",
        color: "text-[#2f80ed]",
      },
      {
        name: "TypeScript",
        color: "text-[#2f80ed]",
      },
      {
        name: "Stripe",
        color: "text-[#2f80ed]",
      },
      {
        name: "Google Calendar",
        color: "text-[#2f80ed]",
      },
      {
        name: "tailwind",
        color: "text-[#2f80ed]",
      },
    ],
    image: eventsPlatform,
    websiteLink: "https://fe-events-platform.vercel.app/",
    githubLink: "https://github.com/Sakhee89/fe-events-platform",
  },
];

const contacts = [
  {
    text: "https://github.com/Sakhee89/",
    url: "https://github.com/Sakhee89/",
  },
  {
    text: "https://www.linkedin.com/in/kevin-chan-b7103b135/",
    url: "https://www.linkedin.com/in/kevin-chan-b7103b135/",
  },
  {
    text: "kevinchan01@outlook.com",
    url: "mailto:kevinchan01@outlook.com",
  },
];

export { services, technologies, projects, contacts };
