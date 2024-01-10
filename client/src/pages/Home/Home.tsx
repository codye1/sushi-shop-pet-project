import "./Home.css"
import ProductList from "../../components/UI/ProductList/ProductList";
import Banner from "./HomeUI/Banner/Banner";
import AboutSushiMaster from "./HomeUI/AboutSushiMaster/AboutSushiMaster";
import { useGetAllProductsQuery } from "../../API";




const Home = () => {
    const {data:products,error:errorProducts,isLoading:productsLoading} = useGetAllProductsQuery()

    return (
        <div>
            <div className="d-flex">
                <div className="container">
                    <div className="page-title">
                        Доставка суші
                    </div>
                </div>
            </div>
            {errorProducts?<div>Помилка</div>:
            productsLoading?<div>Загрузка...</div>
            :products?<ProductList products={products}/>
            :<div>Ничего нет</div> }

            <Banner/>
            <AboutSushiMaster/>
        </div>

    );
};

export default Home;