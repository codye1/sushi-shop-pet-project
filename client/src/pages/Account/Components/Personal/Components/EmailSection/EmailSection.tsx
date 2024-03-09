import { useEffect, useState } from "react";
import CustomInput from "../../../../../../components/UI/CustomInput/CustomInput";
import { useAppDispatch, useAppSelector } from "../../../../../../hooks";
import { useSaveEmailMutation } from "../../../../../../API";
import { updEmail } from "../../../../../../reducer/auth";


const EmailSection = () => {
    const [email,setEmail]=useState("")
    const [emailValidation,setEmailValidation]=useState(false)
    const [changeEmail,setChangeEmail]=useState(false   )
    const [saveEmail] = useSaveEmailMutation()
    const dispatch = useAppDispatch()
    const userEmail = useAppSelector(state=>state.auth.user.email)

    useEffect(()=>{
        if (email.split("@").length>1) {
            setEmailValidation(email.split("@")[1].endsWith('.com'))
        }

    },[email])

    return (
        <div className="email-section">
            {
                (userEmail && userEmail.length>0) && !changeEmail?
                <div className="section-info section-email d-flex space-between align-center">
                    <div className="d-flex align-center">
                        <img src="https://uzhhorod.sushi-master.ua/img/account/personal/email.svg" alt="" />
                        <div className="section-info-content">
                            <h3>Email</h3>
                            <p>{userEmail}</p>
                        </div>
                    </div>
                    <svg className="pointer" onClick={()=>{
                        setChangeEmail(true)
                        setEmail(userEmail)
                    }} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" ><path fillRule="evenodd" clipRule="evenodd" d="M24.4919 4.38667L27.6119 7.50667C28.1319 8.02667 28.1319 8.86667 27.6119 9.38667L25.1719 11.8267L20.1719 6.82667L22.6119 4.38667C22.8652 4.13333 23.1985 4 23.5452 4C23.8919 4 24.2252 4.12 24.4919 4.38667ZM3.99854 23V28H8.99854L23.7452 13.2533L18.7452 8.25333L3.99854 23ZM7.89187 25.3333H6.6652V24.1067L18.7452 12.0267L19.9719 13.2533L7.89187 25.3333Z" fill="#D0D0D0" ></path></svg>
                </div>
                :
                <>
                <h2 className="sub-title">
                    Вкажіть вашу електронну адресу, куди ми будемо надсилати інформацію про акції, індивідуальні промокоди та подарунки
                </h2>
                <div className="email-input">
                    <CustomInput
                        placeholder="Email"
                        value={email}
                        required={true}
                        setValue={setEmail}
                        buttons={true}
                        validation={emailValidation}
                        onApplyButtons={()=>{
                            setChangeEmail(false)
                            saveEmail(email)
                            dispatch(updEmail(email))
                        }}
                        onCancelButtons={()=>{
                            setChangeEmail(false)
                        }}
                    />
                </div>
                </>


            }

    </div>
    );
};

export default EmailSection;