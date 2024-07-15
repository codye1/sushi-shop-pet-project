import { useTranslation } from 'react-i18next';
import NoData from '../../../../components/UI/NoData/NoData';
import './Bonuses.css';
const Bonuses = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1 className="top-title">{t('account.bonuses.title')}</h1>
      <div className="bonuses-container">
        <div className="bonuses-card d-flex space-between wrap">
          <h2>{t('account.bonuses.card.title')}</h2>
          <p>
            <span>0</span>
            {t('account.bonuses.card.bonuses')}
          </p>
          <a href="">{t('account.bonuses.card.rules')}</a>
        </div>
      </div>
      <div>
        <h1 className="top-title">{t('account.bonuses.history')}</h1>
        <NoData />
      </div>
    </>
  );
};

export default Bonuses;
