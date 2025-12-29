import { IProductsInXEelement } from '../../../interfaces';
import NoData from '../NoData/NoData';
import CardProduct from './CardProduct/CardProduct';
import './ProductList.css';

const ProductList = ({ products }: IProductsInXEelement) => {
  return (
    <div className="products-list d-flex">
      <div className="container">
        {products.length > 0 ? (
          <div className="product-list">
            {products.map((p) => (
              <CardProduct key={p.key} product={p} />
            ))}
          </div>
        ) : (
          <NoData />
        )}
      </div>
    </div>
  );
};

export default ProductList;
