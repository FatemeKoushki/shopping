"use client";
/* eslint-disable */
import React from "react";
import Container from "./Container";
import Slider from "react-slick";
import Product from "./Product";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import axiosClient from "./GlobalApi";
import { useQuery } from "@tanstack/react-query";
import ProductSlider from "./sliderProduct";
import { ProductTY } from "./categories/phone";


function NewArrival() {
  const { data } = useQuery({
    queryKey :[ "allProducts"] ,
    queryFn :  () =>
      axiosClient.get("/products").then((res) => res.data)
    
  }
  );
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <Container className="-mt-60 z-50">
      <div className="">
        <Slider {...settings}>
          {data &&
            data?.map((item: ProductTY) => (
              <div key={item?.id} className="px-2">
                <ProductSlider product={item} />
              </div>
            ))}
        </Slider>
      </div>
    </Container>
  );
}

export default NewArrival;
