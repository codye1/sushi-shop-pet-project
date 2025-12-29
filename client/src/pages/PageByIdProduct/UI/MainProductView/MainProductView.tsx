import LabelsCard from '../../../../components/UI/LablesCard/LabelsCard';
import AddProductInBasketButton from '../../../../components/UI/AddProductInBasketButton/AddProductInBasketButton';
import { NavLink } from 'react-router-dom';
import { IProductInXEelement } from '../../../../interfaces';
import bonus from '../../../../icons/PageByIdProduct/bonus.svg';
import deliveryTime from '../../../../icons/PageByIdProduct/delivery-time.svg';
import info from '../../../../icons/PageByIdProduct/info.svg';
import './MainProductView.css';
import { Tooltip } from '@mui/material';
import ProductInfo from './ProductInfo/ProductInfo';

const MainProductView = ({ product }: IProductInXEelement) => {
  let price: number = product.price;
  price -= product ? Math.floor(price * (product.discount / 100)) : 0;

  return (
    <div className="main-product-view">
      <div className="img-product-view">
        <div className="container-img">
          <img src={product.img} alt="" />
          <LabelsCard labels={product.labels} />
        </div>
      </div>

      <div className="information-product-view">
        <div className="product-name d-flex align-center">
          {product.title}
          <p> {product.attributes}</p>
        </div>
        <div className="product-food-quality d-flex">
          {product?.harch?.weight} г
          <Tooltip title={<ProductInfo product={product} />} arrow>
            <img src={info} alt="" />
          </Tooltip>
        </div>
        <div className="product-price-button">
          <div className="product-price">
            {product.discount > 0 ? (
              <div className="action">
                {price} грн&nbsp;<span>{product.price}</span>
              </div>
            ) : (
              <span>{product.price}</span>
            )}
          </div>
          <div className="product-button">
            <AddProductInBasketButton product={product} />
          </div>
        </div>
        <div className="product-bonus">
          <div className="amount-bonus">
            <img src={bonus} alt="" />
            27 бонусів буде нараховано за замовлення
          </div>
          <div className="delivery-bonus">
            <img src={deliveryTime} alt="" />
            Доставимо за 45 хв.
            <NavLink to={`/delivery`}>Карта доставки</NavLink>
          </div>
        </div>
        <div className="product-storage">{product.body}</div>
      </div>
    </div>
  );
};

export default MainProductView;
