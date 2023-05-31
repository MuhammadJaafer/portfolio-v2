import { atom } from "recoil";

interface SoundState {
  open: boolean;
}
const defaultNavState: SoundState = {
  open: false,
};

export const navState = atom({
  key: "navState",
  default: defaultNavState,
});
