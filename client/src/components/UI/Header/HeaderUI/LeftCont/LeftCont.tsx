import './LeftCont.css';
import arrowDown from '../../../../../icons/headerIcon/arrow-down.png';
import { Popover } from '@mui/material';
import { useState } from 'react';
import i18next from '../../../../../LanguageManager/i18n';
import { useTranslation } from 'react-i18next';

const LeftCont = () => {
  const { t } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18next.language);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  function changeLanguageHandler(language: string) {
    i18next.changeLanguage(language);
  }

  return (
    <div className="left-cont">
      <div className="city">{t('header.city')}</div>
      <button onClick={handleClick} className="language">
        <span>{currentLanguage}</span>
        <img src={arrowDown} alt="" />
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <div className="language-presentation">
          <p
            onClick={() => {
              changeLanguageHandler('ua');
              setCurrentLanguage(i18next.language);
            }}
            className={currentLanguage == 'ua' ? 'curent' : ''}
          >
            UA
          </p>
          <p
            onClick={() => {
              changeLanguageHandler('ru');
              setCurrentLanguage(i18next.language);
            }}
            className={currentLanguage == 'ru' ? 'curent' : ''}
          >
            RU
          </p>
        </div>
      </Popover>
      <div className="number">
        <a href="tel:0 800 330 333">0 800 330 333</a>
      </div>
    </div>
  );
};

export default LeftCont;
