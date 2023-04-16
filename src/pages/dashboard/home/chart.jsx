import {
  CategoryScale,
  Chart as Chartjs,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { CustomSelect } from '../../../shared-lib/input';
Chartjs.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const initState = {
  currency: 'KES',
};
const Chart = () => {
  const arrayOfCurrency = ['USD', 'NGN', 'KES'];
  const [info, setInfo] = useState(initState);
  const handleFields = (key, value) => {
    setInfo({ ...info, [key]: value });
  };
  const [data, setData] = useState({
    labels: [
      'Jan 10',
      'Jan 11',
      'Jan 12',
      'Jan 13',
      'Jan 14',
      'Jan 15',
      'Jan 16',
    ],
    datasets: [
      {
        label: 'Income',
        data: [8, 7.8, 6, 8, 7, 5, 6],
        backgroundColor: 'transparent',
        borderColor: '#008DD0',
        pointBorderColor: 'transparent',
        pointBorderWidth: 2,
        tension: 0.2,
        fill: true,
        pointStyle: 'circle',
        pointRadius: 2.5,
        pointHoverRadius: 10,
        pointBorderColor: '#101010',
      },
      {
        label: 'Expenses',
        data: [4, 7.8, 2, 5, 6, 5.3, 6],
        backgroundColor: 'transparent',
        borderColor: '#CECDCD',
        pointBorderColor: 'transparent',
        pointBorderWidth: 2,
        tension: 0.2,
        fill: true,
        pointStyle: 'circle',
        pointRadius: 2.5,
        pointBorderColor: '#101010',
        pointHoverRadius: 10,
      },
    ],
  });

  const options = {
    // plugins: {
    //   legend: {
    //     labels: {
    //       usePointStyle: true,
    //     },
    //   },
    // },

    responsive: true,
    scales: {
      x: {
        // grid: {
        //   display: false,
        // },
      },
      y: {
        min: 0,
        max: 10,
        ticks: {
          stepSize: 2,
          callback: (value) => value + 'K',
        },
        grid: {
          borderDash: [10],
        },
      },
    },
  };
  return (
    <section className='border border-[#EDF2F7] p-8 mb-10'>
      <div className='mb-8 flex items-center justify-between'>
        <h1 className='font-[800] text-[18px]'>Money Flow</h1>
        <CustomSelect
          width='20px'
          value={info.currency}
          arrayOfCurrency={arrayOfCurrency}
          onChange={(e) => handleFields('currency', e.target.value)}
        />
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
        <Line data={data} options={options}></Line>
      </div>
    </section>
  );
};

export default Chart;
