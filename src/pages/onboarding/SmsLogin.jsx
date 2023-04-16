import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { CustomButton } from '../../shared-lib/custom-button';
import { containerStyle, focusStyle, inputStyle } from '../../utils';

const SmsLogin = () => {
  const [otp, setOtp] = useState('');

  const handleChange = (value) => {
    setValue(value);

    console.log(value, 'value');
  };

  return (
    <>
      {' '}
      <div className='flex flex-col text-[#000] space-y-4 mb-10'>
        <h2 className='text-[24px] font-[800] text-center md:text-[24px]font-bold'>
          Authenticate login
        </h2>
        <p className='text-[#718096] w-[301px] mx-auto text-[14px] text-center md:text-[16px] text-green-100'>
          Enter the 2FA code we sent to{' '}
          <span className='font-[600] text-[#000]'>+234810*****39</span>
        </p>
      </div>
      <div className=' '>
        <div className=' mb-10 mx-auto'>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={5}
            inputType={'tel'}
            shouldAutoFocus={'false'}
            inputStyle={inputStyle}
            focusStyle={focusStyle}
            containerStyle={containerStyle}
            renderInput={(props) => (
              <input style={{ backgroundColor: 'none' }} {...props} />
            )}
          />
        </div>

        <CustomButton
          buttonStyle='w-full mb-5 '
          title={'Verify Login'}
          //   onClick={() => {
          //     setToggleModal('secure-account');
          //   }}
        />
      </div>
    </>
  );
};

export default SmsLogin;
