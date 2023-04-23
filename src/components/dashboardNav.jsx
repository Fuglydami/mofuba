import React, { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { useLocation, useNavigate } from 'react-router-dom';
import Avatar from '../assets/images/avatar.svg';
import NotificationIcon from '../assets/images/notification.svg';
import { BiLogOut } from 'react-icons/bi';
import {
  clearLocalStorage,
  getFromLocalStorage,
} from '../helper-functions/save-data';

const DashboardNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = getFromLocalStorage('user-details');

  const { FullName, Address } = JSON.parse(user);

  const navTitle = () => {
    const route = location.pathname.substring(1);
    switch (route) {
      case 'dashboard':
        return 'Dashboard';
      case 'my-wallets':
        return 'My wallets';
      case 'transactions':
        return 'Transactions';
      case 'recipients':
        return 'Recipients';
      case 'invoices':
        return 'Invoices';
      case 'my-account':
        return 'Account details';
      default:
        return null;
    }
  };

  const notifStyle = {
    height: '7px',
    width: '7px',
    borderRadius: '3px',
    background: '#FF4747',
    position: 'relative',
    left: '20px',
    bottom: '4px',
  };
  const [dropdown, setDropDown] = useState(false);
  return (
    <nav className='fixed bg-[#fff] dashboardNavwidth z-10 top-0 p-8   text-[#1A202C]'>
      <div className='flex items-center justify-between'>
        <h1 className='text-[24px] font-[800]'>{navTitle()}</h1>

        <div className='flex items-center gap-6'>
          <div className=' h-[48px] flex justify-center items-center bg-[#FAFAFA] w-[48px] rounded-full'>
            <div className='animate-bounce ease-in-out' style={notifStyle} />
            <img
              className='h-[27px]  w-[22px] cursor-pointer'
              src={NotificationIcon}
              loading='lazy'
              alt='message'
            />
          </div>

          <div
            className={`relative ${
              dropdown ? 'bg-[#E2E8F0] ' : 'bg-transparent'
            } px-2 py-1.5 rounded-[12px] flex items-center gap-4 cursor-pointer `}
          >
            <img
              className='h-[40px] w-[40px] flex'
              src={Avatar}
              loading='lazy'
              alt='message'
            />
            <div>
              <div
                onClick={() => setDropDown(!dropdown)}
                className='flex items-center gap-3'
              >
                <p className='font-[800] uppercase'>{FullName}</p>
                <span className={`text-sm ${dropdown && 'rotate-180'}  `}>
                  <RiArrowDropDownLine style={{ fontSize: '24px' }} />
                </span>
              </div>
              {dropdown && (
                <div className='absolute z-30 right-0 mt-5 p-3 shadow-lg bg-base-100 rounded-box w-52'>
                  <div>Item 1</div>

                  <div
                    onClick={() => {
                      clearLocalStorage();
                      navigate('/home');
                    }}
                    className='flex cursor-pointer items-center gap-2'
                  >
                    <BiLogOut className='text-[#FF4747]' />
                    <span>Logout</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNav;
