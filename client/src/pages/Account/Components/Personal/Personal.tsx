import { useState } from "react";
import "./Personal.css"
import CustomInput from "../../../../components/UI/CustomInput/CustomInput";
import Calendar from "../Delivery/Calendary/Calendar";
import {   Dialog,  Popover } from '@mui/material';
import { useAppSelector } from "../../../../hooks";

const Personal = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [openBirthWarn2, setOpenBirthWarn2] = useState(false);
    const number = useAppSelector(state=>state.auth.user.number)
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
        <>
            <h1 className="top-title">Профіль</h1>
                <CustomInput
                    placeholder="Ім'я"
                    value={name}
                    required={true}
                    setValue={setName}
                    buttons={true}
                />
            <div className="contacts d-flex">
                <img src="https://lviv.sushi-master.ua/img/account/personal/phone.svg" alt="" />
                <div className="contacts-content">
                    <h3>Контакти</h3>
                    <p>{number}</p>
                </div>
            </div>
            <div style={{padding:"0"}} className="line">
                <div></div>
            </div>
            <div className="email-section">
                <h2 className="sub-title">Вкажіть вашу електронну адресу, куди ми будемо надсилати інформацію про акції, індивідуальні промокоди та подарунки</h2>
                <div className="email-input">
                    <CustomInput
                        placeholder="Email"
                        value={email}
                        required={true}
                        setValue={setEmail}
                        buttons={true}
                    />
                </div>
            </div>
            <div style={{padding:"0"}} className="line">
                <div></div>
            </div>
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
                        <Dialog
                            open={openBirthWarn2}
                            onClose={handleCloseWarn2}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                                <div className="custom-modal d-flex column center">
                                    <div className="title d-flex center">День Народження</div>
                                    <div className="description d-flex center">Ви точно хочете зберегти день народження? Після збереження змінити його неможливо</div>
                                    <div className="cart-card-buttons">
                                        <button onClick={handleCloseWarn2} className="button-self-removal pointer">
                                            скасувати
                                        </button>
                                        <button className="button-delivery pointer">
                                            зберегти
                                        </button>
                                    </div>
                                    <img onClick={handleCloseWarn2}  className="pointer" src="https://kyiv.sushi-master.ua/img/header/close-white.svg" alt="" />
                                </div>
                        </Dialog>
                    </div>
                    <div className="birth-warn d-flex">
                        <img src="https://kyiv.sushi-master.ua/img/account/personal/warning.svg" alt="" />
                        Після введення дати народження змінити її буде неможливо
                    </div>
                </div>
            <div style={{padding:"0"}} className="line">
                <div></div>
            </div>
            <div className="photo-section d-flex align-center">
                <img src="https://lviv.sushi-master.ua/img/account/personal/picture.svg" alt="" />
                <button>Додати фото</button>
            </div>
        </>
    );
};

export default Personal;