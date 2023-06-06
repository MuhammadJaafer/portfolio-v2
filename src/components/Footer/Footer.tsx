"use client";
import { soundState } from "@/atoms/SoundAtom";
import { Icon } from "@iconify/react";
import { getAnalytics, logEvent } from "firebase/analytics";
import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-scroll";
import { useRecoilValue } from "recoil";
import useSound from "use-sound";
import styles from "../../styles/components/Footer.module.scss";
type FooterProps = {};
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
const Footer: React.FC<FooterProps> = () => {
  const { SoundActive } = useRecoilValue(soundState);
  const [playClick] = useSound("/sounds/box-click.wav", { volume: 0.5 });
  return (
    <div className={`${styles.footer}`}>
      <div className={`${styles.footer_scroll}`}>
        <Link
          onClick={() => {
            if (SoundActive) {
              playClick();
            }
            logEvent(getAnalytics(), `Scroll Footer`);
          }}
          to="hero"
          href="hero"
          aria-label="hero"
          smooth={true}
          duration={600}
          offset={-100}
        >
          <motion.div
            variants={arrowVariants}
            initial="start"
            animate="end"
            className={`${styles.footer_scroll_arrow}`}
          >
            <Icon
              className={`${styles.footer_scroll_arrow_svg}`}
              icon={"ph:caret-double-up-thin"}
            />
          </motion.div>
        </Link>
      </div>
      <div className={`${styles.footer_textContainer}`}>
        <Icon icon={"uiw:copyright"} />
        <p>2023-present Muhammad Jaafar. All Rights Reserved</p>
      </div>
    </div>
  );
};
export default Footer;
