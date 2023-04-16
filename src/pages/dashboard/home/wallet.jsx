import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

import Frame3 from '../../../assets/images/frame 3.png';
const Wallet = () => {
  const style = {
    color: '#a3a3a3',
    cursor: 'pointer',
    fontSize: '16px',
  };
  const [type, setType] = useState(false);
  return (
    <>
      <div className='w-[90%] mx-auto rounded-[16px] bg-[#000] p-8'>
        <div className=' flex items-center gap-4 justify-end mb-14'>
          <img src={Frame3} alt='USD' className='w-[30] h-[30px]' />
          <h1 className='font-[800] text-[18px] text-[#fff]'>USD</h1>
        </div>
        <div>
          <div className='flex mb-2 items-center gap-4'>
            <span className='text-[#a3a3a3] text-[12px]'>Total Balance</span>
            <div className='' onClick={() => setType(!type)}>
              {type ? (
                <AiOutlineEyeInvisible style={style} />
              ) : (
                <AiOutlineEye style={style} />
              )}
            </div>
          </div>
          <span className='font-[800] text-[24px] text-[#fff]'>
            {type ? '********** ' : '$24,098.00'}
          </span>
        </div>
      </div>
    </>
  );
};

export default Wallet;
