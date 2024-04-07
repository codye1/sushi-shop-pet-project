import "./Menu.css"
import { NavLink } from 'react-router-dom';
import { useLogoutMutation } from '../../../API';
import Addresses from "../../../icons/Menu/Addresses.svg";
import profile from "../../../icons/Menu/profile.svg";
import bonuses from "../../../icons/Menu/bonuses.svg";
import ordersHistory from "../../../icons/Menu/ordersHistory.svg";
import logOut from "../../../icons/Menu/logOut.svg"

const Menu = () => {
    const [logout] = useLogoutMutation()

    return (
        <>
            <div className="menu d-flex column">
                <NavLink className={({isActive})=>isActive? "menu-item active":"menu-item"} to={"/account/orders"}>
                    <img src={ordersHistory} alt="" />
                    <p>Історія замовлень</p>
                </NavLink >
                <NavLink className={({isActive})=>isActive? "menu-item active":"menu-item"} to={"/account/bonuses"}>
                    <img src={bonuses} alt="" />
                    <p>Бонусів</p>
                </NavLink >
                <NavLink className={({isActive})=>isActive? "menu-item active":"menu-item"} to={"/account/personal"}>
                    <img src={profile} alt="" />
                    <p>Профіль</p>
                </NavLink >
                <NavLink className={({isActive})=>isActive? "menu-item active":"menu-item"} to={"/account/delivery"}>
                    <img src={Addresses} alt="" />
                    <p>Адреси доставки</p>
                </NavLink >
            </div>
            <div onClick={()=>{
                logout()
                window.location.reload()
                }} className="menu logout pointer">
                <div className="menu-item">
                    <img src={logOut} alt="" />
                    <p>Вийти</p>
                </div>
            </div>
        </>
    );
};

export default Menu;