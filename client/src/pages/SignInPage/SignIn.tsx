import { useState } from 'react';
import './SignIn.css';
import SigninSlideWriteNumber from './SignInUI/SigninSlideWriteNumber/SigninSlideWriteNumber';
import SigninSlideWriteCode from './SignInUI/SigninSlideWriteCode/SigninSlideWriteCode';
import { useTranslation } from 'react-i18next';

const SignIn = () => {
  const [smsSent, setSmsSent] = useState(false);
  const [number, setNumber] = useState<string>('');

  const { t } = useTranslation();

  return (
    <div className="sign-in d-flex">
      <div className="container">
        <div className="sign-in-main-block ">
          <div className="sign-in-left-block d-flex">
            <div className="sign-in-list-of-benefits">
              <div className="benefits-list-item">
                <img
                  src="https://lviv.sushi-master.ua/img/sign-in/location.svg"
                  alt=""
                />
                <p>{t('sign-in.benefits1')}</p>
              </div>
              <div className="benefits-list-item">
                <img
                  src="https://lviv.sushi-master.ua/img/sign-in/history.svg"
                  alt=""
                />
                <p>{t('sign-in.benefits2')}</p>
              </div>
            </div>
          </div>
          {smsSent ? (
            <SigninSlideWriteCode number={number} setSmsSent={setSmsSent} />
          ) : (
            <SigninSlideWriteNumber
              setSMSSent={setSmsSent}
              setNumber={setNumber}
              number={number}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
