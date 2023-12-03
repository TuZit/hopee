import React from 'react';
import DetailLayout from '../../../components/DetailLayout';

const Mini = () => {
  const arr = [
    '/quat/mini/1.jpg',
    '/quat/mini/2.jpg',
    '/quat/mini/3.jpg',
    '/quat/mini/4.jpg',
    '/quat/mini/5.jpg',
    '/quat/mini/6.jpg',
    '/quat/mini/7.jpg',
    '/quat/mini/8.jpg',
    '/quat/mini/9.jpg',
  ];

  return (
    <DetailLayout listImage={arr} title='Quất mini để bàn' price='1xx.000 đ' />
  );
};

export default Mini;
