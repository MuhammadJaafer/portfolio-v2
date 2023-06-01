import { SkillsData } from "@/db/main";
import React from "react";
import styles from "../../styles/components/Skills.module.scss";
import Skill from "./Skill";
type SkillsProps = {};

const Skills: React.FC<SkillsProps> = () => {
  return (
    <div className={`${styles.skills}`} id="skills">
      <h2 className={`${styles.skills_title}`}>{SkillsData.title}</h2>
      <div className={`${styles.skills_container}`}>
        {SkillsData.categories.map((category, i) => (
          <div className={`${styles.skills_container_category}`} key={i}>
            <h3 className={`${styles.skills_container_category_title}`}>
              {category.title}
            </h3>
            <div
              className={`${styles.skills_container_category_skillsContainer}`}
            >
              {category.skills.map((skill, i) => (
                <Skill key={i} title={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className={`${styles.skills_circle1}`}></div>
      <div className={`${styles.skills_circle2}`}></div>
    </div>
  );
};
export default Skills;
