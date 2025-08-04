import sound from "../assets/sound";

const playSound = (src) => new Audio(src).play();

export const playWinSound = () => playSound(sound.win);
export const playBombSound = () => playSound(sound.bomb);
export const playButtonSound = () => playSound(sound.buttons);
export const playCashOutSound = () => playSound(sound.cashOut);
export const playDiamond1Sound = () => playSound(sound.diamond1);
export const playDiamond2Sound = () => playSound(sound.diamond2);
export const playDiamond3Sound = () => playSound(sound.diamond3);
export const playDifficultySound = () => playSound(sound.difficulty);
export const playTileClickSound = () => playSound(sound.tile_click);
