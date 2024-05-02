import React from 'react';
import "./CardProductBasket.css"
import { useAppSelector } from '../../../../hooks';
import { useDispatch } from 'react-redux';
import { addProductInBasket, deleteAllElementsByIdFromBasket, deleteById, setBasketPageStatus } from '../../../../reducer/basket';
import { IProductInXEelement } from '../../../../interfaces';
import { NavLink } from 'react-router-dom';
import minus from '../../../../icons/Basket/minus.svg'
import plus from '../../../../icons/Basket/plus.svg'
import Remove from '../../../../icons/Basket/Remove';

const CardProductBasket:React.FC<IProductInXEelement> = ({product}) => {
    let price:number = product.price;
    price -= Math.floor(price*(product.discount/100));
    const quantity = useAppSelector((state)=>state.basket.quantityProduct)
    const overNormAdditions = useAppSelector((state)=>state.basket.quantityOverNormAdditions)

    const dispatch = useDispatch()
    return (
    <div className='card-product-basket'>
        <div className='card-product-basket-container'>
            <div className='card-product-basket-left-cont'>
                <div className='card-product-basket-img-cont'>
                {<NavLink onClick={()=>{dispatch(setBasketPageStatus(false))}} to={`/menu/${product.type}/${product.id}`}> <img title={`Страва ${product.title} меню SUSHI MASTER`} src={product.img} alt="" /></NavLink>}
                </div>
                <div className='card-product-basket-info-cont'>
                {<NavLink className="d-flex" onClick={()=>{dispatch(setBasketPageStatus(false))}} to={`/menu/${product.type}/${product.id}`}><h1>{product.title}</h1> <p>{product.attributes}</p></NavLink>}
                    <span>{product?.harch?.weight} г</span>
                </div>
            </div>
            <div className='card-product-basket-right-cont'>
                <div className='card-product-basket-add-delete-button-cont'>
                    <div onClick={()=>{dispatch(deleteById(product))}} className='remove'>
                        <img src={minus} alt="" />
                    </div>
                    <strong>{quantity[product.id]} шт</strong>
                    <div onClick={()=>{dispatch(addProductInBasket(product))}} className='add'>
                        <img src={plus} alt="" />
                    </div>
                </div>
                <div className='card-product-basket-price-cont'>
                    {product.type=="addition"?
                        <>
                            {overNormAdditions[product.id]>0?
                                <strong>{price}</strong>:
                                <strong style={{color:"green"}}>безкоштовно</strong>
                            }
                        </>
                    :product.discount>0?
                        <div className="action-basket">
                        {price} грн&nbsp;<span>{product.price}</span>
                        </div>:
                        <span> <strong>{product.price}</strong></span>
                    }
                </div>
                <div onClick={()=>{dispatch(deleteAllElementsByIdFromBasket(product))}} className='card-product-basket-delete-button-cont'>
                    <Remove/>
                </div>
            </div>
        </div>
    </div>
    );
};

export default CardProductBasket;