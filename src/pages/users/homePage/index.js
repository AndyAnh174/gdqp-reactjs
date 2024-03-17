import { memo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BacHo from "assets/users/images/categories/BacHo.jpg" ;
import PhamMinhChinh from "assets/users/images/categories/PhamMinhChinh.jpg" ;
import VoNguyenGiap from "assets/users/images/categories/VoNguyenGiap.jpg" ;
import NguyenPhuTrong from "assets/users/images/categories/NguyenPhuTrong.jpg" ;

import "./style.scss";

const HomePage = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
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
            name: "Bác Hồ"
        },
        {
            bgimgL: VoNguyenGiap,
            name: "Võ Nguyên Giáp"
        },
        {
            bgimgL: PhamMinhChinh,
            name: "Phạm Minh Chính"
        },
        {
            bgimgL: NguyenPhuTrong,
            name: "Nguyễn Phú Trọng"
        },
      ]

    return (
    <>
    {/* Categories Begin */}
    <div className="container container-categories-slider">

        <Carousel responsive={responsive} className="categories-slider">
            {
                sliderItems.map((item, key) => (
            <div className="categories-slider-item" 
            style={{ backgroundImage: `url(${item.bgimgL})`}}>
               </div>

                ))
            }
        </Carousel>
    </div>
    {/* Categories Begin */}
    
    </>
    
    );
};

export default memo(HomePage);