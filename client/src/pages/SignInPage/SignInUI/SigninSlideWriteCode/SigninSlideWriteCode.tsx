import { useEffect, useState } from 'react';
import './SigninSlideWriteCode.css';
import { useRefreshSMSCodeMutation } from '../../../../API';
import CustomModal from '../../../../components/UI/CustomModal/CustomModal';
import { Trans, useTranslation } from 'react-i18next';
import { useLogin } from './useLogin';
import OtpCodeInput from './OtpCodeInput';

interface ISigninSlideWriteCode {
  number: string;
  setSmsSent: React.Dispatch<React.SetStateAction<boolean>>;
}

const SigninSlideWriteCode = ({
  setSmsSent,
  number,
}: ISigninSlideWriteCode) => {
  const [seconds, setSeconds] = useState(60);
  const [refreshSMSCode] = useRefreshSMSCodeMutation();
  const [modalError, setModalError] = useState(false);
  const { pinCode, handlePinChange } = useLogin(number, setModalError);

  const { t } = useTranslation();

  useEffect(() => {
    if (seconds > 0) {
      const timerTick = () => setSeconds((prevSeconds) => prevSeconds - 1);
      const intervalId = setInterval(timerTick, 1000);
      return () => clearInterval(intervalId);
    }
  }, [seconds]);

  return (
    <div className="sign-in-right-block d-flex">
      <div className="sign-in-form">
        <div className="form-title">{t('sign-in.write-code.form-title')}</div>
        <div className="write-code-descriptions">
          <Trans
            i18nKey="sign-in.write-code.description"
            values={{ number }}
            components={{ strong: <strong /> }}
          />

          <span>{t('sign-in.write-code.span')}</span>
          {seconds == 0 && (
            <span
              onClick={() => {
                setSmsSent(false);
              }}
              className="change-number pointer"
            >
              {t('sign-in.write-code.change-number')}
            </span>
          )}
        </div>
        <div className="write-code-input">
          <OtpCodeInput
            fields={4}
            onChange={handlePinChange}
            value={pinCode}
            name={'test'}
            inputMode={'tel'}
            placeholder="◦"
            inputStyle={{ marginRight: '16px', outline: 'none' }}
          />
        </div>
        <div className="code-repeat">
          {seconds == 0 ? (
            <span
              onClick={() => {
                refreshSMSCode(number);
              }}
              className="pointer"
            >
              {t('sign-in.write-code.code-repeat1')}
            </span>
          ) : (
            <Trans
              i18nKey="sign-in.write-code.code-repeat2"
              values={{ seconds }}
              components={{ strong: <strong /> }}
            />
          )}
        </div>
      </div>
      <CustomModal
        customModal={modalError}
        closeModal={() => {
          setModalError(false);
        }}
      >
        <img
          style={{ width: '60px', margin: '0 auto 30px' }}
          src="https://lviv.sushi-master.ua/img/header/cancel.svg"
          alt=""
        />
        <div className="title">Вибачте</div>
        <div className="description">Введено недійсний код</div>
      </CustomModal>
    </div>
  );
};

export default SigninSlideWriteCode;
