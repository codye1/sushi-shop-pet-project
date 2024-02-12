import { Swiper, SwiperSlide} from 'swiper/react';
import "./ModalSlider.css"
import { IPromotionsInXEelement } from '../../../../interfaces';
import CardModalSlider from '../CardModalSlider/CardModalSlider';
import React, { useState } from 'react';
import { Navigation } from 'swiper/modules';
import ModalPagination from './ModalPagination/ModalPagination';
interface  IModalSlider extends IPromotionsInXEelement{
    closeModal:()=>void
}

const ModalSlider:React.FC<IModalSlider> = ({promotions,closeModal}) => {


    const ignoreCloseModal = (event: { stopPropagation: () => void; }) => {
        event.stopPropagation();
      };

    const [idActiveSlide,setIdActiveSlide] = useState(1)

    return (
    <>
        <div onClick={closeModal} className="modal-slider">
            <div onClick={ignoreCloseModal} className="modal-slider-container">
                <div onClick={closeModal} className='close-modal'>
                    <img src="https://uzhhorod.sushi-master.ua/img/header/close-white.svg" alt="Close icon" className="pointer"/>
                </div>
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    modules={[Navigation]}
                    navigation={{
                        prevEl: "div.prev-button-modal.pointer",
                        nextEl: "div.next-button-modal.pointer",
                      }}
                    onSlideChange={(event) => setIdActiveSlide(event.realIndex+1)}
                    className='main-modal-slider'
                    >
                    <ModalPagination idActiveSlide={idActiveSlide}/>
                    {promotions
                        .map((p)=>
                        <SwiperSlide key={p.key}>
                            <CardModalSlider promotion={p}/>
                        </SwiperSlide>)}

                </Swiper>
            </div>
            <div onClick={ignoreCloseModal} className='prev-button-modal pointer'>
                <svg width="25" height="25" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5959 12.3224L8.2808 9.00008L11.5959 5.6778L10.5753 4.65723L6.23242 9.00008L10.5753 13.3429L11.5959 12.3224Z" fill="#1D1E28"></path></svg>
                </div>
            <div onClick={ignoreCloseModal} className='next-button-modal pointer'>
                <svg width="25" height="25" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.4039 5.67763L9.71895 8.99992L6.4039 12.3222L7.42448 13.3428L11.7673 8.99992L7.42448 4.65706L6.4039 5.67763Z" fill="#1D1E28"></path></svg>
            </div>
        </div>

    </>
    );
};


export default ModalSlider;