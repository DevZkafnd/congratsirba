import { config } from "../config";
const parseEnvStr = (val: unknown): string | null => {
    if (!val)
        return null;
    const str = String(val).trim();
    if (str === "" || str === "null" || str === "undefined")
        return null;
    return str;
};
const envName = parseEnvStr(import.meta.env.VITE_BIRTHDAY_NAME);
const envPhoto1 = parseEnvStr(import.meta.env.VITE_PHOTO_1);
const envPhoto2 = parseEnvStr(import.meta.env.VITE_PHOTO_2);
const envPhoto3 = parseEnvStr(import.meta.env.VITE_PHOTO_3);
const envPhoto4 = parseEnvStr(import.meta.env.VITE_PHOTO_4);
const envPhoto5 = parseEnvStr(import.meta.env.VITE_PHOTO_5);
const envBgm = parseEnvStr(import.meta.env.VITE_BGM_URL) || parseEnvStr(import.meta.env.VITE_SOUND_URL);
export const BIRTHDAY_NAME = envName ? envName : (config.birthdayName || "YOU");
export const PHOTO_ASSETS = {
    photo1: envPhoto1,
    photo2: envPhoto2,
    photo3: envPhoto3,
    photo4: envPhoto4,
    photo5: envPhoto5,
};
export const AUDIO_ASSETS = {
    bgmUrl: envBgm,
};
