import './DownBlock.css';
import visamastercard from '../../../../icons/footerIcon/mastercard-visa.png';
import { useTranslation } from 'react-i18next';

const DownBlock = () => {
  const { t } = useTranslation();

  return (
    <div className="down-block">
      <div className="left-block">
        <h1>{t('footer.down-block.left-block.title')}</h1>
        <img src={visamastercard} alt="" />
      </div>
    </div>
  );
};

export default DownBlock;
