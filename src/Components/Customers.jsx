import React from "react";
import "./Customers.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import Customer1 from "../media/customers/customer1.png";
import Customer2 from "../media/customers/customer2.png";
import Customer3 from "../media/customers/customer3.png";
import Customer4 from "../media/customers/customer4.png";
import Customer5 from "../media/customers/customer5.png";
import Customer6 from "../media/customers/customer6.png";
import Customer7 from "../media/customers/customer7.png";
import Customer8 from "../media/customers/customer8.png";
import Customer9 from "../media/customers/customer9.png";
import Customer10 from "../media/customers/customer10.png";
import Customer11 from "../media/customers/customer11.png";
import Customer12 from "../media/customers/customer12.png";
import Customer13 from "../media/customers/customer13.png";
import Customer14 from "../media/customers/customer14.png";
import Customer15 from "../media/customers/customer15.png";
import Customer16 from "../media/customers/customer16.png";

const Customers = () => {
  return (
    <div id="ourWork" className="Customers">
      <div className="Title">
        <h1>Our Work</h1>
      </div>
      <div className="SliderContainer">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={0}
          loop={true}
          slidesPerView={"auto"}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 5,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 5,
            },
          }}
        >
          <SwiperSlide>
            <div className="logoContainer">
              <a href="">
                <img className="customer" src={Customer1} alt="" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="logoContainer">
              <a href="">
                <img className="customer" src={Customer2} alt="" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="logoContainer">
              <a href="">
                <img className="customer" src={Customer3} alt="" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="logoContainer">
              <a href="">
                <img className="customer" src={Customer4} alt="" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="logoContainer">
              <a href="">
                <img className="customer" src={Customer5} alt="" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="logoContainer">
              <a href="">
                <img className="customer" src={Customer6} alt="" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="logoContainer">
              <a href="">
                <img className="customer" src={Customer7} alt="" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="logoContainer">
              <a href="">
                <img className="customer" src={Customer8} alt="" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="logoContainer">
              <a href="">
                <img className="customer" src={Customer9} alt="" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="logoContainer">
              <a href="">
                <img className="customer" src={Customer10} alt="" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="logoContainer">
              <a href="">
                <img className="customer" src={Customer11} alt="" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="logoContainer">
              <a href="">
                <img className="customer" src={Customer12} alt="" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="logoContainer">
              <a href="">
                <img className="customer" src={Customer13} alt="" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="logoContainer">
              <a href="">
                <img className="customer" src={Customer14} alt="" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="logoContainer">
              <a href="">
                <img className="customer" src={Customer15} alt="" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="logoContainer">
              <a href="">
                <img className="customer" src={Customer16} alt="" />
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Customers;
