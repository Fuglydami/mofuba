import { BsArrowRight } from 'react-icons/bs';
// import CellPhone1 from '../assets/images/cellphone1text.png';
import HeroBanner from '../assets/images/hero-banner.png';
const Hero = () => {
  return (
    <>
      <section className='container  mt-8 mx-auto'>
        <article className='mx-auto md:ml-28 ml-0 px-5 md:px-0 '>
          <div className='  md:leading-[94.4px] leading-[55px] text-[#000000] md:text-[5rem] text-[3rem] font-[700]  font-anybody'>
            Save 50% on <span className='text-primaryColor'>Cross-Border</span>{' '}
            Transfer Fees
          </div>
          <p className='relative lg:left-[600px] lg:mt-0 mt-24 text-[#000000] bottom-20 md:text-[1.345rem] text-[1.1rem] font-mulish md:w-[25.75rem] w-full'>
            Join thousands of customers who trust our fast, secure, and
            affordable platform
          </p>
          <button className='btn btn-active px-8 gap-4 h-[83px] justify-center border-1 border-[#000000] bg-[#fff] hover:bg-[#fff]  text-[#000] text-[20px] font-[700] rounded-full'>
            <span>GET STARTED</span>
            <BsArrowRight />
          </button>
        </article>

        <img
          className='bg-cover  mt-24  w-full'
          src={HeroBanner}
          alt='banner'
        />
        {/* <img className='bg-cover' src={CellPhone2} alt='cellphone' /> */}

        {/* <img
          className='absolute top-[50%] left-[45%] bg-cover'
          src={CellPhone1}
          alt='cellphone'
        /> */}
        {/* <img
          className='absolute bottom-24 right-[40rem] bg-cover'
          src={CellPhone2}
          alt='cellphone'
        /> */}
      </section>
    </>
  );
};

export default Hero;
