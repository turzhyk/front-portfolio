import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: "pl",
    fallbackLng: "pl",

    // Translations are loaded from public/locales at runtime.
    backend: {
      // Cache-buster means typo fixes in JSON are picked up after reload
      // without rebuilding the app.
      loadPath: (lng: string, ns: string) =>
        `/locales/${lng}/${ns}.json?v=${Date.now()}`,
    },

    interpolation: {
      escapeValue: false, // важно для JSX
    },
  });

export default i18n;
