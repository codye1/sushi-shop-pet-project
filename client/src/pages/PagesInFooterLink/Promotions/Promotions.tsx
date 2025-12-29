import { useGetPromotionsQuery } from '../../../API';
import Breadcrumb from '../../../components/UI/Breadcrumb/Breadcrumb';
import './Promotions.css';
import PromotionsList from './PromotionsUI/PromotionsList/PromotionsList';
import { useTranslation } from 'react-i18next';

const Promotions = () => {
  const { t } = useTranslation();
  const {
    data: promotions,
    error: errorPromotions,
    isLoading: isLoadingPromotions,
  } = useGetPromotionsQuery();
  return (
    <div>
      <div className="d-flex">
        <Breadcrumb crumbs={[t('pages.promotions.title')]} />
      </div>
      <div className="d-flex">
        <div className="container">
          <h1>{t('pages.promotions.title')}</h1>
          {errorPromotions && <div>{t('common.error')}</div>}
          {isLoadingPromotions && <div>{t('common.loading')}</div>}
          {promotions && <PromotionsList promotions={promotions} />}
        </div>
      </div>
    </div>
  );
};

export default Promotions;
