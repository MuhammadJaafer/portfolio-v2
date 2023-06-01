"use client";
import { SkillsData } from "@/db/main";
import { Variants, motion } from "framer-motion";
import React from "react";
import styles from "../../styles/components/Skills.module.scss";
import Skill from "./Skill";
type SkillsProps = {};
const containerVariants: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Skills: React.FC<SkillsProps> = () => {
  return (
    <div className={`${styles.skills}`} id="skills">
      <h2 className={`${styles.skills_title}`}>{SkillsData.title}</h2>
      <div className={`${styles.skills_container}`}>
        {SkillsData.categories.map((category, i) => (
          <motion.div
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            className={`${styles.skills_container_category}`}
            key={i}
          >
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
          </motion.div>
        ))}
      </div>
      <div className={`${styles.skills_circle1}`}></div>
      <div className={`${styles.skills_circle2}`}></div>
    </div>
  );
};
export default Skills;
