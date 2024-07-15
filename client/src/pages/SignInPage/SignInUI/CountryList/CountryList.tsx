import { useTranslation } from 'react-i18next';
import CountryListElement from '../CountryListElement/CountryListElement';
import './CountryList.css';
export interface country {
  flag: string;
  name: string;
  dialCode: string;
}

interface CountryList {
  pickCountry: (country: country) => void;
}

const CountryList: React.FC<CountryList> = ({ pickCountry }) => {
  const { t } = useTranslation();

  const country: country[] = [
    {
      flag: 'ua',
      name: t('sign-in.write-number.country.ua'),
      dialCode: '+380',
    },
    {
      flag: 'uz',
      name: t('sign-in.write-number.country.uz'),
      dialCode: '+998',
    },
    { flag: 'hu', name: t('sign-in.write-number.country.hu'), dialCode: '+36' },
    { flag: 'us', name: t('sign-in.write-number.country.us'), dialCode: '+1' },
    {
      flag: 'sk',
      name: t('sign-in.write-number.country.sk'),
      dialCode: '+421',
    },
    { flag: 'ro', name: t('sign-in.write-number.country.ro'), dialCode: '+40' },
    { flag: 'ru', name: t('sign-in.write-number.country.ru'), dialCode: '+7' },
    {
      flag: 'pt',
      name: t('sign-in.write-number.country.pt'),
      dialCode: '+351',
    },
    { flag: 'pl', name: t('sign-in.write-number.country.pl'), dialCode: '+48' },
    {
      flag: 'lt',
      name: t('sign-in.write-number.country.lt'),
      dialCode: '+370',
    },
    {
      flag: 'kg',
      name: t('sign-in.write-number.country.kg'),
      dialCode: '+996',
    },
    { flag: 'kz', name: t('sign-in.write-number.country.kz'), dialCode: '+7' },
    {
      flag: 'by',
      name: t('sign-in.write-number.country.bu'),
      dialCode: '+375',
    },
    {
      flag: 'az',
      name: t('sign-in.write-number.country.az'),
      dialCode: '+994',
    },
  ];

  return (
    <ul className="country-list">
      {country.map((contry) => (
        <CountryListElement
          key={country.indexOf(contry)}
          country={contry}
          pickCountry={pickCountry}
        />
      ))}
    </ul>
  );
};

export default CountryList;
