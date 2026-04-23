import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en", // язык по умолчанию
  fallbackLng: "en",

  resources: {
    ru: {
      translation: {
        hero: {
          title:
            "Разрабатываю <highlight>лендинги</highlight> и сайты, которые приводят заявки",
          subtitle:
            "Быстрый запуск, адаптив, интеграции через Firebase",
          cta: "Обсудить проект",
        },
      },
    },
    en: {
      translation: {
        hero: {
          title:
            "I build <hi1>landing pages</hi1> and <hi1>websites</hi1> that generate <hi2>leads</hi2>",
          subtitle:
            "Fast launch, responsive, Google Maps & Google Ads ready",
          cta: "Get a free consultation",
        },
      },
    },
  },

  interpolation: {
    escapeValue: false, // важно для JSX
  },
});

export default i18n;