import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Zoom, Navigation, Pagination } from "swiper";

const Slider = ({ images, openSlider }) => {
  return (
    <div className="fixed left-0 top-0 right-0 bottom-0 z-50 bg-dark-backgroundColor ">
      <div
        className="fixed top-0 right-0 px-8 py-2 m-4 z-50 text-xl font-bold border rounded-full cursor-pointer text-light-cardBgColor"
        onClick={openSlider}
      >
        Close
      </div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        zoom={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Zoom, Navigation, Pagination]}
        className="mySwiper p-16 flex"
      >
        {images?.map((item) => (
          <SwiperSlide>
            <div className="swiper-zoom-container mx-10">
              <img src={item} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
