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
                <Swiper
                    style={{ overflow: 'visible'}}
                    loop={true}
                    lazyPreloadPrevNext={3}
                    slidesPerView={1}
                    >
                    {
                    errorPromotions?
                    <div>Ошибка</div>:
                    isLoadingPromotions?
                    <div>Загрузка</div>:
                    promotions? promotions.map((p)=>
                        <SwiperSlide key={p.key}><div className='slide'><img src={p.imgWide} alt="" /></div></SwiperSlide>
                    ):null}
                </Swiper>
            </div>
    );
};

export default HomeSlider;