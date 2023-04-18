import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
const TransactionBreakdown = () => {
  return (
    <div className='flex px-8'>
      <div className='flex justify-between items-center  flex-1'>
        <p className='  flex w-[68px] text-[18px] font-[700] '>Last 30 days</p>
        <IoIosArrowDown
          style={{ color: '#000', fontSize: '20px', marginRight: '25px' }}
        />
      </div>
      <div className='w-[1px] h-[64px] bg-[#EDF2F7] mt-4' />
      <div className='grid place-content-center  flex-1  '>
        <p className='  text-[#718096] text-[14px]   my-4 '>Transactions</p>
        <p className='font-[700] mb-4 text-[18px] text-[#1A202C] '>56</p>
      </div>
      <div className='w-[1px] h-[64px] bg-[#EDF2F7] mt-4' />
      <div className='grid place-content-center   flex-1  '>
        <p className='  text-[#718096] text-[14px]   my-4 '>Total Spent</p>
        <p className='font-[700] mb-4 text-[18px] text-[#1A202C] '>
          $10,654.00
        </p>
      </div>
      <div className='w-[1px] h-[64px] bg-[#EDF2F7] mt-4' />
      <div className='grid place-content-center     flex-1  '>
        <p className='  text-[#718096] text-[14px]   my-4 '>Total Received</p>
        <p className='font-[700] mb-4 text-[18px] text-[#1A202C] '>$2,456.00</p>
      </div>
    </div>
  );
};

export default TransactionBreakdown;
