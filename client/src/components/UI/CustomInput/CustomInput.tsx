import { useState } from "react";
import "./CustomInput.css"
import validationSVG from "../../../icons/CustomInput/validation.svg"
import { useTranslation } from "react-i18next";

interface ICustomInput{
    placeholder:string,
    value:string
    required:boolean
    buttons?:boolean
    validation?:boolean
    onApplyButtons?:()=>void
    onCancelButtons?:()=>void
    setValue:React.Dispatch<React.SetStateAction<string>>
}


const CustomInput:React.FC<ICustomInput> = (
    {placeholder,value,setValue,required,buttons,onApplyButtons,onCancelButtons,validation=true}) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
      setIsFocused(true);
    };

    const handleBlur = () => {
      setIsFocused(false);
    };

    const {t} = useTranslation()

    return (
        <label className="cutom-input" >
            <label className={isFocused || value.length>0?"input-focused":"input-notfocused"} >{required? <>{placeholder}<span> *</span></>:placeholder}</label>
            <input
                type="text"
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={value}
                onChange={(event)=>{setValue(event.target.value)}}
                />
            {value.length<2 && isFocused && required?
                <p>{t("components.CustomInput.alerts.required-field")}</p>
            :value.length==2 && required?
                <p>{t("components.CustomInput.alerts.length")}</p>
            :value.length>2 && buttons && validation?
                <>
                    <div onClick={onApplyButtons} className="apply">{t("components.CustomInput.buttons.apply")}</div>
                    <div onClick={onCancelButtons} className="cancel">{t("components.CustomInput.buttons.cancel")}</div>
                </>
            :value.length>1 && validation && <img src={validationSVG} alt="" />

            }
        </label>
    );
};

export default CustomInput;