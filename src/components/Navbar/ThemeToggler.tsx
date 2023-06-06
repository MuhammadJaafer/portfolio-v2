"use client";
import { soundState } from "@/atoms/SoundAtom";
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";
import React from "react";
import { useRecoilState } from "recoil";
import useSound from "use-sound";

import { getAnalytics, logEvent } from "firebase/analytics";
import styles from "../../styles/components/Navbar.module.scss";
type ThemeTogglerProps = {};

const ThemeToggler: React.FC<ThemeTogglerProps> = () => {
  const { theme, setTheme } = useTheme();
  const [soundStateValue, setSoundState] = useRecoilState(soundState);
  const [PlaySoundOn] = useSound("/sounds/sound-on.mp3", { volume: 0.2 });
  const [PlaySoundOff] = useSound("/sounds/sound-off.wav", { volume: 0.2 });
  const [PlayThemeSwitch] = useSound("/sounds/light-switch.mp3", {
    volume: 0.2,
  });

  return (
    <div className={`${styles.navbar_right_list_item_toggler}`}>
      <div
        className={`${styles.navbar_right_list_item_toggler_theme}`}
        onClick={() => {
          const newTheme = theme === "dark" ? "light" : "dark";
          if (newTheme === "light") {
            logEvent(getAnalytics(), `Switch To Light Theme`);
          } else {
            logEvent(getAnalytics(), `Switch To Dark Theme`);
          }
          setTheme(newTheme);
          if (soundStateValue.SoundActive) {
            PlayThemeSwitch();
          }
        }}
      >
        {theme !== "light" && <Icon icon={"ion:moon"} />}
        {theme === "light" && <Icon icon={"ph:sun-fill"} />}
      </div>
      <div
        onClick={() => {
          soundStateValue.SoundActive ? PlaySoundOff() : PlaySoundOn();
          if (soundStateValue.SoundActive) {
            logEvent(getAnalytics(), `Turn Off Sounds`);
          } else {
            logEvent(getAnalytics(), `Turn On Sounds`);
          }
          setSoundState((prev) => ({
            ...prev,
            SoundActive: !prev.SoundActive,
          }));
        }}
        className={`${styles.navbar_right_list_item_toggler_sound}`}
      >
        {soundStateValue.SoundActive && (
          <Icon icon={"fluent:speaker-2-16-filled"} />
        )}
        {!soundStateValue.SoundActive && (
          <Icon icon={"fluent:speaker-0-16-filled"} />
        )}
      </div>
    </div>
  );
};
export default ThemeToggler;
