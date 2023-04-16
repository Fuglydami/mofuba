import React, { useState } from 'react';
import { BsApple } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { CustomButton } from '../../shared-lib/custom-button';
import { CustomInput } from '../../shared-lib/input';

const initState = {
  firstname: '',
  lastname: '',
  email: '',
  phonenumber: '',
};

const SignUp = ({ setToggleModal }) => {
  const [data, setData] = useState(initState);
  const handleFields = (key, value) => {
    setData({ ...data, [key]: value });
  };

  return (
    <div className='w-full '>
      <>
        <div className='text-[#000]'>
          <h1 className='text-[24px] mb-2 font-Inter font-[800] text-center'>
            Sign up for an account
          </h1>
          <p className='text-center mb-6 text-[#718096] font-[400]'>
            Send, receive and spend smarter
          </p>

          <div className='cursor-pointer flex justify-center gap-4'>
            <div className='flex items-center gap-3 border rounded-xl border-[#E2E8F0] px-6 py-3'>
              <FcGoogle />
              <p className='md:text-[16px] text-[12px]'>Sign in with Google</p>
            </div>
            <div className='flex items-center gap-3 border rounded-xl border-[#E2E8F0] px-6 py-3'>
              <BsApple />
              <p className='md:text-[16px] text-[12px]'>Sign In with Apple</p>
            </div>
          </div>
          <div className='my-4 flex justify-center'>
            <div className='md:w-[163px] w-[100px] h-[1px] relative top-3  bg-[#E2E8F0]' />
            <p className='mx-4 text-[#718096] font-[400]'>Or with email</p>
            <div className='md:w-[163px]  w-[100px] h-[1px] relative top-3 bg-[#E2E8F0]' />
          </div>
          <form action='#'>
            <div className='space-y-4'>
              <div className='flex justify-center gap-4'>
                <CustomInput
                  value={data.firstname}
                  placeholder='First Name'
                  type='text'
                  width='w-[48.1%]'
                  textColor='black'
                  onChange={(e) => handleFields('firstname', e.target.value)}
                />
                <CustomInput
                  value={data.lastname}
                  placeholder='Last Name'
                  type='text'
                  width='w-[48.1%]'
                  textColor='black'
                  onChange={(e) => handleFields('lastname', e.target.value)}
                />
              </div>
              <CustomInput
                value={data.email}
                type='email'
                onChange={(e) => handleFields('email', e.target.value)}
                placeholder={'Enter your email'}
              />
            </div>
            <PhoneInput
              placeholder='Enter phone number'
              value={data.phonenumber}
              defaultCountry={'NG'}
              country={'NG'}
              international
              className='bg-[#fff] mt-5 w-full p-3 rounded-xl border border-[#E2E8F0] text-lg outline-none'
              onChange={(e) => handleFields('phonenumber')}
            />
            <div className='flex items-center py-6 justify-between'>
              <div className='flex items-center gap-3'>
                <input
                  type='checkbox'
                  checked
                  className='checkbox checkbox-success rounded-full'
                />

                <p className='text-[14px] text-[#718096]'>
                  Yes, I agree to Mofuba Payment{' '}
                  <span className='text-[#000] font-[600]'>Privacy Policy</span>{' '}
                  , and{' '}
                  <span className='text-[#000] font-[600]'>
                    Terms and conditions.
                  </span>
                </p>
              </div>
            </div>
            <CustomButton
              title='Next'
              onClick={() => setToggleModal('create-password')}
              containerStyle=''
              buttonStyle='w-full  mb-5 '
            />
            <p className='text-center  cursor-pointer'>
              Already have an account?{' '}
              <span
                className='font-[800]'
                onClick={() => setToggleModal('sign-in')}
              >
                Sign In
              </span>
            </p>
          </form>
        </div>
      </>
    </div>
  );
};

export default SignUp;
