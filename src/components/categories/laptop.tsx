"use client";
import React from "react";
import FilterComponent, { Filters } from "./filterComponentPc/filterComponent";
import { useQuery } from "@tanstack/react-query";
import axiosClient from "../GlobalApi";
import type { ProductTY } from "./phone";
type Section = {  
  id: keyof Filters;
  name: string ,  // 'color' | 'category'  
  options: { value: string; label: string; checked: boolean }[];  
}  
function Laptop() {
  const { data } = useQuery<ProductTY[]>({
    queryKey: ["laptop"],
    queryFn: () =>
      axiosClient
        .get("/products")
        .then((res) =>
          res?.data?.filter(
            (product: ProductTY) => product.subCategory === "Laptop"
          )
        ),
  });
  console.log(data);

  const subCategories = [
    { name: "Apple", href: "#apple" },
    { name: "Samsung", href: "#samsung" },
    { name: "Dell", href: "#dell" },
    { name: "HP", href: "#hp" },
    { name: "Asus", href: "#Asus" },
  ];

  const filters :Section[] = [
    {
      id: "color",
      name: "color",
      options: [
        { value: "white", label: "white", checked: false },
        { value: "blue", label: "blue", checked: true },
        { value: "silver", label: "silver", checked: true },
        { value: "black", label: "black", checked: false },
        { value: "red", label: "red", checked: false },
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
          title={"Laptop"}
        />
      )}
    </div>
  );
}

export default Laptop;
