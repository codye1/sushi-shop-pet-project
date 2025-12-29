import ListCardConsistsProduct from '../ListCardConsistsProduct/ListCardConsistsProduct';
import CardProduct from '../../../../components/UI/ProductList/CardProduct/CardProduct';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import './ComposedList.css';
import { IProductResponse } from '../../../../interfaces';

const ComposedList = ({
  composedProduct,
}: {
  composedProduct: IProductResponse;
}) => {
  return (
    <>
      <div className="back">СЕТ СКЛАДАЄТЬСЯ</div>
      <ListCardConsistsProduct products={composedProduct} />

      <div className="container-product-view">
        <div className="back">Рекомендуємо спробувати</div>
        <div className="pageByIdProduct-swiper-cont">
          <Swiper
            slidesPerView={4}
            style={{ overflow: 'visible' }}
            spaceBetween={16}
            modules={[Pagination]}
            className="pageByIdProduct-swiper"
          >
            {composedProduct.map((p, index) => (
              <SwiperSlide key={`${p.id}-${index}`}>
                {<CardProduct product={p} />}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ComposedList;
