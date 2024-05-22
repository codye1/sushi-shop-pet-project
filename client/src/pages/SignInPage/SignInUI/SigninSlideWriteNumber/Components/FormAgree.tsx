import { Dispatch, FC, SetStateAction } from 'react';
import { Trans, useTranslation } from 'react-i18next';

interface IFormAgree{
    setCheckBox: Dispatch<SetStateAction<boolean>>
    checkBox: boolean
}

const FormAgree: FC<IFormAgree> = ({setCheckBox,checkBox}) => {

    const {t} = useTranslation()

    return (
        <div className="form-agree pointer">
        <span className="span-input">
            <input onChange={()=>setCheckBox(!checkBox)} id="checkbox"  type="checkbox" />
            <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                {checkBox?
                    <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                    :
                    <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                }
            </svg>
        </span>
        <label  className="form-agree-text pointer" htmlFor="checkbox">
            {t("sign-in.write-number.form-agree1")}
            <a href="">
                <Trans i18nKey={"sign-in.write-number.form-agree2"} components={{1:<br/>}}/>
            </a>
            <Trans i18nKey={"sign-in.write-number.form-agree3"} components={{1:<br/>}}/>
            {!checkBox && <span className="form-error">{t("sign-in.write-number.form-agree-alert")}</span>}
        </label>

    </div>
    );
};

export default FormAgree;