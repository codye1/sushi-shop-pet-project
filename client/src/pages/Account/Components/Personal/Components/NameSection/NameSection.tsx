import { useState } from 'react';
import CustomInput from '../../../../../../components/UI/CustomInput/CustomInput';
import { useAppSelector } from '../../../../../../hooks';

const NameSection = () => {

    const number = useAppSelector(state=>state.auth.user.number)

    const [name,setName]=useState("")

    return (
        <>
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
        </>
    );
};

export default NameSection;