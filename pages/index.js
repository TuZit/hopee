import Footer from "../components/Footer/index.jsx";

export default function Home() {
  return (
    <div className="root">
      <h1 className="aa">Hiiii</h1>
      <Footer />

      {/* Hight Light Product */}
      <div className="hightlight-product">
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
      </div>
    </div>
  );
}
