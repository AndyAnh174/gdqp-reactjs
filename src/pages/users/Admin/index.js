import { memo, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.scss";
import QA from './img/QA.jpg'

const Admin = () => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const sliderItems = [
    {
      bgimgL: QA,
      name: "Em QA",
      iframeSrc: "https://tulieuvankien.dangcongsan.vn/c-mac-angghen-lenin-ho-chi-minh/ho-chi-minh/tieu-su-cuoc-doi-va-su-nghiep/tieu-su-chu-tich-ho-chi-minh-52",
    },
  ];

  const handleClick = (iframeSrc) => {
    window.location.href = iframeSrc;
  };

  return (
    <>
    <div className="linkfake">
      <p><span><a href="https://facebook.com">emyeuqa.com</a></span></p>
      
      <div className="container container-categories-slider">
        <Carousel responsive={responsive} className="categories-slider">
          {sliderItems.map((item, key) => (
            <div
              key={key}
              className="categories-slider-item" target="_blank"
              style={{ backgroundImage: `url(${item.bgimgL})` }}
              onClick={() => handleClick(item.iframeSrc)}
            ></div>
          ))}
        </Carousel>
      </div>
    </div>
    </>
  );
};

export default memo(Admin);
