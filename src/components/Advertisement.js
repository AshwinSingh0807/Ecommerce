import React from "react";
import Socials from "./Socials";

const Advertisement = () => {
  return (
    <div>
      {/* <!-- text section and socials --> */}
      <div className="flex flex-col items-center justify-center text-white bg-orange-600 mt-2 h-60 sm:max-h-36 lg:h-48">
        <h1 className="text-4xl font-medium lg:text-2xl sm:text-xl ">
          FREE SHIPPING
        </h1>
        <h2 className="mt-4 mb-4 font-medium sm:mt-2 sm:mb-2 lg:text-sm sm:text-xs">
          ON ORDER OVER $50 - USE COUPON CODE OVER50
        </h2>
        <div className="flex items-center">
          <div className="border-2 font-light text-sm pt-1 pl-10 pr-10 pb-1 m-2 sm:text-xs sm:pt-1 sm:pl-1 sm:pr-1 sm:pb-1 lg:pl-6 lg:pr-6 ">
            Shop Women
          </div>
          <div className="border-2 font-light text-sm pt-1 pl-10 pr-10 pb-1 m-2 sm:text-xs sm:pt-1 sm:pl-1 sm:pr-1 sm:pb-1 lg:pl-6 lg:pr-6">
            Shop Men
          </div>
          <div className="border-2 font-light text-sm pt-1 pl-10 pr-10 pb-1 m-2 sm:text-xs sm:pt-1 sm:pl-1 sm:pr-1 sm:pb-1 lg:pl-6 lg:pr-6">
            Shop Sale
          </div>
        </div>
        {/* socials */}
        <ul className="absolute  top-28 right-[50px] text-black sm:hidden ">
       <Socials/>
        </ul>
      </div>
      {/* <!-- image section --> */}
      <div className="grid grid-cols-7 gap-2 mt-2 xl:h-80 sm:h-auto container h-fit  lg:h-72 pb-6 xl:pb-0">
        <div className="col-span-2  ">
          <img
            src="https://64.media.tumblr.com/b3d74b0b77a64d4e9aa9a2a68b76a88d/5bbff0fa690c6a16-cd/s1280x1920/8ad9b984be6f0b8c040c52c90eadb9ac72dcdd9a.jpg"
            alt="not available"
            className="max-h-[340px]  xl:max-h-[282px] w-full object-cover"
          ></img>
        </div>
        <div className="col-span-2 ">
          <img
            src="https://64.media.tumblr.com/b3d74b0b77a64d4e9aa9a2a68b76a88d/5bbff0fa690c6a16-cd/s1280x1920/8ad9b984be6f0b8c040c52c90eadb9ac72dcdd9a.jpg"
            alt="not available"
            className="max-h-[340px] xl:max-h-[282px] lg:max-h-[282px ] w-full object-cover"
          ></img>
        </div>
        <div className="col-span-3 ">
          <img
            src="https://www.byrdie.com/thmb/SyEnpHMlTlX5FgKdoIkMzc5UgSY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/fashionbloggersprimary-2210aaad71a0454a899fa4345bef529f.jpg"
            alt="not available"
            className="max-h-[340px] xl:max-h-[282px] object-cover w-full"
          ></img>
          <button className="absolute xl:top-[500px] xl:h-12 lg:top-[480px] lg:h-10 lg:pl-4 lg:pr-4 lg:pt-1 lg:pb-1 lg:text-sm lg:right-[10px] bottom-36 right-[50px] border  border-black bg-black text-white pl-6 pr-6 pt-2 pb-2 sm:h-6 sm:pr-2 sm:pl-2 sm:top-[255px] sm:text-xs ">
            Let's Chat!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
