import { useState } from "react";
import "./RightCart.css"

const RightCart = () => {
    const [input,setInput]=useState('');
    return (
    <div className="basket-page-right-cont">
        <div className="right-block-basket-page">
            <div className="right-cart-card">
                <div className="cart-card-input">
                    <div className={`cart-card-input-cont ${input.length>0?`btn-filled-none`:`btn-filled`}`}>
                        <input onChange={(e)=>{setInput(e.target.value)}} id="1" type="text" />
                        <button>
                            Застосувати
                        </button>
                    </div>
                </div>
                <div className="cart-card-sum-1">
                    <h1>Товари</h1>
                </div>
                <div className="cart-card-sum-2">
                    <h1>Разом</h1>
                </div>
                <div className="cart-card-buttons">
                    <button className="button-self-removal">
                        самовиніс
                    </button>
                    <button className="button-delivery">
                        доставка
                    </button>
                </div>
            </div>
            <div className="bonus">
                <img src="https://uzhhorod.sushi-master.ua/img/cart/bonus.svg" alt="" />
                <span>34 </span>
                бонусів буде нараховано за замовлення
            </div>
        </div>
    </div>
    );
};

export default RightCart;