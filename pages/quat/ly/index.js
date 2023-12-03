import DetailLayout from '../../../components/DetailLayout';

const Shop = () => {
  const arr = [
    '/quat/ly/1.jpg',
    '/quat/ly/2.jpg',
    '/quat/ly/3.jpg',
    '/quat/ly/4.jpg',
    '/quat/ly/5.jpg',
    '/quat/ly/6.jpg',
  ];

  return (
    <DetailLayout
      listImage={arr}
      title='Quất ly để bàn'
      price='1xx.000 - 2xx.000đ'
    />
  );
};

export default Shop;
