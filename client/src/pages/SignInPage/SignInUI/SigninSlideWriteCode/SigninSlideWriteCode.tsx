import { useEffect, useState } from "react";
import "./SigninSlideWriteCode.css"
import ReactCodeInput from "react-code-input";
import {  useLoginMutation, useRefreshSMSCodeMutation } from "../../../../API";
import { useAppDispatch } from "../../../../hooks";
import { authUser } from "../../../../reducer/auth";
import CustomModal from "../../../../components/UI/CustomModal/CustomModal";
import { AuthResponce } from "../../../../interfaces";
import {useTranslation } from "react-i18next";

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

    const {t} = useTranslation()

    async function handleLogin(number:string,code:string) {

        console.log("login");

        const result  = await login({number,code})
        if ('data' in result) {
            if (typeof result.data == "string") {
                setModalError(true)
                setPinCode("")
            }else{
                const data: AuthResponce = result.data
                document.cookie = `refreshToken=${data.refreshToken}; SameSite=None; Secure; max-age=${30 * 24 * 60 * 60 * 1000}`;
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
                {t("sign-in.write-code.form-title")}
            </div>
            <div className="write-code-descriptions">
                <div dangerouslySetInnerHTML={{ __html: t("sign-in.write-code.description", { number }) }}/>
                <span>{t("sign-in.write-code.span")}</span>
                {(seconds==0) && <span onClick={()=>{setSmsSent(false)}} className="change-number pointer">{t("sign-in.write-code.change-number")}</span>}
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

               {seconds==0?<span onClick={()=>{refreshSMSCode(number)}} className="pointer" >{t("sign-in.write-code.code-repeat1")}</span>:<span dangerouslySetInnerHTML={{ __html: t("sign-in.write-code.code-repeat2", { seconds }) }} />}
            </div>

        </div>
        <CustomModal
                customModal={modalError}
                closeModal={()=>{setModalError(false)}}
            >
                <img style={{width:"60px",margin:"0 auto 30px"}} src="https://lviv.sushi-master.ua/img/header/cancel.svg" alt="" />
                <div className="title">Вибачте</div>
                <div className="description">Введено недійсний код</div>
        </CustomModal>
    </div>
    );
};

export default SigninSlideWriteCode;