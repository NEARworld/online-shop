// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";

import "../../../styles/core/slider.css";
import { Typography } from "@mui/material";

const Slider = () => {
  return (
    <>
      <Typography variant="h6" component="h1">
        Favorites
      </Typography>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {Array.from({ length: 10 }).map((item, index) => (
          <SwiperSlide>
            <img src="https://picsum.photos/200/300" alt="slide" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default Slider;
