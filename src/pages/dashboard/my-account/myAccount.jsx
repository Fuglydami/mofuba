import React from 'react';
import { CustomButton } from '../../../shared-lib/custom-button';
import { MdPersonOutline } from 'react-icons/md';
import { AiOutlineBank } from 'react-icons/ai';
import { MdSecurity } from 'react-icons/md';
import { useRef } from 'react';
import { useState } from 'react';
import PersonalInformation from './personalInformation';
import { useScrollToTop } from '../../../hooks/useScrollToTop';

const MyAccount = () => {
  useScrollToTop();
  const [selectedItem, setSelectedItem] = useState(0);

  const handleClick = (index) => {
    setSelectedItem(index === selectedItem ? null : index);
  };

  const data = [
    {
      icon: <MdPersonOutline style={{ color: '#008DD0', fontSize: '20px' }} />,
      name: 'Personal Informations',
      desc: 'View your detail to receiving money',
    },
    {
      icon: <AiOutlineBank style={{ color: '#008DD0', fontSize: '20px' }} />,
      name: 'Bank Accounts',
      desc: 'Set up and manage your direct debit',
    },
    {
      icon: <MdSecurity style={{ color: '#008DD0', fontSize: '20px' }} />,
      name: 'Login and Security',
      desc: 'Password Reset, 2-Factor Authentication',
    },
  ];
  return (
    <div className=' '>
      <div className='h-[1px] w-full bg-[#E2E8F0]' />
      <main className='flex '>
        <section className='  w-[30%] mt-10'>
          <div className='w-[80%] mb-10 mx-auto rounded-[16px] bg-primaryColor p-8'>
            <div className=' flex items-center gap-4  mb-8'>
              <div className='w-[30%]'>
                <div
                  className='radial-progress text-[#fff]'
                  style={{ '--value': 64 }}
                >
                  64%
                </div>
              </div>
              <div className='w-[70%]'>
                <p className='font-[800] text-[#fff]'>Complete profile</p>
                <p className='text-[12px] text-[#e1e1e1]'>
                  Complete your profile to unlock all features
                </p>
              </div>
            </div>
            <div>
              <CustomButton
                title={'Verify identity'}
                text={'text-primaryColor'}
                backgroundColor={'bg-[#FFFFFF] hover:bg-[#e1e1e1]'}
                width={'w-[100%]'}
              />
            </div>
          </div>
          <div>
            {data.map((item, index) => {
              const isSelected = index === selectedItem;
              return (
                <div
                  onClick={() => handleClick(index)}
                  key={index}
                  className={`${
                    isSelected
                      ? 'bg-[#FAFAFA] border-l-primaryColor border-l-4'
                      : 'bg-white'
                  } flex item-center  py-7 px-12 cursor-pointer`}
                >
                  <div>
                    <div
                      className={` ${
                        isSelected ? 'bg-[#fff]' : 'bg-[#F7FAFC]'
                      }   rounded-full h-[48px] w-[48px] flex justify-center items-center  mr-5`}
                    >
                      {item.icon}
                    </div>
                  </div>
                  <div className='grid place-content-center'>
                    <p className='font-[800] mb-2'>{item.name}</p>
                    <p className='text-[#718096] text-[12px]'>{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <div className='bg-[#E2E8F0] h-auto w-[1px] ' />
        <section className='w-[70%] mt-10'>
          <PersonalInformation />
        </section>
      </main>
    </div>
  );
};

export default MyAccount;
