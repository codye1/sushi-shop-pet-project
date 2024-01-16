import {   NavLink,  } from "react-router-dom";
import "./Header.css"
import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks";
import LeftCont from "./HeaderUI/LeftCont/LeftCont";
import RightCont from "./HeaderUI/RightCont/RightCont";
import Navbar from "./HeaderUI/Navbar/Navbar";
import BasketHeader from "./HeaderUI/BasketHeader/BasketHeader";
// import { addProductInBasket, deleteById } from "../../reducer/basket";


const Header = () => {


    const [isScroled, setScroled] = useState(false);
    const [transform,setStransform] = useState(0);

    const searchActive = useAppSelector((state)=>state.searchActive.searchActive);
    const basketStatus = useAppSelector((state)=>state.basket.basketOpen);
    useEffect(() => {

      const handleScroll = (e:number) => {
        if (window.scrollY>100 || basketStatus) {
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

    }, [searchActive]);

    function windowReload() {
        window.location.reload()
    }
    return (
            <div style={{transform: `translateY(${transform}%)`}} className={`header ${isScroled&&basketStatus? 'scroled' : ''}`}>
            <div className="top-header">
                {basketStatus?
                    <BasketHeader/>
                    :
                    <div className="top-container">
                        <LeftCont/>
                        <NavLink onClick={()=>{setTimeout(windowReload,100) }}to={"/home"} className="main-logo">
                            <img  src="https://x100-venus-sm-ua.gumlet.io/VENUS/WEB/4C25DB70-1DCE-11EB-A6EC-7B643829D650/1675018701967_%D1%81%D0%B0%D0%B9%D1%82.svg?alt=media&token=a2835928-b794-4bd1-8b2c-7e722bd31b10" alt=""/>
                        </NavLink>
                        <RightCont/>
                    </div>
                }
            </div>
            {basketStatus?null:
                <>
                    <div style={{backgroundColor:"white"}} className="d-flex">
                        <div className="container">
                            <div className="line">

                            </div>
                        </div>
                    </div>
                    {<Navbar isScroled={isScroled}/>}
                </>
            }

        </div>
    );
};

export default Header;