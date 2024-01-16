import { NavLink } from "react-router-dom";
import "./BasketHeader.css"



const BasketHeader = () => {

    function windowReload() {
        window.location.reload()
    }
    return (
        <div className="top-container">
            <div className="basket-left-block">
                <NavLink onClick={()=>{setTimeout(windowReload,100) }}to={"/home"} className="main-logo">
                    <img  src="https://x100-venus-sm-ua.gumlet.io/VENUS/WEB/4C25DB70-1DCE-11EB-A6EC-7B643829D650/1675018701967_%D1%81%D0%B0%D0%B9%D1%82.svg?alt=media&token=a2835928-b794-4bd1-8b2c-7e722bd31b10" alt="" />
                </NavLink>
            <div className="language">
                    <span>UA</span>
                    <img src="https://uzhhorod.sushi-master.ua/img/header/arrow-down.svg" alt="" />
                </div>
            </div>
            <div className="basket-right-block">
                <div className="step step-1 basket">
                    <div className="icon-cont">
                        <img src="https://uzhhorod.sushi-master.ua/img/cart/cart-circled.svg" alt="" />
                    </div>
                    <h1>Кошик</h1>
                </div>
                <div className="step placing">
                    <div className="icon-cont">
                        <img src="https://uzhhorod.sushi-master.ua/img/cart/delivery-inactive.svg" alt="" />
                    </div>
                    <h1>Оформлення</h1>
                </div>
                <div className="step step-3 order-accept">
                    <div className="icon-cont">
                        <img src="https://uzhhorod.sushi-master.ua/img/cart/order-confirmed-inactive.svg" alt="" />
                    </div>
                    <h1>Замовлення прийнято</h1>
                </div>
            </div>
        </div>
    );
};

export default BasketHeader;