"use client";
/* eslint-disable */

import React from "react";
import Container from "./Container";
import Heading from "./Heading";
import axiosClient from "./GlobalApi";
import { useQuery } from "@tanstack/react-query";
import ProductSlider from "./sliderProduct";
import { ProductTY } from "./categories/phone";
interface Props {
  title?: string;
}
function BestSellers({ title }: Props) {
  const { data } = useQuery({
    queryKey: ["Bestsellres"],
    queryFn: () => {
      return axiosClient.get("/bestsellers").then((res) => res.data);
    },

    refetchOnWindowFocus: true,
    refetchInterval: 10000,
  });
  return (
    <Container className="w-full pb-20">
      <Heading heading={title} />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
        {data?.map((item: ProductTY) => (
          <ProductSlider key={item?.id} product={item} bg="#ffffff" />
        ))}
      </div>
    </Container>
  );
}

export default BestSellers;
