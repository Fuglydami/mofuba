import React, { useEffect } from 'react';
import QrCode from '../../assets/images/qr-code.png';

const AuthenticateLogin = ({ setToggleModal }) => {
  useEffect(() => {
    setTimeout(() => {
      setToggleModal('verify-authenticator');
    }, 10000);
  }, []);
  return (
    <div className='w-full text-[#000]'>
      <h1 className='md:w-[377px] w-full mx-auto text-[24px] mb-2  font-[800] text-center'>
        Authenticate login
      </h1>
      <p className='text-center mb-6 text-[#718096] font-[400]'>
        Scan the QR code with your authentication App
      </p>
      <div className='flex justify-center'>
        <img src={QrCode} alt='qr-code' />
      </div>
    </div>
  );
};

export default AuthenticateLogin;
