import { useNavigate, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules";
import "./PageByIdProduct.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import CardProduct from "../../components/UI/ProductList/CardProduct/CardProduct";
import { params } from '../../interfaces';
import { useGetProductQuery, useGetProductsByIdsQuery } from "../../API";
import Breadcrumb from "../../components/UI/Breadcrumb/Breadcrumb";
import ListCardConsistsProduct from "./UI/ListCardConsistsProduct/ListCardConsistsProduct";
import back from "../../icons/back.svg"
import MainProductView from "./UI/MainProductView/MainProductView";
import MainProductViewSkeleton from "./UI/MainProductViewSkeleton/MainProductViewSkeleton";

const PageByIdProduct = () => {
    const params:params = useParams();

    const {data: product,error: productError,isLoading: productLoading} = useGetProductQuery(params.id? params.id : "none")
    const {data: composedProduct} = useGetProductsByIdsQuery(product?  product.sklad : ["none"] )

    const navigate = useNavigate()



    return (
    <div>
        <div className="pageByIdTovar">
            {
            productError?<div>Error</div>
            :productLoading?<MainProductViewSkeleton/>
            :product&&composedProduct &&
            <div className="container-product-view">
                <div onClick={()=>{
                        navigate(-1)
                }} className="back">
                        <span>
                            <img src={back} alt="" />
                            <strong>Назад</strong>
                        </span>
                    </div>

                <MainProductView product={product}/>
                {composedProduct.length>0 &&
                    <>
                        <div className="back">
                            СЕТ СКЛАДАЄТЬСЯ
                        </div>
                        <ListCardConsistsProduct products={composedProduct}/>

                        <div className="container-product-view">
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
                                {composedProduct.map((p)=><SwiperSlide key={p.key}>{<CardProduct product={p}/>}</SwiperSlide>)}
                                </Swiper>
                            </div>
                        </div>
                    </>
                }
            </div>
            }
        </div>
        {params.type && product?.title && <Breadcrumb crumbs={[product.type.split(' ')[0],product.title]} />}
    </div>
    );
};

export default PageByIdProduct;