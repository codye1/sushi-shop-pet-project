import "./BasketPage.css"
import {  useAppSelector } from "../../hooks";
import { IProduct } from '../../interfaces';
import RightCart from "./BasketPageUI/RightCart/RightCart";
import LeftBlock from "./BasketPageUI/LeftBlock/LeftBlock";
import BasketEmpty from "./BasketPageUI/BasketEmpty/BasketEmpty";
import { useGetProductsByIdsQuery } from "../../API";
import BasketReccomendationSlider from "./BasketPageUI/BasketReccomendationSlider/BasketReccomendationSlider";
import { useEffect } from "react";
import { calculateAdditions } from "../../reducer/basket";
import { useDispatch } from "react-redux";
const BasketPage = () => {
    const basket = useAppSelector((state)=>state.basket.basket);
    const additionsIds =  useAppSelector((state)=>state.basket.additionsIds)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(calculateAdditions())
    },[basket , dispatch])

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
