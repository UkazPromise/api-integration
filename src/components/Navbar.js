import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBell, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div>
      <div className='flex'>
        <img src='./unlimi.png' alt='unlimi logo' className='w-[300px] mx-4' />
        <span className='flex absolute w-[250px] h-[50px] left-[400px] gap-0 my-[15px] border rounded-lg bg-white'>
          <FontAwesomeIcon icon={faMagnifyingGlass} className='my-[15px] mx-4' />
          <p className='my-2'>search by patient....</p>
        </span>
      </div>
      <div className='flex space-x-2 absolute w-[155.37px] h-[34px] top-[26px] left-[1144px] gap-0'>
        <div className='relative'>
          <FontAwesomeIcon icon={faBell} className='border-8 rounded-full h-4 border-gray-200 text-slate-400' />
          <div className='absolute top-0 right-2 ml-2 my-2 w-2 h-2 bg-red-500 rounded-full'></div>
        </div>
        <img src='./doctor.jpeg' alt='doctor' className='border rounded-full flex-shrink-0 w-8 h-full object-cover' />
        <p>Deko</p>
        <FontAwesomeIcon icon={faAngleDown} className='my-1' />
      </div>
    </div>
  );
}

export default Navbar;
