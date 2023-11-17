import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className='px-4'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
