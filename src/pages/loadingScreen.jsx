import React from 'react';
import Loading from '../assets/images/company-logo.png';

const LoadingScreen = () => {
  return (
    <div className='absolute  top-[50%] left-[50%]'>
      <img
        className='transform animate-pulse '
        src={Loading}
        alt='loading gif '
      />
    </div>
  );
};

export default LoadingScreen;
