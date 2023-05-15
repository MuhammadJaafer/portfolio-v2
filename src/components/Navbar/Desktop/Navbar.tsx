"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect } from "react";
import styles from "../../../styles/components/Navbar.module.scss";
import Right from "./Right";
const circleVariants = {
  start: {
    width: 0,
    height: 0,
    display: "block",
  },
  end: {
    width: [0, 20, 20, 0, 0],
    height: [0, 20, 20, 0, 0],

    transition: {
      duration: 2.5,
      times: [0, 0.2, 0.6, 0.6, 1],
      ease: "linear",
    },
  },
};
const lineVariants = {
  start: {
    width: 0,
    height: "0%",
    opacity: 1,
  },
  end: {
    width: ["0%", "0%", "100%", "100%", "0%"],
    height: ["0%", "0%", "0%", "105%", "0%"],
    opacity: [1, 1, 1, 0, 0],
    transition: {
      duration: 2.5,
      times: [0, 0.2, 0.6, 0.999, 1],
      ease: "linear",
    },
  },
};
const clipVariants = {
  start: {
    clipPath: "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
  },
  end: {
    clipPath: [
      "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
      "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
      "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
      "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    ],

    transition: {
      duration: 2.5,
      times: [0, 0.2, 0.65, 0.999, 1],
      ease: "linear",
    },
  },
};

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <>
      <nav className={`${styles.navbar}`}>
        <motion.div
          variants={circleVariants}
          initial="start"
          animate="end"
          className={`${styles.circle}`}
        ></motion.div>
        <motion.div
          variants={lineVariants}
          initial="start"
          animate="end"
          className={`${styles.line}`}
        ></motion.div>
        <motion.div
          variants={clipVariants}
          initial="start"
          animate="end"
          className={`${styles.navbar_container}`}
        >
          <div className={`${styles.navbar_container_left}`}>
            <h1 className={`${styles.navbar_container_left_logo}`}>
              Muhammad Jaafar
            </h1>
          </div>
          <div className={`${styles.navbar_container_right}`}>
            <Right />
          </div>
        </motion.div>
      </nav>
    </>
  );
};
export default Navbar;
