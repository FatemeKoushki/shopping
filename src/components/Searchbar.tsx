"use client";
/* eslint-disable */ 
import { ProductProps } from "@/types";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import axiosClient from "./GlobalApi";
import { useQuery } from "@tanstack/react-query";



const SearchComponent = ({ className } : any) => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]); 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {data} = useQuery({
    queryKey :["allProducts"] ,
    queryFn :async ()=> await axiosClient.get("/products").then((res)=> res.data )
    
    
  })
 
  //Filtering products based on search
  useEffect(() => {
    if (searchQuery && searchQuery?.length > 0 && data) {
      const productsList = [...data];
      const filteredProducts : any = productsList?.filter((p) => p?.title.includes(searchQuery)
      );
      setProducts(filteredProducts ?? []);
    } else {
      setProducts(data);
    }
  }, [searchQuery]);
  const searchProduct = (id: any) => {
    router.push(`/product/${id}`);
  };

  return (
    <div>
      <div className={className}>
        <input
          type="text"
          placeholder="Search your products here"
          onFocus={() => setIsModalOpen(true)}
          className="h-full   flex-1 bg-transparent outline-none placeholder:text-[12px] md:placeholder:text-base  placeholder:text-gray-600"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
        {searchQuery ? (
          <IoCloseOutline
            onClick={() => setSearchQuery("")}
            className="size-4 md:size-5 duration-200 hover:cursor-pointer hover:text-red-500"
          />
        ) : (
          <FaSearch className="size-4 md:size-5 hover:cursor-pointer" />
        )}
      </div>
      {isModalOpen && searchQuery?.length > 0 ? (
        <div className="transition-all duration-300 text-primeColor absolute  max-h-[300px]  z-40   overflow-y-auto  w-[237px]  searchModal   flex-col  justify-center items-center text-center gap-2 rounded-md border-[1px] border-black bg-white px-1 text-[12px]  md:text-base md:flex md:w-[397px] lg:w-[550px]">
          {products?.length > 0 ? (
            products.map((p:ProductProps) => (
              <div
                className="  border-b-[1px] p-2 border-gray-300"
                onClick={() => {
                  searchProduct(p?.id);
                  setSearchQuery("");
                }}
                key={p?.id}
              >
                {p?.title}
              </div>
            ))
          ) : (
            <div>no result</div>
          )}
        </div>
      ) : null}
    </div>
  );
};
export default SearchComponent;
