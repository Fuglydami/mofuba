import React, { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { useLocation } from 'react-router-dom';
import Avatar from '../assets/images/avatar.svg';
import NotificationIcon from '../assets/images/notification.svg';
import { BiLogOut } from 'react-icons/bi';

const DashboardNav = () => {
  const location = useLocation();

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
    position: 'absolute',
    right: '271px',
    top: '48px',
  };
  const [dropdown, setDropDown] = useState(false);
  return (
    <nav className='fixed bg-[#fff] dashboardNavwidth z-10 top-0 p-8   text-[#1A202C]'>
      <div className='flex items-center justify-between'>
        <h1 className='text-[24px] font-[800]'>{navTitle()}</h1>

        <div className='flex items-center gap-6'>
          <div className=' h-[48px] flex justify-center items-center bg-[#FAFAFA] w-[48px] rounded-full'>
            <img
              className='h-[27px]   w-[22px] cursor-pointer'
              src={NotificationIcon}
              loading='lazy'
              alt='message'
            />
          </div>
          <div className='animate-bounce ease-in-out' style={notifStyle} />
          <img
            className='h-[40px] w-[40px] flex'
            src={Avatar}
            loading='lazy'
            alt='message'
          />

          <div className='dropdown cursor-pointer dropdown-end'>
            <div tabIndex={0} className='flex items-center gap-3'>
              <p className='font-[800]'>Tolu Williams</p>
              <span className={`text-sm ${dropdown && 'rotate-180'}  `}>
                <RiArrowDropDownLine style={{ fontSize: '24px' }} />
              </span>
            </div>
            <div
              tabIndex={0}
              className='dropdown-content menu mt-3 p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <a>Item 1</a>
              </li>
              <div className='flex cursor-pointer items-center gap-3'>
                <BiLogOut />
                <span>Logout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNav;
