import { useEffect, useState } from "react";
import { country } from '../CountryList/CountryList';
import CountryList from '../CountryList/CountryList';
import { useSendMutation } from "../../../../API";
import "./SigninSlideWriteNumber.css"
import { Tooltip } from "@mui/material";
interface SigninSlideWriteNumber{
    setNumber: React.Dispatch<React.SetStateAction<string>>,
    number:string
    setSMSSent:React.Dispatch<React.SetStateAction<boolean>>
}

const SigninSlideWriteNumber:React.FC<SigninSlideWriteNumber> = ({setSMSSent,setNumber,number}) => {

    const [checkBox,setCheckBox]=useState(false)
    const [arrowUp,setArrowUp]=useState(false)
    const [pickedCountry,setPickedCountry] = useState<country>({flag:"ua",name:"Україна",dialCode:"+380"})
    const [sendCode]=useSendMutation()
    function pickCountry(country:country) {
        setPickedCountry(country)
        setNumber(country.dialCode)
    }
    function closeCountryList() {
        setArrowUp(false)
    }

    document.addEventListener("click",closeCountryList)

    const ignoreCloseCountryList = (event: { stopPropagation: () => void; }) => {
        event.stopPropagation();
      };

    function sendSMSCode(number:string) {
        if (checkBox) {
            sendCode(number)
            setSMSSent(true)
        }else{
            console.log("checkBox error");

        }
    }

    useEffect(()=>{
        setNumber(pickedCountry.dialCode)
    },[])

    return (
        <div className="sign-in-right-block d-flex">
        <div className="sign-in-form">
            <div className="form-title">
                Введіть номер телефону, на цей номер надійде дзвінок або SMS:
            </div>
            <Tooltip  title="На даний номер телефону надійде дзвінок або SMS" arrow>
                <div className="form-input">
                    <input
                        type="tel"
                        onChange={(event)=>{
                            setNumber(event.target.value.replace(/[^0-9+()-]/g, ''))
                            if (event.target.value.replace(/[^0-9+()-]/g, '').length == (9+pickedCountry.dialCode.length) ) {
                                sendSMSCode(event.target.value.replace(/[^0-9+()-]/g, ''))
                            }
                        }}
                        value={number}
                        maxLength={9+pickedCountry.dialCode.length}
                        disabled={!checkBox}
                        />
                    <div onClick={(event)=>{
                        setArrowUp(!arrowUp)
                        ignoreCloseCountryList(event)
                    }} className="flag-drop-down pointer">
                        <div className="selected-flag">
                            <div className={`flag ${pickedCountry.flag}`}>
                                <div className={arrowUp? "arrow up" : "arrow"}>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Tooltip>
            {arrowUp &&
                <CountryList pickCountry={pickCountry}/>
            }
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
                    Я погоджуюсь з <a href="">політикою конфіденційності,<br/> призначеною для користувача угодою</a> і даю дозвіл на <br/> обробку персональних даних.
                    {!checkBox && <span className="form-error">Це обов'язкове поле</span>}
                </label>

            </div>

        </div>
    </div>
    );
};

export default SigninSlideWriteNumber;