"use client";
import { soundState } from "@/atoms/SoundAtom";
import { Variants, motion } from "framer-motion";
import React from "react";
import { useRecoilValue } from "recoil";
import useSound from "use-sound";
import styles from "../../styles/components/Skills.module.scss";

type SkillProps = { title: string };
const childrenVariants: Variants = {
  initial: {
    opacity: 0,
    x: "-50%",
  },
  animate: {
    opacity: 1,
    x: "0%",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};
const Skill: React.FC<SkillProps> = ({ title }) => {
  const { SoundActive } = useRecoilValue(soundState);
  const [playPop] = useSound("/sounds/pop.mp3", { volume: 0.2 });
  return (
    <motion.div
      variants={childrenVariants}
      whileHover={{
        scale: 1.08,
      }}
      onHoverStart={() => {
        if (SoundActive) {
          playPop();
        }
      }}
      className={`${styles.skills_container_category_skillsContainer_skill}`}
    >
      {title}
    </motion.div>
  );
};
export default Skill;
