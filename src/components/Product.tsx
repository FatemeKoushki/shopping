"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowsFullscreen } from "react-icons/bs";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { AiOutlineShopping } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/redux/cartSlice";
import { ProductTY } from "./categories/phone";
interface Props {
  product: ProductTY;
  bg?: string;
}
function Product({ product, bg }: Props): React.JSX.Element {
  const dispatch = useDispatch();
  return (
    <div
      className=" w-full md:w-[240px] lg:w-[270px] relative   group border-[1px] border-gray-400 hover:shadow-lg duration-200
       shadow-gray-500 rounded-md overflow-hidden group"
    >
      <div className="w-full h-52 lg:h-64  flex items-center  justify-center bg-white overflow-hidden">
        <div className={`relative ${bg}`}>
          <Link href={`/product/${product?.id}`} className="text-center">
            <Image
              src={product?.image}
              height={500}
              width={500}
              alt="img-product"
              className="w-40 h-32 lg:w-56 lg:h-40 object-contain"
            />
          </Link>
          <div
            className=" flex bottom-0 items-center  gap-3 justify-center text-center translate-y-[100%] lg:translate-y-[300%]
                lg:group-hover:-translate-y-1 transition-transform duration-500"
          >
            <button
              onClick={() => {
                dispatch(addToCart(product));
              }}
              className="bg-gray-800  text-gray-200 px-2 lg:px-4 py-[2px] lg:py-1  text-[10px] lg:text-xs flex items-center 
                gap-1 hover:bg-gray-950 hover:text-white duration-200 rounded-full "
            >
              <span>
                <AiOutlineShopping className="w-5 h-5" />
              </span>
              Add to Bag
            </button>
            <Link
              href={`/product/${product?.id}`}
              className="lg:bg-gray-800    text-gray-200 px-4 py-1 text-[10px] lg:text-xs md:flex items-center 
                gap-1 hover:bg-gray-950 hover:text-white duration-200 rounded-full "
            >
              <span>
                <BsArrowsFullscreen className="text-black lg:text-white w-3 lg:w-[13px] h-4 lg:h-[13px]" />
              </span>
             <p className="hidden lg:flex p-[2px]" > Quick view</p>
            </Link>
          </div>
          {product?.isnew && (
            <div className="absolute top-0 lg:top-2 right-0 z-10 ">
              <p
                className="bg-primeColor px-2 lg:px-4 py-1 text-white flex items-center justify-center
                       text-sm font-semibold hover:bg-black duration-300 cursor-pointer rounded-md"
              >
                New
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="max-w-80 flex flex-col  py-2   px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <h2 className="lg:text-lg text-primeColor font-bold">
            {product?.title}
          </h2>
          <div className="flex items-center gap-2">
            <p className="text-[10px] md:text-xs text-[#767676] line-through">
              ${product?.rowprice}
            </p>
            <p className="font-semibold">${product?.price}</p>
          </div>
        </div>
        <div className="text-center lg:flex justify-between lg:p-2">
          
         
          <p className="text-xs md:text-sm text-[#767676]">
            product by a{" "}
            <span className="font-semibold text-primeColor">
              {product?.brand}
            </span>
          </p>
          <div className="flex items-center justify-center gap-1">
            <MdOutlineStarPurple500 className="text-xs md:text-lg text-yellow-500 " />
            <span className="font-medium text-sm">{product?.rating}</span>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default Product;
