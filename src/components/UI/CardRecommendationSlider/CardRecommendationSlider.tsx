
import { IProductInXEelement } from "../../../Interfaces";
import ButtonInCardProduct from "../ButtonInCardProduct/ButtonInCardProduct";
import "./CardRecommendationSlider.css"



const CardRecommendationSlider:React.FC<IProductInXEelement> = ({product}) => {
    let price:number = Number(product.price.replace(/[^0-9]/g,""));
    price -= Math.floor(price*(product.action/100));
    return (
        <div className="card-recommendation">
        <div className="card-recommendation-top-cont">
            <div className="card-recommendation-img">
                <div className='card-product-basket-img-cont'>
                    <img src={product.photo} alt="" />
                </div>
            </div>
            <div className="card-recommendation-title">
                <h1>{product.title}</h1>
                <h2>{product.harch.weight}г</h2>
            </div>
        </div>
        <div className="card-recommendation-bottom-cont">
            <div className="card-recommendation-price">
                {product.action>0? <div className="action">{price} грн&nbsp;<span>{product.price}</span></div> : <span>{product.price}</span>}
            </div>
            <div className="card-recommendation-button">
                    <ButtonInCardProduct product={product}/>
            </div>
        </div>
    </div>
    );
};

export default CardRecommendationSlider;