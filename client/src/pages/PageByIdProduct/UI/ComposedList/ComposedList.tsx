import ListCardConsistsProduct from '../ListCardConsistsProduct/ListCardConsistsProduct';
import CardProduct from '../../../../components/UI/ProductList/CardProduct/CardProduct';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import './ComposedList.css';
import { IProductResponse } from '../../../../interfaces';
import { useTranslation } from 'react-i18next';

const ComposedList = ({
  composedProduct,
}: {
  composedProduct: IProductResponse;
}) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="back">{t('pages.pageByIdProduct.composedTitle')}</div>
      <ListCardConsistsProduct products={composedProduct} />

      <div className="container-product-view">
        <div className="back">
          {t('pages.pageByIdProduct.recommendedTitle')}
        </div>
        <div className="pageByIdProduct-swiper-cont">
          <Swiper
            slidesPerView={4}
            style={{ overflow: 'visible' }}
            spaceBetween={16}
            modules={[Pagination]}
            className="pageByIdProduct-swiper"
          >
            {composedProduct.map((p) => (
              <SwiperSlide key={`${p.id}`}>
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
