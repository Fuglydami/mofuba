import React from 'react';
import Avatar from '../../../assets/images/avatar.png';
import { CustomButton } from '../../../shared-lib/custom-button';
import { CustomInput } from '../../../shared-lib/input';
const PersonalInformation = () => {
  return (
    <div className='px-10'>
      <p className='font-[800] text-[24px] mb-8'>Personal Information</p>
      <div className='flex items-center mb-10'>
        <div className='avatar w-[88px] mr-12'>
          <div className='w-24 rounded-full ring ring-primaryColor ring-offset-base-100 ring-offset-2'>
            <img src={Avatar} alt='account owner image' />
          </div>
        </div>
        <div className='mr-4 w-[183px] py-3 bg-primaryColor rounded-[8px] cursor-pointer text-[#fff] text-center'>
          Upload new pictures
        </div>
        <div>
          <CustomButton
            title={'Delete'}
            text='text-[#000]'
            height='40px'
            width={'w-[110px]'}
            rounded={'rounded-[8px]'}
            border='border border-[#dedede] hover:border-[#dedede]'
            backgroundColor='bg-transparent hover:bg-transparent '
          />
        </div>
      </div>
      <div className='flex gap-6 mb-10'>
        <div className='flex-1 space-y-7'>
          <CustomInput
            labelText={'text-[#718096] font-[800]'}
            value={'Tolu'}
            label={'Full legal first name'}
          />
          <CustomInput
            labelText={'text-[#718096] font-[800]'}
            value={'29th March 1996'}
            label={'Date of birth'}
          />
        </div>
        <div className='flex-1 space-y-7'>
          <CustomInput
            labelText={'text-[#718096] font-[800]'}
            value={'Tolu'}
            label={'Full legal last name'}
          />
          <CustomInput
            // type={'number'}
            labelText={'text-[#718096] font-[800]'}
            value={'+254 80 2980 777'}
            label={'Phone number'}
          />
        </div>
      </div>
      <div>
        <p className='font-[800] text-[24px] mb-6'>Personal Address</p>
        <div className='flex gap-6 mb-10'>
          <div className='flex-1 space-y-7'>
            <CustomInput
              labelText={'text-[#718096] font-[800]'}
              value={'Kenyan'}
              label={'Country'}
            />
            <CustomInput
              labelText={'text-[#718096] font-[800]'}
              value={'6391 St. Celina, Nairobi '}
              label={'Address'}
            />
          </div>
          <div className='flex-1 space-y-7'>
            <CustomInput
              labelText={'text-[#718096] font-[800]'}
              value={'Nairobi '}
              label={'City'}
            />
            <CustomInput
              labelText={'text-[#718096] font-[800]'}
              value={'23467'}
              label={'Postal Code'}
            />
          </div>
        </div>
      </div>
      <div className='flex justify-end gap-4'>
        <CustomButton
          height='48px'
          width={'w-[145px]'}
          title={'Edit Details'}
          border='border border-primaryColor hover:border-primaryColor'
          text='text-primaryColor'
          backgroundColor='bg-transparent hover:bg-transparent'
        />
        <CustomButton height='48px' width={'w-[145px]'} title={'Save'} />
      </div>
    </div>
  );
};

export default PersonalInformation;
