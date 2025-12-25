
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import Account from '../../pages/Account/Account';
import SignIn from '../../pages/SignInPage/SignIn';
import { routPages } from './routePages';




const Routing = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);

  return (
      <Routes>
      {routPages.map((route, index) => (
        <Route key={index} path={route.path} element={<route.element />} />
      ))}
      {isAuth ? (
        <Route path="account/:element" element={<Account />} />
      ) : (
        <Route path="sign-in" element={<SignIn />} />
      )}
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
};

export default Routing;
