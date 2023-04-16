import React, { useState } from 'react';
import { MdOutlineManageAccounts, MdOutlineWallet } from 'react-icons/md';
import { RiArrowDropDownLine, RiHome7Line } from 'react-icons/ri';
import { TbFileInvoice, TbTransform } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';
import CompanyLogo from '../assets/images/company-logo.png';
const Sidebar = () => {
  const [dropdown, setDropDown] = useState(false);

  function OpenTransfer() {
    setDropDown(!dropdown);
  }

  return (
    <>
      <aside
        className='sidebar fixed top-0 bottom-0 lg:left-0 left-[-300px] duration-300
  px-4 py-2 w-[250px] overflow-y-auto text-center bg-[#FAFAFA] shadow h-screen'
      >
        <div className='text-gray-100 text-xl'>
          <div className='flex justify-between'>
            <div className='flex flex-row items-center justify-between p-4'>
              <img src={CompanyLogo} alt='mofuba logo' />
            </div>
            {/* 
            <RxHamburgerMenu
              onClick={Openbar}
              className=' flex  text-[24px] text-[#000] m-4'
            /> */}
          </div>

          <hr className='m-4  text-[#E2E8F0]' />

          <div className='mt-10 text-[#718096]'>
            <NavLink
              to='/dashboard'
              exact
              className='sidebar p-2.5 mt-2 flex items-center px-4 cursor-pointer '
            >
              <RiHome7Line />
              <span className='text-[14px] ml-4 '>Home</span>
            </NavLink>
            <NavLink
              to='/my-wallets'
              exact
              className='sidebar p-2.5 mt-2 flex items-center px-4 cursor-pointer '
            >
              <MdOutlineWallet />
              <span className='text-[14px] ml-4 text-gray-200'>My Wallets</span>
            </NavLink>
            <div
              onClick={OpenTransfer}
              className='p-2.5 mt-2 flex items-center  px-4 duration-300 cursor-pointer  '
            >
              <TbTransform />
              <div className='flex justify-between w-full items-center'>
                <span className='text-[14px] ml-4 text-gray-200'>
                  Transfers
                </span>
                <span className={`text-sm ${dropdown && 'rotate-180'}  `}>
                  <RiArrowDropDownLine style={{ fontSize: '24px' }} />
                </span>
              </div>
            </div>
            {dropdown && (
              <div
                className='flex flex-col  leading-7 text-left text-sm font-thin mt-2 w-4/5 mx-auto'
                id='submenu'
              >
                <NavLink
                  to='/transactions'
                  exact
                  className='submenusidebar cursor-pointer p-2 pl-6 hover:bg-gray-700  mt-1'
                >
                  Transactions
                </NavLink>
                <NavLink
                  to='/recipients'
                  exact
                  className='submenusidebar cursor-pointer p-2 pl-6 hover:bg-gray-700  mt-1'
                >
                  Recipients
                </NavLink>
              </div>
            )}
            <NavLink
              to='/invoices'
              exact
              className='sidebar p-2.5 mt-2 flex items-center px-4 cursor-pointer '
            >
              <TbFileInvoice />
              <span className='text-[14px] ml-4 text-gray-200'>Invoices</span>
            </NavLink>

            <NavLink
              to='/my-account'
              exact
              className='sidebar p-2.5 mt-2 flex items-center px-4 cursor-pointer '
            >
              <MdOutlineManageAccounts />
              <div className='flex justify-between w-full items-center'>
                <span className='text-[14px] ml-4 text-gray-200'>
                  My Account
                </span>
              </div>
            </NavLink>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
