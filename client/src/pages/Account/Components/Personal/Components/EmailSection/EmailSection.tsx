import { useState } from "react";
import CustomInput from "../../../../../../components/UI/CustomInput/CustomInput";


const EmailSection = () => {
    const [email,setEmail]=useState("")

    return (
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
    );
};

export default EmailSection;