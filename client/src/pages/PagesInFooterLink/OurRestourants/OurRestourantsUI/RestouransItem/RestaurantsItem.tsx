import RedMap from "../../../../../icons/OurRestourants/redMap.svg";
import { IRestourantInXEelement } from "../../../../../interfaces";
import "./RestaurantsItem.css"

const Restaurants:React.FC<IRestourantInXEelement> = ({restourant}) => {
    return (
    <div className="restourans-item">
        <div className="restourans-title">
            <h1>{restourant.name}</h1>
            <div className="show-on-map">
                <img src={RedMap} alt="" />
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

export default Restaurants;