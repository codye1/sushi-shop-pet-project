import { useDispatch } from "react-redux";
import CardProductBasket from "../CardProductBasket/CardProductBasket";
import {deleteAllElementsFromBasket, getAllPriceInProduct } from "../../../../reducer/basket";
import { IProduct, IProductsInXEelement } from "../../../../interfaces";
import "./LeftBlock.css"

interface ILeftBlock extends IProductsInXEelement{
    additions:IProduct[]
}


const LeftBlock:React.FC<ILeftBlock> = ({products,additions}) => {
    const dispatch = useDispatch()
    dispatch(getAllPriceInProduct(additions))


    return (
        <>
        <div className="basket-page-left-cont">
            <div className="left-block-title">
                Мої замовлення
                <h1 onClick={()=>{dispatch(deleteAllElementsFromBasket())}}>Очистити кошик</h1>
            </div>
            {products.map((p)=><CardProductBasket key={p.key} product={p} />)}
            {additions.map((a)=><CardProductBasket key={a.key} product={a} />)}
        </div>
        </>
    );
};

export default LeftBlock;