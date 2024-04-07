import uaNs1 from './locales/ua.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'ns1';
    resources: {
      ns1: typeof uaNs1;
    };
  }
}