import { useDispatch } from 'react-redux';
import './AddProductInBasketButton.css';
import { useAppSelector } from '../../../hooks';
import { addProductInBasket, deleteById } from '../../../reducer/basket';
import { IProductInXEelement } from '../../../interfaces';
import plus from '../../../icons/AddProductInBasketButton/plus.svg';
import minus from '../../../icons/AddProductInBasketButton/minus.svg';
import { useTranslation } from 'react-i18next';

const AddProductInBasketButton = ({ product }: IProductInXEelement) => {
  const dispatch = useDispatch();
  const basket = useAppSelector((state) => state.basket.basket);

  const { t } = useTranslation();

  return (
    <div className="button-container">
      {basket[product.id] && basket[product.id].length > 0 ? (
        <div className="button-after-click">
          <div
            onClick={() => {
              dispatch(deleteById(product));
            }}
            className="remove"
          >
            <img src={minus} alt="" />
          </div>
          {basket[product.id].length} шт
          <div
            onClick={() => {
              dispatch(addProductInBasket(product));
            }}
            className="add"
          >
            <img src={plus} alt="" />
          </div>
        </div>
      ) : (
        <div
          onClick={() => {
            dispatch(addProductInBasket(product));
          }}
          className="button d-flex align-center"
        >
          {t('components.AddProductInBasketButton.title')}
        </div>
      )}
    </div>
  );
};

export default AddProductInBasketButton;
