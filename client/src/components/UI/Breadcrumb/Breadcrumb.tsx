import { useLocation } from 'react-router-dom';
import './Breadcrumb.css';
import { useTranslation } from 'react-i18next';

interface Crumbs {
  crumbs: string[];
}

const Breadcrumb: React.FC<Crumbs> = ({ crumbs }) => {
  const location = useLocation();

  const { t } = useTranslation();

  const translateCrumb: { [key: string]: string } = {
    ['sets']: t('header.navbar.sets'),
    ['roles']: t('header.navbar.roles'),
    ['promotion']: t('header.navbar.promotion'),
    ['promotions']: t('header.navbar.promotion'),
    ['sushi']: t('header.navbar.sushi'),
    ['california']: t('header.navbar.california'),
    ['gourmetschoise']: t('header.navbar.gourmetschoise'),
    ['hotsAndSalads']: t('header.navbar.hotsAndSalads'),
    ['philadelphia']: t('header.navbar.philadelphia'),
    ['soups']: t('header.navbar.soups'),
    ['desserts']: t('header.navbar.desserts'),
    ['drinks']: t('header.navbar.drinks'),
    ['addition']: t('header.navbar.addition'),
  };
  return (
    <div className="container">
      <nav className="breadcrumbs">
        <ol className="d-flex align-center">
          <li className="breadcrumb">
            <a href="/home">{t('components.Breadcrumb.title')}</a>
          </li>
          {crumbs.map((c, index) => {
            return index == crumbs.length - 1 ? (
              <li key={index}>
                <strong>{translateCrumb[c] ? translateCrumb[c] : c}</strong>
              </li>
            ) : (
              <li key={index} className="breadcrumb">
                <a
                  href={
                    location.pathname.split('/')[1] == 'menu'
                      ? `/menu/${c}`
                      : '/promotions'
                  }
                >
                  {translateCrumb[c] ? translateCrumb[c] : c}
                </a>
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
