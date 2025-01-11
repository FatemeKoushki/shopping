"use client";
/* eslint-disable */ 
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "../../public/logo2.jpeg";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";
import SearchComponent from "./Searchbar";
import DropdownMenu from "./componentProducts";

function Navbar() {
  const pathName = usePathname();
  const [userInfo, setUserInfo] = useState<any>([]);
  const [menuNav, setMenuNav] = useState(false);
    // for logout

  // get cookie
  useEffect(() => {
    const userInf = Cookies.get("tokenLogin");
    if (userInf) {
      const user = JSON.parse(userInf);
      setUserInfo(user);
    }
  }, []);
  //logout data
  const logout = () => {
    Cookies.remove("tokenLogin");
    location.reload();
  };
  const navbarList = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "contact Us",
      link: "/contactUs",
    }
  
   
   
  ];
  return (
    <div className="w-full  transition ease-in duration-300 delay-150 h-20 border-b-[1px] bg-white border-gray-400 sticky top-0 z-20 ">
      <nav className="h-full  max-w-screen-xl mx-auto px-4 xl:px-0 flex items-center justify-between gap-2">
        <Link href={"/"}>
          <Image src={logo} alt="logo" className="w-12 md:w-16 flex-shrink" />
        </Link>
        <div className="">
          <SearchComponent
            className={`"text-primeColor relative   lg:flex items-center justify-center  hidden md:w-[300px] lg:w-[550px]  h-10  gap-2 rounded-md border-[1px] border-black px-6 text-base "`}
          />
        </div>
        <div
          className={`bg-white z-40 hidden lg:inline-flex   lg:items-center lg:static  md:w-auto  w-full min-w-[170px] left-0  justify-center  md:p-0 p-2     transition-all  ease duration-500  "
            } `}
        >
          <DropdownMenu />

          {navbarList.map((item) => (
            <Link
              href={item?.link}
              key={item?.link}
              className={`flex hover:font-medium   md:h-6 h-10  max-w-28
                    justify-center items-center px-2  text-gray-700 hover:underline underline-offset-4 decoration-[1px] 
                    hover:text-gray-950  duration-200 last:border-r-0 ${pathName === item?.link && "text-gray-950 underline  "
                }`}
            >
              {item.title}
            </Link>
          ))}
          {userInfo && userInfo?.name && (
            <button
              onClick={()=>logout()}
              className=" hover:font-medium  md:w-20 md:h-6 h-10 justify-center items-center ml-4   max-w-12
               text-gray-500 hover:underline underline-offset-4 decoration-[1px] hover:text-red-600
                md:border-r-[2px] border-r-gray-300 duration-200 last:border-r-0"
            >
              Logout
            </button>
          )}
        </div>
        <div
          className={`p-2 transition-all duration-500 bg-white w-[250px]  md:w-[400px]  mr-1 lg:hidden  "
            }`}
        >
          <SearchComponent
            className={`text-primeColor  ml-1 flex w-full  text-center items-center justify-center   h-10  gap-2  outline-none  border border-t-0 border-x-0 border-b-black px-1 text-sm `}
          />
          
        </div>
        {userInfo && userInfo?.name && (
            <button
              onClick={()=>logout()}
              className=" lg:hidden hover:font-medium text-[12px] md:text-base  w-7 md:w-20 md:h-6 h-10 justify-center items-center   
               text-gray-500 hover:underline underline-offset-4 decoration-[1px] hover:text-red-600
                md:border-r-[2px] border-r-gray-300 duration-200 last:border-r-0" 
            >
              Logout
            </button>
          )}
        
      </nav>
    </div>
  );
}

export default Navbar;
