import AddProductInBasketButton from "../../AddProductInBasketButton/AddProductInBasketButton";
import "./CardRecommendationSlider.css"
import { IProductInXEelement } from '../../../../interfaces';
import { NavLink } from 'react-router-dom';



const CardRecommendationSlider:React.FC<IProductInXEelement> = ({product}) => {
    let price:number = Number(product.price.replace(/[^0-9]/g,""));
    price -= Math.floor(price*(product.discount/100));

    return (
        <div className="card-recommendation">
        <div className="card-recommendation-top-cont">
            <div className="card-recommendation-img">
                <div className='card-product-basket-img-cont'>
                {<NavLink  to={`/menu/${product.type}/${product.id}`}> <img title={`Страва ${product.title} меню SUSHI MASTER`}  src={product.img} alt="" /></NavLink>}
                </div>
            </div>
            <div className="card-recommendation-title">
                {<NavLink  to={`/menu/${product.type}/${product.id}`}>{product.title}</NavLink>}
                <h2>{product?.harch?.weight}г</h2>
            </div>
        </div>
        <div className="card-recommendation-bottom-cont">
            <div className="card-recommendation-price">
                {product.discount>0? <div className="action">{price} грн&nbsp;<span>{product.price}</span></div> : <span>{product.price}</span>}
            </div>
            <div className="card-recommendation-button">
                    <AddProductInBasketButton product={product}/>
            </div>
        </div>
    </div>
    );
};

export default CardRecommendationSlider;