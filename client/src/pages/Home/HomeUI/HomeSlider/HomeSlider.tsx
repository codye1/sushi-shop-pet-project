import { Swiper, SwiperSlide} from 'swiper/react';
import './HomeSlider.css'
import {  useState } from 'react';
import ModalSlider from '../ModalSlider/ModalSlider';
import { Navigation, Pagination} from 'swiper/modules';
import React from 'react';
import {  IPromotionsInXEelement } from '../../../../interfaces';

const HomeSlider:React.FC<IPromotionsInXEelement> = ({promotions}) => {


    const [modalSliderActive,setModalSliderActive] = useState(false)

    function CloseModalInModal() {
        setModalSliderActive(false)
    }

    return (
        <>
            <div className="home-slider">
                <Swiper
                    style={{ overflow: 'visible'}}
                    loop={true}

                    pagination={true}
                    modules={[Navigation,Pagination]}
                    navigation={{
                        prevEl: "div.prev-button.pointer",
                        nextEl: "div.next-button.pointer",
                      }}
                    slidesPerView={1}
                    >
                    {promotions.map((p)=>
                        <SwiperSlide key={p.key}><div onClick={()=>setModalSliderActive(true)} className='slide'><img src={p.imgWide} alt="" /></div></SwiperSlide>
                    )}
                <div className='prev-button pointer'>
                    <svg width="25" height="25" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5959 12.3224L8.2808 9.00008L11.5959 5.6778L10.5753 4.65723L6.23242 9.00008L10.5753 13.3429L11.5959 12.3224Z" fill="#1D1E28"></path></svg>
                </div>
                <div className='next-button pointer'>
                    <svg width="25" height="25" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.4039 5.67763L9.71895 8.99992L6.4039 12.3222L7.42448 13.3428L11.7673 8.99992L7.42448 4.65706L6.4039 5.67763Z" fill="#1D1E28"></path></svg>
                </div>
                </Swiper>
            </div>
            {modalSliderActive? <ModalSlider closeModal={CloseModalInModal} promotions={promotions}/> : null}
        </>
    );
};

export default HomeSlider;