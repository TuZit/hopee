import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className='flex-col justify-center items-center mx-auto w-[80%] mt-2 sm:mt-0 sm:flex'>
      <div className='max-w-[200px] mx-auto'>
        <Link href='/'>
          <Image
            src='logo2.svg'
            alt='Logo nhà vườn Nhàn Giang'
            width={180}
            height={60}
          />
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
      </div>
    </header>
  );
};

export default Header;
