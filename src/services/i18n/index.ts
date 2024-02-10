import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          "file": {
            "firstName": "Имя:",
            "lastName": "Фамилия:",
            "birthDate": "Дата рождения:",
            "birthPlace": "Место рождения:",
            "family": "Клан:",
            "specialSkill": "Особые навыки:",
            "infoFromInformer": "Сведения от информатора:",
            "specialTask": "Специальная миссия:",
            "biography": "Биография:"
          }
        }
      }
    }
  });

export default i18n;