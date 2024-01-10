import "./PagePromotionById.css"
import { useParams } from "react-router-dom";
import { params } from "../../../../interfaces";
import { useGetProductsByIdsQuery, useGetPromotionByIdQuery } from "../../../../API";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import CardRecommendationSlider from '../../../../components/UI/CardRecommendationSlider/CardRecommendationSlider';



const PagePromotionById = () => {
    const params:params = useParams()
    const {data:promotion,error:promotionError,isLoading:promotionLoading} = useGetPromotionByIdQuery(`${params.id? params.id : ''}`)
    const {data:product } = useGetProductsByIdsQuery(promotion?.productInPromotion? promotion.productInPromotion : [''])

   console.log(promotion?.productInPromotion);

    return (
        <div>
            {promotionError?
            <div>Помилка</div>:
            promotionLoading?
            <div>Помилка</div>:
            promotion?
            <div className="promotion-id">
                <div className="d-flex">
                    <div className="container">
                        <div className="promotion-img"><img src={promotion.imgWide} alt="" /></div>
                        <div className="promotion-html">
                                <h1>{promotion.title}</h1>
                                <div className="html" dangerouslySetInnerHTML={{ __html: promotion.html }} >
                                </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="container">
                        <div className="promotion-html">
                            {promotion.productInPromotion.length==0?
                                    <a className="promotion-button" href=""><span>Перейти</span></a>:
                                    <div>
                                        <Swiper
                                            slidesPerView={2}
                                            spaceBetween={10}
                                            modules={[Pagination]}
                                            className="pagePromotion-swiper"
                                        >
                                            {product?.map((p)=><SwiperSlide key={p.key}><CardRecommendationSlider product={p}/> </SwiperSlide>)}
                                        </Swiper>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            :
            null
            }
        </div>
    );
};

export default PagePromotionById;

