import CountryListElement from '../CountryListElement/CountryListElement';
import './CountryList.css'
export interface country{
    flag: string;
    name: string;
    dialCode: string;
}

interface CountryList{
    pickCountry:(country: country) => void
}

const CountryList:React.FC<CountryList> = ({pickCountry}) => {
    const country:country[] =[
        {flag:"ua",name:"Україна",dialCode:"+380"},
        {flag:"uz",name:"Узбексистан",dialCode:"+998"},
        {flag:"hu",name:"Угорщина",dialCode:"+36"},
        {flag:"us",name:"Cполучені штати",dialCode:"+1"},
        {flag:"sk",name:"Словаччина",dialCode:"+421"},
        {flag:"ro",name:"Румунія",dialCode:"+40"},
        {flag:"ru",name:"Росія",dialCode:"+7"},
        {flag:"pt",name:"Португалія",dialCode:"+351"},
        {flag:"pl",name:"Польща",dialCode:"+48"},
        {flag:"lt",name:"Литва",dialCode:"+370"},
        {flag:"kg",name:"Киргизія",dialCode:"+996"},
        {flag:"kz",name:"Казахстан",dialCode:"+7"},
        {flag:"by",name:"Білорусь",dialCode:"+375"},
        {flag:"az",name:"Азербайджан",dialCode:"+994"},
    ]

    return (
        <ul className="country-list">
            {country.map((contry)=>
                <CountryListElement
                    key={country.indexOf(contry)}
                    country={contry}
                    pickCountry={pickCountry}
                    />
            )}

        </ul>
    );
};

export default CountryList;