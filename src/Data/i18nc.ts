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
        nav:"Navigation",
        header: {
          contact: "Contact",
        },
        hero: {
          title:
            "I build <hi1>landing pages</hi1> and <hi1>websites</hi1> that generate <hi2>customer inquiries</hi2>",
          subtitle:
            "Fast delivery, responsive design, ready for Google Maps and Google Ads",
          subtitle2: "B2B invoicing available (VAT invoice)",
          cta: "Book a free consultation",
        },
        cases: {
          title: "Selected projects",
          task: "Task",
          result: "Result",
          budget: "Budget",
          time: "Development time",
          case1: {
            title: "Page for Printing service",
            task: "Creation of a landing page for a printing company with a service catalog, separate pages for each service (with price calculators), customer reviews, and a contact form for inquiries.",
            result:
              "Increased number of customer inquiries by making it easy to quickly calculate prices and order services, which led to a higher conversion rate and more valuable inquiries from both individual (B2C) and business (B2B) clients.",
            time: "weeks",
          },
          case2: {
            title: "Landing page for a driving school",
            task: "Creation of a simple landing page (2–3 subpages) for a driving school, including course information, pricing, and a contact form for quick sign-ups.",
            result:
              "Increased number of course registrations thanks to easy access to key information and quick contact options, resulting in a more stable flow of inquiries and fewer abandoned applications.",
            time: "weeks",
          },
        },
        process: {
          title: "Work process",
          step1: {
            title: "Discovery & strategy",
            subtitle: "Understanding your business needs and goals",
            desc: "At this stage, I learn about your business and needs. You tell me what result you want to achieve, what type of website you need, and whether you already have materials (texts, photos, logo) or an initial vision. I ask specific questions to understand your clients and goals. This allows me to propose a solution tailored to your industry and prepare an effective concept for the next step.",
          },
          step2: {
            title: "Design & feedback",
            subtitle: "Creating the concept and gathering feedback",
            desc: "At this stage, I prepare the website design based on the agreed strategy. You receive an initial concept (layout, style, key sections), which you can review at your own pace. I collect your feedback and make revisions to refine the look and messaging so it best resonates with your customers and supports sales.",
          },
          step3: {
            title: "Clean code + SEO",
            subtitle: "Fast, reliable and visible website",
            desc: "At this stage, I turn the design into a working website. I ensure clean, structured code, fast performance, and full responsiveness across all devices. The website is prepared for SEO (visibility in Google) and ready for integration with tools like Google Analytics and Google Ads.",
          },
          step4: {
            title: "Ready to sell",
            subtitle: "Website launched and ready for clients",
            desc: "At this stage, I publish the website and make sure everything works perfectly. Forms, integrations, and basic analytics are set up, so you can start getting clients right away. If needed, I also help with the initial campaign launch or further website development.",
          },
        },
        about: {
          title: "About me",
          desc: "For over 2 years, I have been creating websites for local businesses. I have completed several projects that actively support sales and help clients stand out online.",
          location: {
            title: "Location",
            desc: "I operate in Poland and understand the specifics of the local market and the needs of Polish customers.",
          },
          way: {
            title: "Approach",
            desc: "Results-focused: I create tools that sell and generate leads, not just “nice-looking designs”.",
          },
          tech: {
            title: "Technology",
            desc: "Speed and performance: I use modern solutions to make your website fast and fully responsive on smartphones.",
          },
          garanty: {
            title: "Guarantee",
            desc: "Full support: I provide technical support after launch and training on how to use the website — you’re not left alone after the project.",
          },
        },
        tech: {
          title: "Technical advantage",

          subtitle: "Your website will be faster than 95% of your competitors",
          warning:
            "ATTENTION! These numbers are based on real performance metrics from ",
          case1: {
            title: "Performance",
            desc: "The website loads instantly, so users don’t wait and don’t leave for competitors.",
          },
          case2: {
            title: "Accessibility",
            desc: "The website is easy to use for everyone, which increases trust and customer loyalty.",
          },
          case3: {
            title: "Best practices",
            desc: "The code is modern, secure, and written according to standards — without unnecessary errors.",
          },
          case4: {
            title: "SEO",
            desc: "Google favors fast websites, so your site ranks higher in search results.",
          },
          after:
            "Speed means money. Every second of loading time can cost you up to 20% of potential customers",
        },
        contact: {
          title: "Request a free quote",
          desc: "Want to get started? Leave a message and I’ll get back to you!",
          landing: "Landing Page",
          page: "Business Website",
          other: "Other",
          name: "Your name",
          phone: "Your phone",
          mail: "Your email",
          message: "Message",
          button: "Request a free quote",
        },
      },
    },
    pl: {
      translation: {
        nav:"Navigacja",
        header: {
          contact: "Skontaktuj",
        },
        hero: {
          title:
            "Tworzę <hi1>landing page</hi1> i <hi1>strony internetowe</hi1>, które generują <hi2>zapytania od klientów</hi2>",
          subtitle:
            "Szybkie wdrożenie, responsywność, gotowość do Google Maps i Google Ads",
          subtitle2: "Możliwość rozliczenia B2B (faktura VAT)",
          cta: "Umów się na bezpłatną konsultację",
        },
        cases: {
          title: "Wybrane realizacje",
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
          title: "Proces współpracy",
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
        about: {
          title: "Poznajmy się O mnie",
          desc: "Od ponad 2 lat zajmuję się tworzeniem stron internetowych dla biznesów lokalnych. Zrealizowałem już kilka projektów, które realnie wspierają sprzedaż i pomagają klientom wyróżnić się w internecie.",
          location: {
            title: "Localizacja",
            desc: "Działam w Polsce: Doskonale rozumiem specyfikę lokalnego rynku i potrzeby polskich klientów.",
          },
          way: {
            title: "Podejście",
            desc: "Koncentracja na wynikach: Tworzę narzędzia, które sprzedają и generują leady, a nie tylko „ładne obrazki”.",
          },
          tech: {
            title: "Technologie",
            desc: "Szybkość i wydajność: Korzystam z najnowocześniejszych rozwiązań, aby Twoja strona była błyskawiczna i responsywna na smartfonach.",
          },
          garanty: {
            title: "Gwarancja",
            desc: "Pełne wsparcie: Zapewniam opiekę techniczną po wdrożeniu oraz szkolenie z obsługi strony — nie zostawiam Cię samego po projekcie.",
          },
        },
        tech: {
          title: "Przewaga techniczna",
          subtitle: "Twoja strona będzie szybsza niż 95% konkurencji",
          warning: "UWAGA! Liczby są rzeczywiste na podstawie metryk z ",
          case1: {
            title: "Wydajność",
            desc: "Strona ładuje się błyskawicznie, więc klient nie czeka i nie ucieka do konkurencji.",
          },
          case2: {
            title: "Dostępność",
            desc: "Serwis jest wygodny dla każdego użytkownika, co realnie zwiększa zaufanie i lojalność.",
          },
          case3: {
            title: "Best Practices",
            desc: "Kod jest nowoczesny, bezpieczny i napisany zgodnie ze standardami — bez zbędnych błędów.",
          },
          case4: {
            title: "SEO",
            desc: "Google premiuje szybkie strony, dlatego taka witryna trafia wyżej w wynikach wyszukiwania.",
          },
          after:
            "Szybkość to pieniądze. Każda sekunda oczekiwania na załadowanie strony to utrata 20% potencjalnych klientów",
        },
        contact: {
          title: "Zamów bezpłatną wycenę",
          desc: "  Chcesz zacząć? Zostaw wiadomość, skontaktuję się z Tobą!",
          landing: "Landing Page",
          page: "Strona Firmowa",
          other: "Inne",
          name: "Twoje imię",
          phone: "Twój telefon",
          mail: "Twój e-mail",
          message: "Treść",
          button: "Zamów bezpłatną wycenę",
        },
      },
    },
  },

  interpolation: {
    escapeValue: false, // важно для JSX
  },
});

export default i18n;
