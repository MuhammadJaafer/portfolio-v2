"use client";
import { ProjectsData } from "@/db/main";
import React from "react";
import styles from "../../styles/components/Projects.module.scss";
import Project from "./Project";
type ProjectsProps = {};

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div id="projects" className={`${styles.projects}`}>
      <h2 className={`${styles.projects_title}`}>{ProjectsData.title}</h2>
      <div className={`${styles.projects_container}`}>
        {ProjectsData.Projects.map((project, i) => (
          <Project key={i} index={i} data={project} />
        ))}
      </div>
    </div>
  );
};
export default Projects;
