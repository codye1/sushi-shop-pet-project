import "./Home.css"
import ProductList from "../../components/UI/ProductList/ProductList";
import Banner from "./HomeUI/Banner/Banner";
import AboutSushiMaster from "./HomeUI/AboutSushiMaster/AboutSushiMaster";
import { useGetAllProductsQuery,useGetPromotionsQuery, } from "../../API";
import HomeSlider from "./HomeUI/HomeSlider/HomeSlider";
import i18next from "../../LanguageManager/i18n";


const Home = () => {
    const {data:products,error:errorProducts,isLoading:productsLoading} = useGetAllProductsQuery()
    const {data:promotions}= useGetPromotionsQuery()

    console.log(i18next.t('title'));


    return (
        <>
            {promotions? <HomeSlider promotions={promotions}/> : null}
            <div className="title d-flex">
                <div className="container">
                    <div className="page-title">
                        {i18next.t('title')}
                    </div>
                </div>
            </div>
            {
                errorProducts? <div>Помилка</div>:
                productsLoading? <div>Загрузка...</div>
                :products? <ProductList products={products}/>
                :null
            }
            <Banner/>
            <AboutSushiMaster/>
        </>

    );
};

export default Home;