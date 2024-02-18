import "./Menu.css"
import { NavLink } from 'react-router-dom';
import { useLogoutMutation } from '../../../API';


const Menu = () => {
    const [logout] = useLogoutMutation()

    return (
        <>
            <div className="menu d-flex column">
                <NavLink className={({isActive})=>isActive? "menu-item active":"menu-item"} to={"/account/orders"}><img src="https://lviv.sushi-master.ua/img/menu/orders-history.svg" alt="" />Історія замовлень</NavLink >
                <NavLink className={({isActive})=>isActive? "menu-item active":"menu-item"} to={"/account/bonuses"}><img src="https://lviv.sushi-master.ua/img/menu/bonuses.svg" alt="" />Бонусів</NavLink >
                <NavLink className={({isActive})=>isActive? "menu-item active":"menu-item"} to={"/account/personal"}><img src="https://lviv.sushi-master.ua/img/menu/profile.svg" alt="" />Профіль</NavLink >
                <NavLink className={({isActive})=>isActive? "menu-item active":"menu-item"} to={"/account/delivery"}><img src="https://lviv.sushi-master.ua/img/menu/addresses.svg" alt="" />Адреси доставки</NavLink >
            </div>
            <div onClick={()=>{logout()}} className="menu logout pointer">
                <div className="menu-item">
                    <img src="https://lviv.sushi-master.ua/img/menu/log-out.svg" alt="" />
                    Вийти
                </div>
            </div>
        </>
    );
};

export default Menu;