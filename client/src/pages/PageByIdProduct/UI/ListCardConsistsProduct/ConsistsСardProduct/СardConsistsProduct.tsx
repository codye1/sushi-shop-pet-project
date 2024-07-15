import './ConsistsСardProduct.css';
import { NavLink } from 'react-router-dom';
import { IProductInXEelement } from '../../../../../interfaces';

const ConsistsСardProduct: React.FC<IProductInXEelement> = ({ product }) => {
  return (
    <div className="card-container">
      <div className="card-consists-img">
        <NavLink to={`/menu/${product.type}/${product.id}`}>
          {' '}
          <img
            title={`Страва ${product.title} меню SUSHI MASTER`}
            src={product.img}
            alt=""
          />
        </NavLink>
      </div>
      <div className="card-consists-down-block">
        <div className="price-consists">{product?.harch?.weight} г</div>
        <div className="name-consists">
          {
            <NavLink to={`/menu/${product.type}/${product.id}`}>
              {product.title}
            </NavLink>
          }
        </div>
        <div className="description-consists">{product.body}</div>
      </div>
    </div>
  );
};

export default ConsistsСardProduct;
