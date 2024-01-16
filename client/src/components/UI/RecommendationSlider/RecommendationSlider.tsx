import { IProductsInXEelement } from "../../../interfaces";
import "./RecommendationSlider.css"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import CardRecommendationSlider from "../CardRecommendationSlider/CardRecommendationSlider";

const RecommendationSlider:React.FC<IProductsInXEelement> = ({products}) => {
    return (
        <>
            <Swiper
                slidesPerView={2}
                spaceBetween={0}
                modules={[Pagination]}
                className="pagePromotion-swiper"
            >
                {products.map((p)=><SwiperSlide key={p.key}><CardRecommendationSlider product={p}/> </SwiperSlide>)}
            </Swiper>
        </>
    );
};

export default RecommendationSlider;