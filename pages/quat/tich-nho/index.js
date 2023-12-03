import DetailLayout from '../../../components/DetailLayout';

const Shop = () => {
  const arr = [
    '/quat/so/1.jpg',
    '/quat/so/2.jpg',
    '/quat/so/3.jpg',
    '/quat/so/4.jpg',
    '/quat/so/5.jpg',
    '/quat/so/6.jpg',
    '/quat/so/7.jpg',
    '/quat/so/8.jpg',
    '/quat/so/9.jpg',
    '/quat/so/10.jpg',
    '/quat/so/11.jpg',
    '/quat/so/12.jpg',
  ];

  return (
    <DetailLayout
      listImage={arr}
      title='Quất chum mini (sọ dừa nhỏ)'
      price='1xx.000 - 2xx.000đ'
    />
  );
};

export default Shop;
