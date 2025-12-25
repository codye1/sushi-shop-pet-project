import { BrowserRouter } from 'react-router-dom';

import Footer from './components/UI/Footer/Footer';
import Routing from './components/rout/routing';

import { useAppDispatch, useAppSelector } from './hooks';
import ProductList from './components/UI/ProductList/ProductList';
import { useCheckAuthQuery, useGetProductsByInputQuery } from './API';
import { useEffect } from 'react';
import { authUser } from './reducer/auth';
import Header from './components/UI/Header/Header';
function App() {
  const search = useAppSelector((state) => state.searchActive);
  const {
    data: searchedProduct,
    error: searchedProductError,
    isLoading: searchedProductLoding,
  } = useGetProductsByInputQuery(search.searchInput);

  const dispatch = useAppDispatch();
  const { data: user } = useCheckAuthQuery();

  useEffect(() => {
    if (user && !user.error) {
      //document.cookie = `refreshToken=${user.refreshToken}; domain=sushi-shop-pet-project-m7t7.vercel.app; path=/; SameSite=None; Secure; max-age=${30 * 24 * 60 * 60 * 1000};`
      dispatch(authUser(user.user));
    }
  });

  return (
    <BrowserRouter>
      <Header />
      <main style={{ display: `${search.searchActive ? 'none' : ''}` }}>
        <Routing />
      </main>
      {searchedProductError && <div>Помилка</div>}

      {searchedProductLoding && <div>Loding</div>}

      {search.searchActive && searchedProduct && (
        <ProductList products={searchedProduct} />
      )}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
