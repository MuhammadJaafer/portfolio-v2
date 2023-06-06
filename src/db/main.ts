import bookieImg from "../../public/images/bookie.png";
import myImage from "../../public/images/muhammad.png";
import mutahItImg from "../../public/images/mutah-it.png";
import randQuoteImg from "../../public/images/randquote.png";
import redditCloneImg from "../../public/images/reddit-clone.png";
export const heroData = {
  img: myImage,
  hi: "Hello! I am",
  name: "Muhammad Jaafar",
  expertise: ["Front-End Developer", "UI/UX Designer"],
  about:
    "I'm a passionate junior Front-End Developer based in Jordan, currently studying Software Engineering with a strong interest in UI/UX design. I'm committed to creating visually stunning and user-friendly websites, and I'm looking forward to exploring new opportunities to enhance my skills.",
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
      text: "Now, as a software engineering student at Mutah University, I am pursuing my dream of becoming a professional programmer. I also work as a freelance web developer, which has allowed me to apply my skills in real-world projects and gain practical experience.",
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
      url: "https://www.linkedin.com/in/muhammad-jaafar-a099801a9/",
    },
    {
      label: "Resume",
      url: "#",
    },
  ],
};

export const ProjectsData = {
  title: "Projects",
  Projects: [
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
      name: "Mutah IT",
      technologies: ["JavaScript", "React", "Styled-Components", "Firebase"],
      image: mutahItImg,
      description:
        "A one-stop destination for IT students at Mutah University, the platform provides a wealth of resources, including course explanations, study plans, and trial exams specifically designed for all IT majors at Mutah University.",

      demoUrl: "https://mutah-it.com/",
      codeUrl: "",
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
