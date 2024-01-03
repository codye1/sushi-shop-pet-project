import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './HomeSlider.css'
import { useGetPromotionsQuery } from '../../../../API';



const HomeSlider = () => {
    const {data:promotions,error:errorPromotions,isLoading:isLoadingPromotions}=useGetPromotionsQuery()
    return (
        <div className="home-slider">
        <div className="slider-cont">
        <Swiper
            style={{ overflow: 'visible'}}
            loop={true}
            spaceBetween={80}
            slidesPerView={1}
            className="home-swiper"
            >
            {
            errorPromotions?
            <div>Ошибка</div>:
            isLoadingPromotions?
            <div>Загрузка</div>:
            promotions? promotions.map((p)=>
                <SwiperSlide className="home-swiper-slide" key={p.key}><img src={p.img} alt="" /></SwiperSlide>
            ):null}
        </Swiper>
        </div>
    </div>
    );
};

export default HomeSlider;