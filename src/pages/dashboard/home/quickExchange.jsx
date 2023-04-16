import React, { useState } from 'react';
import { BiRefresh } from 'react-icons/bi';
import { IoIosArrowRoundForward } from 'react-icons/io';
// import { SlRefresh } from 'react-icons/sl';
import 'react-phone-number-input/style.css';
import { CustomInput, CustomSelect } from '../../../shared-lib/input';

const initState = {
  firstname: '',
  lastname: '',
  email: '',
  currency1: 'USD',
  currency2: 'KES',
};

const QuickExchange = () => {
  const arrayOfCurrency = ['USD', 'NGN', 'KES'];
  const [data, setData] = useState(initState);
  const handleFields = (key, value) => {
    setData({ ...data, [key]: value });
  };
  return (
    <section className='border border-[#EDF2F7] p-8 mb-10'>
      <div className='mb-4'>
        <h1 className='font-[800] text-[18px]'>Quick Exchange</h1>
      </div>
      <div className='w-[100%]'>
        <div className='flex gap-4 items-center '>
          <div className='w-[30%]'>
            <CustomSelect
              value={data.currency1}
              arrayOfCurrency={arrayOfCurrency}
              onChange={(e) => handleFields('currency1', e.target.value)}
            />
          </div>
          <div className='w-[70%]'>
            <CustomInput type={'number'} value={0} />
          </div>
        </div>
        <div className='flex  justify-center'>
          <BiRefresh
            style={{
              fontSize: '30px',
              color: '#4E4D4D',
              cursor: 'pointer',
            }}
          />
        </div>
        <div className='flex gap-4  items-center'>
          <div className='w-[30%]'>
            <CustomSelect
              value={data.currency2}
              arrayOfCurrency={arrayOfCurrency}
              onChange={(e) => handleFields('currency2', e.target.value)}
            />
          </div>
          <div className='w-[70%]'>
            <CustomInput type={'number'} value={0} />
          </div>
        </div>
        <div className='mt-2'>
          <p className='text-[14px] mb-3'>Our Rate</p>
          <div className='flex items-center gap-4'>
            <span className='font-[800] text-[18px]'>$1.05 USD</span>
            <span>
              <IoIosArrowRoundForward
                style={{
                  fontSize: '25px',

                  color: '#16A34A',
                }}
              />
            </span>
            <span className='font-[800] text-[18px]'>Sh 128.30 KES </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickExchange;
