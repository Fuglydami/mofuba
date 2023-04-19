import React from 'react';
import { tableStyles } from '../../../utils';
import DataTable from 'react-data-table-component';
import { TbFileInvoice } from 'react-icons/tb';
import { BsThreeDots } from 'react-icons/bs';
import { CustomInput } from '../../../shared-lib/input';
import { useState } from 'react';
import { MdOutlineSwapHoriz } from 'react-icons/md';
import { useScrollToTop } from '../../../hooks/useScrollToTop';

const Invoices = () => {
  useScrollToTop();
  const [search, setSearch] = useState('');
  const setStatusColor = (status) => {
    if (status === 'Paid') return 'bg-[#F6FDF9] text-[#22C55E]';
    if (status === 'Pending') return 'bg-[#FFF7F5] text-[#FF784B]';
    if (status === 'Failed') return 'bg-[#FFF5F5] text-[#FF4747]';
  };

  const Checkbox = React.forwardRef(({ onClick, ...rest }, ref) => {
    return (
      <>
        <div className='form-control'>
          <label className='cursor-pointer label'>
            <input
              ref={ref}
              onClick={onClick}
              {...rest}
              type='checkbox'
              className='checkbox rounded-full checkbox-info'
            />
          </label>
        </div>
        {/* <div className='form-check pb-5' style={{ backgroundColor: '' }}>

          <input
            type='checkbox'
            className='form-check-input'
            style={{ height: '20px', width: '20px' }}
            ref={ref}
            onClick={onClick}
            {...rest}
          />
          <label className='form-check-label' id='booty-check' />
        </div> */}
      </>
    );
  });
  const data = [
    {
      name: 'New Design Project',
      desc: 'INV110XXX',
      date: 'January 05, 2023',
      receipient: 'Bolatito Iyabo',
      amount: '$1,240.00',
      status: 'Paid',
    },
    {
      name: 'Top-up',
      desc: 'INV109XXX',
      date: 'January 02, 2023',
      receipient: 'Self',
      amount: '$4,367.67',

      status: 'Paid',
    },
    {
      name: 'E-commerce Store',
      desc: 'INV108XXX',
      date: 'January 01, 2023',
      receipient: 'Big Kahuna Burger',
      amount: '$980.00',

      status: 'Pending',
    },
    {
      name: 'Abstergo Development',
      desc: 'INV107XXX',
      date: 'January 01, 2023',
      receipient: 'Abstergo Ltd',
      amount: '$5,789.00',

      status: 'Failed',
    },
    {
      name: 'Barone Website',
      desc: 'INV106XXX',
      date: 'December 29, 2023',
      receipient: 'Barone LLC.',
      amount: '$3,567.00',

      status: 'Paid',
    },
    {
      name: 'Biffco Mobile App',
      desc: 'INV105XXX',
      date: 'December 25, 2023',
      receipient: 'Biffco Enterprises',
      amount: '$6,345.23',

      status: 'Paid',
    },
  ];

  const columns = [
    {
      name: 'Description',
      selector: (row) => (
        <div className='text-base_range items-center  flex gap-1'>
          <div className=' bg-[#E1F6FD]  rounded-full h-[48px] w-[48px] flex justify-center items-center my-5 mr-3'>
            <TbFileInvoice style={{ color: '#008DD0', fontSize: '20px' }} />
          </div>
          <div>
            <p className='font-[800] mb-3'>{row.name}</p>
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
      selector: (row) => row.date,
      sortable: true,
      exports: true,
    },
    {
      name: 'Receipient',
      selector: (row) => row.receipient,
      sortable: true,

      exports: true,
    },
    {
      name: 'Amount',
      selector: (row) => <p className='font-[800]'>{row.amount}</p>,
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
        <div className='border border-[#EDF2F7] rounded-md p-1 hover:bg-[#CBD5E0]  items-center cursor-pointer flex '>
          <BsThreeDots className='hover:text-[#fff] text-[#CBD5E0] text-[20px]' />
        </div>
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
        selectableRows
        selectableRowsComponent={Checkbox}
        subHeader
        subHeaderComponent={
          <div className='flex justify-between w-full mb-6'>
            <CustomInput
              width='231px'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={'Search Invoice...'}
            />

            <div className='border cursor-pointer border-[#EDF2F7] flex items-center gap-2 px-4 rounded-[10px]'>
              <MdOutlineSwapHoriz className='text-[25px]' />
              <p>Filters</p>
            </div>
          </div>
        }
        // progressPending={loading}
      />
    </div>
  );
};

export default Invoices;
