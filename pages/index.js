import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { Autoplay } from 'swiper';

export default function Home() {
  return (
    <div className='root'>
      <div>
        {/* Main banner */}
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay]}
          className='mySwiper'
        >
          <SwiperSlide>
            <div className='w-screen relative'>
              <img
                src='/home/product-3.png'
                alt='bìa trang cây cảnh'
                className='w-full h-full object-cover block'
              />
              <div className='absolute top-[10%] p-4'>
                <p className='text-white font-semibold text-4xl mb-6 w-[90%]'>
                  Quất cảnh, bưởi cảnh đẹp phục vụ Tết. Cây giống cam, ổi,
                  bưởi... các loại.
                </p>
                <p className='mb-6 text-white'>
                  Giá cả phải chăng, phục vụ nhiệt tình.
                </p>
                <button className='text-center p-4 bg-green-700 hover:bg-green-400 text-white font-semibold'>
                  Mua ngay !
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className='w-screen relative'
              style={{ height: 'calc(60vh - 60px)' }}
            >
              <img
                src='/home/main-bg.jpg'
                alt='bìa trang cây cảnh'
                className='w-full h-full object-cover block'
              />
              <div className='absolute top-[10%] p-4'>
                <p className='text-white font-semibold text-4xl mb-6 w-[90%]'>
                  Quất cảnh, bưởi cảnh đẹp phục vụ Tết. Cây giống cam, ổi,
                  bưởi... các loại.
                </p>
                <p className='mb-6 text-white'>
                  Giá cả phải chăng, phục vụ nhiệt tình.
                </p>
                <button className='text-center p-4 bg-green-700 hover:bg-green-400 text-white font-semibold'>
                  Mua ngay !
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className='w-screen relative'
              style={{ height: 'calc(60vh - 60px)' }}
            >
              <img
                src='/home/main-bg.jpg'
                alt='bìa trang cây cảnh'
                className='w-full h-full object-cover block'
              />
              <div className='absolute top-[10%] p-4'>
                <p className='text-white font-semibold text-4xl mb-6 w-[90%]'>
                  Quất cảnh, bưởi cảnh đẹp phục vụ Tết. Cây giống cam, ổi,
                  bưởi... các loại.
                </p>
                <p className='mb-6 text-white'>
                  Giá cả phải chăng, phục vụ nhiệt tình.
                </p>
                <button className='text-center p-4 bg-green-700 hover:bg-green-400 text-white font-semibold'>
                  Mua ngay !
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Cate */}
        <section className='mt-6'>
          <h3 className='text-3xl font-bold mb-6 mt-10 underline underline-offset-8'>
            Cây bán chạy
          </h3>
          <div>
            <div className='mb-8'>
              <img
                src='/home/product-1.jpg'
                alt='Quất cảnh, chậu quất cảnh, chum quất cảnh'
              />
              <p className='text-xl font-semibold mt-3 text-center'>
                Quất chum
              </p>
              <p className='text-lg font-bold text-[#078d3d] text-center'>
                1xx.000đ
              </p>
            </div>
            <div className='mb-8'>
              <img
                src='/home/product-1.jpg'
                alt='Quất cảnh, chậu quất cảnh, chum quất cảnh'
              />
              <p className='text-xl font-semibold mt-3 text-center'>
                Quất lọ, quất tích nhỏ
              </p>
              <p className='text-lg font-bold text-[#078d3d] text-center'>
                1xx.000đ
              </p>
            </div>
            <div className='mb-8'>
              <img
                src='/home/product-1.jpg'
                alt='Quất cảnh, chậu quất cảnh, chum quất cảnh'
              />
              <p className='text-xl font-semibold mt-3 text-center'>
                Quất chậu nhựa
              </p>
              <p className='text-lg font-bold text-[#078d3d] text-center'>
                1xx.000đ
              </p>
            </div>
            <div className='mb-8'>
              <img
                src='/home/product-1.jpg'
                alt='Quất cảnh, chậu quất cảnh, chum quất cảnh'
              />
              <p className='text-xl font-semibold mt-3 text-center'>
                Quất thế, quất tán to
              </p>
              <p className='text-lg font-bold text-[#078d3d] text-center'>
                1xx.000đ
              </p>
            </div>
            <div className='mb-8'>
              <img
                src='/home/product-1.jpg'
                alt='Quất cảnh, chậu quất cảnh, chum quất cảnh'
              />
              <p className='text-xl font-semibold mt-3 text-center'>
                Cây cam, bưởi giống
              </p>
              <p className='text-lg font-bold text-[#078d3d] text-center'>
                1xx.000đ
              </p>
            </div>
            <div className='mb-8'>
              <img
                src='/home/product-1.jpg'
                alt='Quất cảnh, chậu quất cảnh, chum quất cảnh'
              />
              <p className='text-xl font-semibold mt-3 text-center'>
                Cây ổi giống
              </p>
              <p className='text-lg font-bold text-[#078d3d] text-center'>
                1xx.000đ
              </p>
            </div>
          </div>
        </section>

        {/* cate 2 */}
        <section>
          <h3 className='font-bold text-3xl mb-8 underline underline-offset-8'>
            Các loại cây nổi bật
          </h3>
          <div className='mb-6'>
            <div className='overflow-hidden mx-auto'>
              <Image
                src={'/home/product-3.png'}
                width={200}
                height={200}
                alt='Cây quất cảnh, quất cảnh Tết, chum chậu quất cảnh'
                className='object-cover block hover:scale-110 aspect-square transition-transform cursor-pointer w-full sm:w-auto'
              />
            </div>
            <p className='text-xl font-bold text-center mt-3'>Quất Cảnh</p>
          </div>
          <div className='mb-6'>
            <div className='overflow-hidden mx-auto'>
              <Image
                src={'/home/product-3.png'}
                width={200}
                height={200}
                alt='Cây quất cảnh, quất cảnh Tết, chum chậu quất cảnh'
                className='object-cover block hover:scale-110 aspect-square transition-transform cursor-pointer w-full sm:w-auto'
              />
            </div>
            <p className='text-xl font-bold text-center mt-3'>Bưởi Cảnh</p>
          </div>
          <div className='mb-6'>
            <div className='overflow-hidden mx-auto'>
              <Image
                src={'/home/product-3.png'}
                width={200}
                height={200}
                alt='Cây quất cảnh, quất cảnh Tết, chum chậu quất cảnh'
                className='object-cover block hover:scale-110 aspect-square transition-transform cursor-pointer w-full sm:w-auto'
              />
            </div>
            <p className='text-xl font-bold text-center mt-3'>
              Cây giống các loại
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
