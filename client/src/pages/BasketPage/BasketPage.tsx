import "./BasketPage.css"
import { useAppSelector } from "../../hooks";
import { IProductResponse } from '../../interfaces';
import RightCart from "./BasketPageUI/RightCart/RightCart";
import LeftBlock from "./BasketPageUI/LeftBlock/LeftBlock";
import BasketEmpty from "./BasketPageUI/BasketEmpty/BasketEmpty";
import RecommendationSlider from "../../components/UI/RecommendationSlider/RecommendationSlider";

const BasketPage = () => {
    const basket = useAppSelector((state)=>state.basket.basket);
    const makeUniq = (arr:  IProductResponse | undefined) => {
        const uniqSet = new Set(arr);
        return [...uniqSet];
      }
    const products =  makeUniq(basket)
    return (
    <>
        <div className="basket-page d-flex">
            <div className="container">
                {products.length>0?
                <div className="down-block">
                    <LeftBlock products={products}/>
                    <RightCart/>
                </div>:
                    <BasketEmpty/>
                }
            </div>
        </div>
        <div>
            {products.length>0?
            <div className="container-product-view">
                <div className="back">
                    Рекомендуємо спробувати
                </div>
                <div className="pageByIdProduct-swiper-cont">
                    <RecommendationSlider products={products}/>
                </div>
            </div>:
            null
        }
        </div>
    </>
    );
};

export default BasketPage;