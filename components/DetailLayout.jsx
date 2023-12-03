import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/legacy/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper';

const DetailLayout = ({
  listImage = [
    '/home/product-1.jpg',
    '/home/prod-1.jpg',
    '/home/prod-2.jpg',
    '/home/prod-3.jpg',
    '/home/prod-4.jpg',
  ],
  title = 'Quất chum',
  price = '1xx.000 - 2xx.000đ',
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div>
      <h3 className='mb-4 mt-8 text-2xl underline underline-offset-4 font-bold'>
        {title}
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
        {listImage?.map((item) => (
          <SwiperSlide key={item}>
            <Image
              src={item}
              alt='Quất chum, chum quất cảnh, quất bonsai'
              objectFit='cover'
              width={380}
              height={300}
              style={{ height: '100%' }}
            />
          </SwiperSlide>
        ))}
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
        {listImage?.map((item) => (
          <SwiperSlide key={item}>
            <Image
              src={item}
              alt='Quất chum, chum quất cảnh, quất bonsai'
              className='w-full h-auto block'
              width={80}
              height={100}
              objectFit='cover'
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* description */}
      <div className='mt-6 mb-8'>
        <p className='text-xl font-semibold text-green-600 '>Giá: {price}</p>
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
            Cây Quất Chum cao từ 1 - 1,5m được trồng trong chum sành (gốm) thủ
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
