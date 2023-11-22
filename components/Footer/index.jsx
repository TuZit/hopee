import Image from 'next/image';
import Link from 'next/link.js';
import React from 'react';

const Footer = () => {
  return (
    <div id='footer' className='px-4 bg-[#078d3d] pt-12 pb-4 text-white'>
      <div className='footer-item'>
        <p className='text-2xl font-bold'>Liên hệ</p>
        <div className='footer-contact'>
          <Link
            target='_blank'
            href='https://www.google.com/maps/place/Nhà+vườn+Cây+cảnh+và+Cây+giống+Nhàn+Giang,+Unnamed+Road,+Liên+Nghĩa,+Văn+Giang,+Hưng+Yên,+Việt+Nam/@20.9067208,105.9334612,17z/data=!4m6!3m5!1s0x3135b1adf1b0356f:0xd9fe7866980d6f7b!8m2!3d20.9067208!4d105.9334612!16s%2Fg%2F11r9g8q11v?hl=vi-VN'
            className='font-semibold block py-1 my-4'
          >
            Địa Chỉ: Thôn CD Quán Trạch, Liên Nghĩa, Văn Giang, Hưng Yên{' '}
            <span className='underline-offset-4 underline'>
              (Bấm để chỉ đường !)
            </span>
          </Link>
          <Link href='tel:0368080475' className='font-semibold block py-1 my-4'>
            Số chị Nhàn/Zalo: 0368.080.475{' '}
            <span className='underline-offset-4 underline'>(Bấm để gọi)</span>
          </Link>
          <Link href='tel:0975363005' className='font-semibold block py-1 my-4'>
            Số anh Giang/Zalo: 0975.363.005{' '}
            <span className='underline-offset-4 underline'>(Bấm để gọi)</span>
          </Link>
        </div>
      </div>
      <div className='footer-item'>
        <p className='text-2xl font-bold mt-4'>Danh mục cây</p>
        <div className='footer-contact font-semibold'>
          <Link
            href='/quat'
            className='block py-1 underline-offset-4 underline my-4'
          >
            Quất cảnh
          </Link>
          <Link
            href='/buoi'
            className='block py-1 underline-offset-4 underline my-4'
          >
            Bưởi cảnh cảnh
          </Link>
          <Link
            href='/cay-giong'
            className='block py-1 underline-offset-4 underline my-4'
          >
            Cây giống - Cây con
          </Link>
        </div>
      </div>
      <div className='mt-6'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7864040.542547321!2d101.4153883!3d15.7583562!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135b1adf1b0356f%3A0xd9fe7866980d6f7b!2zTmjDoCB2xrDhu51uIEPDonkgY-G6o25oIHbDoCBDw6J5IGdp4buRbmcgTmjDoG4gR2lhbmc!5e0!3m2!1svi!2s!4v1678196526926!5m2!1svi!2s'
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          allowFullScreen
          className='w-full min-h-[300px]'
        ></iframe>
      </div>

      <p className='mt-6 text-center'>© All rights reserved by TuZitt.</p>
    </div>
  );
};

export default Footer;
