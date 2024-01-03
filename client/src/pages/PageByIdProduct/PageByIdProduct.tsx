import {useNavigate, useParams } from "react-router-dom";
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
import LabelsCard from '../../components/UI/LablesCard/LabelsCard';
import ButtonInCardProduct from "../../components/UI/ButtonInCardProduct/ButtonInCardProduct";
import { params } from '../../interfaces';

const PageByIdProduct = () => {
    const params:params = useParams();
    console.log(params);

    const {data: product,error: error1,isLoading: isLoading1} = useGetSetQuery(params.id? params.id : "none")
    const {data: data2,error: error2,isLoading: isLoading2} = useGetSetsByIdsQuery(["palichki-dlya-yizhi","set-vigidnij-new","set-vigidnij-new","set-sakura-new","set-vse-vklyucheno-new"])

    const navigate = useNavigate()
    let price:number = Number(product?.price.replace(/[^0-9]/g,""));
    price -= product? Math.floor(price*(product.action/100)) : 0;
    return (
    <div>
        <div className="pageByIdTovar">
            {
            error1?<div>Error</div>
            :isLoading1?<div>Loading...</div>
            :product&&data2?

            <div className="container-product-view">
               <div onClick={()=>{
                    navigate(-1)
               }} className="back">
                    <span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.99951 12.0001L13.5189 6.26411C13.8576 5.91212 14.4068 5.91212 14.7455 6.26411C15.0842 6.6161 15.0842 7.18679 14.7455 7.53878L10.4526 12.0001L14.7455 16.4615C15.0842 16.8135 15.0842 17.3841 14.7455 17.7361C14.4068 18.0881 13.8576 18.0881 13.5189 17.7361L7.99951 12.0001Z" fill="#e30613"></path></svg>
                            <strong>Назад</strong>
                    </span>
                </div>
                <div className="main-product-view">
                    <div className="img-product-view">
                        <div className="container-img">
                        <img src={product.photo} alt="" />
                        {<LabelsCard labels={product.labels}/>}
                        </div>
                    </div>

                    <div className="information-product-view">
                        <div className="product-name">
                            {product.title}
                        </div>
                        <div className="product-food-quality">
                            {product.harch.weight} г
                        </div>
                        <div className="product-price-button">
                            <div className="product-price">
                            {product.action>0? <div className="action">{price} грн&nbsp;<span>{product.price}</span></div> : <span>{product.price}</span>}
                            </div>
                            <div className="product-button">
                               <ButtonInCardProduct product={product}/>
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
                            {product.body}
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
                        style={{ overflow: 'visible'}}
                        spaceBetween={16}
                        modules={[Pagination]}
                        className="pageByIdProduct-swiper"
                    >
                    {data2?.map((p)=><SwiperSlide key={p.key}>{<CardProduct product={p}/>}</SwiperSlide>)}
                    </Swiper>
                </div>
            </div>
        </div>
    </div>
    );
};

export default PageByIdProduct;