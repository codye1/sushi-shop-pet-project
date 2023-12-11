import {   NavLink,  } from "react-router-dom";
import "./Header.css"
import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks";
import { useDispatch } from "react-redux";
import { setSearchActive } from "../../reducer/search";
import SearchBlock from "../../components/UI/SearchBlock/SearchBlock";
// import { addProductInBasket, deleteById } from "../../reducer/basket";

interface Ilist{
    site: string;
    name: string;
}

type Tlist=Ilist[];

const Header = () => {

    const down_list:Tlist=[
        {site: '/sets',name:"Сети"},
        {site: '/roles',name:"Роли"},
        {site: '/promotion',name:"🔥Акції"},
        {site: '/sushi',name:"Суші"},
        {site: '/california',name:"Каліфорнії"},
        {site: '/gourmetschoise',name:"🍣Вибір гурманів"},
        {site: '/hotsAndSalads',name:"Гаряче та салати"},
        {site: '/philadelphia',name:"Філадельфії"},
        {site: '/soups',name:"Супи"},
        {site: '/desserts',name:"Десерти"},
        {site: '/drinks',name:"Напої"},
        {site: '/additions',name:"Доповнення"},
    ]

    const [isScroled, setScroled] = useState(false);
    const [transform,setStransform] = useState(0);
    const dispatch = useDispatch()
    const searchActive = useAppSelector((state)=>state.searchActive.searchActive);
   // const basket = useAppSelector((state=>state.basket.basket))

    useEffect(() => {

      const handleScroll = (e:number) => {
        if (window.scrollY>100) {
            setScroled(true)
            if(e<0){
                setStransform(0)
            }else{
                searchActive? setStransform(-55) : setStransform(-150)
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
            <div style={{transform: `translateY(${transform}%)`}} className="header">
            <div className="top-header">
            <div className="top-container">
                    <div className="left-cont">
                        <div className="city">
                            Ужгород
                        </div>
                        <div className="language">
                            <span>UA</span>
                            <img src="https://uzhhorod.sushi-master.ua/img/header/arrow-down.svg" alt="" />
                        </div>
                        <div className="number">
                            <a href="tel:0 800 330 333">0 800 330 333</a>
                        </div>
                    </div>
                    {<NavLink onClick={()=>{setTimeout(windowReload,100) }}to={"/home"} className="main-logo"><img  src="https://x100-venus-sm-ua.gumlet.io/VENUS/WEB/4C25DB70-1DCE-11EB-A6EC-7B643829D650/1675018701967_%D1%81%D0%B0%D0%B9%D1%82.svg?alt=media&token=a2835928-b794-4bd1-8b2c-7e722bd31b10" alt="" /></NavLink>}
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
                        <div className="basket">
                            <img src="https://uzhhorod.sushi-master.ua/img/header/cart.svg" alt="" />
                        </div>
                    </div>
            </div>
            </div>
            <div className="line-header">
                <div className="line-container">
                    <div className="line">

                    </div>
                </div>
            </div>
            {

            searchActive?
                <div>
                    {
                        <SearchBlock/>
                    }
                </div>

            :
            <div  className={`down-header ${isScroled ? 'scroled' : ''}`}>
                <div className="navbar-cont">
                    <div className="navbar">
                        {down_list.map((p)=><NavLink key={p.site} to={p.site} className={({isActive})=>isActive? "link linkact" : 'link'} >{p.name}</NavLink>)}
                    </div>
                </div>
            </div>
            }

        </div>
    );
};

export default Header;