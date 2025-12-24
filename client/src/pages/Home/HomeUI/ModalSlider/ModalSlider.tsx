import { Swiper, SwiperSlide } from 'swiper/react';
import './ModalSlider.css';
import { IPromotionsInXEelement } from '../../../../interfaces';
import CardModalSlider from '../CardModalSlider/CardModalSlider';
import { useState } from 'react';
import type { FC } from 'react';
import { Navigation } from 'swiper/modules';
import ModalPagination from './ModalPagination/ModalPagination';
import Chevron from '../../../../icons/chevron.svg';

interface IModalSlider extends IPromotionsInXEelement {
  closeModal: () => void;
}

const ModalSlider: FC<IModalSlider> = ({ promotions, closeModal }) => {
  const ignoreCloseModal = (event: { stopPropagation: () => void }) => {
    event.stopPropagation();
  };

  const [idActiveSlide, setIdActiveSlide] = useState(1);

  return (
    <>
      <div onClick={closeModal} className="modal-slider">
        <div onClick={ignoreCloseModal} className="modal-slider-container">
          <div onClick={closeModal} className="close-modal">
            <img
              src="https://uzhhorod.sushi-master.ua/img/header/close-white.svg"
              alt="Close icon"
              className="pointer"
            />
          </div>
          <Swiper
            slidesPerView={1}
            loop={true}
            modules={[Navigation]}
            navigation={{
              prevEl: 'div.prev-button-modal.pointer',
              nextEl: 'div.next-button-modal.pointer',
            }}
            onSlideChange={(event) => setIdActiveSlide(event.realIndex + 1)}
            className="main-modal-slider"
          >
            <ModalPagination idActiveSlide={idActiveSlide} />
            {promotions.map((p) => (
              <SwiperSlide key={p.key}>
                <CardModalSlider promotion={p} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div onClick={ignoreCloseModal} className="prev-button-modal pointer">
          <img src={Chevron} alt="" />
        </div>
        <div onClick={ignoreCloseModal} className="next-button-modal pointer">
          <img src={Chevron} alt="" />
        </div>
      </div>
    </>
  );
};

export default ModalSlider;
