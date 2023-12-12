import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./style.css";

const HeroSection = () => {
  return (
    <div className="testimonials pt-5 mp-3">
      <div className="head text-center py-5" data-aos="fade-up">
        <p>TESTIMONIALS</p>
        <h1>What our Buyers Say</h1>
      </div>

      <Swiper
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="d-flex justify-content-center">
          <div className="box py-5 d-flex flex-column align-items-center">
            <div className="icon text-center">
              <i className="fa-solid fa-quote-left"></i>
            </div>
            <p>
              Nullam orci dui, dictum et magna sollicitudin, tempor blandit
              erat. Maecenas suscipit tellus sit amet augue placerat fringilla a
              id lacus. Fusce tincidunt in leo lacinia condimentum. Donec
              placerat, orci.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="d-flex justify-content-center">
          <div className="box py-5 d-flex flex-column align-items-center">
            <div className="icon text-center">
              <i className="fa-solid fa-quote-left"></i>
            </div>
            <p>
            Morbi viverra volutpat ex, id pellentesque felis volutpat eu. Duis et tellus imperdiet, lacinia risus id, tincidunt ipsum. Integer euismod elit vel nibh commodo, at consequat nisl rhoncus. Etiam mattis.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="d-flex justify-content-center">
          <div className="box py-5 d-flex flex-column align-items-center">
            <div className="icon text-center">
              <i className="fa-solid fa-quote-left"></i>
            </div>
            <p>
            Maecenas ultricies felis sit amet libero scelerisque, ut eleifend leo mattis. Aliquam porta facilisis metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam id.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="d-flex justify-content-center">
          <div className="box py-5 d-flex flex-column align-items-center">
            <div className="icon text-center">
              <i className="fa-solid fa-quote-left"></i>
            </div>
            <p>
            Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus. Fusce tincidunt in leo lacinia condimentum. Donec placerat, orci.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
