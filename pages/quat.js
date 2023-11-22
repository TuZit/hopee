import React from 'react';
import DetailLayout from '../components/DetailLayout';

const Quat = () => {
  const img = [
    '/quat/chum-1.jpg',
    '/quat/2.jpg',
    '/quat/3.jpg',
    '/home/prod-3.jpg',
    '/home/prod-4.jpg',
  ];

  return (
    <>
      <DetailLayout listImage={img} />
    </>
  );
};

export default Quat;
