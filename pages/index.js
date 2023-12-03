import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import { Autoplay } from 'swiper';
import 'swiper/css';

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
            <div
              className='w-screen relative'
              style={{ height: 'calc(60vh - 60px)' }}
            >
              <img
                src='/quat/chau-nhua-2.jpg'
                alt='bìa trang cây cảnh'
                className='w-full h-full object-cover block'
              />
              <div className='absolute top-[0%] p-4'>
                <h1 className='text-gray-800 font-semibold text-4xl mb-6 w-[90%]'>
                  Quất cảnh, bưởi cảnh đẹp phục vụ Tết. Cây giống cam, ổi,
                  bưởi... các loại.
                </h1>
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
            <div className='w-screen relative'>
              <img
                src='/buoi/chum-buoi-2.jpg'
                alt='bìa trang cây cảnh'
                className='w-full h-full object-cover block max-h-[446px]'
              />
              <div className='absolute top-[10%] p-4'>
                <h1 className='text-white font-semibold text-4xl mb-6 w-[90%]'>
                  Quất cảnh, bưởi cảnh đẹp phục vụ Tết. Cây giống cam, ổi,
                  bưởi... các loại.
                </h1>
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
                src='/quat/6.jpg'
                alt='bìa trang cây cảnh'
                className='w-full h-full object-cover block'
              />
              <div className='absolute top-[10%] p-4'>
                <h1 className='text-fuchsia-50 font-semibold text-4xl mb-6 w-[90%]'>
                  Quất cảnh, bưởi cảnh đẹp phục vụ Tết. Cây giống cam, ổi,
                  bưởi... các loại.
                </h1>
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
            <Link href='/quat/chum' className='mb-8 block'>
              <img
                src='/quat/chum/2.jpg'
                alt='Quất cảnh, chậu quất cảnh, chum quất cảnh'
              />
              <p className='text-xl font-semibold mt-3 text-center'>
                Quất chum
              </p>
              <p className='text-lg font-bold text-[#078d3d] text-center'>
                4-5xx.000đ
              </p>
            </Link>

            <Link href='/quat/chau-nhua' className='mb-8 block'>
              <img
                src='/quat/chau-nhua-1.jpg'
                alt='Quất cảnh, chậu quất cảnh, chum quất cảnh'
                className='w-full'
              />
              <p className='text-xl font-semibold mt-3 text-center'>
                Quất chậu nhựa
              </p>
              <p className='text-lg font-bold text-[#078d3d] text-center'>
                1-2xx.000đ
              </p>
            </Link>

            <Link href='/quat/ly' className='mb-8 block'>
              <img
                src='/quat/ly/6.jpg'
                alt='Quất cảnh, chậu quất cảnh, chum quất cảnh'
                className='w-full'
              />
              <p className='text-xl font-semibold mt-3 text-center'>
                Quất ly sành để bàn
              </p>
              <p className='text-lg font-bold text-[#078d3d] text-center'>
                1-2xx.000đ
              </p>
            </Link>

            <Link href='/quat/mini' className='mb-8 block'>
              <img
                src='/quat/mini/1.jpg'
                alt='Quất cảnh, chậu quất cảnh, chum quất cảnh'
              />
              <p className='text-xl font-semibold mt-3 text-center'>
                Quất chậu nhựa mini, quất bát
              </p>
              <p className='text-lg font-bold text-[#078d3d] text-center'>
                1-2xx.000đ
              </p>
            </Link>

            <Link href='/quat/tich-nho' className='mb-8 block'>
              <img
                src='/quat/so/1.jpg'
                alt='Quất cảnh, chậu quất cảnh, chum quất cảnh'
              />
              <p className='text-xl font-semibold mt-3 text-center'>
                Quất chum mini (sọ dừa nhỏ)
              </p>
              <p className='text-lg font-bold text-[#078d3d] text-center'>
                1-2xx.000đ
              </p>
            </Link>

            <div className='mb-8'>
              <img
                src='/cay-giong/cam-1.jpg'
                alt='Quất cảnh, chậu quất cảnh, chum quất cảnh'
              />
              <p className='text-xl font-semibold mt-3 text-center'>
                Cây cam, bưởi giống
              </p>
              <p className='text-lg font-bold text-[#078d3d] text-center'>
                {/* 1xx.000đ */}
              </p>
            </div>
            <div className='mb-8'>
              <img
                src='/cay-giong/oi-1.jpg'
                alt='Quất cảnh, chậu quất cảnh, chum quất cảnh'
              />
              <p className='text-xl font-semibold mt-3 text-center'>
                Cây ổi giống
              </p>
              <p className='text-lg font-bold text-[#078d3d] text-center'>
                {/* 1xx.000đ */}
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
                src={'/quat/chum-1.jpg'}
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
                src={'/buoi/chum-buoi-1.jpg'}
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
                src={'/buoi/buoi-giong-1.jpg'}
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
