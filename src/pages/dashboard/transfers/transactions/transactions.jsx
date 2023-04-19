import React from 'react';
import { BsPlus } from 'react-icons/bs';
import DataTable from 'react-data-table-component';

import { CustomInput } from '../../../../shared-lib/input';
import { useState } from 'react';
import { MdOutlineSwapHoriz } from 'react-icons/md';
import { tableStyles } from '../../../../utils';
import { CustomButton } from '../../../../shared-lib/custom-button';
import Avatar1 from '../../../../assets/images/recipientAvatar1.png';

import UK from '../../../../assets/images/united kingdom.png';

import Netflix from '../../../../assets/images/netflix.png';
import Kenya from '../../../../assets/images/kenya.png';
import USD from '../../../../assets/images/USD.png';
import Facebook from '../../../../assets/images/facebook.png';
import Upwork from '../../../../assets/images/upwork.png';
import { useScrollToTop } from '../../../../hooks/useScrollToTop';
const Transactions = () => {
  useScrollToTop();
  const [search, setSearch] = useState('');
  const setStatusColor = (status) => {
    if (status === 'Success') return 'bg-[#F6FDF9] text-[#22C55E]';
    if (status === 'Pending') return 'bg-[#FFF7F5] text-[#FF784B]';
    if (status === 'Failed') return 'bg-[#FFF5F5] text-[#FF4747]';
  };

  const data = [
    {
      name: 'Kenya Bank',
      desc: 'Withdraw',
      image: Kenya,
      invoiceId: 'AMX89785',
      amount: '-$1,565.99',

      status: 'Success',

      date: 'Jan 15, 2023',
      time: 'at 07.00 AM',
    },
    {
      name: 'USD Wallet',
      desc: 'Top-up',
      image: USD,
      invoiceId: 'PMX09812',
      amount: '+$300.00',

      status: 'Pending',

      date: 'Jan 29, 2023',
      time: 'at 08.00 PM',
    },
    {
      name: 'GBP Wallet',
      desc: 'Withdraw',
      image: UK,
      invoiceId: 'PMX0979',
      amount: '-$890.15',

      status: 'Success',

      date: 'Jan 25, 2023',
      time: 'at 09.15 PM',
    },
    {
      name: 'Ahmed Rahim Majid',
      desc: 'Sent',
      image: Facebook,
      invoiceId: 'OVF19244',
      amount: '-$600.00',

      status: 'Success',

      date: 'Jan 25, 2023',
      time: 'at 06.45 AM',
    },
    {
      name: 'Upwork',
      desc: 'Received',
      image: Upwork,
      invoiceId: 'AMX89786',
      amount: '+1,243.00',

      status: 'Pending',

      date: 'Jan 25, 2023',
      time: 'at 06.45 AM',
    },
    {
      name: 'Sent to Bolatito',
      desc: 'sent',
      image: Avatar1,
      invoiceId: 'AMX09871',
      amount: '-$123.00',

      status: 'Failed',

      date: 'Jan 15, 2023',
      time: 'at 10.15 AM',
    },
    {
      name: 'Netflix',
      desc: 'sent',
      image: Netflix,
      invoiceId: 'PMX09873',
      amount: '-$190.00',

      status: 'Success',

      date: 'Jan 15, 2023',
      time: 'at 09.00 AM',
    },
  ];

  const columns = [
    {
      name: 'Name / Recipients ',
      selector: (row) => (
        <div className=' items-center flex gap-1'>
          <div className=' flex justify-center items-center my-5 rounded-full  mr-3'>
            <img
              src={row.image}
              className='w-[40px] h-[40px] bg-cover'
              alt='avatar'
            />
          </div>

          <div>
            <p className='font-[800] mb-2'>{row.name}</p>
            <p className='text-[14px] text-[#718096]'>{row.desc}</p>
          </div>
        </div>
      ),
      sortable: true,
      exports: true,
      grow: 1.5,
    },
    {
      name: 'Date',
      selector: (row) => (
        <div>
          <p className='font-[800] mb-2'>{row.date}</p>
          <p className='text-[14px] text-[#718096]'>{row.time}</p>
        </div>
      ),
      sortable: true,
      exports: true,
    },
    {
      name: 'Invoice ID',
      selector: (row) => row.invoiceId,
      sortable: true,

      exports: true,
    },
    {
      name: 'Amount',
      selector: (row) => row.amount,

      sortable: true,

      exports: true,
    },
    {
      name: 'Status',
      selector: (row) => (
        <div
          className={`w-[96px] ${setStatusColor(
            row.status
          )} h-[40px] text-[14px] rounded-[8px] grid place-content-center`}
        >
          {row.status}
        </div>
      ),
      sortable: true,
      center: true,
      exports: true,
    },
    {
      name: 'Actions',
      cell: (row) => (
        <CustomButton
          title={'Details'}
          height={'20px'}
          text='text-[#000]'
          rounded='rounded-[8px]'
          backgroundColor='bg-[#fff] hover:bg-[#fff]'
          border='border-[#EDF2F7] border hover:border-[#EDF2F7]'
        />
        // <div className='border capitalize border-[#EDF2F7] rounded-md px-4 py-2 hover:bg-[#CBD5E0]  items-center cursor-pointer flex '>
        //   details
        // </div>
      ),
      center: true,
    },
  ];
  return (
    <div className=' px-8'>
      <DataTable
        responsive={true}
        columns={columns}
        data={data}
        sortable
        customStyles={tableStyles}
        pagination
        subHeader
        subHeaderComponent={
          <div className='flex justify-between w-full  mb-6'>
            <CustomInput
              width='231px'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={'Search for transactions...'}
            />
            <div className='gap-4 items-center flex'>
              <CustomButton
                rounded={'12px'}
                height='48px'
                title={
                  <div className='flex gap-2'>
                    <BsPlus className='text-[20px]' />
                    <p>Add New</p>
                  </div>
                }
              />
              <div
                className='border cursor-pointer 
h-[48px] border-[#EDF2F7] flex items-center gap-2 px-4 rounded-[10px]'
              >
                <MdOutlineSwapHoriz className='text-[25px]' />
                <p>Filters</p>
              </div>
            </div>
          </div>
        }
        // progressPending={loading}
      />
    </div>
  );
};

export default Transactions;
