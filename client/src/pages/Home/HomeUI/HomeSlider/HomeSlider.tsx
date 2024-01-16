import { Swiper, SwiperSlide } from 'swiper/react';
import './HomeSlider.css'
import { useGetPromotionsQuery } from '../../../../API';
import { useState } from 'react';
import ModalSlider from '../ModalSlider/ModalSlider';



const HomeSlider = () => {
    const {data:promotions,error:errorPromotions,isLoading:isLoadingPromotions}=useGetPromotionsQuery()

    const [modalSliderActive,setModalSliderActive] =useState(false)

    function CloseModalInModal() {
        setModalSliderActive(false)
    }
    return (
        <>
            <div className="home-slider">
                <Swiper
                    style={{ overflow: 'visible'}}
                    loop={true}
                    slidesPerView={1}
                    >
                    {
                    errorPromotions?
                    <div>Ошибка</div>:
                    isLoadingPromotions?
                    <div>Загрузка</div>:
                    promotions? promotions.map((p)=>
                        <SwiperSlide key={p.key}><div onClick={()=>setModalSliderActive(true)} className='slide'><img src={p.imgWide} alt="" /></div></SwiperSlide>
                    ):null}
                </Swiper>

            </div>


            {modalSliderActive && promotions && <ModalSlider closeModal={CloseModalInModal} promotions={promotions}/>}
        </>
    );
};

export default HomeSlider;