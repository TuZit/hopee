import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="home-page">
      {/* <div className="banner-content">
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
      </div> */}
      <div className="banner-image">
        <img src="/slider-bg1.jpg" alt="banner" />
        <div className="banner-image__text">
          <h4>Welcome to agriculture farm</h4>
          <h3>Agriculture products</h3>
          <Link href="/">Discover More</Link>
        </div>
      </div>

      {/* Intro Product */}
      <div className="intro-product">
        <div className="intro-product__logo">
          <img src="/fruit-tree.png" alt="cay_quat" />
          <h4>
            WE'RE CARING ABOUT OUT
            <br />
            AGRICULTURE GROWTH
          </h4>
        </div>
        <p className="intro-product__text">
          There are many variations of passag available but the majority have is
          simply free text suffered alteration in some form.
        </p>
      </div>

      {/* Feature Product */}
      <div className="feature-product">
        {/* <h4>WHAT WE DO</h4>
        <h3>SERVICES WE OFFER</h3> */}
        <p className="section-title">Feature Products</p>
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

      {/* intro categpory */}
      <div className="intro-garden">
        <h4>ALL YOU NEED FOR AGRICULTURE HARDWORK & PROFESSIONAL</h4>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>
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
    </div>
  );
};

export default HomePage;
