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
import Customer17 from "../media/customers/new1.png";
import Customer18 from "../media/customers/new2.png";
import Customer19 from "../media/customers/new3.png";
import Customer20 from "../media/customers/new4.png";
import Customer21 from "../media/customers/new5.png";
import Customer22 from "../media/customers/new6.png";
import Customer23 from "../media/customers/new7.png";
import Customer24 from "../media/customers/new8.png";
import Customer25 from "../media/customers/new9.png";
import Customer26 from "../media/customers/new10.png";
import Customer27 from "../media/customers/new11.png";
import Customer28 from "../media/customers/new12.png";
import Customer29 from "../media/customers/new13.png";
import "swiper/css/navigation";
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
          navigation
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
          {/* <SwiperSlide>
            <div className="logoContainer">
              <a href="">
                <img className="customer" src={Customer8} alt="" />
              </a>
            </div>
          </SwiperSlide> */}
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
          <SwiperSlide>
            <div className="logoContainer">
              <a href="">
                <img className="customer" src={Customer17} alt="" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="logoContainer">
              <a href="">
                <img className="customer" src={Customer18} alt="" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="logoContainer">
              <a href="">
                <img className="customer" src={Customer19} alt="" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="logoContainer">
              <a href="">
                <img className="customer" src={Customer20} alt="" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="logoContainer">
              <a href="">
                <img className="customer" src={Customer21} alt="" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="logoContainer">
              <a href="">
                <img className="customer" src={Customer22} alt="" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="logoContainer">
              <a href="">
                <img className="customer" src={Customer23} alt="" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="logoContainer">
              <a href="">
                <img className="customer" src={Customer24} alt="" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="logoContainer">
              <a href="">
                <img className="customer" src={Customer25} alt="" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="logoContainer">
              <a href="">
                <img className="customer" src={Customer26} alt="" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="logoContainer">
              <a href="">
                <img className="customer" src={Customer27} alt="" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="logoContainer">
              <a href="">
                <img className="customer" src={Customer28} alt="" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="logoContainer">
              <a href="">
                <img className="customer" src={Customer29} alt="" />
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Customers;
