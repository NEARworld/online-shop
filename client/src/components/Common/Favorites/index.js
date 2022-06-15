// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";

import "../../../styles/core/slider.css";
import { Typography } from "@mui/material";

const Slider = () => {
  const images = [
    "https://source.unsplash.com/random/200x300?nature,water",
    "https://source.unsplash.com/random/200x300?nature,tree",
    "https://source.unsplash.com/random/200x300?nature,flower",
    "https://source.unsplash.com/random/200x300?nature,zoo",
    "https://source.unsplash.com/random/200x300?nature,animal",
    "https://source.unsplash.com/random/200x300?nature,plant",
    "https://source.unsplash.com/random/200x300?nature,mountain",
    "https://source.unsplash.com/random/200x300?nature,cloud",
  ];

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
        {images.map((item, index) => (
          <SwiperSlide>
            <img src={item} alt="slide" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default Slider;
