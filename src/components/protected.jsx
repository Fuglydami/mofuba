import React, { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import DashboardNav from './dashboardNav';
import Sidebar from './sidebar';
import { getJsonItemFromLocalStorage } from '../helper-functions/save-data';

const Protected = () => {
  const token = getJsonItemFromLocalStorage('access-token');

  return (
    <div>
      {token ? (
        <>
          <Sidebar />
          <div className='main-content  bg-[#fff]'>
            <DashboardNav />

            <Suspense
              fallback={
                <div className=' text-[24] bg-[#fff] grid place-content-center font-bold'>
                  Loading...
                </div>
              }
            >
              <div className='mt-8 text-[#000]'>
                <Outlet />
              </div>
            </Suspense>
          </div>
        </>
      ) : (
        <Navigate replace to='/home' />
      )}
    </div>
  );
};

export default Protected;
