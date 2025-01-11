"use client";
import React from "react";
import FilterComponent from "./filterComponentPc/filterComponent";
import { useQuery } from "@tanstack/react-query";
import { ProductTY } from "./phone";
import axiosClient from "../GlobalApi";

function Accessories() {
  const { data } = useQuery<ProductTY[]>({
    queryKey: ["accessories"],
    queryFn: () =>
      axiosClient
        .get("/products")
        .then((res) =>
          res?.data?.filter(
            (product: ProductTY) => product.subCategory === "accessories"
          )
        ),
  });
  const subCategories = [
    { name: "Battery", href: "#Battery" },
    { name: "Flash", href: "#Flash" },
    { name: "Charger", href: "#Charger" },
  ];

  const filters = [
    {
      id: "color",
      name: "Color",
      options: [
        { value: "white", label: "white", checked: false },
        { value: "blue", label: "blue", checked: true },
        { value: "black", label: "black", checked: false },
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
          title={"Accessories"}
        />
      )}
    </div>
  );
}

export default Accessories;
