import React from 'react';
import "./CardProductBasket.css"
import { useAppSelector } from '../../../../hooks';
import { useDispatch } from 'react-redux';
import { addProductInBasket, deleteAllElementsByIdFromBasket, deleteById, setBasketPageStatus } from '../../../../reducer/basket';
import { IProductInXEelement } from '../../../../interfaces';
import { NavLink } from 'react-router-dom';


const CardProductBasket:React.FC<IProductInXEelement> = ({product}) => {
    let price:number = Number(product.price.replace(/[^0-9]/g,""));
    price -= Math.floor(price*(product.action/100));
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
                {<NavLink onClick={()=>{dispatch(setBasketPageStatus(false))}} to={`/menu/${product.type}/${product.id}`}><h1>{product.title}</h1></NavLink>}
                    <span>{product?.harch?.weight} г</span>
                </div>
            </div>
            <div className='card-product-basket-right-cont'>
                <div className='card-product-basket-add-delete-button-cont'>
                    <div onClick={()=>{dispatch(deleteById(product))}} className='remove'>
                        <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0H12V2H0V0Z" fill="black"></path></svg>
                    </div>
                    <strong>{quantity[product.id]} шт</strong>
                    <div onClick={()=>{dispatch(addProductInBasket(product))}} className='add'>
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M12.6696 7.36608H7.36605V12.6696H5.59819V7.36608H0.294617V5.59822H5.59819V0.294647H7.36605V5.59822H12.6696V7.36608Z" fill="black" ></path></svg>
                    </div>
                </div>
                <div className='card-product-basket-price-cont'>
                    {product.type=="addition"?
                        <div>
                            {overNormAdditions[product.id]>0?
                                <strong>{price*overNormAdditions[product.id]}</strong>:
                                <strong style={{color:"green"}}>безкоштовно</strong>
                            }
                        </div>
                    :product.action>0?
                        <div className="action-basket">
                        {price} грн&nbsp;<span>{product.price}</span>
                        </div>:
                        <span> <strong>{product.price}</strong></span>
                    }
                </div>
                <div onClick={()=>{dispatch(deleteAllElementsByIdFromBasket(product))}} className='card-product-basket-delete-button-cont'>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M6.2539 1.0494C6.47357 0.829728 6.82973 0.829728 7.0494 1.0494C7.26907 1.26907 7.26907 1.62522 7.0494 1.84489L4.7955 4.0988L7.0494 6.3527C7.26907 6.57237 7.26907 6.92852 7.0494 7.14819C6.82973 7.36786 6.47357 7.36786 6.2539 7.14819L4 4.89429L1.7461 7.14819C1.52643 7.36786 1.17027 7.36786 0.950602 7.14819C0.730933 6.92852 0.730933 6.57237 0.950602 6.3527L3.2045 4.0988L0.950602 1.84489C0.730932 1.62522 0.730933 1.26907 0.950602 1.0494C1.17027 0.829728 1.52643 0.829728 1.7461 1.0494L4 3.3033L6.2539 1.0494Z" fill="#484848" ></path></svg>
                </div>
            </div>
        </div>
    </div>
    );
};

export default CardProductBasket;