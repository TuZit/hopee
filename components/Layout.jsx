import React, { useRef } from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  const footerRef = useRef(null);
  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='max-w-[478px] mx-auto'>
      <Header scrollToFooter={scrollToFooter} />
      <main className='px-4'>{children}</main>
      <footer ref={footerRef}>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
