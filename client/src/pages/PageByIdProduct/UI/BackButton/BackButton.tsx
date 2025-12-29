import './BackButton.css';
import { useTranslation } from 'react-i18next';

const BackButton = ({ onClick }: { onClick: () => void }) => {
  const { t } = useTranslation();
  return (
    <div onClick={onClick} className="back">
      <span>
        <strong>{t('common.actions.back')}</strong>
      </span>
    </div>
  );
};

export default BackButton;
