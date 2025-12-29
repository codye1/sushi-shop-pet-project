import { useParams } from 'react-router-dom';
import './PageAllProductInType.css';
import ProductList from '../../components/UI/ProductList/ProductList';
import { useGetProductsByTypeQuery } from '../../API';
import { IProduct } from '../../interfaces';
import { useEffect, useState } from 'react';
import FilterAndSortModal, {
  IFormFilterAndSort,
} from './FilterAndSortModal/FilterAndSortModal';
import Breadcrumb from '../../components/UI/Breadcrumb/Breadcrumb';
import SekeletonCardProduct from '../../components/UI/SkeletonCardProduct/SekeletonCardProduct';
import { useFilter } from './useFilter';
import { useTranslation } from 'react-i18next';

type NavbarKeys =
  | 'sets'
  | 'roles'
  | 'promotion'
  | 'sushi'
  | 'california'
  | 'gourmetschoise'
  | 'hotsAndSalads'
  | 'philadelphia'
  | 'soups'
  | 'desserts'
  | 'drinks'
  | 'addition';

const PageAllProductInType = () => {
  const { t } = useTranslation();
  const params = useParams();
  const {
    data: dataProducts,
    error: productsError,
    isLoading: productsLoading,
  } = useGetProductsByTypeQuery(`${params ? params.type : ''}`);
  const [products, setProducts] = useState(dataProducts && [...dataProducts]);
  const [labels, setlabels] = useState<string[]>(['']);
  const [modalVissible, setModalVissible] = useState(false);
  const [formFiltrAndSort, setFormaFiltra] = useState<IFormFilterAndSort>({
    // default value
    price: '1',
    weight: '4',
    labels: [],
  });

  const filtrate = useFilter();

  const applyForm = () => {
    setModalVissible(false);
    if (dataProducts && products) {
      filtrate(formFiltrAndSort, dataProducts, setProducts);
    }
  };

  // Функция для обновления данных в родительском компоненте
  const updateDataArray = (newData: IFormFilterAndSort) => {
    setFormaFiltra(newData);
    setModalVissible(false);
  };

  useEffect(() => {
    setProducts(dataProducts && [...dataProducts]);
  }, [dataProducts]);

  function getAlllabelsLabels(products: IProduct[]) {
    const FilteredProducts = products && [...products];
    const labels = new Set();
    for (let i = 0; i < FilteredProducts.length; i++) {
      for (let k = 0; k < FilteredProducts[i].labels.length; k++) {
        labels.add(FilteredProducts[i].labels[k].title);
      }
    }
    setlabels(Array.from(labels) as string[]);
  }

  return (
    <div>
      {productsError && <div>{t('common.error')}</div>}
      {productsLoading && <SekeletonCardProduct />}
      {products && (
        <div>
          <div className="d-flex">
            <div className="container">
              <div className="page-title d-flex space-between align-center">
                {params.type
                  ? t(`header.navbar.${params.type as NavbarKeys}`)
                  : ''}
                <div
                  onClick={() => {
                    setModalVissible(true);
                    getAlllabelsLabels(products);
                  }}
                  className="button-open-modal-filter d-flex space-between pointer"
                >
                  <img
                    src="https://kyiv.sushi-master.ua/img/products/filters.svg"
                    alt=""
                  />
                  {t('pages.menu.filterAndSort')}
                </div>
              </div>
            </div>
          </div>
          {modalVissible && (
            <FilterAndSortModal
              applyForm={applyForm}
              onUpdateData={updateDataArray}
              labels={labels}
              ParentFormaFiltra={formFiltrAndSort}
            />
          )}
          <ProductList products={products} />
        </div>
      )}

      {params.type && <Breadcrumb crumbs={[params.type]} />}
    </div>
  );
};

export default PageAllProductInType;
