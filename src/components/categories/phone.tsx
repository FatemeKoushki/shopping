"use client";
import React from "react";
import FilterComponent from "./filterComponentPc/filterComponent";
import { useQuery } from "@tanstack/react-query";
import axiosClient from "../GlobalApi";
export type ProductTY = {
  id: number;
  brand: string;
  category: string;
  color: string;
  description: string;
  image: string;
  isnew: string;
  price: number;
  qty: number;
  rating: string;
  rowprice: number;
  subCategory: string;
  title: string;
};
type FilterOption = {
  value: string;
  label: string;
  checked: boolean;
};

export type Filter = {
  id: string;
  name: string;
  options: FilterOption[];
};
export type SubCategory = {
  name: string;
  href: string;
};

function Phone() {
  const { data } = useQuery<ProductTY[]>({
    queryKey: ["phones"],
    queryFn: () =>
      axiosClient
        .get("/products")
        .then((res) =>
          res?.data?.filter(
            (product: ProductTY) => product.subCategory === "Phone"
          )
        ),
  });

  const subCategories: SubCategory[] = [
    { name: "Apple", href: "#apple" },
    { name: "Samsung", href: "#samsung" },
    { name: "Sony", href: "#sony" },
    { name: "Xiaomi", href: "#xiaomi" },
    { name: "Motorola", href: "#motorola" },
    { name: "Nokia", href: "#nokia" },
  ];

  const filters: Filter[] = [
    {
      id: "color",
      name: "Color",
      options: [
        { value: "white", label: "white", checked: false },
        { value: "blue", label: "blue", checked: true },
        { value: "silver", label: "silver", checked: true },
        { value: "black", label: "black", checked: false },
        { value: "green", label: "green", checked: false },
        { value: "purple", label: "purple", checked: false },
        { value: "cream", label: "cream", checked: false },
      ],
    },
  ];

  return (
    <div className="overflow-x-hidden mx-auto  z-50">
      {data && (
        <FilterComponent
          subCategories={subCategories}
          products={data}
          filters={filters}
          title={"Phones"}
        />
      )}
    </div>
  );
}

export default Phone;
