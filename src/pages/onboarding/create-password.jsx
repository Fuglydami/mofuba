import React, { useState } from 'react';
import { CustomButton } from '../../shared-lib/custom-button';
import { CustomPasswordInput } from '../../shared-lib/input';

const initState = {
  password: '',
  confirmPassword: '',
};

const Pill = ({ title }) => {
  return (
    <div className='flex border bg-[#F7FAFC] border-[#E2E8F0] items-center mx-2 px-2 py-1 rounded-full'>
      <p className='text-[#4E4D4D] text-[12px] mr-2'>{title}</p>
      <input
        type='checkbox'
        checked
        className='checkbox checkbox-success h-[20px] w-[20px] rounded-full'
      />
    </div>
  );
};
const CreatePassword = ({ setToggleModal }) => {
  const [data, setData] = useState(initState);
  const handleFields = (key, value) => {
    setData({ ...data, [key]: value });
  };
  return (
    <div className='w-full text-[#000]'>
      <h1 className='text-[24px] mb-2 font-Inter font-[800] text-center'>
        Create your Password
      </h1>
      <p className='text-center mb-6 text-[#718096] font-[400]'>
        Send, receive and spend smarter
      </p>
      <form action='#'>
        <div className='space-y-4 mb-6'>
          <CustomPasswordInput
            value={data.password}
            onChange={(e) => handleFields('password', e.target.value)}
            placeholder={'Enter Password'}
          />
          <CustomPasswordInput
            value={data.confirmPassword}
            onChange={(e) => handleFields('confirmPassword', e.target.value)}
            placeholder={'Re-enter Password'}
          />
        </div>
        <div className='flex justify-center mb-4 items-center'>
          <Pill title='Mininimum 8 characters' />
          <Pill title='Mininimum 8 characters' />
        </div>
        <div className='flex justify-center mb-4 items-center'>
          <Pill title='One Upper Case' />
          <Pill title='One number' />
        </div>
        <div className='flex justify-center mb-5 items-center'>
          <Pill title='One special character' />
          <Pill title='Password Matches' />
        </div>
        <CustomButton
          title='Next'
          onClick={() => setToggleModal('verify-phone')}
          containerStyle=''
          buttonStyle='w-full  mb-5 '
        />
        <p
          className='text-center  cursor-pointer'
          onClick={() => setToggleModal('sign-in')}
        >
          Already have an account? <span className='font-[800]'>Sign In</span>
        </p>
      </form>
    </div>
  );
};

export default CreatePassword;
