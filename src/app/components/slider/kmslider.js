'use client';

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function KmSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <Slider {...settings}>
      <div>
       <Image src="/giayau.jpg" alt="Product 1" width={400} height={110}/> 
      </div>
      <div>
      <Image src="/giaynike.jpg" alt="Product 1" width={400} height={110}/> 
      </div>
      <div>
      <Image src="/giaythun.jpg" alt="Product 1" width={400} height={110}/> 
      </div>
      <div>
      <Image src="/giayeo.jpg" alt="Product 1" width={400} height={110}/> 
      </div>
      <div>
      <Image src="/images.jpg" alt="Product 1" width={400} height={110}/> 
      </div>
    </Slider>
  );

}