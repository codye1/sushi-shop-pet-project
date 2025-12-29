import './CountryListElement.css';
import { country } from '../CountryList/CountryList';

interface ICountryListElement {
  country: country;
  pickCountry: (country: country) => void;
}

const CountryListElement = ({ country, pickCountry }: ICountryListElement) => {
  return (
    <li
      onClick={() => pickCountry(country)}
      className="country d-flex align-center pointer"
    >
      <div className={`flag ${country.flag}`}></div>
      <div className="country-name">{country.name}</div>
      <div className="dial-code">{country.dialCode}</div>
    </li>
  );
};

export default CountryListElement;
