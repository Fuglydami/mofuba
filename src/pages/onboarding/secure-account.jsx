import React, { useRef, useState } from 'react';
import SecureIcon1 from '../../assets/images/secureIcon1.png';
import SecureIcon2 from '../../assets/images/secureIcon2.png';
import { CustomButton } from '../../shared-lib/custom-button';

let cardStyle1 =
  'p-4 border w-[48.3%] border-[#E2E8F0] cursor-pointer rounded-[12px] bg-primaryColor text-[#fff]';

let cardStyle2 = `  p-4  'bg-[#fff] text-[#000] w-[48.3%]  border rounded-[12px] cursor-pointer border-[#E2E8F0]`;

const SecureAccount = ({ setToggleModal }) => {
  const authenticator = useRef(null);
  const sms = useRef(null);
  const [selected, setSelected] = useState('Authenticator App');

  const handleNext = () => {
    if (selected === 'Authenticator App') {
      setToggleModal('authenticate-login');
    } else {
      setToggleModal('sms-login');
    }
  };

  const handleCardClick = (text) => {
    setSelected(text);
  };

  return (
    <div className='w-full text-[#000]'>
      <h1 className='md:w-[377px] w-full mx-auto text-[24px] mb-2  font-[800] text-center'>
        Secure your account by setting an authentication method
      </h1>
      <p className='text-center mb-6 text-[#718096] font-[400]'>
        Select your preferred method. Completing this setup enables 2FA for all
        logins
      </p>
      <div className=' mb-10     flex items-center  md:gap-6 gap-2 md:px-4 px-0'>
        <div
          onClick={() => handleCardClick('Authenticator App')}
          className={`md:px-4 px-2 py-4  border w-[48.3%] border-[#E2E8F0] cursor-pointer rounded-[12px]  ${
            selected === 'Authenticator App'
              ? 'bg-primaryColor text-[#fff]'
              : 'bg-[#fff] text-[#000]'
          }`}
        >
          <div className='flex justify-center mb-1'>
            <img src={SecureIcon1} alt='account icon' />
          </div>
          <p
            ref={authenticator}
            className={` text-center  mb-3 font-[800] ${
              selected === 'Authenticator App' ? 'text-[#fff]' : 'text-[#000] '
            } `}
          >
            Authenticator App
          </p>
          <p
            className={` text-center mb-4 text-[12px] text-[#4E4D4D] ${
              selected === 'Authenticator App'
                ? 'text-[#fff]'
                : 'text-[#4E4D4D] '
            } `}
          >
            Instantly authenticate logins yourself from app
          </p>
        </div>
        <div
          onClick={() => handleCardClick('SMS')}
          className={`md:px-4 px-2 py-4  border w-[48.3%] border-[#E2E8F0] cursor-pointer rounded-[12px]  ${
            selected === 'SMS'
              ? 'bg-primaryColor text-[#fff]'
              : 'bg-[#fff] text-[#000]'
          }`}
        >
          <div className='flex justify-center mb-1'>
            <img src={SecureIcon2} className='' alt='account icon' />
          </div>
          <p
            ref={sms}
            className={` text-center  mb-3 font-[800] ${
              selected === 'SMS' ? 'text-[#fff]' : 'text-[#000] '
            } `}
          >
            SMS
          </p>
          <p
            className={`${
              selected === 'SMS' ? 'text-[#fff] ' : 'text-[#4E4D4D]'
            } text-center mb-4 text-[12px] text-[#4E4D4D]`}
          >
            Receive authentication code via SMS
          </p>
        </div>
      </div>
      <CustomButton
        buttonStyle='w-full mb-5 '
        title={'Next'}
        onClick={handleNext}
      />
      <p className='cursor-pointer text-center '>Skip for Now</p>
    </div>
  );
};

export default SecureAccount;
