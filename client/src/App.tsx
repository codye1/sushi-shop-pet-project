import { BrowserRouter} from 'react-router-dom';
import Header from './pages/Header/Header';
import Routing from './components/rout/routing';
import Footer from './pages/Footer/Footer';
import { useAppSelector } from './hooks';
import ProductList from './components/UI/ProductList/ProductList';
import {useGetProductsByInputQuery } from './API';
function App() {
  const search = useAppSelector(state=>state.searchActive)
  const {data:searchedProduct,error:searchedProductError,isLoading:searchedProductLoding} = useGetProductsByInputQuery(search.searchInput)
  return (
    <BrowserRouter>
      <Header/>
      <div style={{display:`${search.searchActive? 'none' : ''}`}}>
        <Routing/>
      </div>
      {
        searchedProductError?<div>Помилка</div>:
        searchedProductLoding?<div>Loding</div>:
        search.searchActive && searchedProduct? <ProductList products={searchedProduct}/> : null}
      <Footer/>
    </BrowserRouter>
  )
}

export default App
