import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

export const CustomInput = ({
  label,
  value,
  hidden = '*',
  onChange,
  placeholder,
  type,
  labelText = 'text-sm',
  width = 'w-full',
  textColor = 'text-black',
}) => {
  const inputStyle = `font-mulish appearance-none border ${textColor} border-[#E2E8F0] rounded-xl px-4 py-3 md:py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primaryColor focus:invalid:ring-pink-500 focus:shadow-md bg-transparent focus:bg-transparent `;
  return (
    <div id='input' className={`flex flex-col  ${width} `}>
      <label
        htmlFor={label}
        className={` mb-2 ${labelText}   ${
          label &&
          `after:content-[${hidden}] after:text-red-500 after:pl-1 after:font-bold`
        }`}
      >
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        id={label}
        placeholder={placeholder}
        className={inputStyle}
      />
    </div>
  );
};
export const CustomPasswordInput = ({
  label,
  value,
  onChange,
  placeholder,

  width = 'w-full',
  textColor = 'text-black',
}) => {
  const [type, setType] = React.useState(true);
  const style = {
    position: 'absolute ',
    bottom: '12px',
    color: '#718096',
    cursor: 'pointer',
    right: '20px',
    fontSize: '25px',
  };
  const inputStyle = `font-mulish appearance-none border ${textColor} border-[#E2E8F0] rounded-xl px-4 py-3 md:py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primaryColor focus:invalid:ring-pink-500 focus:shadow-md bg-transparent focus:bg-transparent `;
  return (
    <div id='input' className={`flex flex-col ${width}  relative`}>
      {label && (
        <label htmlFor={label} className={`  font-semibold $`}>
          {label}
        </label>
      )}
      <input
        type={type ? 'password' : 'text'}
        value={value}
        onChange={onChange}
        autoComplete='off'
        id={label}
        placeholder={placeholder}
        className={inputStyle}
      />
      <div onClick={() => setType(!type)}>
        {type ? (
          <AiOutlineEyeInvisible style={style} />
        ) : (
          <AiOutlineEye style={style} />
        )}
      </div>
    </div>
  );
};

export const CustomSelect = ({
  label,
  value,
  onChange,
  placeholder,
  hidden = '*',
  width = 'w-full',
  text = 'text-[#000]',
  options,
  arrayOfCurrency,
}) => {
  console.log(arrayOfCurrency, 'currencies');
  return (
    <div id='input' className={`flex flex-col ${width} lg:my-5 my-0 `}>
      <label
        htmlFor={label}
        className={`black text-sm mb-1  font-Inter ${
          label &&
          `after:content-[${hidden}] after:text-red-500 after:pl-1 after:font-bold `
        }`}
      >
        {label}
      </label>

      <select
        id='currency'
        onChange={onChange}
        value={value}
        className={`font-Inter ${text}  border border-[#E2E8F0] rounded-md px-4 py-3 md:py-2.5 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primaryColor focus:invalid:ring-pink-500 focus:shadow-lg bg-transparent focus:bg-transparent   `}
      >
        {/* <option value={''} className='text-gray-300' selected>
          {placeholder}
        </option> */}

        {arrayOfCurrency &&
          arrayOfCurrency.map((option, i) => <option key={i}>{option}</option>)}
      </select>
    </div>
  );
};

export const CustomSelectInput = ({ label, onChange }) => {
  const [data, setData] = useState({ bankCode: '', accountNumber: '' });

  return (
    <div>
      <label
        htmlFor={label}
        className={`black text-sm mb-1 font-Inter ${
          label &&
          "after:content-['*'] after:text-red-500 after:pl-1 after:font-bold"
        }`}
      >
        {label}
      </label>

      <div className='flex lg:mb-4  mb-10'>
        <span className='inline-flex items-center  text-sm text-gray-900  border border-r-0 border-gray-300 rounded-l-md   '>
          <select
            id='currency'
            name='currency'
            value={data.bankCode}
            onChange={(e) => {
              setData((n) => ({ ...n, bankCode: e.target.value }));
              onChange({ ...data, bankCode: e.target.value });
            }}
            className='h-full font-Inter w-full rounded-l-md  outline-none bg-transparent py-0 pl-2 pr-7 text-gray-500   sm:text-sm'
          >
            <option value=''>Select Bank</option>
            <option value='FB'>First Bank</option>
            <option value='UB'>UBA</option>
            <option value='AB'>Access Bank</option>
          </select>
        </span>
        <input
          type='number'
          value={data.accountNumber}
          className='rounded-none font-Inter rounded-r-lg border outline-none  focus:ring-1 focus:ring-green-main focus:border-green-main block flex-1 min-w-0 w-full text-sm border-gray-300 lg:p-2.5 p-3   '
          placeholder='3198634657'
          onChange={(e) => {
            setData((n) => ({ ...n, accountNumber: e.target.value }));
            onChange({ ...data, accountNumber: e.target.value });
          }}
        />
      </div>
    </div>
  );
};
