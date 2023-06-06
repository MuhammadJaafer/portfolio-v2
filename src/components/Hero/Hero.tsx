"use client";
import { soundState } from "@/atoms/SoundAtom";
import { heroData } from "@/db/main";
import { Icon } from "@iconify/react";
import { getAnalytics, logEvent } from "firebase/analytics";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Link } from "react-scroll";
import { useRecoilValue } from "recoil";
import useSound from "use-sound";
import styles from "../../styles/components/Hero.module.scss";
import UI from "../../styles/components/UI.module.scss";
type HeroProps = {};
const aniTime = 2;
const delayTime = 1.5;
const times = [0, 0.5, 0.55, 1, 1];
const containerVariants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
  },
};
const circleVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: [0, 1, 1, 1, 1],
    transition: {
      duration: aniTime,
      times: times,
      delay: delayTime,
    },
  },
};
const imgContainerVariants = {
  hidden: {
    rotate: 0,
    opacity: 0,
  },
  visible: {
    rotate: [-10, -10, -10, -10, -10],
    opacity: [0, 0, 1, 1, 1],
    borderWidth: [0, 1, 3, 3, 3],
    x: ["0rem", "0rem", "0rem", "-2rem", "-2rem"],
    y: ["0rem", "0rem", "0rem", "-1.5rem", "-1.5rem"],
    transition: {
      duration: aniTime,
      times: times,
      delay: delayTime,
    },
  },
};
const imageVariants = {
  hidden: {
    rotate: 0,
    opacity: 0,
    y: "100%",
  },
  visible: {
    rotate: [0, 0, 0, 10, 10],
    opacity: [0, 0, 0, 1, 1],
    y: ["100%", "100%", "100%", "5%", "5%"],
    transition: {
      duration: aniTime,
      times: times,
      delay: delayTime,
      ease: "easeInOut",
    },
  },
};
const backgroundVariants = {
  hidden: {
    opacity: 0,
    rotate: 0,
  },
  visible: {
    opacity: [0, 0, 0, 1, 1],
    rotate: [-10, -10, -10, -10, -10],

    transition: {
      duration: aniTime,
      times: times,
      delay: delayTime,
    },
  },
};
///text variants
const mainContainerVariants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: delayTime + 0.5,
    },
  },
};
const textContainerVariants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};
const textChildrenVariants = {
  hidden: {
    opacity: 0,
    x: -10,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const arrowVariants = {
  start: {
    y: 0,
  },
  end: {
    y: [-5, 5, -5],
    transition: {
      y: {
        repeat: Infinity,
        duration: 2,
        ease: "easeInOut",
      },
    },
  },
};
const scrollVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: delayTime,
    },
  },
};
const Hero: React.FC<HeroProps> = () => {
  const { SoundActive } = useRecoilValue(soundState);
  const [playClick] = useSound("/sounds/box-click.wav", { volume: 0.5 });
  return (
    <div className={`${styles.hero}`} id="hero">
      <div className={`${styles.hero_left}`}>
        <motion.div
          variants={mainContainerVariants}
          initial="hidden"
          animate="visible"
          className={`${styles.hero_left_container}`}
        >
          <div className={`${styles.hero_left_container_text}`}>
            <motion.span
              variants={textChildrenVariants}
              className={`${UI.lightText}`}
            >
              {heroData.hi}
            </motion.span>
            <motion.span
              variants={textChildrenVariants}
              className={`${UI.normalText}`}
            >
              {heroData.name}
            </motion.span>
            <motion.div
              variants={textChildrenVariants}
              className={`${styles.hero_left_container_text_expertise}`}
            >
              <span className={`${UI.importantText}`}>
                {heroData.expertise[0]}
              </span>
              <div
                className={`${styles.hero_left_container_text_expertise_circle}`}
              ></div>
              <span className={`${UI.importantText}`}>
                {heroData.expertise[1]}
              </span>
            </motion.div>
            <motion.span
              variants={textChildrenVariants}
              className={`${UI.normalText}`}
            >
              {heroData.about}
            </motion.span>
          </div>
          <motion.a
            href="Docs/resume.pdf"
            target="_blank"
            variants={textChildrenVariants}
            whileHover={{
              boxShadow: "0.7rem 0.7rem 0px var(--secondary)",
              transform: "translate(-0.7rem, -0.7rem)",
            }}
            className={`${styles.hero_left_container_btn}`}
            onClick={() => {
              if (SoundActive) {
                playClick();
              }
              logEvent(getAnalytics(), `Resume hero`);
            }}
          >
            {heroData.btnText}
          </motion.a>
        </motion.div>
        <motion.div
          variants={circleVariants}
          initial="hidden"
          animate="visible"
          className={`${styles.hero_left_circle}`}
        ></motion.div>
      </div>
      <div className={`${styles.hero_right}`}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={`${styles.hero_right_container}`}
        >
          <motion.div
            variants={circleVariants}
            className={`${styles.hero_right_container_circle}`}
          ></motion.div>
          <motion.div
            variants={imgContainerVariants}
            className={`${styles.hero_right_container_imgContainer}`}
          >
            {/* <motion.img
              variants={imageVariants}
              className={`${styles.hero_right_container_imgContainer_image}`}
              src={heroData.img.src}
              alt={"Muhammad's image"}
            /> */}
            <Image
              className={`${styles.hero_right_container_imgContainer_image}`}
              src={heroData.img}
              alt={"Muhammad's image"}
              priority
            />
          </motion.div>
          <motion.div
            variants={backgroundVariants}
            className={`${styles.hero_right_container_background}`}
          ></motion.div>
        </motion.div>
      </div>
      <motion.div
        variants={scrollVariants}
        initial="hidden"
        animate="visible"
        className={`${styles.hero_scroll}`}
      >
        <Link
          onClick={() => {
            if (SoundActive) {
              playClick();
            }
            logEvent(getAnalytics(), `Scroll Hero`);
          }}
          to="about"
          smooth={true}
          duration={600}
          offset={10}
          href="about"
          aria-label="about"
        >
          <Icon
            className={`${styles.hero_scroll_mouse}`}
            icon={"iconamoon:mouse-thin"}
          />
          <motion.div
            variants={arrowVariants}
            initial="start"
            animate="end"
            className={`${styles.hero_scroll_arrow}`}
          >
            <Icon
              className={`${styles.hero_scroll_arrow_svg}`}
              icon={"ph:caret-double-down-thin"}
            />
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
};
export default Hero;
