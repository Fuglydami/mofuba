import React from 'react';
import { BiPlus } from 'react-icons/bi';
import { BsSend, BsThreeDots } from 'react-icons/bs';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { MdOutlineInstallDesktop } from 'react-icons/md';
import DashboardBannerDollar1 from '../../../assets/images/dashboardBannerDollar1.svg';
import DashboardBannerDollar2 from '../../../assets/images/dashboardBannerDollar2.svg';
import DashboardBannerDollar3 from '../../../assets/images/dashboardBannerDollar3.svg';
import DashboardBannerDot from '../../../assets/images/dashboardBannerDot.svg';
import { CustomButton } from '../../../shared-lib/custom-button';
import Chart from './chart';
import QuickExchange from './quickExchange';
import Table from './table';
import Wallet from './wallet';
const Home = () => {
  return (
    <main className='p-8 flex gap-8'>
      <section className='w-[55vw]'>
        <div className='relative rounded-[16px] px-6 py-10 mb-10 bg-[#E1F6FD] flex justify-between items-center'>
          <div>
            <h1 className='font-[800] text-[#000] text-[24px] mb-3'>
              Verify your Account
            </h1>
            <p className='font-[600] w-[440px] text-[14px] text-[#787878] mb-3'>
              Please finish your account verification and begin to create
              wallets in your prefered currencies{' '}
            </p>
          </div>

          <CustomButton
            buttonStyle={'w-[228px] '}
            fontSize={'font-[800]'}
            title={
              <div className='flex items-center  gap-5'>
                <p>Verify Account</p>
                <HiOutlineArrowNarrowRight style={{ fontSize: '20px' }} />
              </div>
            }
          />
          <img
            className='absolute overflow-hidden rounded-tr-[16px] top-0 right-0'
            src={DashboardBannerDot}
            alt='banner design'
          />
          <img
            className='absolute top-[4%] right-[17.5%]'
            src={DashboardBannerDollar3}
            alt='banner design'
          />
          <img
            className='absolute top-[12%] right-[16%]'
            src={DashboardBannerDollar2}
            alt='banner design'
          />
          <img
            className='absolute top-[20%] right-[16%]'
            src={DashboardBannerDollar1}
            alt='banner design'
          />
        </div>
        <Chart />
        <Table />
      </section>
      <section className='w-[27vw]'>
        <div className='border border-[#EDF2F7] p-8 mb-10'>
          <div className='mb-8 flex justify-between items-center '>
            <h1 className='font-[800] text-[18px]'>Wallet</h1>
            <BsThreeDots style={{ color: '#CBD5E0', fontSize: '27px' }} />
          </div>
          <div className='carousel w-full'>
            <div id='item1' className='carousel-item w-full'>
              <Wallet />
            </div>
            <div id='item2' className='carousel-item w-full'>
              <Wallet />
            </div>
            <div id='item3' className='carousel-item w-full'>
              <Wallet />
            </div>
          </div>
          <div className='flex justify-center w-full py-2 gap-2'>
            <a
              href='#item1'
              className='rounded-[50px] w-[24px] h-[4px] bg-[#008DD0]'
            ></a>
            <a
              href='#item2'
              className='bg-[#E2E8F0] rounded-[50px] w-[10px] h-[4px]'
            ></a>
            <a
              href='#item3'
              className='bg-[#E2E8F0] rounded-[50px] w-[10px] h-[4px]'
            ></a>
          </div>
          <div className='flex justify-between items-center mt-2'>
            <div className='flex flex-col items-center'>
              <div className='border border-[#EDF2F7] cursor-pointer rounded-full h-[60px] w-[60px] flex justify-center items-center my-4 mx-8'>
                <BiPlus style={{ color: '#008DD0', fontSize: '25px' }} />
              </div>
              <p className='font-[600] text-[14px] text-[#718096] '>Top-Up</p>
            </div>
            <div className='flex flex-col items-center'>
              <div className='border border-[#EDF2F7] cursor-pointer rounded-full h-[60px] w-[60px] flex justify-center items-center my-4 mx-8'>
                <BsSend style={{ color: '#FACC15', fontSize: '25px' }} />
              </div>
              <p className='font-[600]  text-[14px] text-[#718096] '>Send</p>
            </div>

            <div className='flex flex-col items-center'>
              <div className='border border-[#EDF2F7] cursor-pointer rounded-full h-[60px] w-[60px] flex justify-center items-center my-4 mx-8'>
                <MdOutlineInstallDesktop
                  style={{ color: '#22C55E', fontSize: '25px' }}
                />
              </div>
              <p className='font-[600] text-[14px] text-[#718096] '>Receive</p>
            </div>
          </div>
        </div>
        <QuickExchange />
      </section>
    </main>
  );
};

export default Home;
