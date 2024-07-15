import { useLocation } from 'react-router-dom';
import './Account.css';
import Personal from './Components/Personal/Personal';
import Bonuses from './Components/Bonuses/Bonuses';
import Delivery from './Components/Delivery/Delivery';
import Orders from './Components/Orders/Orders';
import Menu from './Menu/Menu';

const Account = () => {
  const accountSlides: { [key: string]: JSX.Element } = {
    bonuses: <Bonuses />,
    delivery: <Delivery />,
    orders: <Orders />,
    personal: <Personal />,
  };
  const location = useLocation();
  const activePath = location.pathname.split('/')[2];
  return (
    <div className="container account d-flex">
      <div className="account-menu">
        <div className="sticky">
          <Menu />
        </div>
      </div>
      <div className="menu-content">{accountSlides[activePath]}</div>
    </div>
  );
};

export default Account;
