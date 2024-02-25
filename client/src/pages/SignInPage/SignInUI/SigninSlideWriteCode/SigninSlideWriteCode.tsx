import { useEffect, useState } from "react";
import "./SigninSlideWriteCode.css"
import ReactCodeInput from "react-code-input";
import { AuthResponce, useLoginMutation, useRefreshSMSCodeMutation } from "../../../../API";
import ModalError from "../ModalError/ModalError";
import { useAppDispatch } from "../../../../hooks";
import { authUser } from "../../../../reducer/auth";

interface SigninSlideWriteCode{
    number:string,
    setSmsSent: React.Dispatch<React.SetStateAction<boolean>>
}

const SigninSlideWriteCode:React.FC<SigninSlideWriteCode> = ({setSmsSent,number}) => {
    const [pinCode, setPinCode] = useState<string>("");
    const [seconds, setSeconds] = useState(60);
    const [login]=useLoginMutation()
    const [refreshSMSCode]=useRefreshSMSCodeMutation()
    const [modalError,setModalError]=useState(false)
    const dispath = useAppDispatch()

    async function handleLogin(number:string,code:string) {
        const result  = await login({number,code})
        if ('data' in result) {


            if (typeof result.data == "string") {
                setModalError(true)
                setPinCode("")
            }else{
                const data: AuthResponce = result.data
                dispath(authUser(data.user))
                result && localStorage.setItem("token",result.data.accessToken)
            }
          }
    }

    const handlePinChange = (pinCode:string) => {
        setPinCode(pinCode);
        if (pinCode.length==4) {
            handleLogin(number,pinCode)
        }
    };



    const props={
        inputStyle: {
            marginRight:"16px",
            outline:"none"

          },
    }


    useEffect(() => {
        if (seconds>0) {
            const timerTick = () => setSeconds((prevSeconds) => prevSeconds - 1);
            const intervalId = setInterval(timerTick, 1000);
            return () => clearInterval(intervalId);
        }

      }, [seconds]);

    return (
    <div className="sign-in-right-block d-flex">
        <div className="sign-in-form">
            <div className="form-title">
                Введіть останні 4 цифри вхідного номера або код із SMS:
            </div>
            <div className="write-code-descriptions">
                На ваш номер {number} відправлено код <br/> підтвердження. Термін дії вашого коду 3 хвилини. <br/>
                <br/>
                <span>На ваш номер відправлено код підтвердження.</span>
                {(seconds==0) && <span onClick={()=>{setSmsSent(false)}} className="change-number pointer">Змінити номер</span>}
            </div>
            <div className="write-code-input">
            <ReactCodeInput
                {...props}
                fields={4}
                onChange={handlePinChange}
                value={pinCode}
                name={"test"}
                inputMode={"tel"}
                placeholder="◦"
            />
            </div>
            <div className="code-repeat">

               {seconds==0?<span onClick={()=>{refreshSMSCode(number)}} className="pointer" >Повторно відправити код</span>:<span>Повторно відправити код або <br/> змінити номер можна через  {seconds} <br/>  сек</span>}
            </div>

        </div>
        {modalError && <ModalError closeModal={setModalError}/>}
    </div>
    );
};

export default SigninSlideWriteCode;