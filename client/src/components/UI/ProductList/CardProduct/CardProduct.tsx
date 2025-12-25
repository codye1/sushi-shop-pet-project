import { NavLink } from 'react-router-dom';
import './CardProduct.css';
import LabelsCard from '../../LablesCard/LabelsCard';
import AddProductInBasketButton from '../../AddProductInBasketButton/AddProductInBasketButton';
import { IProductInXEelement } from '../../../../interfaces';
import { useAppDispatch } from '../../../../hooks';
import { setSearchActive } from '../../../../reducer/search';

const CardProduct: React.FC<IProductInXEelement> = ({ product }) => {
  let price: number = product.price;
  price -= Math.floor(price * (product.discount / 100));


  const dispatch = useAppDispatch();

  return (
    <div className="card-product">
      <div className="top-cont">
        {
          <NavLink
            onClick={() => dispatch(setSearchActive(false))}
            to={`/menu/${product.type}/${product.id}`}
          >
            {' '}
            <img
              title={`Страва ${product.title} меню SUSHI MASTER`}
              className="card-img"
              src={product.img}
              alt={product.title}
            />
          </NavLink>
        }
      </div>
      {<LabelsCard labels={product.labels} />}
      <div className="down-cont">
        <div className="cont-weight d-flex space-between">
          <p>{product?.harch?.weight} Г</p>
          <p>{product.attributes}</p>
        </div>
        <div title={`${product.title}`} className="cont-name">
          {
            <NavLink
              onClick={() => dispatch(setSearchActive(false))}
              to={`/menu/${product.type}/${product.id}`}
            >
              {product.title}
            </NavLink>
          }
        </div>
        <div
          title={`/menu/${product.type}/${product.id}`}
          className="cont-description"
        >
          {product.body}
        </div>
        <div className="cont-priceAndButton">
          <div className="price">
            {product.discount > 0 ? (
              <>
                <div className="current-price new-price">{price} грн&nbsp;</div>
                <div className="old-price">{product.price}</div>
              </>
            ) : (
              <span className="current-price">{product.price}</span>
            )}
          </div>
          <div className="cont-button">
            {<AddProductInBasketButton product={product} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
