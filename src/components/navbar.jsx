import React, { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { RxHamburgerMenu } from 'react-icons/rx';
import CompanyLogo from '../assets/images/company-logo.png';
import { CustomButton } from '../shared-lib/custom-button';

const Navbar = ({ openModal, openModalLogin, isOpen }) => {
  const [show, setShow] = useState(true);
  return (
    <div className='w-full text-gray-700  lg:py-12 md:py-8 py-6 '>
      <div className='flex flex-col   mx-auto md:items-center md:justify-between md:flex-row '>
        <div className='flex justify-between'>
          <div className='flex flex-row items-center justify-between p-4'>
            <img src={CompanyLogo} alt='mofuba logo' />
          </div>

          <RxHamburgerMenu
            onClick={() => setShow(!show)}
            className='md:hidden flex  text-[24px] text-[#000] m-4'
          />
        </div>

        {/* MOBILE VIEW */}
        {show && (
          <nav className='md:hidden flex '>
            <div className='absolute top-0 left-0  w-full z-10'>
              <div className='p-4 bg-white   m-4 rounded-lg bg-gray-400 backdrop-filter backdrop-blur-3xl bg-opacity-10 border border-gray-100'>
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <a
                      href='/'
                      aria-label='Company'
                      title='Company'
                      className='inline-flex items-center'
                    >
                      <img src={CompanyLogo} alt='mofuba logo' />
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      className='p-2 -mt-2 -mr-2 transition duration-200 rounded  focus:outline-none focus:shadow-outline'
                      onClick={() => setShow(false)}
                    >
                      <GrClose className='md:hidden flex  text-[24px] text-[#000]  ' />
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className='space-y-4'>
                    <li>
                      <div
                        title='Business'
                        className=' tracking-wide cursor-pointer text-[#000] font-semibold transition-colors duration-200 '
                      >
                        Business
                      </div>
                    </li>
                    <li>
                      <div
                        title='Personal'
                        className='text-[#000] font-semibold  tracking-wide cursor-pointer transition-colors duration-200 hover:text-deep-purple-accent-400'
                      >
                        Personal
                      </div>
                    </li>
                    <li>
                      <div
                        title='Security'
                        className='tracking-wide cursor-pointer text-[#000] font-semibold  transition-colors duration-200 hover:text-deep-purple-accent-400'
                      >
                        Security
                      </div>
                    </li>

                    <li>
                      <div
                        title='Pricing'
                        className=' tracking-wide cursor-pointer text-[#000] font-semibold transition-colors duration-200 hover:text-deep-purple-accent-400'
                      >
                        Pricing
                      </div>
                    </li>
                    <li>
                      <button
                        onClick={openModalLogin}
                        className='text-[#000] font-semibold  tracking-wide cursor-pointer border-none'
                      >
                        Login
                      </button>
                    </li>

                    <CustomButton
                      buttonStyle={'w-full'}
                      aria-label='Sign Up'
                      title='Sign Up'
                      onClick={openModal}
                    >
                      Sign Up
                    </CustomButton>
                  </ul>
                </nav>
              </div>
            </div>
          </nav>
        )}
        {/* DESKTOP VIEW */}
        <section className={`hidden md:flex items-center`}>
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
          <section className={`hidden md:flex  items-center`}>
            <div className='relative px-4   mb-0'>
              <button
                onClick={openModalLogin}
                className=' font-[700] text-[18px] text-lg mr-4 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline bg-none text-[#000000]'
              >
                Login
              </button>
            </div>
            <div
              onClick={openModal}
              className='relative'
              x-data='{ open: true }'
            >
              <button className='btn btn-active xl:px-6 px-8 mr-4 h-[59px] hover:bg-primaryDeep border-none bg-primaryColor text-[#ffffff] text-[18px] whitespace-nowrap font-[800] rounded-full'>
                Sign Up
              </button>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Navbar;
