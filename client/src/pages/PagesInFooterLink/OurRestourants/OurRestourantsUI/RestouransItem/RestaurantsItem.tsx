import RedMap from '../../../../../icons/OurRestourants/redMap.svg';
import { IRestourantInXEelement } from '../../../../../interfaces';
import './RestaurantsItem.css';
import { useTranslation } from 'react-i18next';

const Restaurants = ({ restourant }: IRestourantInXEelement) => {
  const { t } = useTranslation();
  return (
    <div className="restourans-item">
      <div className="restourans-title">
        <h1>{restourant.name}</h1>
        <div className="show-on-map">
          <img src={RedMap} alt="" />
          {t('pages.ourRestaurants.item.onMap')}
        </div>
      </div>
      <div className="restourans-addres">
        <p>{restourant.description}</p>
      </div>
      <div className="services">
        <div className="service">
          <p>{t('pages.ourRestaurants.item.takeaway')}</p>
          <h1>
            {t('pages.ourRestaurants.item.hours', {
              from: restourant.timetakeaway[0],
              to: restourant.timetakeaway[1],
            })}
          </h1>
        </div>
        <div className="service">
          <p>{t('pages.ourRestaurants.item.delivery')}</p>
          <h1>
            {t('pages.ourRestaurants.item.hours', {
              from: restourant.timedelivery[0],
              to: restourant.timedelivery[1],
            })}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
