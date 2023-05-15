import React from "react";
import styles from "../../../styles/components/Navbar.module.scss";
import ThemeToggler from "./ThemeToggler";

type RightProps = {};

const Right: React.FC<RightProps> = () => {
  return (
    <ul className={`${styles.navbar_right_list}`}>
      <li className={`${styles.navbar_right_list_item}`}>About</li>
      <li className={`${styles.navbar_right_list_item}`}>Skills</li>
      <li className={`${styles.navbar_right_list_item}`}>Projects</li>
      <li className={`${styles.navbar_right_list_item}`}>Contact</li>
      <li className={`${styles.navbar_right_list_item}`}>Resume</li>
      <li className={`${styles.navbar_right_list_item}`}>
        <ThemeToggler />
      </li>
    </ul>
  );
};
export default Right;
