import { useState } from 'react';
import './Delivery.css';
import FormAddress from './FormAddress/FormAddress';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import Address from './Address/Address';
import { useAddAddressMutation } from '../../../../API';
import { deliveryAddresses } from '../../../../interfaces';
import { updAddresses } from '../../../../reducer/auth';
import redAdd from '../../../../icons/redAdd.svg';
import back from '../../../../icons/back.svg';

const Delivery = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [addAddress] = useAddAddressMutation();
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  async function onSaveAddresses(temp: deliveryAddresses) {
    const addresses = await addAddress(temp);

    if ('data' in addresses) {
      const deliveryAddressesArray: deliveryAddresses[] = addresses.data;
      dispatch(updAddresses(deliveryAddressesArray));
    }
  }

  return (
    <>
      {formVisible ? (
        <div
          onClick={() => {
            setFormVisible(false);
          }}
          className="back pointer"
        >
          <img src={back} alt="" />
          <p>НАЗАД ДО АДРЕС ДОСТАВКИ</p>
        </div>
      ) : (
        <h1 className="top-title">Адрес доставки</h1>
      )}
      {user.deliveryAddresses.map((address) => (
        <Address
          key={user.deliveryAddresses.indexOf(address)}
          address={address}
        />
      ))}
      {formVisible ? (
        <FormAddress
          onClose={() => {
            setFormVisible(false);
          }}
          onApply={(event) => {
            onSaveAddresses(event);
          }}
        />
      ) : (
        <div
          onClick={() => {
            setFormVisible(true);
          }}
          className="add-new-delivery-address d-flex align-center pointer"
        >
          <img src={redAdd} alt="" />
          Додати нову адресу
        </div>
      )}
    </>
  );
};

export default Delivery;
