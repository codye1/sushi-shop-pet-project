import { NavLink } from 'react-router-dom';
import './BasketEmpty.css';
import { useDispatch } from 'react-redux';
import { setBasketPageStatus } from '../../../../reducer/basket';
import cartEmpty from '../../../../icons/Basket/empty-cart.svg';

const BasketEmpty = () => {
  const dispatch = useDispatch();
  return (
    <div className="basket-empty d-flex column center">
      <img src={cartEmpty} alt="" />
      <p>Кошик порожній, додайте що-небудь з меню</p>
      <NavLink
        onClick={() => {
          dispatch(setBasketPageStatus(false));
        }}
        to={'*'}
      >
        В меню
      </NavLink>
    </div>
  );
};

export default BasketEmpty;
