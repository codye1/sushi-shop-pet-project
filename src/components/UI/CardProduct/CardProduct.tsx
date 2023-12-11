import { NavLink } from "react-router-dom";
import { Product } from "../../../API";
import "./CardProduct.css"

type Card={
    product:Product
}

const CardProduct:React.FC<Card>= ({product}) => {
    let price:number = Number(product.price.replace(/[^0-9]/g,""));
    price -= Math.floor(price*(product.action/100));

    return (
        <div className="card-product">
            <div className="top-cont">
                {<NavLink to={`/${product.type}/${product.id}`}> <img title={`Страва ${product.title} меню SUSHI MASTER`} className="card-photo" src={product.photo} alt="" /></NavLink>}
            </div>
            <div className="lables">
                            {product.action>0?
                                <div className="discount">
                                    Знижка -{Math.round(product.action)}%
                                </div>
                                :
                                false
                            }
                             {product.gurman?
                                <div className="gourmetsChoice">
                                    Вибір гурманів
                                </div>
                                :
                                false
                            }
                            {product.promotion?
                                <div className="promotion">
                                    Акція
                                </div>
                                :
                                false
                            }
                            {product.rollFree?
                                <div className="rollGift">
                                Рол у подарунок
                                </div>
                            : false}
                        </div>
            <div className="down-cont">
                <div className="cont-weight">
                    {product.harch.weight} Г
                </div>
                <div title={`${product.title}`}  className="cont-name">
                    {product.title}
                </div>
                <div title={`${product.body}`} className="cont-description">
                    {product.body}
                </div>
                <div className="cont-priceAndButton">
                    <div className="price">
                        {product.action>0? <div className="action">{price} грн&nbsp;<span>{product.price}</span></div> : <span>{product.price}</span>}
                    </div>
                    <div className="cont-button">
                        <div className="button">
                            В КОШИК
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardProduct;