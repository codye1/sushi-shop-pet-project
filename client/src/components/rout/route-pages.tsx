import BasketPage from '../../pages/BasketPage/BasketPage';
import Header from '../../pages/Header/Header';
import Home from '../../pages/Home/Home';
import PageAllProductInType from '../../pages/PageAllProductInType/PageAllProductInType';
import PageByIdProduct from '../../pages/PageByIdProduct/PageByIdProduct';
import About from '../../pages/PagesInFooterLink/About/About';
import Delivery from '../../pages/PagesInFooterLink/Delivery/Delivery';
import OurRestaurants from '../../pages/PagesInFooterLink/OurRestourants/OurRestaurants';
import Privacy from '../../pages/PagesInFooterLink/Privacy/Privacy';
import PagePromotionById from '../../pages/PagesInFooterLink/Promotions/PagePromotionById/PagePromotionById';
import Promotions from '../../pages/PagesInFooterLink/Promotions/Promotions';
import PublicOferta from '../../pages/PagesInFooterLink/PublicOferta/PublicOferta';

export const routPages = [
  { path: '/home', element: Home, exact: true },
  { path: '/header', element: Header, exact: true },
  { path: 'menu/:type', element: PageAllProductInType, exact: true },
  { path: 'menu/:type/:id', element: PageByIdProduct, exact: true },
  { path: '/basket', element: BasketPage, exact: true },
  { path: '/about', element: About, exact: true },
  { path: '/promotions', element: Promotions, exact: true },
  { path: '/promotions/:id', element: PagePromotionById, exact: true },
  { path: '/privacy', element: Privacy, exact: true },
  { path: '/public-oferta', element: PublicOferta, exact: true },
  { path: '/delivery', element: Delivery, exact: true },
  { path: '/our-restourants', element: OurRestaurants, exact: true },
];
