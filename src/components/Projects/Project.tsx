"use client";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import React from "react";
import styles from "../../styles/components/Projects.module.scss";
type ProjectProps = {
  data: {
    name: string;
    image: StaticImageData;
    technologies: string[];
    description: string;
    demoUrl: string;
    codeUrl: string;
  };
};

const Project: React.FC<ProjectProps> = ({ data }) => {
  return (
    <motion.div
      initial={{
        y: 50,
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 10,
      }}
      viewport={{ amount: 0.4, once: true }}
      className={`${styles.projects_container_project}`}
    >
      <div className={`${styles.projects_container_project_left}`}>
        <div
          className={`${styles.projects_container_project_left_imgContainer}`}
        >
          <Image
            className={`${styles.projects_container_project_left_imgContainer_image}`}
            src={data.image}
            alt={"project"}
          />
        </div>
      </div>
      <div className={`${styles.projects_container_project_right}`}>
        <h3 className={`${styles.projects_container_project_right_name}`}>
          {data.name}
        </h3>
        <div
          className={`${styles.projects_container_project_right_techContainer}`}
        >
          <div
            className={`${styles.projects_container_project_right_techContainer_tech_made}`}
          >
            Made with:
          </div>
          {data.technologies.map((tech, i) => (
            <div
              className={`${styles.projects_container_project_right_techContainer_tech}`}
              key={i}
            >
              {tech}
            </div>
          ))}
        </div>
        <p className={`${styles.projects_container_project_right_description}`}>
          {data.description}
        </p>
        <div className={`${styles.projects_container_project_right_buttons}`}>
          <motion.a
            whileHover={{
              boxShadow: "0.5rem 0.5rem 0px var(--secondary)",
              transform: "translate(-0.5rem, -0.5rem)",
            }}
            className={`${styles.projects_container_project_right_buttons_btn}`}
            href={data.demoUrl}
            target="_blank"
          >
            <Icon icon={"ph:arrow-square-out-light"} />
            Live
          </motion.a>
          <motion.a
            whileHover={{
              boxShadow: "0.5rem 0.5rem 0px var(--secondary)",
              transform: "translate(-0.5rem, -0.5rem)",
            }}
            className={`${styles.projects_container_project_right_buttons_btn}`}
            href={data.codeUrl}
            target="_blank"
          >
            <Icon icon={"mdi:github"} />
            Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};
export default Project;
