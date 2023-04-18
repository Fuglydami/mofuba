import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import DashboardNav from './dashboardNav';
import Sidebar from './sidebar';

const Entrypoint = () => {
  return (
    <div>
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
    </div>
  );
};

export default Entrypoint;
