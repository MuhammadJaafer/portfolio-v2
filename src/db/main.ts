import myImage from "../../public/images/muhammad.png";

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
