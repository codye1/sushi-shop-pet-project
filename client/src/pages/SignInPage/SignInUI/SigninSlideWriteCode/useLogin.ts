import { Dispatch, SetStateAction, useState } from 'react';
import { useLoginMutation } from '../../../../API';
import { useAppDispatch } from '../../../../hooks';
import { authUser } from '../../../../reducer/auth';
import { AuthResponce } from '../../../../interfaces';

export const useLogin = (
  number: string,
  setModalError: Dispatch<SetStateAction<boolean>>
) => {
  const dispatch = useAppDispatch();
  const [pinCode, setPinCode] = useState<string>('');
  const [login] = useLoginMutation();

  async function handleLogin(number: string, code: string) {
    console.log('login');

    const result = await login({ number, code });
    if ('data' in result) {
      if (typeof result.data == 'string') {
        setModalError(true);
        setPinCode('');
      } else {
        const data: AuthResponce = result.data;
        //document.cookie = `refreshToken=${data.refreshToken}; domain=sushi-shop-pet-project-m7t7.vercel.app; path=/; SameSite=None;  Secure; max-age=${30 * 24 * 60 * 60 * 1000}`;
        dispatch(authUser(data.user));
        result && localStorage.setItem('token', result.data.accessToken);
      }
    }
  }

  const handlePinChange = (pinCode: string) => {
    setPinCode(pinCode);
    if (pinCode.length == 4) {
      handleLogin(number, pinCode);
    }
  };

  return { pinCode, handlePinChange };
};
