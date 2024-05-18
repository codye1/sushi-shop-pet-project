import "./BasketPage.css"
import {  useAppSelector } from "../../hooks";
import { IProduct } from '../../interfaces';
import RightCart from "./BasketPageUI/RightCart/RightCart";
import LeftBlock from "./BasketPageUI/LeftBlock/LeftBlock";
import BasketEmpty from "./BasketPageUI/BasketEmpty/BasketEmpty";
import { useGetProductsByIdsQuery } from "../../API";
import BasketReccomendationSlider from "./BasketPageUI/BasketReccomendationSlider/BasketReccomendationSlider";
import { useMemo } from "react";
import { calculateAdditions } from "../../reducer/basket";
import { useDispatch } from "react-redux";
const BasketPage = () => {
    const basket = useAppSelector((state)=>state.basket.basket);
    const additionsIds =  useAppSelector((state)=>state.basket.additionsIds)
    const dispatch = useDispatch()
    useMemo(()=>{
        dispatch(calculateAdditions())
    },[basket])

    const {data: additions } = useGetProductsByIdsQuery(Object.keys(additionsIds).length > 0? Object.keys(additionsIds) : ["null"]);

    const products: IProduct[]  = []

    for(const key in basket){
        products.push(basket[key].product)
    }

    const makeUniq = (products: IProduct[], additions: IProduct[] | [] = [] ) => {
        const uniqSet = new Set([...products,...additions]);
        return [...uniqSet];
      }

    const concatedProductsAndAdditions =  makeUniq(products,additions)

    /*

    const basketAdditons = useAppSelector(state => state.basket.basketAdditions)
    const {data:additions} = useGetProductsByIdsQuery(basketAdditons)

    const makeUniq = (arr:  IProductResponse) => {
        const uniqSet = new Set(arr);
        return [...uniqSet];
      }

    const products =  makeUniq(basket)
*/
    return (
    <>
        <div className="basket-page d-flex">
            <div className="container">
                {additions && (products.length>0 || additions.length>1)?
                    <div className="down-block">
                        <LeftBlock products={concatedProductsAndAdditions}/>
                        <RightCart/>
                    </div>:
                        <BasketEmpty/>
                }
            </div>
        </div>
        {products.length>0 && <BasketReccomendationSlider products={products} />}
    </>
    );
};

export default BasketPage;


/*
{additions && (products.length>0 || additions.length>1)?
    <div className="down-block">
        <LeftBlock additions={additions} products={products}/>
        <RightCart/>
    </div>:
        <BasketEmpty/>
} */

//