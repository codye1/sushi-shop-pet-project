import { useDispatch } from "react-redux";
import "./ButtonInCardProduct.css"
import { useAppSelector } from "../../../hooks";
import { addProductInBasket, deleteById } from "../../../reducer/basket";
import { IProductInXEelement } from '../../../interfaces';




const ButtonInCardProduct:React.FC<IProductInXEelement> = ({product}) => {

    const dispatch = useDispatch();
    const quantity = useAppSelector((state)=>state.basket.quantityProduct)
    return (
        <div className="button-container">
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
    );
};

export default ButtonInCardProduct;