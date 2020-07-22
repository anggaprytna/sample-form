import I18n from 'react-native-i18n';

// Import all locales
import en from './en.json';
import id from './id.json';

// Should the app fallback to English if user locale doesn't exists
I18n.fallbacks = true;

// Define the supported translations
I18n.translations = {
  en,
  id,
};

export const strings = (name: string, params = {}) => I18n.t(name, params);

export const switchLanguage = (lang: string) => {
  I18n.locale = lang;
};

export default I18n;
