import { NavLink } from 'react-router-dom';
import './LinksFooter.css';
import { useTranslation } from 'react-i18next';

const LinksFooter = () => {
  const { t } = useTranslation();

  return (
    <div className="links">
      <div className="links-block">
        <h1>{t('footer.links.links-block1.title')}</h1>
        <NavLink
          to={'/about'}
          className={({ isActive }) => (isActive ? 'open' : ``)}
        >
          {t('footer.links.links-block1.about')}
        </NavLink>
        <NavLink
          to={'/promotions'}
          className={({ isActive }) => (isActive ? 'open' : '')}
        >
          {t('footer.links.links-block1.promotions')}
        </NavLink>
      </div>
      <div className="links-block">
        <h1>{t('footer.links.links-block2.title')}</h1>
        <NavLink
          to={'public-oferta'}
          className={({ isActive }) => (isActive ? 'open' : '')}
        >
          {t('footer.links.links-block2.public-oferta')}
        </NavLink>
        <NavLink
          to={'privacy'}
          className={({ isActive }) => (isActive ? 'open' : '')}
        >
          {t('footer.links.links-block2.privacy')}
        </NavLink>
      </div>
      <div className="links-block">
        <h1>{t('footer.links.links-block3.title')}</h1>
        <NavLink
          to={'delivery'}
          className={({ isActive }) => (isActive ? 'open' : '')}
        >
          {t('footer.links.links-block3.delivery')}
        </NavLink>
        <NavLink
          to={'our-restourants'}
          className={({ isActive }) => (isActive ? 'open' : '')}
        >
          {t('footer.links.links-block3.our-restourants')}
        </NavLink>
      </div>
      <div className="links-block">
        <h3>{t('footer.links.links-block4.tite')}</h3>
        <h4>
          <a href="tel:0 800 330 333">0 800 330 333</a>
        </h4>
        <h4>
          <a href="mailto:ZABOTA@SUSHI-MASTER.UA">ZABOTA@SUSHI-MASTER.UA</a>
        </h4>
      </div>
    </div>
  );
};

export default LinksFooter;
