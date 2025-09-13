import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './languages/en.json';
import it from './languages/it.json';
import es from './languages/es.json';
import fr from './languages/fr.json';
import de from './languages/de.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      it: { translation: it },
      es: { translation: es },
      fr: { translation: fr },
      de: { translation: de },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
