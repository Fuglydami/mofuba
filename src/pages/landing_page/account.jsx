import React from 'react';
import Icon1 from '../../assets/images/account-icon1.png';
import Icon2 from '../../assets/images/account-icon2.png';

const Accounts = ({ setToggleModal }) => {
  return (
    <div className='w-full text-[#000]'>
      <h1 className='md:w-[377px] w-full mx-auto text-[24px] mb-2 font-Inter font-[800] text-center'>
        What kind of account would you like to open
      </h1>
      <p className='text-center mb-6 text-[#718096] font-[400]'>
        Select the option that applies to you
      </p>
      <div className='flex items-center  md:gap-6 gap-2 md:px-4 px-0'>
        <div
          onClick={() => setToggleModal('sign-up')}
          className='p-4 w-[48.3%] border rounded-[12px] cursor-pointer border-[#E2E8F0]'
        >
          <div className='flex justify-center mb-1'>
            <img src={Icon1} className='' alt='account icon' />
          </div>
          <p className='text-center mb-3 font-[800]'>Personal account</p>
          <p className='text-center mb-4 text-[12px] text-[#4E4D4D]'>
            For individuals to send, receive and spend smartly
          </p>
        </div>
        <div
          onClick={() => setToggleModal('sign-up')}
          className='p-4 w-[48.3%] border cursor-pointer rounded-[12px] bg-primaryColor border-[#E2E8F0]'
        >
          <div className='flex justify-center mb-1'>
            <img src={Icon2} alt='account icon' />
          </div>
          <p className='text-center text-[#fff] mb-3 font-[800]'>
            Business account
          </p>
          <p className='text-center mb-4 text-[12px]  text-[#fff]'>
            For Entrepreneurs, Freelancers, small Business
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
