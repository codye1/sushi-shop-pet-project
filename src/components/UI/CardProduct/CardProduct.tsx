import { NavLink } from "react-router-dom";
import { Product } from "../../../API";
import "./CardProduct.css"
import { useAppSelector } from "../../../hooks";
import { useDispatch } from "react-redux";
import { addProductInBasket, deleteById } from "../../../reducer/basket";

type Card={
    product:Product
}

const CardProduct:React.FC<Card>= ({product}) => {
    let price:number = Number(product.price.replace(/[^0-9]/g,""));
    price -= Math.floor(price*(product.action/100));
    const dispatch = useDispatch();
    const quantity = useAppSelector((state)=>state.basket.quantityProduct)

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

                        {!quantity[product.id]?
                        <div onClick={()=>{


                            dispatch(addProductInBasket(product))

                        }} className="button">
                        В КОШИК
                        </div>
                        :
                        <div className="button-after-click">
                            <div onClick={()=>{

                                dispatch(deleteById(product))
                            }} className="add">
                            <svg width="13" height="2" viewBox="0 0 13 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0H12V2H0V0Z" fill="red"></path></svg>
                            </div>
                            {quantity[product.id]} шт
                            <div onClick={()=>{
                                dispatch(addProductInBasket(product))
                            }} className="remove">
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6696 7.36608H7.36605V12.6696H5.59819V7.36608H0.294617V5.59822H5.59819V0.294647H7.36605V5.59822H12.6696V7.36608Z" fill="red" ></path></svg>
                            </div>
                        </div>
                    }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardProduct;