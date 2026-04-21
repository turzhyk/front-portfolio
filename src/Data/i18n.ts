export type Lang = "ru" | "en";

const STORAGE_KEY = "lang";

export const getLang = (): Lang => {
  return (localStorage.getItem(STORAGE_KEY) as Lang) || "ru";
};

export const setLang = (lang: Lang) => {
  localStorage.setItem(STORAGE_KEY, lang);
  window.location.reload(); // просто и эффективно
};

export const t = (ru: string, en: string) => {
  return getLang() === "ru" ? ru : en;
};