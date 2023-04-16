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
            <div className=' text-[24] bg-[#fff] font-bold'>Loading...</div>
          }
        >
          <div className='mt-6 text-[#000]'>
            <Outlet />
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default Entrypoint;
