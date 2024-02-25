import {  Popover } from '@mui/material';
import React, { useState } from 'react';
import Calendar from '../../../Delivery/Calendary/Calendar';
import "./BirthSection.css"
import CustomModal from '../../../../../../components/UI/CustomModal/CustomModal';
import TwoButtons from '../../../../../../components/UI/TwoButtons/TwoButtons';

const BirthSection = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [openBirthWarn2, setOpenBirthWarn2] = useState(false);
    const handleClickCalendar = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleCloseCalendar = () => {
        setAnchorEl(null);
    };

    const OpenBirthWarn2 = () => {
        console.log("open");
        setOpenBirthWarn2(true)
      };

    const handleCloseWarn2 = () => {
    console.log("close");

    setOpenBirthWarn2(false)
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    return (
        <div className="birth-date-section">
            <h2 className="sub-title">Вкажіть вашу дату народження, щоб отримати спеціальні подарунки і пропозиції.</h2>
            <div  className="pick-birth d-flex space-between align-center pointer">
                <button onClick={handleClickCalendar}  className="comps d-flex space-between align-center pointer">
                    <div className="borederd"></div>
                    <div className="placeholder">ДД/ММ/РРРР</div>
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
                    <div className="title d-flex center">День Народження</div>
                    <div className="description d-flex center">Ви точно хочете зберегти день народження? Після збереження змінити його неможливо</div>
                    <TwoButtons
                        cancelTitle='СКАСУВАТИ'
                        applyTitle='ЗБЕРЕГТИ'
                        onCancel={handleCloseWarn2}
                        onApply={()=>{}}
                    />
                </CustomModal>
            </div>
            <div className="birth-warn d-flex">
                <img src="https://kyiv.sushi-master.ua/img/account/personal/warning.svg" alt="" />
                Після введення дати народження змінити її буде неможливо
            </div>
        </div>
    );
};

export default BirthSection;