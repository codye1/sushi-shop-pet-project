import { IProductsInXEelement } from '../../../interfaces';
import './RecommendationSlider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import CardRecommendationSlider from './CardRecommendationSlider/CardRecommendationSlider';

interface IRecommendationSlider extends IProductsInXEelement {
  refs?: string[];
}
const RecommendationSlider: React.FC<IRecommendationSlider> = ({
  products,
  refs,
}) => {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={0}
        modules={[Navigation]}
        navigation={{
          prevEl: refs ? refs[0] : null,
          nextEl: refs ? refs[1] : null,
        }}
        className="pagePromotion-swiper"
      >
        {products.map((p) => (
          <SwiperSlide key={p.key}>
            <CardRecommendationSlider product={p} />{' '}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default RecommendationSlider;
