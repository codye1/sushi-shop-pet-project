import { IRestourantInXEelement } from "../../../../../interfaces";
import "./RestouransItem.css"

const RestouransItem:React.FC<IRestourantInXEelement> = ({restourant}) => {
    return (
    <div className="restourans-item">
        <div className="restourans-title">
            <h1>{restourant.name}</h1>
            <div className="show-on-map">
                <svg width="27" height="27" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" ><path fill-rule="evenodd" clip-rule="evenodd" d="M9 2C6.0975 2 3.75 4.3475 3.75 7.25C3.75 11.1875 9 17 9 17C9 17 14.25 11.1875 14.25 7.25C14.25 4.3475 11.9025 2 9 2ZM5.25 7.25C5.25 5.18 6.93 3.5 9 3.5C11.07 3.5 12.75 5.18 12.75 7.25C12.75 9.41 10.59 12.6425 9 14.66C7.44 12.6575 5.25 9.3875 5.25 7.25ZM7.125 7.25C7.125 6.21447 7.96447 5.375 9 5.375C9.66987 5.375 10.2889 5.73237 10.6238 6.3125C10.9587 6.89263 10.9587 7.60737 10.6238 8.1875C10.2889 8.76763 9.66987 9.125 9 9.125C7.96447 9.125 7.125 8.28553 7.125 7.25Z" fill="#e30613" ></path></svg>
                На мапі
            </div>
        </div>
        <div className="restourans-addres">
            <p>{restourant.description}</p>
        </div>
        <div className="services">
            <div className="service">
                <p>Приймаємо замовлення на самовиніс</p>
                <h1>з {restourant.timetakeaway[0]} до {restourant.timetakeaway[1]}</h1>
            </div>
            <div className="service">
                <p>Приймаємо замовлення на доставку</p>
                <h1>з {restourant.timedelivery[0]} до {restourant.timedelivery[1]}</h1>
            </div>
        </div>
    </div>
    );
};

export default RestouransItem;