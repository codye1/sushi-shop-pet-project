import {NavLink, useNavigate, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules";
import "./PageByIdProduct.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import CardProduct from "../../components/UI/ProductList/CardProduct/CardProduct";
import LabelsCard from '../../components/UI/LablesCard/LabelsCard';
import AddProductInBasketButton from "../../components/UI/AddProductInBasketButton/AddProductInBasketButton";
import { params } from '../../interfaces';
import { useGetProductQuery, useGetProductsByIdsQuery } from "../../API";
import Breadcrumb from "../../components/UI/Breadcrumb/Breadcrumb";
import ListCardConsistsProduct from "./UI/ListCardConsistsProduct/ListCardConsistsProduct";

const PageByIdProduct = () => {
    const params:params = useParams();
    console.log(params);

    const {data: product,error: productError,isLoading: productLoading} = useGetProductQuery(params.id? params.id : "none")
    const {data: products,error: productsError,isLoading: productsLoading} = useGetProductsByIdsQuery(["palichki-dlya-yizhi","set-vigidnij-new","set-vigidnij-new","set-sakura-new","set-vse-vklyucheno-new"])

    const navigate = useNavigate()
    let price:number = Number(product?.price.replace(/[^0-9]/g,""));
    price -= product? Math.floor(price*(product.discount/100)) : 0;
    console.log();


    params && console.log(params)
    return (
    <div>
        <div className="pageByIdTovar">
            {
            productError?<div>Error</div>
            :productLoading?<div>Loading...</div>
            :product&&products?
            <div className="container-product-view">
               <div onClick={()=>{
                    navigate(-1)
               }} className="back">
                    <span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M7.99951 12.0001L13.5189 6.26411C13.8576 5.91212 14.4068 5.91212 14.7455 6.26411C15.0842 6.6161 15.0842 7.18679 14.7455 7.53878L10.4526 12.0001L14.7455 16.4615C15.0842 16.8135 15.0842 17.3841 14.7455 17.7361C14.4068 18.0881 13.8576 18.0881 13.5189 17.7361L7.99951 12.0001Z" fill="#e30613"></path></svg>
                            <strong>Назад</strong>
                    </span>
                </div>
                <div className="main-product-view">
                    <div className="img-product-view">
                        <div className="container-img">
                        <img src={product.img} alt="" />
                        <LabelsCard labels={product.labels}/>
                        </div>
                    </div>

                    <div className="information-product-view">
                        <div className="product-name d-flex align-center">
                            {product.title}
                            <p> {product.attributes}</p>
                        </div>
                        <div className="product-food-quality">
                            {product?.harch?.weight} г
                        </div>
                        <div className="product-price-button">
                            <div className="product-price">
                            {product.discount>0? <div className="action">{price} грн&nbsp;<span>{product.price}</span></div> : <span>{product.price}</span>}
                            </div>
                            <div className="product-button">
                               <AddProductInBasketButton product={product}/>
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
                                <NavLink to={`/delivery`}>Карта доставки</NavLink>
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
                {productsError?<div></div>:productsLoading?<div></div>:products?<ListCardConsistsProduct products={products}/>:null}
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
                    {products?.map((p)=><SwiperSlide key={p.key}>{<CardProduct product={p}/>}</SwiperSlide>)}
                    </Swiper>
                </div>
            </div>
        </div>
        {params.type && product?.title && <Breadcrumb crumbs={[product.type.split(' ')[0],product.title]} />}
    </div>
    );
};

export default PageByIdProduct;