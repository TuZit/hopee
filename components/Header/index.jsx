import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className='flex-col justify-center items-center mx-auto w-[80%] mt-2 sm:mt-0 sm:flex'>
      <div className='max-w-[200px] mx-auto'>
        <img src='logo2.svg' alt='' className='w-[180px] h-[60px]' />
      </div>
      <div className='flex items-center justify-between mb-4 mt-4 sm:mb-0 sm:mt-0 text-lg'>
        <Link href='/' className='px-4 font-semibold'>
          Home
        </Link>
        <Link href='/shop' className='px-4 font-semibold'>
          Shop
        </Link>
        <Link href='/contact ' className='px-4 font-semibold'>
          Contact
        </Link>
        <Link href='/about' className='px-4 font-semibold'>
          About
        </Link>
      </div>
    </header>
  );
};

export default Header;
