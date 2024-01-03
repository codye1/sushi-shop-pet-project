import { IPromotionInXEelement } from "../../../../../interfaces";
import "./PromotionsCard.css";

const PromotionsCard:React.FC<IPromotionInXEelement> = ({promotion}) => {
    return (
        <div className="promotion-card">
            <a className="promotion-card-img" href={`/promotions/${promotion.id}`}><img src={promotion.img} alt="" /></a>
            <div className="promotion-text">
                <div className="promotion-title">
                    {promotion.title}
                </div>
                <div className="promotion-description">
                    {promotion.description}
                </div>
            </div>
        </div>
    );
};

export default PromotionsCard;