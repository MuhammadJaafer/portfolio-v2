import qaroraImg from "../../public/images/qarora.png";
import bookieImg from "../../public/images/bookie.png";
import myImage from "../../public/images/muhammad.png";
import mutahItImg from "../../public/images/mutah-it.png";
import randQuoteImg from "../../public/images/randquote.png";
import redditCloneImg from "../../public/images/reddit-clone.png";
import theDojoImg from "../../public/images/the-dojo.png";
import shawerrImg from "../../public/images/shawerr.png";
import arabicPoetryImg from "../../public/images/arabic-poetry.png";

export const heroData = {
  img: myImage,
  hi: "Hello! I am",
  name: "Muhammad Jaafar",
  expertise: ["Software Engineer", "UI/UX Designer"],
  about:
    "I'm a passionate Software Engineer based in Jordan, currently studying Software Engineering. Alongside my studies, I'm working as a Software Development Engineer intern at Amazon and am the founder of Arabic-Poetry.net. I have a strong interest in UI/UX design and am committed to creating visually stunning and user-friendly websites. I'm looking forward to exploring new opportunities to enhance my skills.",
  btnText: "Get my resume",
};

export const aboutData = {
  title: "About My",
  cards: [
    {
      title: "Past",
      text: "I discovered my passion for programming when I was just 14 years old. At first, it was just a hobby, but I quickly became interested in web development and the creative possibilities it offered. Over the years, I continued to develop my skills and fell more in love with building websites.",
    },
    {
      title: "Present",
      text: "Currently, I am a software engineering student at Mutah University. I am also a Software Development Engineer intern at Amazon, where I gain valuable experience in a professional setting. Additionally, I am the founder of Arabic-Poetry.net, a platform dedicated to Arabic poetry.",
    },
    {
      title: "Future",
      text: "Looking ahead, I'm excited about the future of programming and the endless opportunities it presents. I'm confident that my passion for the field, coupled with my skills, will enable me to make meaningful contributions to the industry in the years to come.",
    },
  ],
};

export const SkillsData = {
  title: "Skills",
  categories: [
    {
      title: "Front End",
      skills: [
        "HTML",
        "JavaScript",
        "TypeScript",
        "React",
        "Next",
        "Redux",
        "Astro",
        "Recoil",
        "GraphQL",
        "Apollo",
        "Firebase",
      ],
    },
    {
      title: "Styling & Design",
      skills: [
        "CSS",
        "SASS",
        "BootStrap",
        "Tailwind CSS",
        "CSS Module",
        "Figma",
        "Styled-Components",
      ],
    },
    {
      title: "Miscellaneous",
      skills: [
        "Git",
        "Jest",
        "Cypress",
        "Playwright",
        "react-testing-library",
        "Webpack",
        "UI/UX design processes",
        "REST APIs",
      ],
    },
  ],
};

export const contactData = {
  title: "Want To",
  cards: [
    {
      title: "offer job opportunity?",
      text: "I am open to discussing potential job opportunities or collaborations. With experience in web development and software engineering, I am interested in roles that allow me to work on exciting and challenging projects. If you have a project or role in mind, feel free to reach out and let's discuss!",
    },
    {
      title: "Connect?",
      text: "Networking is key in the tech industry, and I'm always looking to meet new people and expand my professional circle. Whether you're a fellow developer, designer, or entrepreneur, I'd love to chat and learn more about your work. Let's grab a virtual coffee and see where the conversation takes us!",
    },
    {
      title: "Build something?",
      text: "I have a passion for developing innovative web applications that solve complex problems. Whether it's building a custom e-commerce platform or a cutting-edge web app, I'm always ready for a new challenge. Let's create something amazing together!",
    },
  ],
  links: [
    {
      label: "Email",
      url: "mailto:muhammadaldawahreh@gmail.com",
    },
    {
      label: "GitHub",
      url: "https://github.com/MuhammadJaafer",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/muhammad-dawahreh/",
    },
    {
      label: "Resume",
      url: "/Docs/resume.pdf",
    },
  ],
};

