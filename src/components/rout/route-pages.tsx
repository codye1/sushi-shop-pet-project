
import BasketPage from "../../pages/BasketPage/BasketPage";
import Header from "../../pages/Header/Header";
import Home from "../../pages/Home/Home";
import PageAllProductInType from "../../pages/PageAllProductInType/PageAllProductInType";
import PageByIdProduct from "../../pages/PageByIdProduct/PageByIdProduct";

export const routPages=[
    {path: '/home',element:Home,exact:true},
    {path: '/header',element:Header,exact:true},
    {path: 'menu/:type',element:PageAllProductInType,exact:true},
    {path: 'menu/:type/:id',element:PageByIdProduct,exact:true},
    {path: '/basket',element:BasketPage,exact:true},
]