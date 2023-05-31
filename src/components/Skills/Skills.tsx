import React from "react";
import styles from "../../styles/components/Skills.module.scss";
type SkillsProps = {};

const Skills: React.FC<SkillsProps> = () => {
  return (
    <div className={`${styles.skills}`} id="skills">
      <h2 className={`${styles.skills_title}`}>Skills</h2>
      <div className={`${styles.skills_container}`}></div>
    </div>
  );
};
export default Skills;
