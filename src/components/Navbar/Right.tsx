"use client";
import { navState } from "@/atoms/NavAtom";
import { soundState } from "@/atoms/SoundAtom";
import { Icon } from "@iconify/react";
import { Variants, motion } from "framer-motion";
import React, { useEffect } from "react";
import { Link } from "react-scroll";
import { useRecoilState, useRecoilValue } from "recoil";
import useSound from "use-sound";
import styles from "../../styles/components/Navbar.module.scss";
import ThemeToggler from "./ThemeToggler";

type RightProps = {
  mobile: boolean;
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
const Right: React.FC<RightProps> = ({ mobile }) => {
  const { SoundActive } = useRecoilValue(soundState);
  const [playClick] = useSound("/sounds/box-click.wav", { volume: 0.5 });
  const [navStateValue, setNavState] = useRecoilState(navState);

  //stop scrolling
  useEffect(() => {
    const stopScroll = () => {
      if (mobile && navStateValue.open) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener("scroll", stopScroll);

    return () => {
      window.removeEventListener("scroll", stopScroll);
    };
  }, [navStateValue.open, mobile]);
  return (
    <>
      <motion.ul
        variants={listVariants}
        animate={!navStateValue.open && mobile ? "initial" : "animate"}
        className={`${styles.navbar_right_list}`}
      >
        <motion.li
          variants={itemVariants}
          className={`${styles.navbar_right_list_item}`}
        >
          <Link
            onClick={() => {
              if (SoundActive) {
                playClick();
              }
              setNavState((prev) => ({ ...prev, open: false }));
            }}
            to="about"
            smooth={true}
            duration={600}
            offset={50}
          >
            About
          </Link>
        </motion.li>
        <motion.li
          variants={itemVariants}
          className={`${styles.navbar_right_list_item}`}
        >
          <Link
            onClick={() => {
              if (SoundActive) {
                playClick();
              }
              setNavState((prev) => ({ ...prev, open: false }));
            }}
            to="skills"
            smooth={true}
            duration={600}
            offset={50}
          >
            Skills
          </Link>
        </motion.li>
        <motion.li
          variants={itemVariants}
          className={`${styles.navbar_right_list_item}`}
        >
          <Link
            onClick={() => {
              if (SoundActive) {
                playClick();
              }
              setNavState((prev) => ({ ...prev, open: false }));
            }}
            to="projects"
            smooth={true}
            duration={600}
            offset={50}
          >
            Projects
          </Link>
        </motion.li>
        <motion.li
          variants={itemVariants}
          className={`${styles.navbar_right_list_item}`}
        >
          <Link
            onClick={() => {
              if (SoundActive) {
                playClick();
              }
              setNavState((prev) => ({ ...prev, open: false }));
            }}
            to="contact"
            smooth={true}
            duration={600}
            offset={50}
          >
            Contact
          </Link>
        </motion.li>
        <motion.li
          variants={itemVariants}
          className={`${styles.navbar_right_list_item}`}
        >
          <Link
            onClick={() => {
              if (SoundActive) {
                playClick();
              }
              setNavState((prev) => ({ ...prev, open: false }));
            }}
            to="link"
            smooth={true}
            duration={600}
            offset={50}
          >
            Resume
          </Link>
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
              href="https://github.com/MuhammadJaafer"
              target="_blank"
              aria-label="github"
              onClick={() => {
                if (SoundActive) {
                  playClick();
                }
              }}
            >
              <Icon icon={"mdi:github"} />
            </a>
            <a
              className={`${styles.navbar_right_links_container_link}`}
              href="https://www.linkedin.com/in/muhammad-jaafar-a099801a9/"
              target="_blank"
              aria-label="linkedin"
              onClick={() => {
                if (SoundActive) {
                  playClick();
                }
              }}
            >
              <Icon icon={"mdi:linkedin"} />
            </a>
            <a
              className={`${styles.navbar_right_links_container_link}`}
              href="mailto:muhammadaldawahreh@gmail.com"
              target="_blank"
              aria-label="email"
              onClick={() => {
                if (SoundActive) {
                  playClick();
                }
              }}
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