export const ProjectsData = {
  title: "Projects",
  Projects: [
    {
      name: "Arabic Poetry",
      image: arabicPoetryImg,
      technologies: [
        "TypeScript",
        "Next.js",
        "React",
        "AWS",
        "Web Scraping",
        "PostgreSQL",
        "TailwindCss",
      ],
      description:
        "The Arabic Poetry Platform offers over 160,000 poems from more than 6,000 poets, ranging from the pre-Islamic era to modern times. As the founder, I created this user-friendly site to enhance access to Arabic poetry through AI-powered categorization, a design tool for creating engaging graphics, AI explanations for complex verses, and an interactive community for sharing and discussion. This project combines technology and literature, making Arabic poetry accessible to all.",
      demoUrl: "https://arabic-poetry.net",
      codeUrl: "",
    },
    {
      name: "Shawerr",
      image: shawerrImg,
      technologies: [
        "TypeScript",
        "SvelteKit",
        "Svelte",
        "TailwindCss",
        "Firebase",
      ],
      description:
        "Comprehensive consultant for rebuilding and establishing new products, safety inspection, and product evaluation.",
      demoUrl: "https://shawerr.com",
      codeUrl: "",
    },
    {
      name: "Qarora",
      image: qaroraImg,
      technologies: [
        "TypeScript",
        "Next",
        "React",
        "TailwindCss",
        "Firebase",
        "React Hook Form",
        "Zod",
      ],
      description:
        "Qarora is a groundbreaking platform redefining water bottle orders in Jordan. With categorized stations, detailed pages, and an admin panel for easy management, Qarora ensures a seamless experience.",
      demoUrl: "https://qwater-jo.com",
      codeUrl: "",
    },
    {
      name: "Bookie",
      image: bookieImg,
      technologies: [
        "TypeScript",
        "React",
        "Next",
        "Redux",
        "Module SCSS",
        "Firebase",
        "Sanity",
      ],
      description:
        "Bookie is a modern e-commerce platform designed exclusively for book lovers. It offers a diverse collection of books across various genres, creating an immersive online bookstore experience. With its sleek and contemporary design, Bookie provides a visually appealing platform for browsing and discovering captivating titles.",
      demoUrl: "https://bookie-store.vercel.app/",
      codeUrl: "https://github.com/MuhammadJaafer/bookie",
    },
    {
      name: "Reddit Clone",
      image: redditCloneImg,
      technologies: [
        "TypeScript",
        "React",
        "Next",
        "Recoil",
        "Styled-Components",
        "Firebase",
      ],
      description:
        "A fully functional Reddit clone built with the latest technology in the web development field, allowing users to create communities, as well as create, post, and upvote content, comment on and vote on other users' content.",
      demoUrl: "https://m7-reddit-clone.vercel.app/",
      codeUrl: "https://github.com/MuhammadJaafer/reddit-clone",
    },
    {
      name: "Mutah IT",
      technologies: ["JavaScript", "React", "Styled-Components", "Firebase"],
      image: mutahItImg,
      description:
        "A one-stop destination for IT students at Mutah University, the platform provides a wealth of resources, including course explanations, study plans, and trial exams specifically designed for all IT majors at Mutah University.",

      demoUrl: "https://mutah-it.com/",
      codeUrl: "",
    },
    {
      name: "The Dojo",
      image: theDojoImg,
      technologies: ["React", "CSS Module", "Firebase"],
      description:
        "The Dojo is a project management website that offers a plethora of useful features, including tools for assigning tasks and real-time communication with team members. It also incorporates a custom-made authentication system to ensure secure access and user management.",
      demoUrl: "https://the-dojo-app.netlify.app/",
      codeUrl: "https://github.com/MuhammadJaafer/the-dojo",
    },
    {
      name: "RandQuote",
      image: randQuoteImg,
      technologies: ["Javascript", "REST APIs", "OOP"],
      description:
        "RandQuote is a website that showcases random quotes, offering features such as copying the quote or saving it as an image. It also provides translation between Arabic and English. All of these features have been implemented using vanilla JavaScript and an object-oriented programming (OOP) architecture.",
      demoUrl: "https://randquotee.netlify.app/",
      codeUrl: "https://github.com/MuhammadJaafer/randQuote",
    },
  ],
};
