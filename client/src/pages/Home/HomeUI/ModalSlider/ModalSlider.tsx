import { Swiper, SwiperSlide } from 'swiper/react';
import "./ModalSlider.css"
import { IPromotionsInXEelement } from '../../../../interfaces';
import CardModalSlider from '../CardModalSlider/CardModalSlider';

interface  IModalSlider extends IPromotionsInXEelement{
    closeModal:()=>void
}

const ModalSlider:React.FC<IModalSlider> = ({promotions,closeModal}) => {


    const handleInnerBlockClick = (event: { stopPropagation: () => void; }) => {
        event.stopPropagation();
      };
    return (
        <div onClick={closeModal} className="modal-slider">
            <div onClick={handleInnerBlockClick} className="modal-slider-container">
                <div onClick={closeModal} className='close-modal'>
                    <img src="https://uzhhorod.sushi-master.ua/img/header/close-white.svg" alt="Close icon" className="pointer"/>
                </div>
                <Swiper
                    spaceBetween={16}
                    loop={true}
                    slidesPerView={1}
                    className='main-modal-slider'
                    >
                    {promotions
                        .map((p)=>
                        <SwiperSlide key={p.key}>
                            <CardModalSlider promotion={p}/>
                        </SwiperSlide>)}
                </Swiper>
            </div>
        </div>
    );
};


export default ModalSlider;