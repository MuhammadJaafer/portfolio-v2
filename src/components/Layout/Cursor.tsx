"use client";
import { motion, useMotionValue } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/Layout/MainLayout.module.scss";
type CursorProps = {};

const Cursor: React.FC<CursorProps> = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [show, setShow] = useState(false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    //inner circle get bigger while mouse down
    const handleMouseDown = () => {
      setIsClicked(true);
    };

    const handleMouseUp = () => {
      setIsClicked(false);
    };
    //hide the cursor when the mouse out of the screen
    const handleMouseEnter = () => {
      setShow(true);
    };
    const handleMouseLeave = () => {
      setShow(false);
    };
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    // custom cursor movement
    const handleMouseMove = (event: MouseEvent) => {
      setShow(true);
      if (!cursorRef.current) return;
      cursorX.set(event.clientX - cursorRef.current.clientWidth / 2);
      cursorY.set(event.clientY - cursorRef.current.clientHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    //hide on mobile
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    if (windowWidth! <= 800) {
      setShow(false);
    } else {
      setShow(true);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, [cursorX, cursorY, windowWidth]);

  return (
    <motion.div
      className={`${styles.cursor}`}
      ref={cursorRef}
      style={{
        x: cursorX,
        y: cursorY,
        opacity: show ? "1" : "0",
      }}
    >
      <motion.div
        style={{
          width: isClicked ? "2.5rem" : "0.7rem",
          height: isClicked ? "2.5rem" : "0.7rem",

          transition: "width 0.2s, height 0.2s",
        }}
        className={`${styles.cursor_inner}`}
      ></motion.div>
    </motion.div>
  );
};
export default Cursor;
