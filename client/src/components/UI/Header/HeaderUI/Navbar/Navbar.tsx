import { NavLink } from 'react-router-dom';

import './Navbar.css';
import chevron from '../../../../../icons/chevron.svg';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../../../../hooks';
import SearchBlock from '../../../SearchBlock/SearchBlock';
interface INavbar {
  isScroled: boolean;
}

interface Ilist {
  site: string;
  name: string;
}

type Tlist = Ilist[];

const Navbar: React.FC<INavbar> = ({ isScroled }) => {
  const { t } = useTranslation();

  const down_list: Tlist = [
    { site: 'menu/sets', name: t('header.navbar.sets') },
    { site: 'menu/roles', name: t('header.navbar.roles') },
    { site: 'menu/promotion', name: t('header.navbar.promotion') },
    { site: 'menu/sushi', name: t('header.navbar.sushi') },
    { site: 'menu/california', name: t('header.navbar.california') },
    { site: 'menu/gourmetschoise', name: t('header.navbar.gourmetschoise') },
    { site: 'menu/hotsAndSalads', name: t('header.navbar.hotsAndSalads') },
    { site: 'menu/philadelphia', name: t('header.navbar.philadelphia') },
    { site: 'menu/soups', name: t('header.navbar.soups') },
    { site: 'menu/desserts', name: t('header.navbar.desserts') },
    { site: 'menu/drinks', name: t('header.navbar.drinks') },
    { site: 'menu/addition', name: t('header.navbar.addition') },
  ];
  const searchActive = useAppSelector(
    (state) => state.searchActive.searchActive
  );
  return (
    <>
      {searchActive ? (
        <SearchBlock />
      ) : (
        <div className={`navbar d-flex ${isScroled ? 'scroled' : ''}`}>
          <div style={{ position: 'relative' }} className="container">
            <div
              onClick={() => {
                const element =
                  document.getElementsByClassName('navbar-block')[0];
                if (element) {
                  element.scrollLeft -= 200;
                }
              }}
              className="chevron-left"
            >
              <img src={chevron} alt="" />
            </div>
            <div className="navbar-block">
              {down_list.map((p) => (
                <NavLink
                  key={p.site}
                  to={p.site}
                  className={({ isActive }) =>
                    isActive ? 'link selected' : 'link'
                  }
                >
                  {p.name}
                </NavLink>
              ))}
            </div>
            <div
              onClick={() => {
                const element =
                  document.getElementsByClassName('navbar-block')[0];
                if (element) {
                  element.scrollLeft += 300;
                }
              }}
              className="chevron-right"
            >
              <img src={chevron} alt="" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
