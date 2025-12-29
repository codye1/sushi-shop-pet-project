import { NavLink } from 'react-router-dom';
import './Header.css';

import LeftCont from './HeaderUI/LeftCont/LeftCont';
import RightCont from './HeaderUI/RightCont/RightCont';
import Navbar from './HeaderUI/Navbar/Navbar';
import mainLogoPNG from '../../../icons/headerIcon/main-logo.png';

import Separator from '../Separator/Separator';
import { useHeader } from './hooks/useHeader';
const Header = () => {
  const { isScroled, transform, searchActive } = useHeader();

  return (
    <header
      style={{ transform: `translateY(${transform}%)` }}
      className={`header ${isScroled && !searchActive ? 'scroled' : ''}`}
    >
      <div className="top-header">
        <div className="top-container">
          <LeftCont />
          <NavLink to={'/home'} className="main-logo">
            <img src={mainLogoPNG} alt="лод" />
          </NavLink>
          <RightCont />
        </div>
      </div>
      <div className="container separator-container">
        <Separator />
      </div>
      <Navbar isScroled={isScroled} />
    </header>
  );
};

export default Header;
