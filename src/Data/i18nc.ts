import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "pl", // язык по умолчанию
  fallbackLng: "en",

  resources: {
    ru: {
      translation: {
        hero: {
          title:
            "Разрабатываю <highlight>лендинги</highlight> и сайты, которые приводят заявки",
          subtitle: "Быстрый запуск, адаптив, интеграции через Firebase",
          cta: "Обсудить проект",
        },
      },
    },
    en: {
      translation: {
        hero: {
          title:
            "I build <hi1>landing pages</hi1> and <hi1>websites</hi1> that generate <hi2>leads</hi2>",
          subtitle: "Fast launch, responsive, Google Maps & Google Ads ready",
          subtitle2: "VAT",
          cta: "Get a free consultation",
        },
        cases: {
          task: "Task",
          result: "Result",
          budget: "Budget",
          time: "Development time",
          case1: {
            title: "Page for Printing service",
            task: "Developed a landing site for a print shop featuring service catalog, individual service pages with pricing calculators, customer reviews, and a contact form for inquiries.",
            result:
              "Improved lead generation by making it easier for users to calculate prices and request services instantly, resulting in higher conversion rate and more qualified customer inquiries for both B2C and B2B clients.",
            time: "weeks",
          },
          case2: {
            title: "Driving School Landing Page",
            task: "Built a simple 2–3 page landing website for a driving school, including course information, pricing, and a contact form for quick enrollment.",
            result:
              "Increased student sign-ups by simplifying access to key information and enabling fast inquiries, leading to more consistent lead flow and reduced drop-off during registration.",
            time: "weeks",
          },
        },
      },
    },
    pl: {
      translation: {
        hero: {
          title:
            "Tworzę <hi1>landing page</hi1> i <hi1>strony internetowe</hi1>, które generują <hi2>zapytania od klientów</hi2>",
          subtitle:
            "Szybkie wdrożenie, responsywność, gotowość do Google Maps i Google Ads",
          subtitle2: "Możliwość rozliczenia B2B (faktura VAT)",
          cta: "Get a free consultation",
        },
        cases: {
          task: "Zadanie",
          result: "Rezultat",
          budget: "Budget",
          time: "Development time",
          case1: {
            title: "Page for Printing service",
            task: "Stworzenie landing page dla drukarni z katalogiem usług, osobnymi podstronami dla każdej usługi (z kalkulatorami cen), opiniami klientów oraz formularzem kontaktowym do składania zapytań.",
            result:
              "Zwiększenie liczby zapytań od klientów dzięki ułatwieniu szybkiego obliczania ceny i zamawiania usług, co przełożyło się na wyższy współczynnik konwersji oraz bardziej wartościowe zapytania zarówno od klientów indywidualnych (B2C), jak i firm (B2B).",
            time: "weeks",
          },
          case2: {
            title: "Landing page dla szkoły jazdy",
            task: "Stworzenie prostej strony typu landing (2–3 podstrony) dla szkoły jazdy, zawierającej informacje o kursach, cennik oraz formularz kontaktowy do szybkiego zapisu.",
            result:
              "Zwiększenie liczby zapisów na kursy dzięki łatwemu dostępowi do najważniejszych informacji i możliwości szybkiego kontaktu, co przełożyło się na stabilniejszy napływ zapytań oraz mniejszą liczbę porzuconych zgłoszeń.",
            time: "weeks",
          },
        },
        process: {
          step1: {
            title: "Odkrycie i strategia",
            subtitle: "Poznanie potrzeb i celów biznesu",
            desc: "Na tym etapie poznaję Twój biznes i potrzeby. Opowiadasz mi, jaki efekt chcesz osiągnąć, jaki typ strony Cię interesuje oraz czy masz już gotowe materiały (teksty, zdjęcia, logo) lub wstępną wizję. Zadaję konkretne pytania, żeby dobrze zrozumieć Twoich klientów i cele. Dzięki temu mogę zaproponować rozwiązanie dopasowane do Twojej branży i przygotować trafną koncepcję w kolejnym kroku.",
          },
          step2: {
            title: "Projekt i feedback",
            subtitle: "Tworzenie koncepcji i zbieranie opinii",
            desc: "Na tym etapie przygotowuję projekt strony na podstawie wcześniej ustalonej strategii. Otrzymujesz wstępną koncepcję (układ, styl, kluczowe sekcje), którą możesz spokojnie przejrzeć i ocenić. Zbieram Twój feedback i wprowadzam poprawki, aby dopracować wygląd i przekaz tak, żeby najlepiej trafiał do Twoich klientów i wspierał sprzedaż.",
          },
          step3: {
            title: "Czysty kod + SEO",
            subtitle: "Szybka, poprawna i widoczna strona",
            desc: "Na tym etapie zamieniam projekt w działającą stronę. Dbam o czysty, uporządkowany kod, szybkość działania i pełną responsywność na wszystkich urządzeniach. Strona jest od razu przygotowana pod SEO (widoczność w Google) oraz gotowa do integracji z narzędziami takimi jak Google Analytics czy Google Ads.",
          },
          step4: {
            title: "Gotowe do sprzedaży",
            subtitle: "Strona uruchomiona i gotowa na klientów",
            desc: "Na tym etapie publikuję stronę i upewniam się, że wszystko działa bez zarzutu. Formularze, integracje i podstawowa analityka są skonfigurowane, dzięki czemu możesz od razu zacząć pozyskiwać klientów. W razie potrzeby pomagam też z pierwszym uruchomieniem kampanii lub dalszym rozwojem strony.",
          },
        },
        about:{
          desc:"Od ponad 2 lat zajmuję się tworzeniem stron internetowych dla biznesów lokalnych. Zrealizowałem już kilka projektów, które realnie wspierają sprzedaż i pomagają klientom wyróżnić się w internecie.",
          location:{
            title:"Localizacja",
            desc:"Działam w Polsce: Doskonale rozumiem specyfikę lokalnego rynku i potrzeby polskich klientów."
          },
          way:{
            title:"Podejście",
            desc:"Koncentracja na wynikach: Tworzę narzędzia, które sprzedają и generują leady, a nie tylko „ładne obrazki”."
          }
          ,tech:{
            title:'Technologie',
            desc:"Szybkość i wydajność: Korzystam z najnowocześniejszych rozwiązań, aby Twoja strona była błyskawiczna i responsywna na smartfonach."
          },
          garanty:{
            title:"Gwarancja",
            desc:"Pełne wsparcie: Zapewniam opiekę techniczną po wdrożeniu oraz szkolenie z obsługi strony — nie zostawiam Cię samego po projekcie."
          }
        }
      },
    },
  },

  interpolation: {
    escapeValue: false, // важно для JSX
  },
});

export default i18n;
