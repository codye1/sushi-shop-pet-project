import "./Menu.css"
import { NavLink } from 'react-router-dom';
import { useLogoutMutation } from '../../../API';
import Addresses from "../../../icons/Menu/Addresses.svg";
import profile from "../../../icons/Menu/profile.svg";
import bonuses from "../../../icons/Menu/bonuses.svg";
import ordersHistory from "../../../icons/Menu/ordersHistory.svg";
import logOut from "../../../icons/Menu/logOut.svg"
import { useTranslation } from "react-i18next";

const Menu = () => {
    const [logout] = useLogoutMutation()

    const {t} = useTranslation()

    return (
        <>
            <div className="menu d-flex column">
                <NavLink className={({isActive})=>isActive? "menu-item active":"menu-item"} to={"/account/orders"}>
                    <img src={ordersHistory} alt="" />
                    <p>{t("account.menu.orders")}</p>
                </NavLink >
                <NavLink className={({isActive})=>isActive? "menu-item active":"menu-item"} to={"/account/bonuses"}>
                    <img src={bonuses} alt="" />
                    <p>{t("account.menu.bonuses")}</p>
                </NavLink >
                <NavLink className={({isActive})=>isActive? "menu-item active":"menu-item"} to={"/account/personal"}>
                    <img src={profile} alt="" />
                    <p>{t("account.menu.personal")}</p>
                </NavLink >
                <NavLink className={({isActive})=>isActive? "menu-item active":"menu-item"} to={"/account/delivery"}>
                    <img src={Addresses} alt="" />
                    <p>{t("account.menu.delivery")}</p>
                </NavLink >
            </div>
            <div onClick={()=>{
                logout()
                window.location.reload()
                }} className="menu logout pointer">
                <div className="menu-item">
                    <img src={logOut} alt="" />
                    <p>{t("account.menu.logout")}</p>
                </div>
            </div>
        </>
    );
};

export default Menu;