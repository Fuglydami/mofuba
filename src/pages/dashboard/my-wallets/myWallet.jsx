import React from 'react';
import { BiPlus } from 'react-icons/bi';
import { BsSend } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';
import { MdOutlineInstallDesktop } from 'react-icons/md';
import { TbFileInvoice } from 'react-icons/tb';
import Table from '../home/table';
import Cards from './cards';
import Chart from './chart';
import TransactionBreakdown from './transactionBreakdown';
import useScrollToTop from '../../../hooks/useScrollToTop';

const MyWallet = () => {
  useScrollToTop();
  const data = [
    {
      icon: <BiPlus style={{ color: '#008DD0', fontSize: '20px' }} />,
      text: 'Top-up',
    },
    {
      icon: <BsSend style={{ color: '#FACC15', fontSize: '20px' }} />,
      text: 'Send',
    },
    {
      icon: (
        <MdOutlineInstallDesktop
          style={{ color: '#22C55E', fontSize: '20px' }}
        />
      ),
      text: 'Receive',
    },
    {
      icon: <TbFileInvoice style={{ color: '#936DFF', fontSize: '20px' }} />,

      text: 'Invoicing',
    },
  ];
  return (
    <main className='flex space-x-4 mb-6'>
      <section className='w-[30%]'>
        <Cards />
      </section>
      <section className='w-[67%] space-y-10'>
        <section className='border border-[#EDF2F7] p-8 mb-10'>
          <div className='mb-8 flex items-center justify-between'>
            <h1 className='font-[800] text-[18px]'>Actions</h1>
            <IoIosArrowDown style={{ color: '#A0AEC0', fontSize: '22px' }} />
          </div>
          <div className='flex justify-between gap-6'>
            {data.map((item, i) => {
              return (
                <div
                  key={i}
                  className='flex flex-col cursor-pointer  flex-1 items-center rounded-[12px] border border-[#EDF2F7]'
                >
                  <div className=' bg-[#EDEDED]  rounded-full h-[40px] w-[40px] flex justify-center items-center my-4 mx-8'>
                    {item.icon}
                  </div>
                  <p className='font-[600] mb-4 text-[14px] text-[#1A202C] '>
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
        <TransactionBreakdown />
        <Chart />
        <Table title={'Wallet Transactions'} />
      </section>
    </main>
  );
};

export default MyWallet;
