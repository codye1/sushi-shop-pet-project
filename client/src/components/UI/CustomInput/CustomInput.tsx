import { useState } from "react";
import "./CustomInput.css"

interface ICustomInput{
    placeholder:string,
    value:string
    required:boolean
    setValue:React.Dispatch<React.SetStateAction<string>>
}


const CustomInput:React.FC<ICustomInput> = ({placeholder,value,setValue,required}) => {
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
            {value.length<2 && isFocused?<p>Це обовязкове поле</p>:value.length==2?<p>Це поле введено не правильно</p>: value.length>2 && <><div className="apply">Зберегти</div><div className="cancel">Скасувати</div></> }
        </label>
    );
};

export default CustomInput;