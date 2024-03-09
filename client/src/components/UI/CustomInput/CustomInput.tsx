import { useState } from "react";
import "./CustomInput.css"

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



    return (
        <label className="cutom-input" htmlFor="">
            <label className={isFocused || value.length>0?"input-focused":"input-notfocused"} htmlFor="">{required? <>{placeholder}<span> *</span></>:placeholder}</label>
            <input
                type="text"
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={value}
                onChange={(event)=>{setValue(event.target.value)}}
                />
            {value.length<2 && isFocused && required?
                <p>Це обовязкове поле</p>
            :value.length==2 && required?
                <p>Це поле введено не правильно</p>
            :value.length>2 && buttons && validation?
                <>
                    <div onClick={onApplyButtons} className="apply">Зберегти</div>
                    <div onClick={onCancelButtons} className="cancel">Скасувати</div>
                </>
            :value.length>1 && validation && <svg className="field-is-valid" width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00548 15.8998L4.64083 11.6998L3.51929 13.0998L8.00548 18.6998L17.6187 6.6998L16.4972 5.2998L8.00548 15.8998Z" fill="#008B59"></path></svg>

            }
        </label>
    );
};

export default CustomInput;