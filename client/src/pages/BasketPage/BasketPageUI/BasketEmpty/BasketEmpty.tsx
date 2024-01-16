import { NavLink } from 'react-router-dom';
import './BasketEmpty.css';
import { useDispatch } from 'react-redux';
import { setBasketPageStatus } from '../../../../reducer/basket';

const BasketEmpty = () => {
    const dispatch = useDispatch()
    return (

        <div className="basket-empty d-flex column center">
            <img src="https://kyiv.sushi-master.ua/img/products/cart-empty.svg" alt="" />
            <p>Кошик порожній, додайте що-небудь з меню</p>
            <NavLink onClick={()=>{dispatch(setBasketPageStatus(false))}} to={"*"}>В меню</NavLink>
        </div>
    );
};

export default BasketEmpty;