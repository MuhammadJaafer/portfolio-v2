import { Icon } from "@iconify/react";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import styles from "../../styles/components/Navbar.module.scss";
import ThemeToggler from "./ThemeToggler";

type RightProps = {
  mobile: boolean;
  toggle: boolean;
};

const Right: React.FC<RightProps> = ({ mobile, toggle }) => {
  useEffect(() => {
    if (toggle) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "visible";
    }
  }, [toggle]);
  return (
    <>
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
