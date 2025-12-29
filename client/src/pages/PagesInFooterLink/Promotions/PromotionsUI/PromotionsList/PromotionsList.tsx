import { IPromotionsInXEelement } from '../../../../../interfaces';
import PromotionsCard from '../PromotionsCard/PromotionsCard';
import './PromotionsList.css';

const PromotionsList = ({ promotions }: IPromotionsInXEelement) => {
  console.log(promotions);

  return (
    <div className="promotions-list">
      {promotions.map((p) => (
        <PromotionsCard key={p.key} promotion={p} />
      ))}
    </div>
  );
};
export default PromotionsList;
