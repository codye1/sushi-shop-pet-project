import { useState } from 'react';
import './RightCart.css';
import { useAppSelector } from '../../../../hooks';
import TwoButtons from '../../../../components/UI/TwoButtons/TwoButtons';
import bonus from '../../../../icons/Basket/bonus.svg';

const RightCart = () => {
  const [input, setInput] = useState('');
  const basket = useAppSelector((state) => state.basket.basket);
  let priceAllProduct = 0;

  for (const key in basket) {
    priceAllProduct +=
      basket[key].length * basket[key].product.price -
      Math.floor(
        basket[key].product.price * (basket[key].product.discount / 100)
      );
  }

  return (
    <div className="basket-page-right-cont">
      <div className="right-block-basket-page">
        <div className="right-cart-card">
          <div className="cart-card-input">
            <div
              className={`cart-card-input-cont ${input.length > 0 ? `btn-filled-none` : `btn-filled`}`}
            >
              <input
                onChange={(e) => {
                  setInput(e.target.value);
                }}
                id="1"
                type="text"
              />
              <button>Застосувати</button>
            </div>
          </div>
          <div className="cart-card-sum-1">
            <h1>Товари</h1>
          </div>
          <div className="cart-card-sum-2">
            <h1>РАЗОМ {priceAllProduct} грн</h1>
          </div>
          <TwoButtons
            applyTitle="ДОСТАВКА"
            cancelTitle="САМОВИНІС"
            onApply={() => {}}
            onCancel={() => {}}
          />
        </div>
        <div className="bonus">
          <img src={bonus} alt="" />
          <span>34 </span>
          бонусів буде нараховано за замовлення
        </div>
      </div>
    </div>
  );
};

export default RightCart;
