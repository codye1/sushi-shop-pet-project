import { useNavigate, useParams } from 'react-router-dom';
import './PageByIdProduct.css';
import { params } from '../../interfaces';
import { useGetProductQuery, useGetProductsByIdsQuery } from '../../API';
import Breadcrumb from '../../components/UI/Breadcrumb/Breadcrumb';
import ListCardConsistsProduct from './UI/ListCardConsistsProduct/ListCardConsistsProduct';

import MainProductView from './UI/MainProductView/MainProductView';
import MainProductViewSkeleton from './UI/MainProductViewSkeleton/MainProductViewSkeleton';
import BackButton from './UI/BackButton/BackButton';
import { useTranslation } from 'react-i18next';

const PageByIdProduct = () => {
  const { t } = useTranslation();
  const params: params = useParams();
  const {
    data: product,
    error: productError,
    isLoading: productLoading,
  } = useGetProductQuery(params.id ? params.id : 'none');
  const {
    data: composedProduct,
    error: composedProductError,
    isLoading: composedProductLoading,
  } = useGetProductsByIdsQuery(product ? product.sklad : ['none']);
  const navigate = useNavigate();

  return (
    <div>
      <div className="pageByIdTovar">
        {productError && composedProductError && <div>{t('common.error')}</div>}

        {productLoading && composedProductLoading && (
          <MainProductViewSkeleton />
        )}
        {product && composedProduct && (
          <div className="container-product-view">
            <BackButton onClick={() => navigate(-1)} />
            <MainProductView product={product} />
            {composedProduct.length > 0 && (
              <ListCardConsistsProduct products={composedProduct} />
            )}
          </div>
        )}
      </div>
      {params.type && product?.title && (
        <Breadcrumb crumbs={[product.type.split(' ')[0], product.title]} />
      )}
    </div>
  );
};

export default PageByIdProduct;
