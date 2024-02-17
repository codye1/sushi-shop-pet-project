import { useState } from "react";
import "./Personal.css"
import CustomInput from "../../../../components/UI/CustomInput/CustomInput";
import Calendar from "../Delivery/Calendary/Calendar";


const Personal = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [calendarVisible,setCalendarVisible]=useState(false)

    function closeCalendar() {
        setCalendarVisible(false)
    }
    return (
        <>
            <h1 className="top-title">Профіль</h1>
                <CustomInput
                    placeholder="Ім'я"
                    value={name}
                    required={true}
                    setValue={setName}
                />
            <div className="contacts d-flex">
                <img src="https://lviv.sushi-master.ua/img/account/personal/phone.svg" alt="" />
                <div className="contacts-content">
                    <h3>Контакти</h3>
                    <p>+38012323111131</p>
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
                    />
                </div>
            </div>
            <div style={{padding:"0"}} className="line">
                <div></div>
            </div>
                <div className="birth-date-section">
                    <h2 className="sub-title">Вкажіть вашу дату народження, щоб отримати спеціальні подарунки і пропозиції.</h2>
                    <div  className="pick-birth d-flex space-between align-center">
                        <div onClick={()=>{setCalendarVisible(true)}}  className="comps d-flex space-between">
                            <div className="borederd"></div>
                            <div className="placeholder">ДД/ММ/РРРР</div>
                            <img src="https://uzhhorod.sushi-master.ua/img/account/personal/calendar.svg" alt="" />
                        </div>

                        {calendarVisible && <Calendar closeCalendar={closeCalendar}/>}
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