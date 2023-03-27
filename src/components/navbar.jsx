import React, { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { RxHamburgerMenu } from 'react-icons/rx';
import CompanyLogo from '../assets/images/company-logo.png';

const Navbar = ({ openModal, openModalLogin }) => {
  const [show, setShow] = useState(true);
  return (
    <div className='w-full text-gray-700  lg:py-12 md:py-8 py-6 '>
      <div className='flex flex-col   mx-auto md:items-center md:justify-between md:flex-row '>
        <div className='flex justify-between'>
          <div className='flex flex-row items-center justify-between p-4'>
            <img src={CompanyLogo} alt='mofuba logo' />
          </div>

          {show ? (
            <RxHamburgerMenu
              onClick={() => setShow(!show)}
              className='md:hidden flex  text-[32px] text-[#000] m-4'
            />
          ) : (
            <GrClose
              onClick={() => setShow(!show)}
              className='md:hidden flex  text-[32px] text-[#000] m-4'
            />
          )}
        </div>
        <section className={`${show && 'hidden'} md:flex `}>
          <nav className='flex-col text-[#000000] flex-grow  font-[700] text-[18px] pb-4 md:pb-0 lg:flex lg:justify-center lg:flex-row'>
            <a
              className='px-4 py-2 mt-2  font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
              href='#'
            >
              Business
            </a>
            <a
              className='px-4 py-2 mt-2  font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
              href='#'
            >
              Personal
            </a>
            <a
              className='px-4 py-2 mt-2 font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
              href='#'
            >
              Security
            </a>
            <a
              className='px-4 py-2 mt-2  font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
              href='#'
            >
              Pricing
            </a>
          </nav>
        </section>
        <section className={`${show && 'hidden'} md:flex  items-center`}>
          <div className='relative px-4 mb-4 lg:mb-0'>
            <button
              onClick={openModalLogin}
              className='font-semibold  bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline bg-none text-[#000000]'
            >
              Login
            </button>
          </div>
          <div onClick={openModal} className='relative' x-data='{ open: true }'>
            <button className='btn btn-active px-8  h-[59px] hover:bg-primaryDeep border-none bg-primaryColor text-[#ffffff] text-[18px] font-[800] rounded-full'>
              Sign Up
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Navbar;
