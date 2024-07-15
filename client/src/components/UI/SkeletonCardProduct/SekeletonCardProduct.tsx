import { Skeleton } from '@mui/material';
import '../ProductList/CardProduct/CardProduct.css';
import './SekeletonCardProduct.css';

const SekeletonCardProduct = () => {
  return (
    <div className="products-list d-flex">
      <div className="container">
        <div className="product-list-skeleton">
          <div className="card-product-skeleton">
            <Skeleton variant="rounded" height={'220px'} width={'100%'} />
            <div className="down-cont-skeleton">
              <Skeleton variant="text" height={'30px'} width={'25%'} />
              <Skeleton variant="text" height={'30px'} width={'50%'} />
              <Skeleton variant="text" height={'30px'} width={'100%'} />
              <div className="skeleton-price-button d-flex space-between align-center">
                <Skeleton variant="text" height={'30px'} width={'45%'} />
                <Skeleton variant="text" height={'80px'} width={'45%'} />
              </div>
            </div>
          </div>
          <div className="card-product-skeleton">
            <Skeleton variant="rounded" height={'220px'} width={'100%'} />
            <div className="down-cont-skeleton">
              <Skeleton variant="text" height={'30px'} width={'25%'} />
              <Skeleton variant="text" height={'30px'} width={'50%'} />
              <Skeleton variant="text" height={'30px'} width={'100%'} />
              <div className="skeleton-price-button d-flex space-between align-center">
                <Skeleton variant="text" height={'30px'} width={'45%'} />
                <Skeleton variant="text" height={'80px'} width={'45%'} />
              </div>
            </div>
          </div>
          <div className="card-product-skeleton">
            <Skeleton variant="rounded" height={'220px'} width={'100%'} />
            <div className="down-cont-skeleton">
              <Skeleton variant="text" height={'30px'} width={'25%'} />
              <Skeleton variant="text" height={'30px'} width={'50%'} />
              <Skeleton variant="text" height={'30px'} width={'100%'} />
              <div className="skeleton-price-button d-flex space-between align-center">
                <Skeleton variant="text" height={'30px'} width={'45%'} />
                <Skeleton variant="text" height={'80px'} width={'45%'} />
              </div>
            </div>
          </div>
          <div className="card-product-skeleton">
            <Skeleton variant="rounded" height={'220px'} width={'100%'} />
            <div className="down-cont-skeleton">
              <Skeleton variant="text" height={'30px'} width={'25%'} />
              <Skeleton variant="text" height={'30px'} width={'50%'} />
              <Skeleton variant="text" height={'30px'} width={'100%'} />
              <div className="skeleton-price-button d-flex space-between align-center">
                <Skeleton variant="text" height={'30px'} width={'45%'} />
                <Skeleton variant="text" height={'80px'} width={'45%'} />
              </div>
            </div>
          </div>
          <div className="card-product-skeleton">
            <Skeleton variant="rounded" height={'220px'} width={'100%'} />
            <div className="down-cont-skeleton">
              <Skeleton variant="text" height={'30px'} width={'25%'} />
              <Skeleton variant="text" height={'30px'} width={'50%'} />
              <Skeleton variant="text" height={'30px'} width={'100%'} />
              <div className="skeleton-price-button d-flex space-between align-center">
                <Skeleton variant="text" height={'30px'} width={'45%'} />
                <Skeleton variant="text" height={'80px'} width={'45%'} />
              </div>
            </div>
          </div>
          <div className="card-product-skeleton">
            <Skeleton variant="rounded" height={'220px'} width={'100%'} />
            <div className="down-cont-skeleton">
              <Skeleton variant="text" height={'30px'} width={'25%'} />
              <Skeleton variant="text" height={'30px'} width={'50%'} />
              <Skeleton variant="text" height={'30px'} width={'100%'} />
              <div className="skeleton-price-button d-flex space-between align-center">
                <Skeleton variant="text" height={'30px'} width={'45%'} />
                <Skeleton variant="text" height={'80px'} width={'45%'} />
              </div>
            </div>
          </div>{' '}
          <div className="card-product-skeleton">
            <Skeleton variant="rounded" height={'220px'} width={'100%'} />
            <div className="down-cont-skeleton">
              <Skeleton variant="text" height={'30px'} width={'25%'} />
              <Skeleton variant="text" height={'30px'} width={'50%'} />
              <Skeleton variant="text" height={'30px'} width={'100%'} />
              <div className="skeleton-price-button d-flex space-between align-center">
                <Skeleton variant="text" height={'30px'} width={'45%'} />
                <Skeleton variant="text" height={'80px'} width={'45%'} />
              </div>
            </div>
          </div>{' '}
          <div className="card-product-skeleton">
            <Skeleton variant="rounded" height={'220px'} width={'100%'} />
            <div className="down-cont-skeleton">
              <Skeleton variant="text" height={'30px'} width={'25%'} />
              <Skeleton variant="text" height={'30px'} width={'50%'} />
              <Skeleton variant="text" height={'30px'} width={'100%'} />
              <div className="skeleton-price-button d-flex space-between align-center">
                <Skeleton variant="text" height={'30px'} width={'45%'} />
                <Skeleton variant="text" height={'80px'} width={'45%'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SekeletonCardProduct;
