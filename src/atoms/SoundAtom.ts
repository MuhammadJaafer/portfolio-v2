import { atom } from "recoil";

interface SoundState {
  SoundActive: boolean;
}
const defaultSoundState: SoundState = {
  SoundActive: true,
};

export const soundState = atom({
  key: "soundState",
  default: defaultSoundState,
});
