import { BrowserRouter} from 'react-router-dom';
import Header from './pages/Header/Header';
import Routing from './components/rout/routing';
import Footer from './pages/Footer/Footer';
import { useAppSelector } from './hooks';
import ProductList from './components/UI/ProductList/ProductList';
import { useGetProductsByInputQuery } from './API';
function App() {
  const searchActive = useAppSelector((state)=>state.searchActive.searchActive);
  const searchInput = useAppSelector((state)=>state.searchActive.searchInput);
  const {data,error,isLoading} = useGetProductsByInputQuery(searchInput)
  data? console.log(data):null;

  return (
    <BrowserRouter>
      <Header/>
      {searchActive?
       error?
       <div>Ошибка</div>
       :isLoading?
       <div>Загрузка</div>
       :data?
       <div>{<ProductList products={data}/>}</div>
       :null
       :<Routing/>
    }
      <Footer/>
    </BrowserRouter>
  )
}

export default App
