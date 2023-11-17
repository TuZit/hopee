import Image from 'next/image';
import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Main banner */}
      <section
        className='w-screen relative'
        style={{ height: 'calc(60vh - 60px)' }}
      >
        <img
          src='/home/main-bg.jpg'
          alt='bìa trang cây cảnh'
          className='w-full h-full object-cover block'
        />
        <div className='absolute top-[10%] p-4'>
          <p className='text-white font-semibold text-4xl mb-6'>
            Quất cảnh, bưởi cảnh đẹp phục vụ Tết. Cây giống cam, ổi, bưởi... các
            loại.
          </p>
          <p className='mb-6 text-white'>
            Giá cả phải chăng, phục vụ nhiệt tình.
          </p>
          <button className='text-center p-4 bg-green-700 hover:bg-green-400 text-white font-semibold'>
            Mua ngay !
          </button>
        </div>
      </section>

      {/* Cate */}
      <section className='mt-6'>
        <h3 className='text-3xl font-bold mb-8'>Cây bán chạy</h3>
        <div>
          <div className='mb-8'>
            <img
              src='/home/product-1.jpg'
              alt='Quất cảnh, chậu quất cảnh, chum quất cảnh'
            />
            <p className='text-xl font-semibold mt-3 text-center'>Cây abc</p>
            <p className='text-lg font-bold text-[#078d3d] mt-2 text-center'>
              1xx.000đ
            </p>
          </div>
          <div className='mb-8'>
            <img
              src='/home/product-1.jpg'
              alt='Quất cảnh, chậu quất cảnh, chum quất cảnh'
            />
            <p className='text-xl font-semibold mt-3 text-center'>Cây abc</p>
            <p className='text-lg font-bold text-[#078d3d] mt-2 text-center'>
              1xx.000đ
            </p>
          </div>
          <div className='mb-8'>
            <img
              src='/home/product-1.jpg'
              alt='Quất cảnh, chậu quất cảnh, chum quất cảnh'
            />
            <p className='text-xl font-semibold mt-3 text-center'>Cây abc</p>
            <p className='text-lg font-bold text-[#078d3d] mt-2 text-center'>
              1xx.000đ
            </p>
          </div>
          <div className='mb-8'>
            <img
              src='/home/product-1.jpg'
              alt='Quất cảnh, chậu quất cảnh, chum quất cảnh'
            />
            <p className='text-xl font-semibold mt-3 text-center'>Cây abc</p>
            <p className='text-lg font-bold text-[#078d3d] mt-2 text-center'>
              1xx.000đ
            </p>
          </div>
          <div className='mb-8'>
            <img
              src='/home/product-1.jpg'
              alt='Quất cảnh, chậu quất cảnh, chum quất cảnh'
            />
            <p className='text-xl font-semibold mt-3 text-center'>Cây abc</p>
            <p className='text-lg font-bold text-[#078d3d] mt-2 text-center'>
              1xx.000đ
            </p>
          </div>
          <div className='mb-8'>
            <img
              src='/home/product-1.jpg'
              alt='Quất cảnh, chậu quất cảnh, chum quất cảnh'
            />
            <p className='text-xl font-semibold mt-3 text-center'>Cây abc</p>
            <p className='text-lg font-bold text-[#078d3d] mt-2 text-center'>
              1xx.000đ
            </p>
          </div>
        </div>
      </section>

      {/* cate 2 */}
      <section>
        <h3 className='font-bold text-3xl mb-8'>Các loại cây nổi bật</h3>
        <div className='mb-6'>
          <div className='max-w-[200px] max-h-[200px] overflow-hidden rounded-full mx-auto'>
            <Image
              src={'/home/product-2.png'}
              width={200}
              height={200}
              alt='Cây quất cảnh, quất cảnh Tết, chum chậu quất cảnh'
              className='object-cover block hover:scale-110 aspect-square transition-transform cursor-pointer'
            />
          </div>
          <p className='text-xl font-bold text-center mt-3'>Indoor</p>
        </div>
        <div className='mb-6'>
          <div className='max-w-[200px] max-h-[200px] overflow-hidden rounded-full mx-auto'>
            <Image
              src={'/home/product-2.png'}
              width={200}
              height={200}
              alt='Cây quất cảnh, quất cảnh Tết, chum chậu quất cảnh'
              className='object-cover block hover:scale-110 aspect-square transition-transform cursor-pointer'
            />
          </div>
          <p className='text-xl font-bold text-center mt-3'>Indoor</p>
        </div>
        <div className='mb-6'>
          <div className='max-w-[200px] max-h-[200px] overflow-hidden rounded-full mx-auto'>
            <Image
              src={'/home/product-2.png'}
              width={200}
              height={200}
              alt='Cây quất cảnh, quất cảnh Tết, chum chậu quất cảnh'
              className='object-cover block hover:scale-110 aspect-square transition-transform cursor-pointer'
            />
          </div>
          <p className='text-xl font-bold text-center mt-3'>Indoor</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
