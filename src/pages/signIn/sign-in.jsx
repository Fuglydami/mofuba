import React, { useState } from 'react';
import { BsApple } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { CustomButton } from '../../shared-lib/custom-button';
import { CustomInput, CustomPasswordInput } from '../../shared-lib/input';
import { posthttp } from '../../services/actions';
import { AUTH } from '../../services/api-url';
import { toast } from 'react-toastify';
import { toastData } from '../../utils';

const initState = {
  username: '',
  password: '',
};
const SignIn = ({ setToggleModal }) => {
  let navigate = useNavigate();
  const [data, setData] = useState(initState);
  const [loading, setLoading] = useState(false);
  const handleFields = (key, value) => {
    setData({ ...data, [key]: value });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    const payload = {
      username: data.username,
      password: data.password,
    };
    if (data.username && data.password) {
      setLoading(true);
      const data = await posthttp(AUTH, payload);
      if (data && data.status === 200) {
        // saveJsonItemToLocalStorage('token-details', data.data.token);
        // saveJsonItemToLocalStorage('user-details', data.data.data);
        setLoading(false);
        navigate('/dashboard');
      } else {
        setLoading(false);
      }
    } else {
      toast.warning('Enter Username and Password', toastData);
    }
  };
  return (
    <div className='w-full '>
      <>
        <div className='text-[#000]'>
          <h1 className='text-[24px] mb-2 font-Inter font-[800] text-center'>
            Sign in to Mofuba
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
            <div className='md:w-[163px]  w-[100px]  h-[1px] relative top-3  bg-[#E2E8F0]' />
            <p className='mx-4 text-[#718096] font-[400]'>Or with email</p>
            <div className='md:w-[163px]  w-[100px]  h-[1px] relative top-3 bg-[#E2E8F0]' />
          </div>
          <form action='#'>
            <div className='space-y-4'>
              <CustomInput
                value={data.username}
                placeholder='Enter your username'
                type='text'
                width='w-full'
                textColor='black'
                onChange={(e) => handleFields('username', e.target.value)}
              />
              <CustomPasswordInput
                value={data.password}
                onChange={(e) => handleFields('password', e.target.value)}
                placeholder={'Enter your password'}
              />
            </div>
            <div className='flex items-center py-6 justify-between'>
              <div className='flex gap-3'>
                <input
                  type='checkbox'
                  checked
                  className='checkbox checkbox-success rounded-full'
                />
                <p>Remember me</p>
              </div>

              <p className='text-[#008DD0] font-[600]'>Forgot Password</p>
            </div>
            <CustomButton
              title='Sign In'
              loading={loading}
              // onClick={() => navigate('/dashboard')}
              onClick={(e) => handleLogin(e)}
              containerStyle=''
              buttonStyle='w-full  mb-5 '
            />
            <p className='text-center  cursor-pointer'>
              Don’t have an account?{' '}
              <span
                className='font-[800]'
                onClick={() => setToggleModal('sign-up')}
              >
                Sign Up
              </span>
            </p>
          </form>
        </div>
      </>
    </div>
  );
};

export default SignIn;
