import { useState } from 'react';
import './AboutSushiMaster.css';
import { useTranslation } from 'react-i18next';

const AboutSushiMaster = () => {
  const { t } = useTranslation();

  const [aboutOpen, SetAboutOpen] = useState(false);
  return (
    <div className="about-banner d-flex">
      <div className="container">
        <div className="centered-cont">
          <div
            className={`sushi-master ${aboutOpen ? 'aboutOpen' : 'aboutScroped'}`}
          >
            {aboutOpen ? null : <div className="details-backdrop"></div>}
            <h1>{t('home.about-sushi-master.title1')}</h1>
            <p>{t('home.about-sushi-master.p1')} </p>

            <h2>{t('home.about-sushi-master.title2')} </h2>
            <p>{t('home.about-sushi-master.p2')} </p>
            <h2>{t('home.about-sushi-master.title3')} </h2>
            <p>{t('home.about-sushi-master.p3.1')} </p>
            <ul>
              <li>{t('home.about-sushi-master.li3.1')} </li>
              <li>{t('home.about-sushi-master.li3.2')} </li>
              <li>{t('home.about-sushi-master.li3.3')}</li>
              <li>{t('home.about-sushi-master.li3.4')}</li>
            </ul>
            <p>{t('home.about-sushi-master.p3.2')} </p>
            <h2>{t('home.about-sushi-master.title4')} </h2>
            <p>{t('home.about-sushi-master.p4.1')} </p>
            <p>{t('home.about-sushi-master.p4.2')}</p>
            <ul>
              <li>{t('home.about-sushi-master.li4.1')} </li>
              <li> {t('home.about-sushi-master.li4.2')} </li>
              <li>{t('home.about-sushi-master.li4.3')} </li>
            </ul>
            <p>{t('home.about-sushi-master.p4.3')} </p>
          </div>
          <p
            className="sushi-master-button"
            onClick={() => {
              aboutOpen ? SetAboutOpen(false) : SetAboutOpen(true);
            }}
          >
            {aboutOpen
              ? t('home.about-sushi-master.close')
              : t('home.about-sushi-master.open')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSushiMaster;
