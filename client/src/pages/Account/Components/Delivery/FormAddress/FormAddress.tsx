import { FC, useState } from "react";
import CustomInput from "../../../../../components/UI/CustomInput/CustomInput";
import "./FormAddress.css"
import { deliveryAddresses } from '../../../../../API';
interface IFormAddress{
    onApply:(props:deliveryAddresses)=>void
    onClose:()=>void
    defaultValue?:deliveryAddresses
}

const FormAddress:FC<IFormAddress> = ({onApply,defaultValue,onClose}) => {
    const [street,setStreet]=useState(defaultValue? defaultValue.street : "" )
    const [house,setHouse]=useState(defaultValue? defaultValue.house : "" )
    const [intercom,setIntercom]=useState(defaultValue? defaultValue.intercom : "" )
    const [apartment,setApartment]=useState(defaultValue? defaultValue.apartment : "" )
    const [entrance,setEntrance]=useState(defaultValue? defaultValue.entrance : "" )
    const [floor,setFloor]=useState(defaultValue? defaultValue.floor : "" )
    const [name,setName]=useState(defaultValue? defaultValue.name : "" )

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
                    <div onClick={()=>{setName("Дім")}} className={`name ${name=="Дім"? "selected" : ''}`} >
                        Дім
                    </div>
                    <div onClick={()=>{setName("Робота")}} className={`name ${name=="Робота"? "selected" : ''}`} >
                        Робота
                    </div>
                    <div onClick={()=>{setName("Друзі")}} className={`name ${name=="Друзі"? "selected" : ''}`} >
                        Друзі
                    </div>
                </div>
                <div className="cart-card-buttons">
                    <button onClick={onClose} className="button-self-removal pointer">
                        Скасувати
                    </button>
                    <button onClick={()=>{onApply({street,house,intercom,apartment,entrance,floor,name})}} className="button-delivery pointer">
                        Зберегти
                    </button>
                </div>
            </form>
        </>
    );
};

export default FormAddress;