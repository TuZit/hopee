import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="banner-content">
        <h5>SPECIAL OFFER</h5>
        <h4>SUCCULENT GARDERN</h4>
        <p>
          From planter material to style options, discover which planter is best
          your space.
        </p>
        <Link href="/">Explore the shop</Link>
      </div>
      <div className="banner-image">
        <img src="/images//banner-big1.webp" alt="banner" />
      </div>

      {/* Feature Product */}
      <div className="feature-product">
        <p className="section-title">New Products</p>
        <div className="feature-product-list">
          <div className="feature-product-item">
            <div className="feature-product-item__image">
              <img src="/images/medium15.webp" alt="item" />
            </div>
            <div className="feature-product-item__content">
              <p className="name">Lorem ipsum garden</p>
              <p className="price">$1000</p>
            </div>
          </div>
          <div className="feature-product-item">
            <div className="feature-product-item__image">
              <img src="/images/medium15.webp" alt="item" />
            </div>
            <div className="feature-product-item__content">
              <p className="name">Lorem ipsum garden</p>
              <p className="price">$1000</p>
            </div>
          </div>
          <div className="feature-product-item">
            <div className="feature-product-item__image">
              <img src="/images/medium15.webp" alt="item" />
            </div>
            <div className="feature-product-item__content">
              <p className="name">Lorem ipsum garden</p>
              <p className="price">$1000</p>
            </div>
          </div>
        </div>
      </div>

      {/* Category */}
      <div className="feature-category">
        <p className="section-title">Feature Categories</p>
        <div className="feature-category__list">
          <div className="feature-category__item">
            <div className="inner-image">
              <img src="/images/service1.jpg" alt="ada" />
            </div>
            <div className="inner-text">Organic Product</div>
          </div>
          <div className="feature-category__item">
            <div className="inner-image">
              <img src="/images/service1.jpg" alt="ada" />
            </div>
            <div className="inner-text">Organic Product</div>
          </div>
          <div className="feature-category__item">
            <div className="inner-image">
              <img src="/images/service1.jpg" alt="ada" />
            </div>
            <div className="inner-text">Organic Product</div>
          </div>
        </div>
      </div>

      {/* intro */}
      <div className="intro-garden">
        <h4>ALL YOU NEED FOR AGRICULTURE HARDWORK & PROFESSIONAL</h4>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
