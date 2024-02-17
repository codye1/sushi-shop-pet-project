import { NavLink, useLocation  } from "react-router-dom";
import "./Account.css"
import Personal from "./Components/Personal/Personal";
import Bonuses from "./Components/Bonuses/Bonuses";
import Delivery from "./Components/Delivery/Delivery";
import Orders from "./Components/Orders/Orders";

const Account = () => {
    const accountSlides:{[key:string]:JSX.Element}={
        "bonuses" : <Bonuses/>,
        "delivery" : <Delivery/>,
        "orders" : <Orders/>,
        "personal":<Personal/>
    }

    const location = useLocation()
    const activePath=location.pathname.split("/")[2]
    return (
        <div className="container account d-flex">
            <div className="account-menu">
                <div className="sticky">
                    <div className="menu d-flex column">
                        <NavLink className={({isActive})=>isActive? "menu-item active":"menu-item"} to={"/account/orders"}><img src="https://lviv.sushi-master.ua/img/menu/orders-history.svg" alt="" />Історія замовлень</NavLink >
                        <NavLink className={({isActive})=>isActive? "menu-item active":"menu-item"} to={"/account/bonuses"}><img src="https://lviv.sushi-master.ua/img/menu/bonuses.svg" alt="" />Бонусів</NavLink >
                        <NavLink className={({isActive})=>isActive? "menu-item active":"menu-item"} to={"/account/personal"}><img src="https://lviv.sushi-master.ua/img/menu/profile.svg" alt="" />Профіль</NavLink >
                        <NavLink className={({isActive})=>isActive? "menu-item active":"menu-item"} to={"/account/delivery"}><img src="https://lviv.sushi-master.ua/img/menu/addresses.svg" alt="" />Адреси доставки</NavLink >
                    </div>
                    <div className="logout">
                        <div className="menu-item">
                            <img src="https://lviv.sushi-master.ua/img/menu/log-out.svg" alt="" />
                            Вийти
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu-content">
               {accountSlides[activePath]}
            </div>
        </div>
    );
};

export default Account;