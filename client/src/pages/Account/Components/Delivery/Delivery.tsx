import { useState } from "react";
import "./Delivery.css"
import FormNewAddress from "./FormNewAddress/FormNewAddress";
import { useAppSelector } from "../../../../hooks";
import Address from "./Address/Address";
const Delivery = () => {
    const [formVisible,setFormVisible] = useState(false)
    const user = useAppSelector(state => state.auth.user)
    return (
        <>
            {formVisible?
            <div  onClick={()=>{setFormVisible(false)}} className="back pointer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M7.99951 12.0001L13.5189 6.26411C13.8576 5.91212 14.4068 5.91212 14.7455 6.26411C15.0842 6.6161 15.0842 7.18679 14.7455 7.53878L10.4526 12.0001L14.7455 16.4615C15.0842 16.8135 15.0842 17.3841 14.7455 17.7361C14.4068 18.0881 13.8576 18.0881 13.5189 17.7361L7.99951 12.0001Z" fill="#e30613"></path></svg>
                <p>НАЗАД ДО АДРЕС ДОСТАВКИ</p>
            </div>
            :
            <h1 className="top-title">Адрес доставки</h1>
            }
            {user.deliveryAddresses.map(address => <Address key={user.deliveryAddresses.indexOf(address)} address={address} /> )}
            {formVisible? <FormNewAddress/> :
            <div onClick={()=>{setFormVisible(true)}} className="add-new-delivery-address d-flex align-center pointer">
                <img src="https://uzhhorod.sushi-master.ua/img/account/delivery/add.svg" alt="" />
                Додати нову адресу
            </div>
            }
        </>
    );
};

export default Delivery;