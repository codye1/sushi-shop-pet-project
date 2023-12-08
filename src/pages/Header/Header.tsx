import {   NavLink,  } from "react-router-dom";
import "./Header.css"
import { useEffect, useState } from "react";

interface list{
    site: string;
    name: string;
}

type lis=list[];

const Header = () => {

    const down_list:lis=[
        {site: '/sets',name:"Сети"},
        {site: '/sushi',name:"Суші"},
        {site: '/california',name:"Каліфорнії"},
        {site: '/promotion',name:"Акції"},
        {site: '/hotsAndSalads',name:"Гаряче та салати"},
        {site: '/philadelphia',name:"Філадельфії"},
        {site: '/roles',name:"Роли"},
        {site: '/soups',name:"Супи"},
        {site: '/gourmetschoise',name:"Вибір гурманів"},
        {site: '/desserts',name:"Десерти"},
        {site: '/drinks',name:"Напої"},
        {site: '/additions',name:"Доповнення"},
    ]

    const [isScroled, setScroled] = useState(false);
    const [transform,setStransform] = useState(0);
    useEffect(() => {
      const handleScroll = (e:number) => {
        if (window.scrollY>100) {
            setScroled(true)
        }else setScroled(false)
        if(e<0){

            setStransform(0)
        }else{

            setStransform(-110)
        }
      };
      window.addEventListener('wheel', (e)=>{handleScroll(e.deltaY)
      });
      return () => {
        window.removeEventListener('wheel', (e)=>{handleScroll(e.deltaY);
        });
      };
    }, []);



    return (
            <div style={{transform: `translateY(${transform}%)`}} className={`header ${isScroled ? 'scroled' : ''}`}>
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
                            982 874 443
                        </div>
                    </div>
                    {<NavLink to={"/home"} className="main-logo"><img  src="https://x100-venus-sm-ua.gumlet.io/VENUS/WEB/4C25DB70-1DCE-11EB-A6EC-7B643829D650/1675018701967_%D1%81%D0%B0%D0%B9%D1%82.svg?alt=media&token=a2835928-b794-4bd1-8b2c-7e722bd31b10" alt="" /></NavLink>}
                    <div className="right-cont">
                        <div className="search">
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
            <div className="down-header">
                <div className="navbar-cont">
                    <div className="navbar">
                        {down_list.map((p)=><NavLink key={p.site} to={p.site} className={({isActive})=>isActive? "link linkact" : 'link'} >{p.name}</NavLink>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;