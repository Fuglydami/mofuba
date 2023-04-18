import React from 'react';
import { BsPlus } from 'react-icons/bs';
import DataTable from 'react-data-table-component';

import { CustomInput } from '../../../../shared-lib/input';
import { useState } from 'react';
import { MdOutlineSwapHoriz } from 'react-icons/md';
import { tableStyles } from '../../../../utils';
import { CustomButton } from '../../../../shared-lib/custom-button';
import Avatar1 from '../../../../assets/images/recipientAvatar1.png';
import Avatar2 from '../../../../assets/images/recipientAvatar2.png';
import Avatar3 from '../../../../assets/images/recipientAvatar3.png';
import UK from '../../../../assets/images/united kingdom.png';
import EUR from '../../../../assets/images/european union.png';
import USD from '../../../../assets/images/USD.png';
import useScrollToTop from '../../../../hooks/useScrollToTop';
const Recipients = () => {
  useScrollToTop();
  const [search, setSearch] = useState('');

  const data = [
    {
      name: 'Bolatito Iyabo',
      image: Avatar1,
      email: 'bolatito16@mail.com',
      accountType: 'Business',

      currency: 'USD',
      currencyImage: USD,
      date: '20 Jan 2023, 09.00 PM',
    },
    {
      name: 'Ahmed Rahmin',
      image: Avatar2,
      email: 'ahmedray@mail.com',
      accountType: 'Personal',

      currency: 'GBP',
      currencyImage: UK,
      date: '20 Jan 2023, 07.00 PM',
    },
    {
      name: 'Igwe Ohuwa',
      image: Avatar3,
      email: 'ohuwa101@mail.com',
      accountType: 'Business',

      currency: 'EUR',
      currencyImage: EUR,
      date: '20 Jan 2023, 06.00 PM',
    },
    {
      name: 'Bolatito Iyabo',
      image: Avatar1,
      email: 'bolatito16@mail.com',
      accountType: 'Personal',

      currency: 'GBP',
      currencyImage: UK,
      date: '20 Jan 2022, 07.00 PM',
    },
    {
      name: 'Ahmed Rahmin',
      image: Avatar2,
      email: 'ahmedray@mail.com',
      accountType: 'Business',

      currency: 'USD',
      currencyImage: USD,
      date: '20 Jan 2023, 09.00 PM',
    },
    {
      name: 'Igwe Ohuwa',
      image: Avatar3,
      email: 'ohuwa101@mail.com',
      accountType: 'Personal',

      currency: 'EUR',
      currencyImage: EUR,
      date: '20 Jan 2022, 06.00 PM',
    },
  ];

  const columns = [
    {
      name: 'Recipients Name',
      selector: (row) => (
        <div className=' items-center flex gap-1'>
          <div className=' flex justify-center items-center my-5 rounded-full  mr-3'>
            <img src={row.image} alt='avatar' />
          </div>

          <p className='font-[800]'>{row.name}</p>
        </div>
      ),
      sortable: true,
      exports: true,
      grow: 1,
    },
    {
      name: 'Email',
      selector: (row) => row.email,
      sortable: true,
      exports: true,
    },
    {
      name: 'Account type',
      selector: (row) => row.accountType,
      sortable: true,

      exports: true,
    },
    {
      name: 'Currency',
      selector: (row) => (
        <div className=' items-center flex gap-1'>
          <div className=' flex justify-center items-center my-5 rounded-full  mr-3'>
            <img src={row.currencyImage} alt='avatar' />
          </div>

          <p className='font-[800]'>{row.currency}</p>
        </div>
      ),
      sortable: true,

      exports: true,
    },
    {
      name: 'Date',
      selector: (row) => row.date,
      sortable: true,
      exports: true,
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
              placeholder={'Search by recipients...'}
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

export default Recipients;
