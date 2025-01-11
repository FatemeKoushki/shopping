"use client";
import React from "react";
import FilterComponent from "./filterComponentPc/filterComponent";
import { useQuery } from "@tanstack/react-query";
import { ProductTY } from "./phone";
import axiosClient from "../GlobalApi";

function HeadPhone() {
  const { data } = useQuery<ProductTY[]>({
    queryKey: ["laptop"],
    queryFn: () =>
      axiosClient
        .get("/products")
        .then((res) =>
          res?.data?.filter(
            (product: ProductTY) => product.subCategory === "HeadPhone"
          )
        ),
  });
  // console.log(data)

  const subCategories = [
    { name: "Apple", href: "#apple" },
    { name: "Samsung", href: "#samsung" },
    { name: "Sony", href: "#sony" },
    { name: "Xiaomi", href: "#xiaomi" },
  ];

  const filters = [
    {
      id: "color",
      name: "Color",
      options: [
        { value: "white", label: "white", checked: false },
        { value: "blue", label: "blue", checked: true },
        { value: "black", label: "black", checked: false },
        { value: "Red", label: "red", checked: false },
        { value: "purple", label: "purple", checked: false },
      ],
    },
  ];

  return (
    <div>
      {data && (
        <FilterComponent
          subCategories={subCategories}
          products={data}
          filters={filters}
          title={"headphones"}
        />
      )}
    </div>
  );
}

export default HeadPhone;
