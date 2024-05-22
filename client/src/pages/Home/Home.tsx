import "./Home.css"
import ProductList from "../../components/UI/ProductList/ProductList";
import Banner from "./HomeUI/Banner/Banner";
import AboutSushiMaster from "./HomeUI/AboutSushiMaster/AboutSushiMaster";
import { useGetAllProductsQuery,useGetPromotionsQuery, } from "../../API";
import HomeSlider from "./HomeUI/HomeSlider/HomeSlider";
import { useTranslation } from "react-i18next";
import SekeletonCardProduct from "../../components/UI/SkeletonCardProduct/SekeletonCardProduct";
import { IPromotion } from "../../interfaces";
import skeletonSlidePNG from "../../icons/skeleton-slide.png"

const Home = () => {
    const {data:products,error:errorProducts,isLoading:productsLoading} = useGetAllProductsQuery()
    const {data:promotions ,}= useGetPromotionsQuery()

    const {t} = useTranslation()

    const skeletonSlide:IPromotion[] =[
        {
            id:"1",
            img: skeletonSlidePNG,
            imgWide:skeletonSlidePNG,
            key: 1,
            title:"",
            description:"",
            productInPromotion:[''],
            html:""
        },
        {
            id:"1",
            img: skeletonSlidePNG,
            imgWide:skeletonSlidePNG,
            key: 2,
            title:"",
            description:"",
            productInPromotion:[''],
            html:""
        },
        {
            id:"1",
            img: skeletonSlidePNG,
            imgWide:skeletonSlidePNG,
            key: 3,
            title:"",
            description:"",
            productInPromotion:[''],
            html:""
        }
    ]

    return (
        <>
            {productsLoading? <HomeSlider promotions={skeletonSlide}/>:
                promotions&& <HomeSlider promotions={promotions}/>}
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
                :products && <ProductList products={products}/>
            }
            <Banner/>
            <AboutSushiMaster/>
        </>

    );
};

export default Home;