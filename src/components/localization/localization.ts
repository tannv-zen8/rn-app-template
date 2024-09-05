import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en';
import vi from './locales/vi';

// The resources object
const resources = {
    en: { translation: en },
    vi: { translation: vi },
};

i18n
    .use(initReactI18next) // Passes i18n down to react-i18next
    .init({
        compatibilityJSON: 'v3',
        resources,
        lng: 'en', // If language detection fails, default to English
        fallbackLng: 'en', // Default language if translation is missing

        interpolation: {
            escapeValue: false, // React already does escaping
        },
    });

export default i18n;