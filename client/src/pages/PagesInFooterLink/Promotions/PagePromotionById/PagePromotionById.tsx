import './PagePromotionById.css';
import { useParams } from 'react-router-dom';
import { params } from '../../../../interfaces';
import {
  useGetProductsByIdsQuery,
  useGetPromotionByIdQuery,
} from '../../../../API';
import Breadcrumb from '../../../../components/UI/Breadcrumb/Breadcrumb';
import RecommendationSlider from '../../../../components/UI/RecommendationSlider/RecommendationSlider';
import { useTranslation } from 'react-i18next';
import DOMPurify from 'dompurify';

const PagePromotionById = () => {
  const { t } = useTranslation();
  const params: params = useParams();
  const {
    data: promotion,
    error: promotionError,
    isLoading: promotionLoading,
  } = useGetPromotionByIdQuery(`${params.id ? params.id : ''}`);
  const { data: products } = useGetProductsByIdsQuery(
    promotion?.productInPromotion ? promotion.productInPromotion : ['']
  );

  return (
    <div>
      {promotionError && <div>{t('common.error')}</div>}
      {promotionLoading && <div>{t('common.loading')}</div>}
      {promotion && (
        <div className="promotion-id">
          <div className="d-flex">
            <div className="container column">
              <div className="promotion-img">
                <img src={promotion.imgWide} alt="" />
              </div>
              <div className="promotion-html">
                <h1>{promotion.title}</h1>
                <div
                  className="html"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(promotion.html, {
                      ALLOWED_TAGS: ['p'],
                    }),
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="d-flex">
            <div className="container">
              <div className="promotion-html">
                {promotion.productInPromotion.length == 0 ? (
                  <a className="promotion-button" href="">
                    <span>{t('common.actions.go')}</span>
                  </a>
                ) : (
                  products && <RecommendationSlider products={products} />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {promotion && <Breadcrumb crumbs={['promotions', promotion.title]} />}
    </div>
  );
};

export default PagePromotionById;
