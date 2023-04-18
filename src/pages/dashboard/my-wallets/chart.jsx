import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const Chart = () => {
  const UserData = [
    {
      id: 1,
      month: 'Jan 10',
      userGain: 5,
      userLost: 823,
    },
    {
      id: 2,
      month: 'Jan 11',
      userGain: 2,
      userLost: 345,
    },
    {
      id: 3,
      month: 'Jan 12',
      userGain: 3,
      userLost: 555,
    },
    {
      id: 4,
      month: 'Jan 12',
      userGain: 8,
      userLost: 4555,
    },
    {
      id: 5,
      month: 'Jan 13',
      userGain: 2,
      userLost: 6,
    },
    {
      id: 6,
      month: 'Jan 14',
      userGain: 2,
      userLost: 234,
    },
    {
      id: 7,
      month: 'Jan 15',
      userGain: 9,
      userLost: 234,
    },
    {
      id: 8,
      month: 'Jan 16',
      userGain: 4,
      userLost: 234,
    },
    {
      id: 9,
      month: 'Jan 17',
      userGain: 3,
      userLost: 234,
    },
    {
      id: 10,
      month: 'Jan 18',
      userGain: 6,
      userLost: 234,
    },
  ];
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.month),
    datasets: [
      {
        label: 'Money Out',
        data: UserData.map((data) => data.userGain),
        backgroundColor: ['#EDEDED', '#008DD0'],

        borderRadius: 6,
        borderWidth: 2,
      },
    ],
  });
  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 10,
        ticks: {
          stepSize: 2,
          callback: (value) => value + 'K',
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <section className='border border-[#EDF2F7] p-8'>
      <div className='flex justify-between items-center mb-6'>
        <h1 className='font-[800] text-[18px]'>Statistics</h1>
        <div>
          <select className='select bg-[#FAFAFA] h-[34px] rounded-[8px] w-full max-w-xs'>
            <option selected>This month</option>
            <option>Homer</option>
            <option>Marge</option>
            <option>Bart</option>
            <option>Lisa</option>
            <option>Maggie</option>
          </select>
        </div>
      </div>
      <div
        style={{
          height: '323px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Bar data={userData} options={options} />
      </div>
    </section>
  );
};

export default Chart;
