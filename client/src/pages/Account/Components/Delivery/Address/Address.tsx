import { FC, useState } from 'react';
import {
  useDeleteAddressMutation,
  usePutAddressMutation,
} from '../../../../../API';
import './Address.css';
import CustomModal from '../../../../../components/UI/CustomModal/CustomModal';
import TwoButtons from '../../../../../components/UI/TwoButtons/TwoButtons';
import FormAddress from '../FormAddress/FormAddress';
import { useAppDispatch } from '../../../../../hooks';
import { updAddresses } from '../../../../../reducer/auth';
import { deliveryAddresses } from '../../../../../interfaces';
interface Address {
  address: deliveryAddresses;
}

const Address: FC<Address> = ({ address }) => {
  const [warnDelete, setWarnDelete] = useState(false);
  const [deleteAddress] = useDeleteAddressMutation();
  const [putAddress] = usePutAddressMutation();
  const [changeAddress, setChangeAddress] = useState(false);
  const dispatch = useAppDispatch();

  async function onChangeAddresses(temp: deliveryAddresses) {
    const addresses = await putAddress(temp);
    if ('data' in addresses) {
      const deliveryAddressesArray: deliveryAddresses[] = addresses.data;
      dispatch(updAddresses(deliveryAddressesArray));
    }
  }

  async function onDeleteAddresses() {
    const addresses = await deleteAddress(address);
    if ('data' in addresses) {
      const deliveryAddressesArray: deliveryAddresses[] = addresses.data;
      dispatch(updAddresses(deliveryAddressesArray));
    }
  }

  return (
    <>
      <div className="address d-flex space-between align-center">
        <div className="address-content">
          <h1>{address.name}</h1>
          <p>
            {'вулиця ' +
              address.street +
              ', буд.' +
              address.house +
              ', кв. ' +
              address.apartment}
          </p>
        </div>
        <div className="address-buttons">
          <svg
            onClick={() => {
              setChangeAddress((value) => !value);
            }}
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24.4919 4.38667L27.6119 7.50667C28.1319 8.02667 28.1319 8.86667 27.6119 9.38667L25.1719 11.8267L20.1719 6.82667L22.6119 4.38667C22.8652 4.13333 23.1985 4 23.5452 4C23.8919 4 24.2252 4.12 24.4919 4.38667ZM3.99854 23V28H8.99854L23.7452 13.2533L18.7452 8.25333L3.99854 23ZM7.89187 25.3333H6.6652V24.1067L18.7452 12.0267L19.9719 13.2533L7.89187 25.3333Z"
              fill="#D0D0D0"
            ></path>
          </svg>

          <svg
            onClick={() => setWarnDelete(true)}
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.0083 8H25.0053C25.5572 8 26.0045 8.44772 26.0045 9C26.0045 9.55228 25.5572 10 25.0053 10H24.0061V26C24.0061 27.1046 23.1113 28 22.0076 28H10.0166C8.9129 28 8.01814 27.1046 8.01814 26V10H7.0189C6.46703 10 6.01965 9.55228 6.01965 9C6.01965 8.44772 6.46703 8 7.0189 8H12.0151V6C12.0151 4.89543 12.9099 4 14.0136 4H19.0098C20.1136 4 21.0083 4.89543 21.0083 6V8ZM22.0076 10H10.0166V25C10.0166 25.5523 10.464 26 11.0159 26H21.0083C21.5602 26 22.0076 25.5523 22.0076 25V10ZM14.0136 8V6H19.0098V8H14.0136Z"
              fill="#1D1D1D"
              fillOpacity="0.2"
            ></path>
            <rect
              x="15.0128"
              y="12"
              width="1.99849"
              height="12"
              rx="0.999245"
              fill="#1D1D1D"
              fillOpacity="0.2"
            ></rect>
            <rect
              x="18.0106"
              y="12"
              width="1.99849"
              height="12"
              rx="0.999245"
              fill="#1D1D1D"
              fillOpacity="0.2"
            ></rect>
            <rect
              x="12.0151"
              y="12"
              width="1.99849"
              height="12"
              rx="0.999245"
              fill="#1D1D1D"
              fillOpacity="0.2"
            ></rect>
          </svg>
        </div>
        <CustomModal
          customModal={warnDelete}
          closeModal={() => {
            setWarnDelete(false);
          }}
        >
          <div className="title d-flex center">Видалити адресу доставки</div>
          <div className="description d-flex center">
            Ви впевнені, що хочете видалити цю адресу?
          </div>
          <TwoButtons
            applyTitle="ПІДТВЕРДИТИ"
            cancelTitle="СКАСУВАТИ"
            onApply={() => {
              onDeleteAddresses();

              setWarnDelete(false);
            }}
            onCancel={() => {
              setWarnDelete(false);
            }}
          />
        </CustomModal>
      </div>
      {changeAddress && (
        <FormAddress
          onClose={() => {
            setChangeAddress(false);
          }}
          onApply={(event) => {
            const temp = { ...event, _id: address._id };

            onChangeAddresses(temp);

            setChangeAddress(false);
          }}
          defaultValue={address}
        />
      )}
    </>
  );
};

export default Address;
