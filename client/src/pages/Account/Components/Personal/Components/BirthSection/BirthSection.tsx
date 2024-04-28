import {  Popover, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import Calendar from '../../../Delivery/Calendary/Calendar';
import "./BirthSection.css"
import CustomModal from '../../../../../../components/UI/CustomModal/CustomModal';
import TwoButtons from '../../../../../../components/UI/TwoButtons/TwoButtons';
import { useSaveBirthDateMutation } from '../../../../../../API';
import { useAppDispatch, useAppSelector } from '../../../../../../hooks';
import { updBirthDate } from '../../../../../../reducer/auth';
import { useTranslation } from 'react-i18next';

const BirthSection = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [openBirthWarn2, setOpenBirthWarn2] = useState(false);
    const [date,setDate]=useState([2022,3,3])
    const [saveDate]=useSaveBirthDateMutation()
    const dispatch = useAppDispatch()
    const birthDate=useAppSelector(state=>state.auth.user.birthDate)
    const handleClickCalendar = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleCloseCalendar = () => {
        setAnchorEl(null);
    };

    const OpenBirthWarn2 = (date:number[]) => {
        setDate(date)
        setOpenBirthWarn2(true)
      };

    const handleCloseWarn2 = () => {
        setOpenBirthWarn2(false)
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    const {t} = useTranslation()

    return (
        <div className="birth-date-section">
            {
            birthDate.length>0?
                <div className="section-info section-birth d-flex">
                    <img src="https://uzhhorod.sushi-master.ua/img/account/personal/cake.svg" alt="" />
                    <div className="section-info-content">
                        <h3>{t("account.personal.sections.birth.title")}</h3>
                        <p className='d-flex'>
                            {`${birthDate[2]<9?'0':''}${birthDate[2]}/${birthDate[1]<9?'0':''}${birthDate[1]}/${birthDate[0]} `}
                            &nbsp;&nbsp;&nbsp;
                            <Tooltip title="Змінити дату можна тільки за допомогою оператора" arrow>
                                <img src="https://uzhhorod.sushi-master.ua/img/custom/info.svg" alt="" />
                            </Tooltip>
                        </p>

                    </div>
                </div>
            :
            <>
                <h2 className="sub-title">{t("account.personal.sections.birth.sub-title")}</h2>
                <div  className="pick-birth d-flex space-between align-center pointer">
                    <button onClick={handleClickCalendar}  className="comps d-flex space-between align-center pointer">
                        <div className="borederd"></div>
                        <div className="placeholder">{t("account.personal.sections.birth.date-placeholder")}</div>
                        <img src="https://uzhhorod.sushi-master.ua/img/account/personal/calendar.svg" alt="" />
                    </button>

                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleCloseCalendar}
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                        }}
                    >
                        <Calendar handleDataAccept={OpenBirthWarn2} closeCalendar={handleCloseCalendar}/>
                    </Popover>
                    <CustomModal
                        closeModal={handleCloseWarn2}
                        customModal={openBirthWarn2}
                    >
                        <div className="title d-flex center">{t("account.personal.sections.birth.modal-datepicker.title")}</div>
                        <div className="description d-flex center">{t("account.personal.sections.birth.modal-datepicker.description")}</div>
                        <TwoButtons
                            cancelTitle={t("account.personal.sections.birth.modal-datepicker.two-buttons.cancel")}
                            applyTitle={t("account.personal.sections.birth.modal-datepicker.two-buttons.apply")}
                            onCancel={handleCloseWarn2}
                            onApply={()=>{
                                handleCloseWarn2()
                                saveDate(date)
                                dispatch(updBirthDate(date))
                            }}
                        />
                    </CustomModal>
                </div>
                <div className="birth-warn d-flex">
                    <img src="https://kyiv.sushi-master.ua/img/account/personal/warning.svg" alt="" />
                    {t("account.personal.sections.birth.modal-datepicker.warn")}
                </div>
            </>
            }
        </div>
    );
};

export default BirthSection;