import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './en.json';
import esTranslation from './es.json';

i18next.use(initReactI18next).init({
  lng: 'en', // Default language
  debug: true,
  resources: {
    en: {
      translation: enTranslation,
    },
    es: {
      translation: esTranslation
    }
  }
});