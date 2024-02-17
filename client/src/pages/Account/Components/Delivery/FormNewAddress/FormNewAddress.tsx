import { useState } from "react";
import CustomInput from "../../../../../components/UI/CustomInput/CustomInput";
import "./FormNewAddress.css"

const FormNewAddress = () => {
    const [street,setStreet]=useState("")
    const [house,setHouse]=useState("")
    const [intercom,setIntercom]=useState("")
    const [apartment,setApartment]=useState("")
    const [entrance,setEntrance]=useState("")
    const [floor,setFloor]=useState("")
    const [name,setName]=useState("")
    return (
        <>
            <form className="add-new-address" action="">
                <div className="form-inputs">
                <CustomInput
                    required={true}
                    value={street}
                    setValue={setStreet}
                    placeholder="Вулиця"
                />
                <CustomInput
                    required={true}
                    value={house}
                    setValue={setHouse}
                    placeholder="Дім"
                />
                <CustomInput
                    required={false}
                    value={intercom}
                    setValue={setIntercom}
                    placeholder="Домофон"
                />
                <CustomInput
                    required={false}
                    value={apartment}
                    setValue={setApartment}
                    placeholder="Квартира"
                />
                <CustomInput
                    required={false}
                    value={entrance}
                    setValue={setEntrance}
                    placeholder="Під'їзд"
                />
                <CustomInput
                    required={false}
                    value={floor}
                    setValue={setFloor}
                    placeholder="Поверх"
                />
                </div>
                <div className="full-wide-input">
                <CustomInput
                    required={false}
                    value={name}
                    setValue={setName}
                    placeholder="Назва"
                />
                </div>
                <div className="names d-flex">
                    <div className="name" >
                        Дім
                    </div>
                    <div className="name" >
                        Робота
                    </div>
                    <div className="name" >
                        Друзі
                    </div>
                </div>
                <div className="cart-card-buttons">
                    <button className="button-self-removal pointer">
                        Скасувати
                    </button>
                    <button className="button-delivery pointer">
                        Зберегти
                    </button>
                </div>
            </form>
        </>
    );
};

export default FormNewAddress;