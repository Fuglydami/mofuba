import React from 'react';
import { BsCalendarDate } from 'react-icons/bs';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import Frame3 from '../../../assets/images/frame 3.png';
import Frame1 from '../../../assets/images/frame1.png';
import Frame2 from '../../../assets/images/frame2.png';
import { CustomButton } from '../../../shared-lib/custom-button';
const Table = ({ title }) => {
  const data = [
    {
      id: 1,
      avatar: Frame1,
      name: 'Ahmed Rahim Majid',
      date: 'Jan 16, 2023',
      amount: '-$835.00',
      status: 'Success',
    },
    {
      id: 2,
      avatar: Frame2,
      name: 'Sent to Bolatito',
      date: 'Jan 14, 2023',
      amount: '-$150.00',
      status: 'Pending',
    },
    {
      id: 3,
      avatar: Frame3,
      name: 'USD Top-up',
      date: 'Jan 13, 2023',
      amount: '+$200.00',
      status: 'Success',
    },
  ];
  return (
    <section className='border border-[#EDF2F7] p-8'>
      <div className='flex justify-between items-center mb-6'>
        <h1 className='font-[800] text-[18px]'>{title}</h1>
        <div>
          <CustomButton
            backgroundColor='bg-[#FAFAFA] hover:bg-[#CDCDCD]'
            text='text-[#000]'
            height={'34px'}
            rounded='rounded-[8px]'
            // buttonStyle={'w-[228px] '}
            title={
              <div className='flex items-center  gap-2'>
                <p>View All</p>
                <MdOutlineKeyboardArrowRight style={{ fontSize: '20px' }} />
              </div>
            }
          />
        </div>
      </div>
      <div className='overflow-x-auto w-full '>
        <table className='table w-full '>
          <tbody>
            {data.map((item) => {
              const { id, avatar, name, date, amount, status } = item;
              return (
                <tr key={item.id}>
                  <td>
                    <div className='flex items-center space-x-3'>
                      <div className='avatar'>
                        <div className='mask rounded-full mask-squircle w-12 h-12'>
                          <img src={avatar} alt='Avatar' />
                        </div>
                      </div>
                      <div>
                        <div className='font-[800]'>{name}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className='flex gap-2 text-[#718096] text-[14px]'>
                      <span>
                        <BsCalendarDate style={{ fontSize: '20px' }} />
                      </span>
                      <span>{date}</span>
                    </div>
                  </td>
                  <td className='font-[800]'>{amount}</td>
                  <th className='text-[12px]'>
                    <div
                      className={`${
                        status === 'Pending'
                          ? 'bg-[#FFF7F5] text-[#FF784B] hover:bg-[#FFF7F5]'
                          : 'bg-[#F6FDF9] text-[#22C55E] hover:bg-[#F6FDF9]'
                      }  w-[80px] flex justify-center items-center  h-[32px] rounded-[8px] text-[12px]`}
                    >
                      {status}
                    </div>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table;
