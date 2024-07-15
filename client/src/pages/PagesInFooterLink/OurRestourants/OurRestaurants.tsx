import { useState } from 'react';
import './OurRestaurants.css';

import { useGetRestaurantsQuery } from '../../../API';
import Breadcrumb from '../../../components/UI/Breadcrumb/Breadcrumb';
import RestaurantsItem from './OurRestourantsUI/RestouransItem/RestaurantsItem';
import Map from '../../../icons/OurRestourants/map.svg';
import List from '../../../icons/OurRestourants/list.svg';

const OurRestaurants = () => {
  const [onMap, setOnMap] = useState(true);
  const {
    data: restourants,
    error: restourantsError,
    isLoading: restourantsLoading,
  } = useGetRestaurantsQuery();
  return (
    <div>
      <Breadcrumb crumbs={['Наші ресторани | Sushi Master, Ужгород']} />
      <div className="d-flex">
        <div className="container column">
          <div className="page-title our-restaurants d-flex space-between">
            Sushi Master
            <div className="switcher d-flex">
              <div
                onClick={() => {
                  setOnMap(true);
                }}
                className={`switcher-item d-flex ${!onMap && 'select'}`}
              >
                <img src={Map} alt="" />
                <h3>На мапі</h3>
              </div>
              <div
                onClick={() => {
                  setOnMap(false);
                }}
                className={`switcher-item d-flex ${onMap && 'select'}`}
              >
                <img src={List} alt="" />
                <h3>Список</h3>
              </div>
            </div>
          </div>

          {restourantsError ? (
            <div></div>
          ) : restourantsLoading ? (
            <div></div>
          ) : restourants ? (
            onMap ? (
              <div className="our-restourans-onmap">
                <div className="map-view">11111111111111111111111111</div>
                <div className="restourans-list">
                  {restourants.map((r) => (
                    <RestaurantsItem
                      restourant={r}
                      key={restourants.indexOf(r)}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="our-restourans-list">
                {restourants.map((r) => (
                  <RestaurantsItem
                    restourant={r}
                    key={restourants.indexOf(r)}
                  />
                ))}
              </div>
            )
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default OurRestaurants;
