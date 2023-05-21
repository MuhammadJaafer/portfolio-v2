"use client";
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";
import React, { useEffect } from "react";
import styles from "../../styles/components/Navbar.module.scss";
type ThemeTogglerProps = {};

const ThemeToggler: React.FC<ThemeTogglerProps> = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className={`${styles.navbar_right_list_item_toggler}`}>
      <div
        className={`${styles.navbar_right_list_item_toggler_theme}`}
        onClick={() => {
          const newTheme = theme === "dark" ? "light" : "dark";
          setTheme(newTheme);
        }}
      >
        {theme !== "light" && <Icon icon={"ion:moon"} />}
        {theme === "light" && <Icon icon={"ph:sun-fill"} />}
      </div>
      <div className={`${styles.navbar_right_list_item_toggler_sound}`}>
        <Icon icon={"fluent:speaker-2-16-filled"} />
      </div>
    </div>
  );
};
export default ThemeToggler;
