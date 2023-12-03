import DetailLayout from '../../../components/DetailLayout';

const Shop = () => {
  const arr = [
    '/quat/chau-nhua/1.jpg',
    '/quat/chau-nhua/2.jpg',
    '/quat/chau-nhua/3.jpg',
    '/quat/chau-nhua/4.jpg',
    '/quat/chau-nhua/5.jpg',
    '/quat/chau-nhua/6.jpg',
  ];

  return (
    <DetailLayout
      listImage={arr}
      title='Quất chậu nhựa'
      price='1xx.000 - 2xx.000đ'
    />
  );
};

export default Shop;
