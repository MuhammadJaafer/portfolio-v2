"use client";
import { navState } from "@/atoms/NavAtom";
import { soundState } from "@/atoms/SoundAtom";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import useSound from "use-sound";
import styles from "../../styles/components/Navbar.module.scss";
import Right from "./Right";
const animationDuration = 1.5;
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
      duration: animationDuration,
      times: [0, 0.2, 0.6, 0.6, 1],
      ease: "linear",
    },
  },
};
const lineVariants = {
  start: {
    width: 0,
    height: "0%",
    opacity: 1.5,
  },
  end: {
    width: ["0%", "0%", "100%", "100%", "0%"],
    height: ["0%", "0%", "0%", "105%", "0%"],
    opacity: [1, 1, 1, 0, 0],
    transition: {
      duration: animationDuration,
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
      duration: animationDuration,
      times: [0, 0.2, 0.65, 0.999, 1],
      ease: "linear",
    },
  },
};

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const { SoundActive } = useRecoilValue(soundState);
  const [playClick] = useSound("/sounds/box-click.wav", { volume: 0.5 });
  const ContainerRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState(0);
  const [mobile, setMobile] = useState(false);
  // const [toggleNavbar, setToggleNavbar] = useState(false);
  const [navStateValue, setNavState] = useRecoilState(navState);
  useEffect(() => {
    //initial check
    if (window.innerWidth <= 800) {
      setMobile(true);
    } else {
      setMobile(false);
    }
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth <= 800) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [mobile]);
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
          ref={ContainerRef}
          variants={clipVariants}
          initial="start"
          animate="end"
          className={`${styles.clip}`}
          onAnimationComplete={() => {
            if (!ContainerRef.current) return;
            const parent = ContainerRef.current.parentNode;
            while (ContainerRef.current.firstChild) {
              parent?.insertBefore(
                ContainerRef.current.firstChild,
                ContainerRef.current
              );
            }
            ContainerRef.current.remove();
          }}
        >
          <div className={`${styles.navbar_left}`}>
            <h1
              className={`${styles.navbar_left_logo} ${
                navStateValue.open ? styles.navbar_left_logo_active : ""
              }`}
            >
              Muhammad Jaafar
            </h1>
          </div>
          <div
            className={`${styles.navbar_right} ${
              navStateValue.open ? styles.navbar_right_active : ""
            }`}
          >
            <Right mobile={mobile} />
          </div>
          <div
            onClick={() => {
              if (SoundActive) {
                playClick();
              }
              setNavState((prev) => ({ ...prev, open: !prev.open }));
            }}
            className={`${styles.navbar_toggle} ${
              navStateValue.open ? styles.navbar_toggle_active : ""
            }`}
          >
            <div
              className={`${styles.navbar_toggle_up} ${
                navStateValue.open ? styles.navbar_toggle_active_up : ""
              }`}
            ></div>
            <div
              className={`${styles.navbar_toggle_down} ${
                navStateValue.open ? styles.navbar_toggle_active_down : ""
              }`}
            ></div>
          </div>
        </motion.div>
      </nav>
    </>
  );
};
export default Navbar;
