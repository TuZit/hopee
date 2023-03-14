import React from "react";

const thumb = () => {
  return (
    <div>
      {/* thumbnails */}
      <div className="thumbnails">
        <div className="thumbnails__items">
          <div className="thumbnails__items-img">
            <img src="./images/home/home-16.jpg" alt="" />
          </div>
          <h4>Vegetable</h4>
        </div>
        <div className="thumbnails__items">
          <div className="thumbnails__items-img">
            <img src="./images/home/home-2.jpg" alt="" />
          </div>
          <h4>Fruit</h4>
        </div>
        <div className="thumbnails__items">
          <div className="thumbnails__items-img">
            <img src="./images/home/home-3.jpg" alt="" />
          </div>
          <h4>Meat</h4>
        </div>
      </div>
    </div>
  );
};

export default thumb;
