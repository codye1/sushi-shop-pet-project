import { useEffect, useState, Dispatch, SetStateAction } from 'react';
import { country } from '../CountryList/CountryList';
import CountryList from '../CountryList/CountryList';
import { useSendMutation } from '../../../../API';
import './SigninSlideWriteNumber.css';
import { Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import FormAgree from './Components/FormAgree';

interface ISigninSlideWriteNumber {
  setNumber: Dispatch<SetStateAction<string>>;
  number: string;
  setSMSSent: Dispatch<SetStateAction<boolean>>;
}

const SigninSlideWriteNumber = ({
  setSMSSent,
  setNumber,
  number,
}: ISigninSlideWriteNumber) => {
  const [checkBox, setCheckBox] = useState(false);
  const [arrowUp, setArrowUp] = useState(false);
  const [pickedCountry, setPickedCountry] = useState<country>({
    flag: 'ua',
    name: 'Україна',
    dialCode: '+380',
  });
  const [sendCode] = useSendMutation();

  useEffect(() => {
    const handleClickOutside = () => {
      setArrowUp(false);
    };

    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  async function sendSMSCode(number: string) {
    if (checkBox) {
      const code = await sendCode(number);
      console.log(code);

      setSMSSent(true);
    } else {
      console.log('checkBox error');
    }
  }

  useEffect(() => {
    setNumber(pickedCountry.dialCode);
  }, [setNumber, pickedCountry]);

  const { t } = useTranslation();

  return (
    <div className="sign-in-right-block d-flex">
      <div className="sign-in-form">
        <div className="form-title">{t('sign-in.write-number.form-title')}</div>
        <Tooltip title={t('sign-in.write-number.form-title')} arrow>
          <div className="form-input">
            <input
              type="tel"
              onChange={(event) => {
                setNumber(event.target.value.replace(/[^0-9+()-]/g, ''));
                if (
                  event.target.value.replace(/[^0-9+()-]/g, '').length ==
                  9 + pickedCountry.dialCode.length
                ) {
                  sendSMSCode(event.target.value.replace(/[^0-9+()-]/g, ''));
                }
              }}
              value={number}
              maxLength={9 + pickedCountry.dialCode.length}
              disabled={!checkBox}
            />
            <div
              onClick={(event) => {
                setArrowUp(!arrowUp);
                event.stopPropagation();
              }}
              className="flag-drop-down pointer"
            >
              <div className="selected-flag">
                <div className={`flag ${pickedCountry.flag}`}>
                  <div className={arrowUp ? 'arrow up' : 'arrow'}></div>
                </div>
              </div>
            </div>
          </div>
        </Tooltip>
        {arrowUp && (
          <CountryList
            pickCountry={(country) => {
              setPickedCountry(country);
              setNumber(country.dialCode);
            }}
          />
        )}
        <FormAgree checkBox={checkBox} setCheckBox={setCheckBox} />
      </div>
    </div>
  );
};

export default SigninSlideWriteNumber;
