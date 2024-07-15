import { useGetProductsByIdsQuery } from '../../../../API';
import RecommendationSlider from '../../../../components/UI/RecommendationSlider/RecommendationSlider';
import { IPromotionInXEelement } from '../../../../interfaces';
import './CardModalSlider.css';

const CardModalSlider: React.FC<IPromotionInXEelement> = ({ promotion }) => {
  const { data: products } = useGetProductsByIdsQuery(
    promotion.productInPromotion ? promotion.productInPromotion : ['']
  );

  return (
    <div className="modal-slide">
      <img className="img" src={promotion.imgWide} alt="" />
      <div className="modal-slide-bottom-block">
        <div className="slide-content">
          <h1>{promotion.title}</h1>
          <div className="slide-description-button">
            <p>{promotion.description}</p>
            <a href={`/promotions/${promotion.id}`}>ЧИТАТИ ДАЛІ</a>
          </div>
          <div className="modal-slider-in-slider column">
            {products && products.length > 0 ? (
              <>
                <RecommendationSlider products={products} />
                {promotion.promotionalCode ? (
                  <a
                    href={`/promotions/${promotion.id}`}
                    className="modal-slider-button"
                  >
                    Застосувати промокод
                  </a>
                ) : (
                  <a
                    href={`/promotions/${promotion.id}`}
                    className="modal-slider-button"
                  >
                    Детальніше
                  </a>
                )}
              </>
            ) : (
              <a
                href={`/promotions/${promotion.id}`}
                className="modal-slider-button"
              >
                Перейти
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardModalSlider;
