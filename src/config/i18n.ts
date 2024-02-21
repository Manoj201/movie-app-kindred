import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enJSON from '@assets/locale/en.json';
import swJSON from '@assets/locale/sv.json';

i18n.use(initReactI18next).init({
    resources: {
        en: { ...enJSON },
        sv: { ...swJSON },
    },
    lng: 'en',
});
