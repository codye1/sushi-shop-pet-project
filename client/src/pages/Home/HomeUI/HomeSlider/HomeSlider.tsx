import { Swiper, SwiperSlide } from 'swiper/react';
import './HomeSlider.css';
import { useState } from 'react';
import ModalSlider from '../ModalSlider/ModalSlider';
import { Navigation, Pagination } from 'swiper/modules';

import { IPromotionsInXEelement } from '../../../../interfaces';
import Chevron from '../../../../icons/chevron.svg';

const HomeSlider = ({ promotions }: IPromotionsInXEelement) => {
  const [modalSliderActive, setModalSliderActive] = useState(false);

  function CloseModalInModal() {
    setModalSliderActive(false);
  }

  return (
    <>
      <div className="home-slider">
        <Swiper
          style={{ overflow: 'visible' }}
          loop={true}
          pagination={true}
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: 'div.prev-button.pointer',
            nextEl: 'div.next-button.pointer',
          }}
          slidesPerView={1}
        >
          {promotions.map((p) => (
            <SwiperSlide key={p.key}>
              <div onClick={() => setModalSliderActive(true)} className="slide">
                <img src={p.imgWide} alt={p.title ?? ''} />
              </div>
            </SwiperSlide>
          ))}
          <div className="prev-button pointer">
            <img src={Chevron} alt="" />
          </div>
          <div className="next-button pointer">
            <img src={Chevron} alt="" />
          </div>
        </Swiper>
      </div>
      {modalSliderActive ? (
        <ModalSlider closeModal={CloseModalInModal} promotions={promotions} />
      ) : null}
    </>
  );
};

export default HomeSlider;
