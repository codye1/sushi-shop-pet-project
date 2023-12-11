import { useParams } from "react-router-dom";
import { useGetSetQuery, useGetSetsByIdsQuery } from "../../API";
import ListCardConsistsProduct from "../../components/UI/ListCardConsistsProduct/ListCardConsistsProduct";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules";

import "./PageByIdProduct.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import CardProduct from "../../components/UI/CardProduct/CardProduct";
interface params{
    id?:string;
}

const PageByIdProduct = () => {
    const params:params = useParams();
    console.log()
    const {data: data1,error: error1,isLoading: isLoading1} = useGetSetQuery(params.id? params.id : "none")
    const {data: data2,error: error2,isLoading: isLoading2} = useGetSetsByIdsQuery(["set-vigidnij-new","set-sakura-new","set-vse-vklyucheno-new"])


    let price:number = Number(data1?.price.replace(/[^0-9]/g,""));
    price -= data1? Math.floor(price*(data1.action/100)) : 0;
    return (
    <div>
        <div className="pageByIdTovar">
            {
            error1?<div>Error</div>
            :isLoading1?<div>Loading...</div>
            :data1&&data2?

            <div className="container-product-view">
               <div className="back">
                        НАЗАД
                </div>
                <div className="main-product-view">
                    <div className="img-product-view">
                        <div className="container-img">
                        <img src={data1.photo} alt="" />

                        <div className="lables">
                            {data1.action>0?
                                <div className="discount">
                                    Знижка -{Math.round(data1.action)}%
                                </div>
                                :
                                false
                            }
                             {data1.gurman?
                                <div className="gourmetsChoice">
                                    Вибір гурманів
                                </div>
                                :
                                false
                            }
                            {data1.promotion?
                                <div className="promotion">
                                    Акція
                                </div>
                                :
                                false
                            }
                            {data1.rollFree?
                                <div className="rollGift">
                                Рол у подарунок
                                </div>
                            : false}
                        </div>
                        </div>


                    </div>

                    <div className="information-product-view">
                        <div className="product-name">
                            {data1.title}
                        </div>
                        <div className="product-food-quality">
                            {data1.harch.weight} г
                        </div>
                        <div className="product-price-button">
                            <div className="product-price">
                            {data1.action>0? <div className="action">{price} грн&nbsp;<span>{data1.price}</span></div> : <span>{data1.price}</span>}
                            </div>
                            <div className="product-button">
                               В КОШИК
                            </div>
                        </div>
                        <div className="product-bonus">
                            <div className="amount-bonus">
                                <img src="https://uzhhorod.sushi-master.ua/img/cart/bonus.svg" alt="" />
                             27 бонусів буде нараховано за замовлення
                            </div>
                            <div className="delivery-bonus">
                                <img src="https://uzhhorod.sushi-master.ua/img/products/delivery-time.svg" alt="" />
                                Доставимо за 45 хв.
                                <a href="">Карта доставки</a>
                            </div>
                        </div>
                        <div className="product-storage">
                            {data1.body}
                        </div>
                    </div>
                </div>
                <div className="back">
                    СЕТ СКЛАДАЄТЬСЯ
                </div>
            </div>
            :null
            }

        </div>
        <div>
            <div className="container-product-view">
                {error2?<div></div>:isLoading2?<div></div>:data2?<ListCardConsistsProduct products={data2}/>:null}
                <div className="back">
                    Рекомендуємо спробувати
                </div>
                <div className="pageByIdProduct-swiper-cont">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={16}
                        modules={[Pagination]}
                        className="pageByIdProduct-swiper"
                    >
                    {data2?.map((p)=><SwiperSlide>{<CardProduct product={p}/>}</SwiperSlide>)}
                    </Swiper>
                </div>
            </div>
        </div>
    </div>
    );
};

export default PageByIdProduct;