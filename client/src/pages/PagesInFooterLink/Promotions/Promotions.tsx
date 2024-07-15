import { useGetPromotionsQuery } from '../../../API';
import Breadcrumb from '../../../components/UI/Breadcrumb/Breadcrumb';
import './Promotions.css';
import PromotionsList from './PromotionsUI/PromotionsList/PromotionsList';

const Promotions = () => {
  const {
    data: promotions,
    error: errorPromotions,
    isLoading: isLoadingPromotions,
  } = useGetPromotionsQuery();
  return (
    <div>
      <div className="d-flex">
        <Breadcrumb crumbs={['Акції']} />
      </div>
      <div className="d-flex">
        <div className="container">
          <h1>Акції</h1>
          {errorPromotions ? (
            <div>Ошибка</div>
          ) : isLoadingPromotions ? (
            <div>Загрузка</div>
          ) : promotions ? (
            <PromotionsList promotions={promotions} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Promotions;
