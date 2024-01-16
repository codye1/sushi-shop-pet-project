import { useDispatch } from "react-redux";
import CardProductBasket from "../CardProductBasket/CardProductBasket";
import {deleteAllElementsFromBasket } from "../../../../reducer/basket";
import { IProductsInXEelement } from "../../../../interfaces";
import { useAppSelector } from "../../../../hooks";
import { useGetProductsByIdsQuery } from "../../../../API";
import "./LeftBlock.css"



const LeftBlock:React.FC<IProductsInXEelement> = ({products}) => {

    const basketAdditons=useAppSelector((state)=>state.basket.basketAdditions)
    const {data:additions,error,isLoading}=useGetProductsByIdsQuery(basketAdditons)
    const dispatch = useDispatch()
    return (
        <>
        <div className="basket-page-left-cont">
            <div className="left-block-title">
                Мої замовлення
                <h1 onClick={()=>{dispatch(deleteAllElementsFromBasket())}}>Очистити кошик</h1>
            </div>
            {products.map((p)=><CardProductBasket key={p.key} product={p} />)}
            {error?<div></div>:isLoading?<div></div>:additions?additions.map((a)=><CardProductBasket key={a.key} product={a} />):null}
        </div>
        </>
    );
};

export default LeftBlock;