import React from 'react';
import EUR from '../../../assets/images/european union.png';
import Frame3 from '../../../assets/images/frame 3.png';
import UK from '../../../assets/images/united kingdom.png';
import { CustomButton } from '../../../shared-lib/custom-button';
const Cards = () => {
  const data = [
    {
      title: 'Balance',
      image: EUR,
      imageText: 'EUR',
      amount: '€00.00 ',
      currency: 'EUR',
      status: 'Pending verification',
    },
    {
      title: 'Balance',
      image: UK,
      imageText: 'GBP',
      amount: '€1075.00 ',
      currency: 'GBP',
      status: 'Verified',
    },
  ];
  const checkStatusColor = (status) => {
    if (status === 'Verified') return 'text-[#22C55E]';
    if (status === 'Pending verification') return 'text-[#FF4747]';
  };
  return (
    <div className='mb-4'>
      <div className='bg-[#E1F6FD] border-r-4 border-r-primaryColor p-4 mb-4'>
        <div className='w-[90%] mx-auto rounded-[16px] bg-[#000] p-6'>
          <div className=' flex items-center  justify-between mb-4'>
            <p className='text-[#A0AEC0]'>Balance</p>
            <div className='flex items-center gap-4 '>
              <img src={Frame3} alt='USD' className='w-[30] h-[30px]' />
              <h1 className='font-[800] text-[14px] text-[#fff]'>USD</h1>
            </div>
          </div>
          <div className='flex gap-2 items-end  mb-4'>
            <p className='text-[24px] tracking-wide font-Manrope font-[800] text-[#fff]'>
              $56,476.00
            </p>
            <p className='text-[14px] font-[600] text-[#A0AEC0] pb-0.5'>USD</p>
          </div>
          <div>
            <div className='flex  items-center gap-2'>
              <span className='text-[#22C55E] '>Verified</span>
              <span className='h-[4px] w-[4px] rounded-full bg-[#22C55E]' />
            </div>
          </div>
        </div>
      </div>

      <div className='space-y-6 mb-20'>
        {data.map((item, i) => {
          const { title, image, imageText, amount, currency, status } = item;
          return (
            <div
              key={i}
              className='w-[90%] mx-auto rounded-[16px] border border-[#EDF2F7]  p-6 '
            >
              <div className=' flex items-center  justify-between mb-4'>
                <p className='text-[#A0AEC0]'>{title}</p>
                <div className='flex items-center gap-4 '>
                  <img src={image} alt='USD' className='w-[30] h-[30px]' />
                  <h1 className='font-[800] text-[14px] text-[#000]'>
                    {imageText}
                  </h1>
                </div>
              </div>
              <div className='flex gap-2 items-end  mb-4'>
                <p className='text-[24px] tracking-wide font-Manrope font-[800] text-[#000]'>
                  {amount}
                </p>
                <p className='text-[14px] font-[600] text-[#A0AEC0] pb-0.5'>
                  {currency}
                </p>
              </div>
              <div>
                <div className='flex  items-center gap-2'>
                  <span className={` ${checkStatusColor(status)}  `}>
                    {status}
                  </span>
                  <span
                    className={`h-[4px] w-[4px] rounded-full ${
                      status === 'Verified' ? 'bg-[#22C55E]' : 'bg-[#E2E8F0]'
                    }`}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className='px-4'>
        <CustomButton
          border='border-[#008DD0] hover:border-[#008DD0]'
          text='text-[#008DD0] font-[800]'
          width={'w-full'}
          backgroundColor={'bg-transparent hover:bg-transparent'}
          title={'Add New Wallet'}
        />
      </div>
    </div>
  );
};

export default Cards;
