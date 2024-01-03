import { useState } from "react";
import "./BasketPage.css"
import { useAppSelector } from "../../hooks";
import { useGetSetsByIdsQuery } from '../../API';
import CardProductBasket from "./BasketPageUI/CardProductBasket/CardProductBasket";
import { useDispatch } from "react-redux";
import { deleteAllElementsFromBasket } from "../../reducer/basket";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import CardRecommendationSlider from "../../components/UI/CardRecommendationSlider/CardRecommendationSlider";
import { IProductResponse } from '../../interfaces';


const BasketPage = () => {
    const [input,setInput]=useState('');
    const basket = useAppSelector((state)=>state.basket.basket);
    const basketAdditons=useAppSelector((state)=>state.basket.basketAdditions)
    const {data,error,isLoading}=useGetSetsByIdsQuery(basketAdditons)
    const dispatch = useDispatch()
    const makeUniq = (arr:  IProductResponse | undefined) => {
        const uniqSet = new Set(arr);
        return [...uniqSet];
      }
    const products =  makeUniq(basket)

    return (
    <div>
        <div className="basket-page">
            <div className="basket-page-cont">
                <div className="down-block">
                    <div className="basket-page-left-cont">
                        <div className="top-block">
                            Мої замовлення
                            <h1 onClick={()=>{
                                dispatch(deleteAllElementsFromBasket())
                            }} >Очистити кошик</h1>
                        </div>
                        {products.map((p)=><CardProductBasket key={p.key} product={p} />)}
                        {error?
                        <div></div>:
                        isLoading?
                        <div></div>:
                        data?
                        data.map((p)=><CardProductBasket key={p.key} product={p} />):
                        null
                    }
                    </div>
                    <div className="basket-page-right-cont">
                        <div className="right-block-basket-page">
                            <div className="right-cart-card">
                                <div className="cart-card-input">
                                    <div className={`cart-card-input-cont ${input.length>0?`btn-filled-none`:`btn-filled`}`}>
                                        <input onChange={(e)=>{
                                            setInput(e.target.value)
                                        }} id="1" type="text" />
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
                </div>
            </div>
        </div>
        <div>
            <div className="container-product-view">
                <div className="back">
                    Рекомендуємо спробувати
                </div>
                <div className="pageByIdProduct-swiper-cont">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={10}
                        style={{ overflow: 'visible'}}
                        modules={[Pagination]}
                        className="pageByIdProduct-swiper"
                    >
                        {products?.map((p)=><SwiperSlide key={p.key}><CardRecommendationSlider product={p}/> </SwiperSlide>)}
                    </Swiper>
                </div>
            </div>
        </div>
    </div>
    );
};

export default BasketPage;