import './NoData.css';
import empty from '../../../icons/empty.svg';
import { useTranslation } from 'react-i18next';

const NoData = () => {
  const { t } = useTranslation();

  return (
    <div className="no-data d-flex center wrap column">
      <img src={empty} alt="" />
      <p>{t('components.NoData.title')}</p>
    </div>
  );
};

export default NoData;
