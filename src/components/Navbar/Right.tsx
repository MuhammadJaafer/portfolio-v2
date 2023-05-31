"use client";
import { Icon } from "@iconify/react";
import { Variants, motion } from "framer-motion";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import styles from "../../styles/components/Navbar.module.scss";
import ThemeToggler from "./ThemeToggler";

type RightProps = {
  mobile: boolean;
  toggle: boolean;
};
const listVariants: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  initial: {
    opacity: 0,
    x: "-100%",
  },
  animate: {
    opacity: 1,
    x: "0%",
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
    },
  },
};
const Right: React.FC<RightProps> = ({ mobile, toggle }) => {
  //stop scrolling
  useEffect(() => {
    if (toggle) {
      window.scrollTo(0, 0);
      document.body.style.overflowY = "hidden";
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "visible";
      document.documentElement.style.overflowY = "visible";
    }
  }, [toggle]);
  return (
    <>
      <motion.ul
        variants={listVariants}
        animate={toggle ? "animate" : "initial"}
        className={`${styles.navbar_right_list}`}
      >
        <motion.li
          variants={itemVariants}
          className={`${styles.navbar_right_list_item}`}
        >
          About
        </motion.li>
        <motion.li
          variants={itemVariants}
          className={`${styles.navbar_right_list_item}`}
        >
          Skills
        </motion.li>
        <motion.li
          variants={itemVariants}
          className={`${styles.navbar_right_list_item}`}
        >
          Projects
        </motion.li>
        <motion.li
          variants={itemVariants}
          className={`${styles.navbar_right_list_item}`}
        >
          Contact
        </motion.li>
        <motion.li
          variants={itemVariants}
          className={`${styles.navbar_right_list_item}`}
        >
          Resume
        </motion.li>
        <motion.li
          variants={itemVariants}
          className={`${styles.navbar_right_list_item}`}
        >
          <ThemeToggler />
        </motion.li>
      </motion.ul>
      {mobile && (
        <div className={`${styles.navbar_right_links}`}>
          <div className={`${styles.navbar_right_links_line}`}></div>
          <div className={`${styles.navbar_right_links_container}`}>
            <a
              className={`${styles.navbar_right_links_container_link}`}
              href=""
            >
              <Icon icon={"mdi:github"} />
            </a>
            <a
              className={`${styles.navbar_right_links_container_link}`}
              href=""
            >
              <Icon icon={"mdi:linkedin"} />
            </a>
            <a
              className={`${styles.navbar_right_links_container_link}`}
              href=""
            >
              <Icon icon={"mi:email"} />
            </a>
          </div>
          <div className={`${styles.navbar_right_links_line}`}></div>
        </div>
      )}
    </>
  );
};
export default Right;
