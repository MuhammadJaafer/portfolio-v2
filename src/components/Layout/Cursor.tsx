"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/Layout/MainLayout.module.scss";
type CursorProps = {};

const Cursor: React.FC<CursorProps> = () => {
  const [isClicked, setIsClicked] = useState(false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const cursorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!cursorRef.current) return;
    cursorRef.current.style.opacity = "1";
  }, [cursorRef]);
  useEffect(() => {
    //inner circle get bigger while mouse down
    const handleMouseDown = () => {
      setIsClicked(true);
    };

    const handleMouseUp = () => {
      setIsClicked(false);
    };

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // custom cursor movement
    const handleMouseMove = (event: MouseEvent) => {
      if (!cursorRef.current) return;
      cursorX.set(event.clientX - cursorRef.current.clientWidth / 2);
      cursorY.set(event.clientY - cursorRef.current.clientHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className={`${styles.cursor}`}
      ref={cursorRef}
      style={{
        x: cursorX,
        y: cursorY,
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
