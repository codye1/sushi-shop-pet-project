import "./Home.css"

import {  useGetSetsQuery } from "../../API";

import ProductList from "../../components/UI/ProductList/ProductList";
import Banner from "../../components/UI/Banner/Banner";
import AboutSushiMaster from "../../components/UI/AboutSushiMaster/AboutSushiMaster";
import HomeSlider from "../../components/UI/HomeSlider/HomeSlider";
//import { useAppSelector } from "../../hooks";




const Home = () => {
    const {data,error,isLoading} = useGetSetsQuery()
    //const searchActive = useAppSelector((state)=>state.searchActive.searchActive);


    return (


        <div>
            <HomeSlider/>
            <div className="page-title">
                Доставка суші
            </div>
            {error?<div>Помилка</div>:
            isLoading?<div>Загрузка...</div>
            :data?<ProductList product={data}/>
            :<div>Ничего нет</div> }
            <Banner/>
            <AboutSushiMaster/>
        </div>

    );
};

export default Home;