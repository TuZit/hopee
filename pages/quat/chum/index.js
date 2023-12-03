import React from 'react';
import DetailLayout from '../../../components/DetailLayout';

const Quat = () => {
  const img = [
    '/quat/chum/1.jpg',
    '/quat/chum/2.jpg',
    '/quat/chum/3.jpg',
    '/quat/chum/4.jpg',
  ];

  return (
    <>
      <DetailLayout
        listImage={img}
        title='Quất chum'
        price='3xx.000 - 5xx.000đ'
      />
    </>
  );
};

export default Quat;
