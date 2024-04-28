import { useState } from 'react';
import CustomInput from '../../../../../../components/UI/CustomInput/CustomInput';
import { useAppDispatch, useAppSelector } from '../../../../../../hooks';
import "./NameSection.css"
import { useSaveNameMutation } from '../../../../../../API';
import { updName } from '../../../../../../reducer/auth';
import { Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';
const NameSection = () => {
    const number = useAppSelector(state=>state.auth.user.number)
    const [name,setName]=useState("")
    const [changeName,setChangeName]=useState(false)

    const [saveName]=useSaveNameMutation()
    const dispatch = useAppDispatch()
    const userName = useAppSelector(state=>state.auth.user.name)

    const {t} = useTranslation()

    return (
        <>
            {
                (userName && userName.length>0) && !changeName?
                <div className="section-info d-flex space-between">
                    <div className='d-flex align-center'>
                        <img src="https://uzhhorod.sushi-master.ua/img/account/personal/account.svg" alt="" />
                        <div className="section-info-content">
                            <h3>{t("account.personal.sections.name.title")}</h3>
                            <p>{userName}</p>
                        </div>
                    </div>
                    <svg className="pointer" onClick={()=>{
                        setChangeName(true)
                        setName(userName)
                    }} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" ><path fillRule="evenodd" clipRule="evenodd" d="M24.4919 4.38667L27.6119 7.50667C28.1319 8.02667 28.1319 8.86667 27.6119 9.38667L25.1719 11.8267L20.1719 6.82667L22.6119 4.38667C22.8652 4.13333 23.1985 4 23.5452 4C23.8919 4 24.2252 4.12 24.4919 4.38667ZM3.99854 23V28H8.99854L23.7452 13.2533L18.7452 8.25333L3.99854 23ZM7.89187 25.3333H6.6652V24.1067L18.7452 12.0267L19.9719 13.2533L7.89187 25.3333Z" fill="#D0D0D0" ></path></svg>
                </div>
                :
                <CustomInput
                    placeholder="Ім'я"
                    value={name}
                    required={true}
                    setValue={setName}
                    buttons={true}
                    onApplyButtons={()=>{
                        saveName(name)
                        dispatch(updName(name))
                        setChangeName(false)
                    }}
                    onCancelButtons={()=>{
                        setName("")
                        setChangeName(false)
                    }}
                />
            }
            <div className="section-info section-contacts d-flex">
                <img src="https://lviv.sushi-master.ua/img/account/personal/phone.svg" alt="" />
                <div className="section-info-content">
                    <h3>{t("account.personal.sections.name.contacts")}</h3>
                    <Tooltip title={t("account.personal.sections.name.tooltip-title")} arrow>
                        <p style={{cursor:"help"}}>{number}</p>
                    </Tooltip>
                </div>
            </div>
        </>
    );
};

export default NameSection;