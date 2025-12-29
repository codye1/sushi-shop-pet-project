import { IProductsInXEelement } from '../../../../interfaces';
import ConsistsСardProduct from './ConsistsСardProduct/СardConsistsProduct';
import './ListCardConsistsProduct.css';

const ListCardConsistsProduct = ({ products }: IProductsInXEelement) => {
  return (
    <div className="list-consists-container">
      {products.map((p) => (
        <ConsistsСardProduct key={`${p.id}`} product={p} />
      ))}
    </div>
  );
};

export default ListCardConsistsProduct;
