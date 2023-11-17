import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className='flex-col justify-center items-center mx-auto w-[80%] mt-2 sm:mt-0 sm:flex'>
      <div className='max-w-[200px] mx-auto'>
        <Link href='/'>
          <img src='logo2.svg' alt='' className='w-[180px] h-[60px]' />
        </Link>
      </div>
      <div className='flex flex-wrap gap-y-2 items-center justify-center mb-4 mt-4 sm:mb-0 sm:mt-0 text-lg sm:justify-between'>
        <Link href='/' className='px-4 font-semibold'>
          Trang chủ
        </Link>
        <Link href='/shop' className='px-4 font-semibold'>
          Shop
        </Link>
        <Link href='/ ' className='px-4 font-semibold'>
          Liên hệ
        </Link>
        <Link href='/' className='px-4 font-semibold'>
          Về chúng tôi
        </Link>
      </div>
    </header>
  );
};

export default Header;
