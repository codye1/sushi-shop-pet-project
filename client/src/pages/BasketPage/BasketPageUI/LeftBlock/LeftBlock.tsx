import CardProductBasket from '../CardProductBasket/CardProductBasket';
import { deleteAllElementsFromBasket } from '../../../../reducer/basket';
import { IProductsInXEelement } from '../../../../interfaces';
import './LeftBlock.css';
import { useAppDispatch } from '../../../../hooks';

const LeftBlock = ({ products }: IProductsInXEelement) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="basket-page-left-cont">
        <div className="left-block-title">
          Мої замовлення
          <h1
            onClick={() => {
              dispatch(deleteAllElementsFromBasket());
            }}
          >
            Очистити кошик
          </h1>
        </div>
        {products.map((p) => (
          <CardProductBasket key={p.key} product={p} />
        ))}
      </div>
    </>
  );
};

export default LeftBlock;
