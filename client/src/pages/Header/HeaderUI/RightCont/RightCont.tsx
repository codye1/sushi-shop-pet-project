import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../../hooks";
import { setSearchActive } from "../../../../reducer/search";
import "./RightCont.css"
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCheckAuthQuery } from "../../../../API";
import { authUser } from "../../../../reducer/auth";

const RightCont = () => {
    const dispatch = useDispatch()
    const basket = useAppSelector((state)=>state.basket.basket)
    const [isAnimated,setIsAtimated]=useState(false);
    const isAuth=useAppSelector(state=>state.auth.isAuth)
    const number=useAppSelector(state=>state.auth.number)
    const {data:user}=useCheckAuthQuery()

    useEffect(()=>{
        function setAnimatedWitchTimeout() {
            setIsAtimated(false)
        }
        setIsAtimated(true)
        setTimeout(setAnimatedWitchTimeout,600)
    },[basket])

    useEffect(()=>{
        if (user) {
            dispatch(authUser(user.user.number))
        }
    })

    return (
        <div  className="right-cont">
            <div  onClick={()=>{
                dispatch(setSearchActive(true))
                } } className="search">
                <img src="https://uzhhorod.sushi-master.ua/img/header/search.svg" alt="" />
            </div>
            <NavLink className={`login ${isAuth?"logged":"unlloged"}`} to={"/sign-in"}>
                <img src="https://uzhhorod.sushi-master.ua/img/header/user.svg" alt="" />
                {isAuth? number : "Увійти"}
            </NavLink>
            <NavLink className="basket" to={"/basket"} >
                <img src="https://uzhhorod.sushi-master.ua/img/header/cart.svg" alt="" />
                {basket.length>0?
                <span className="number-product-in-basket-cont">
                    <span className={`number-product-in-basket ${isAnimated? 'animated': ''}`}>
                        {basket.length}
                    </span>
                </span>
                :null
                }
            </NavLink>
        </div>
    );
};

export default RightCont;