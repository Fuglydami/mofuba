import React from 'react';

export const FormContainers = ({ children }) => {
  return (
    <section
      aria-hidden='true'
      className=' h-full items-center    md:inset-0 z-50 flex justify-center'
    >
      <div className='  w-full max-w-xl  '>
        <div className=' bg-white rounded-lg  shadow-[0_20px_60px_-06px_rgba(40,40,40,0.08)] relative '>
          {children}{' '}
        </div>
      </div>
    </section>
  );
};
