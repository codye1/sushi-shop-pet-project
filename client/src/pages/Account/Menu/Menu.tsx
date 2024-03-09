import "./Menu.css"
import { NavLink } from 'react-router-dom';
import { useLogoutMutation } from '../../../API';


const Menu = () => {
    const [logout] = useLogoutMutation()

    return (
        <>
            <div className="menu d-flex column">
                <NavLink className={({isActive})=>isActive? "menu-item active":"menu-item"} to={"/account/orders"}>
                    <img src="https://lviv.sushi-master.ua/img/menu/orders-history.svg" alt="" />
                    <p>Історія замовлень</p>
                </NavLink >
                <NavLink className={({isActive})=>isActive? "menu-item active":"menu-item"} to={"/account/bonuses"}>
                    <img src="https://lviv.sushi-master.ua/img/menu/bonuses.svg" alt="" />
                    <p>Бонусів</p>
                </NavLink >
                <NavLink className={({isActive})=>isActive? "menu-item active":"menu-item"} to={"/account/personal"}>
                    <img src="https://lviv.sushi-master.ua/img/menu/profile.svg" alt="" />
                    <p>Профіль</p>
                </NavLink >
                <NavLink className={({isActive})=>isActive? "menu-item active":"menu-item"} to={"/account/delivery"}>
                    <img src="https://lviv.sushi-master.ua/img/menu/addresses.svg" alt="" />
                    <p>Адреси доставки</p>
                </NavLink >
            </div>
            <div onClick={()=>{
                logout()
                window.location.reload()
                }} className="menu logout pointer">
                <div className="menu-item">
                    <img src="https://lviv.sushi-master.ua/img/menu/log-out.svg" alt="" />
                    <p>Вийти</p>
                </div>
            </div>
        </>
    );
};

export default Menu;