import { useDispatch } from "react-redux";
import "./AddProductInBasketButton.css"
import { useAppSelector } from "../../../hooks";
import { addProductInBasket, deleteById } from "../../../reducer/basket";
import { IProductInXEelement } from '../../../interfaces';
import plus from "../../../icons/AddProductInBasketButton/plus.svg"
import minus from "../../../icons/AddProductInBasketButton/minus.svg"
import { useTranslation } from "react-i18next";


const AddProductInBasketButton:React.FC<IProductInXEelement> = ({product}) => {
    const dispatch = useDispatch();
    const quantity = useAppSelector((state)=>state.basket.quantityProduct)

    const {t} = useTranslation()

    return (
        <div className="button-container">
             {!quantity[product.id]?
                <div onClick={()=>{
                    dispatch(addProductInBasket(product))
                }} className="button d-flex align-center">
                    {t("components.AddProductInBasketButton.title")}
                </div>
                :
                <div className="button-after-click">
                    <div onClick={()=>{
                        dispatch(deleteById(product))
                    }} className="remove">
                        <img src={minus} alt="" />
                    </div>
                    {quantity[product.id]} шт
                    <div onClick={()=>{
                        dispatch(addProductInBasket(product))
                    }} className="add">
                        <img src={plus} alt="" />
                    </div>
                </div>
            }
        </div>
    );
};

export default AddProductInBasketButton;