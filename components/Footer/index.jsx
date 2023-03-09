import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div id='footer'>
      <div className='footer-item'>
        <h3>Liên hệ</h3>
        <div className='footer-contact'>
          <p>Nhà Vườn: Thôn CD Quán Trạch, Liên Nghĩa, Văn Giang, Hưng Yên</p>
          <p>Số điện thoại 1: 0368080475</p>
          <p>Số điện thoại 2: 0975363005</p>
        </div>
      </div>
      <div className='footer-item'>
        <h3>Sản phẩm nổi bật</h3>
        <div className='footer-contact'>
          <p>Quất cảnh</p>
          <p>Bưởi cảnh cảnh</p>
          <p>Cây giống - Cây con</p>
        </div>
      </div>
      <div className='footer-item'>
        <h3>Theo dõi</h3>
        <div>
          <a href='https://goo.gl/maps/ntGYxiTryBfxSqMc9' target='_blank'>
            <Image src='/icon-map.png' alt='map-icon' width='36' height='36' />
            <span>-- Đường đi</span>
          </a>
        </div>
      </div>
      <div className='google-map'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7864040.542547321!2d101.4153883!3d15.7583562!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135b1adf1b0356f%3A0xd9fe7866980d6f7b!2zTmjDoCB2xrDhu51uIEPDonkgY-G6o25oIHbDoCBDw6J5IGdp4buRbmcgTmjDoG4gR2lhbmc!5e0!3m2!1svi!2s!4v1678196526926!5m2!1svi!2s'
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Footer;
