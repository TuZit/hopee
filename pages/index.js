import Footer from "../components/Footer/index.jsx";
import HomePage from "../components/HomePage";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

import Link from "next/link";

export default function Home() {
  return (
    <div className="root">
      {/* Header */}
      {/* <div className="header">
        <div className="logo">Logo</div>
        <div className="">
          <ul className="top-bar">
            <li>Home</li>
            <li>Category</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div> */}

      {/* Slider */}
      {/* <div className="desc-banner">
        <ul className="list-category">
          <li>
            <Link href="/">aaaaaaaaaaaaaaa</Link>
          </li>
          <li>
            <Link href="/">aaaaaaaaaaaaaaa</Link>
          </li>
          <li>
            <Link href="/">aaaaaaaaaaaaaaa</Link>
          </li>
          <li>
            <Link href="/">aaaaaaaaaaaaaaa</Link>
          </li>
          <li>
            <Link href="/">aaaaaaaaaaaaaaa</Link>
          </li>
        </ul>
        <div className="banner-slider">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            // pagination={{
            //   clickable: true,
            // }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src="/images/1.jpg"
                alt="Picture of the author"
                width={500}
                height={500}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/2.jpg"
                alt="Picture of the author"
                width={500}
                height={500}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div> */}

      {/* Service Description */}

      <HomePage />
      {/* <Footer /> */}

      {/* Hight Light Product */}
      {/* <div className="hightlight-product">
        <div className="hightlight-product-container">
          <div className="hightlight-product__top">
            <div className="hightlight-product__top--left">
              <img src="/images/souvenirMock/collage.png" alt="a" />
              <p className="product-card__name">Collagen</p>
              <p className="product-card__price">1xx.000đ</p>
            </div>
            <div className="hightlight-product__top--right">
              <div className="hightlight-product-item">
                <div className="product-card">
                  <img src="/images/souvenirMock/collage.png" alt="a" />
                  <p className="product-card__name">Collagen</p>
                  <p className="product-card__price">1xx.000đ</p>
                </div>
              </div>
              <div className="hightlight-product-item">
                <div className="product-card">
                  <img src="/images/souvenirMock/collage.png" alt="a" />
                  <p className="product-card__name">Collagen</p>
                  <p className="product-card__price">1xx.000đ</p>
                </div>
              </div>
            </div>
          </div>

          <div className="hightlight-product__bot">
            <div className="hightlight-product-item">
              <div className="product-card">
                <img src="/images/souvenirMock/collage.png" alt="a" />
                <p className="product-card__name">Collagen</p>
                <p className="product-card__price">1xx.000đ</p>
              </div>
            </div>
            <div className="hightlight-product-item">
              <div className="product-card">
                <img src="/images/souvenirMock/collage.png" alt="a" />
                <p className="product-card__name">Collagen</p>
                <p className="product-card__price">1xx.000đ</p>
              </div>
            </div>
            <div className="hightlight-product-item">
              <div className="product-card">
                <img src="/images/souvenirMock/collage.png" alt="a" />
                <p className="product-card__name">Collagen</p>
                <p className="product-card__price">1xx.000đ</p>
              </div>
            </div>
            <div className="hightlight-product-item">
              <div className="product-card">
                <img src="/images/souvenirMock/collage.png" alt="a" />
                <p className="product-card__name">Collagen</p>
                <p className="product-card__price">1xx.000đ</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
