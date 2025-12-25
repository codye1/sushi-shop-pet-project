import Home from '../../pages/Home/Home';
import PagePromotionById from '../../pages/PagesInFooterLink/Promotions/PagePromotionById/PagePromotionById';
import PageAllProductInType from '../../pages/PageAllProductInType/PageAllProductInType';
import PageByIdProduct from '../../pages/PageByIdProduct/PageByIdProduct';
import BasketPage from '../../pages/BasketPage/BasketPage';
import About from '../../pages/PagesInFooterLink/About/About';
import Promotions from '../../pages/PagesInFooterLink/Promotions/Promotions';
import Delivery from '../../pages/PagesInFooterLink/Delivery/Delivery';
import OurRestaurants from '../../pages/PagesInFooterLink/OurRestourants/OurRestaurants';
import Privacy from '../../pages/PagesInFooterLink/Privacy/Privacy';
import PublicOferta from '../../pages/PagesInFooterLink/PublicOferta/PublicOferta';


export const routPages = [
  { path: '/home', element: Home },
  { path: 'menu/:type', element: PageAllProductInType },
  { path: 'menu/:type/:id', element: PageByIdProduct },
  { path: '/basket', element: BasketPage },
  { path: '/about', element: About },
  { path: '/promotions', element: Promotions },
  { path: '/promotions/:id', element: PagePromotionById },
  { path: '/privacy', element: Privacy },
  { path: '/public-oferta', element: PublicOferta },
  { path: '/delivery', element: Delivery },
  { path: '/our-restourants', element: OurRestaurants },
];
