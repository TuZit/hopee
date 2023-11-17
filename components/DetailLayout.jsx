import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper';

const DetailLayout = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div>
      <h3 className='mb-4 mt-8 text-2xl underline underline-offset-4 font-bold'>
        Quất chum
      </h3>
      {/* banner slider */}
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className='mySwiper2'
      >
        <SwiperSlide>
          <img
            src='/home/product-1.jpg'
            alt='bìa trang cây cảnh'
            className='w-full h-full object-cover block'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='/home/prod-2.jpg'
            alt='bìa trang cây cảnh'
            className='w-full h-full object-cover block'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='/home/prod-3.jpg'
            alt='bìa trang cây cảnh'
            className='w-full h-full object-cover block'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='/home/prod-4.jpg'
            alt='bìa trang cây cảnh'
            className='w-full h-full object-cover block'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='/home/prod-1.jpg'
            alt='bìa trang cây cảnh'
            className='w-full h-full object-cover block'
          />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className='mySwiper'
      >
        <SwiperSlide>
          <img src='/home/product-1.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/home/prod-2.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/home/prod-3.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/home/prod-4.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/home/prod-1.jpg' />
        </SwiperSlide>
      </Swiper>
      {/* description */}
      <div className='mt-6 mb-8'>
        <p className='text-xl font-semibold text-green-600 '>
          Giá: 1xx.000 - 2xx.000đ
        </p>
        <p className='font-semibold text-green-600 w-full border-b-2 border-gray-300 pb-1'>
          Giá trên đã bao gồm chum, chậu.
        </p>
        <p className='text-lg mt-2'>
          Cây quất chum là loại cây được bán nhiều nhất vào mỗi dịp xuân về.
          Không chỉ đẹp mắt mà còn mang lại không khí xuân rộn ràng và nhiều may
          mắn đến với gia chủ.
        </p>
        <ul className='mt-2 list-disc ml-4'>
          <li>
            Cây Quất Chum cao từ 1 – 1,5m được trồng trong chum sành (gốm) thủ
            công nghệ thuật.
          </li>
          <li>
            Màu vàng cam của trái quất căng mọng xen lẫn màu xanh của lá, màu đỏ
            của chum mang lại không khí xuân tới rộn ràng.
          </li>
          <li>
            Cây phù hợp trưng phòng khách, văn phòng, tiền sảnh trong ngày Tết.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DetailLayout;
