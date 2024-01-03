import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../../hooks";
import { setSearchActive } from "../../../../reducer/search";
import "./RightCont.css"
import { NavLink } from "react-router-dom";
import { setBasketPageStatus } from "../../../../reducer/basket";
import { useEffect, useState } from "react";

const RightCont = () => {
    const dispatch = useDispatch()
    const basket = useAppSelector((state)=>state.basket.basket)
    const [isAnimated,setIsAtimated]=useState(false);
    useEffect(()=>{
        function setAnimatedWitchTimeout() {
            setIsAtimated(false)
        }
        setIsAtimated(true)
        setTimeout(setAnimatedWitchTimeout,600)
    },[basket])
    return (
        <div  className="right-cont">
            <div  onClick={()=>{
                dispatch(setSearchActive(true))
                } } className="search">
                <img src="https://uzhhorod.sushi-master.ua/img/header/search.svg" alt="" />
            </div>
            <div className="login">
                <img src="https://uzhhorod.sushi-master.ua/img/header/user.svg" alt="" />
                Увійти
            </div>
            {<NavLink  onClick={()=>{
                dispatch(setBasketPageStatus(true))
                } } to={"/basket"} >
            <div className="basket">
                <img src="https://uzhhorod.sushi-master.ua/img/header/cart.svg" alt="" />
                {basket.length>0?
                <span className="number-product-in-basket-cont">
                    <span className={`number-product-in-basket ${isAnimated? 'animated': ''}`}>
                        {basket.length}
                    </span>
                </span>
                :null
                }
            </div>
            </NavLink>}

        </div>
    );
};

export default RightCont;