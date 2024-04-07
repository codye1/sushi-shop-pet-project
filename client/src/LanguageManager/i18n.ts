import i18next from 'i18next';
import ua from "./locales/ua.json"
import ru from "./locales/ru.json"

i18next.init({
  debug: true,
  fallbackLng: 'ua',
  defaultNS: 'ns1',
  resources: {
    ua: {
      ns1: ua,
    },
    ru: {
      ns1: ru,
    },
  },
});

export default i18next