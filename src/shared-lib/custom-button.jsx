export const CustomButton = ({
  title,
  onClick,
  containerStyle,
  buttonStyle,
  loading,
  height = 'h-[56px]',
  rounded = 'rounded-full',
  text = 'text-[#fff]',
  fontSize = 'text-sm',
  backgroundColor = 'bg-primaryColor hover:bg-primaryDeep ',
}) => {
  const container = ` ${containerStyle}`;
  const buttonClassName = `btn capitalize btn-active border-none ${fontSize}  ${height} inline-flex  ${backgroundColor} justify-center ${rounded}  border border-transparent font-[800] px-4  ${text}   focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2  ${buttonStyle}`;
  return (
    <div className={container}>
      <button type='button' className={buttonClassName} onClick={onClick}>
        {!loading && title}
        {loading && (
          <div className='flex justify-center w-full'>
            Processing...
            <div className='ml-8'>
              <Spinner />
            </div>
          </div>
        )}
      </button>
    </div>
  );
};

export const CustomCancelButton = ({ onClick }) => {
  return (
    <div onClick={onClick} className='flex justify-end p-4'>
      <button
        type='button'
        className='bg-light-green  font-inter  hover:text-gray-900 rounded-2xl text-sm p-1.5 ml-auto inline-flex items-center '
        data-modal-toggle='authentication-modal'
      >
        <svg
          className='w-5 h-5'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
            clipRule='evenodd'
          ></path>
        </svg>
      </button>
    </div>
  );
};
