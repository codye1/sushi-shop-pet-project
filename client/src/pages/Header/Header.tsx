import {   NavLink, useLocation } from "react-router-dom";
import "./Header.css"
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import LeftCont from "./HeaderUI/LeftCont/LeftCont";
import RightCont from "./HeaderUI/RightCont/RightCont";
import Navbar from "./HeaderUI/Navbar/Navbar";
import { setBasketPageStatus } from "../../reducer/basket";
import Separator from "../../components/UI/Separator/Separator";
import mainLogoPNG from "../../icons/headerIcon/main-logo.png"
const Header = () => {


    const [isScroled, setScroled] = useState(false);
    const [transform,setStransform] = useState(0);
    const searchActive = useAppSelector((state)=>state.searchActive.searchActive);
    const dispatch = useAppDispatch()
    const location = useLocation()

    if (location.pathname=="/basket") {
        dispatch(setBasketPageStatus(true))
    }else{
        dispatch(setBasketPageStatus(false))
    }



    useEffect(() => {
      const handleScroll = (e:number) => {
        if (window.scrollY>100) {
            setScroled(true)
            if(e<0){
                setStransform(0)
            }else{
                searchActive ? setStransform(-55) : setStransform(-150)
            }
        }else setScroled(false)
      };
        window.addEventListener('scroll', ()=>{if(window.scrollY<100){
            setScroled(false)
            setStransform(0)
        }});
      window.addEventListener('wheel', (e)=>{handleScroll(e.deltaY)});
    });

    function windowReload() {
        window.location.reload()
    }
    return (
            <div style={{transform: `translateY(${transform}%)`}} className={`header ${isScroled? 'scroled' : ''}`}>
            <div className="top-header">
            <div className="top-container">
                <LeftCont/>
                <NavLink onClick={()=>{setTimeout(windowReload,100) }}to={"/home"} className="main-logo">
                    <img src={mainLogoPNG} alt="лод" />
                </NavLink>
                <RightCont/>
            </div>
            </div>
            <div style={{marginBottom:"0"}} className="container">
                <Separator/>
            </div>
            <Navbar isScroled={isScroled}/>
        </div>
    );
};

export default Header;