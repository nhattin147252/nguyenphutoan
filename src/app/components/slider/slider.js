'use client'

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 1500,
  };
  return (
    <Slider {...settings}>
      <div>
       <img src="/images.jpg" width={600} height={350} alt="product 1" /> 
      </div>
      <div>
      <img src="/giayeo.jpg" width={600} height={350} alt="product 1" /> 
      </div>
      <div>
      <img src="/giaythun.jpg" width={600} height={350} alt="product 1" /> 
      </div>
      <div>
      <img src="/giaynike.jpg" width={600} height={300} alt="product 1" /> 
      </div>
    </Slider>
  );
}