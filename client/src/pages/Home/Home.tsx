import "./Home.css"
import ProductList from "../../components/UI/ProductList/ProductList";
import Banner from "./HomeUI/Banner/Banner";
import AboutSushiMaster from "./HomeUI/AboutSushiMaster/AboutSushiMaster";
import { useGetAllProductsQuery,useGetPromotionsQuery, } from "../../API";
import HomeSlider from "./HomeUI/HomeSlider/HomeSlider";
import { useTranslation } from "react-i18next";
import SekeletonCardProduct from "../../components/UI/SkeletonCardProduct/SekeletonCardProduct";


const Home = () => {
    const {data:products,error:errorProducts,isLoading:productsLoading} = useGetAllProductsQuery()
    const {data:promotions}= useGetPromotionsQuery()

    const {t} = useTranslation()

    return (
        <>
            {promotions? <HomeSlider promotions={promotions}/> : null}
            <div className="title d-flex">
                <div className="container">
                    <div className="page-title">
                        {t('home.tite')}
                    </div>
                </div>
            </div>
            {
                errorProducts? <div>Помилка</div>:
                productsLoading? <SekeletonCardProduct/>
                :products? <ProductList products={products}/>
                :null
            }
            <Banner/>
            <AboutSushiMaster/>
        </>

    );
};

export default Home;