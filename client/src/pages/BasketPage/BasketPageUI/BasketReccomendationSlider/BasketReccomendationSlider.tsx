import RecommendationSlider from '../../../../components/UI/RecommendationSlider/RecommendationSlider';

import { IProductsInXEelement } from '../../../../interfaces';
import './BasketReccomendationSlider.css';

const BasketReccomendationSlider = ({ products }: IProductsInXEelement) => {
  return (
    <div className="d-flex">
      <div className="container column">
        <div className="page-title d-flex space-between">
          Рекомендуємо спробувати
          <div className="d-flex">
            <div className="prev-button-basket pointer">
              <svg
                width="25"
                height="25"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5959 12.3224L8.2808 9.00008L11.5959 5.6778L10.5753 4.65723L6.23242 9.00008L10.5753 13.3429L11.5959 12.3224Z"
                  fill="#1D1E28"
                ></path>
              </svg>
            </div>
            <div className="next-button-basket pointer">
              <svg
                width="25"
                height="25"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.4039 5.67763L9.71895 8.99992L6.4039 12.3222L7.42448 13.3428L11.7673 8.99992L7.42448 4.65706L6.4039 5.67763Z"
                  fill="#1D1E28"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="pageByIdProduct-swiper-cont">
          <RecommendationSlider
            refs={[
              'div.prev-button-basket.pointer',
              'div.next-button-basket.pointer',
            ]}
            products={products}
          />
        </div>
      </div>
    </div>
  );
};

export default BasketReccomendationSlider;
