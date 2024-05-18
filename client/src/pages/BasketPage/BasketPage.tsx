import "./BasketPage.css"
import { useAppSelector } from "../../hooks";
import { IProductResponse } from '../../interfaces';
import RightCart from "./BasketPageUI/RightCart/RightCart";
import LeftBlock from "./BasketPageUI/LeftBlock/LeftBlock";
import BasketEmpty from "./BasketPageUI/BasketEmpty/BasketEmpty";
import { useGetProductsByIdsQuery } from "../../API";
import BasketReccomendationSlider from "./BasketPageUI/BasketReccomendationSlider/BasketReccomendationSlider";
const BasketPage = () => {
    const basket = useAppSelector((state)=>state.basket.basket);
    const basketAdditons = useAppSelector(state => state.basket.basketAdditions)
    const {data:additions} = useGetProductsByIdsQuery(basketAdditons)

    const makeUniq = (arr:  IProductResponse) => {
        const uniqSet = new Set(arr);
        return [...uniqSet];
      }

    const products =  makeUniq(basket)

    return (
    <>
        <div className="basket-page d-flex">
            <div className="container">
                {additions && (products.length>0 || additions.length>1)?
                    <div className="down-block">
                        <LeftBlock additions={additions} products={products}/>
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