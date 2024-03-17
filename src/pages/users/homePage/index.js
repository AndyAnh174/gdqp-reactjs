import { memo, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BacHo from "assets/users/images/categories/BacHo.jpg";
import PhamMinhChinh from "assets/users/images/categories/PhamMinhChinh.jpg";
import VoNguyenGiap from "assets/users/images/categories/VoNguyenGiap.jpg";
import NguyenPhuTrong from "assets/users/images/categories/NguyenPhuTrong.jpg";

import "./style.scss";

const HomePage = () => {
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
      bgimgL: BacHo,
      name: "Bác Hồ",
      iframeSrc: "https://tulieuvankien.dangcongsan.vn/c-mac-angghen-lenin-ho-chi-minh/ho-chi-minh/tieu-su-cuoc-doi-va-su-nghiep/tieu-su-chu-tich-ho-chi-minh-52",
    },
    {
      bgimgL: VoNguyenGiap,
      name: "Võ Nguyên Giáp",
      iframeSrc: "https://tulieuvankien.dangcongsan.vn/c-mac-angghen-lenin-ho-chi-minh/ho-chi-minh/tieu-su-cuoc-doi-va-su-nghiep/tieu-su-chu-tich-ho-chi-minh-52",
    },
    {
      bgimgL: PhamMinhChinh,
      name: "Phạm Minh Chính",
      iframeSrc: "https://www.qdnd.vn/chinh-tri/tin-tuc/tom-tat-tieu-su-thu-tuong-chinh-phu-pham-minh-chinh-666555",
    },
    {
      bgimgL: NguyenPhuTrong,
      name: "Nguyễn Phú Trọng",
      iframeSrc: 'https://tulieuvankien.dangcongsan.vn/c-mac-angghen-lenin-ho-chi-minh/ho-chi-minh/tieu-su-cuoc-doi-va-su-nghiep/tieu-su-chu-tich-ho-chi-minh-52',
    },
  ];

  const handleClick = (iframeSrc) => {
    window.location.href = iframeSrc;
  };

  return (
    <>
      <div className="container container-categories-slider">
        <Carousel responsive={responsive} className="categories-slider">
          {sliderItems.map((item, key) => (
            <div
              key={key}
              className="categories-slider-item"
              style={{ backgroundImage: `url(${item.bgimgL})` }}
              onClick={() => handleClick(item.iframeSrc)}
            ></div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default memo(HomePage);
