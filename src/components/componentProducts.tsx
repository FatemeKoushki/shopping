import Link from "next/link";
import { useState } from "react";

const DropdownMenu = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative">
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="px-4 py-2 text-gray-700   hover:text-gray-950 rounded-md"
      >
        Products
      </button>

      {/* منو */}
      {isHovered && (
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="absolute  top-full  right-0  w-[170px] min-h-44 h-full p-2 bg-white border rounded-lg shadow-lg"
        >
          <div className="flex flex-col justify-end px-2 gap-2 ">
            <Link href={"/phones"} className="hover:translate-x-4 transition-all duration-300 ease-in-out hover:text-black">
             <h2>Phone</h2>
            </Link >

            <Link href={"/laptop"} className="hover:translate-x-4 transition-all duration-300 ease-in-out hover:text-black">
            <h2>Laptop</h2>
             
            </Link>

            

            <Link href={"/headphone"} className="hover:translate-x-4 transition-all duration-300 ease-in-out hover:text-black">
            <h2>Headphone</h2>
             
            </Link>
            
            <Link href={"/accessories"} className="hover:translate-x-4 transition-all duration-300 ease-in-out hover:text-black">
            <h2>Accessories</h2>
             
            </Link>
            <Link href={"/allProducts"} className="hover:translate-x-4 transition-all duration-300 ease-in-out hover:text-black">
            <h2>All Product</h2>
             
            </Link>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;

