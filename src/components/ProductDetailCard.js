import React from "react";

const ProductDetailCard = ({LetsChat}) => {
  return (
    <div className="grid w-1/2 mt-12 grid-cols-2 gap-6 sm:w-full sm:mr-1 sm:ml-1">
      <div>
        <img
          className="w-96 max-h-[110 px] border-2"
          src="https://adro.in/cdn/shop/products/H22-M-GOD-CH-F.jpg?v=1667277700&width=480"
          alt="no img"
        ></img>
        <div className="m-2 flex items-center">
          <img
            className="w-8 max-h-[10 px] mr-2 border-2"
            src="https://adro.in/cdn/shop/products/H22-M-GOD-CH-F.jpg?v=1667277700&width=480"
            alt="no img"
          ></img>
          <img
            className="w-8 max-h-[10 px] mr-2 border-2"
            src="https://adro.in/cdn/shop/products/H22-M-GOD-CH-F.jpg?v=1667277700&width=480"
            alt="no img"
          ></img>
          <img
            className="w-8 max-h-[10 px] mr-2 border-2"
            src="https://adro.in/cdn/shop/products/H22-M-GOD-CH-F.jpg?v=1667277700&width=480"
            alt="no img"
          ></img>
        </div>
        <p className="text-xs text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been.
        </p>
      </div>
      <div>
        <p className="text-2xl font-medium lg:text-lg sm:text-lg sm:text-gray-800">
          I'm a product
        </p>
        <p className="text-xs font-medium text-gray-600 mt-1">SUK: 001</p>
        <div className="flex items-center mt-2 sm:mt-1">
          <p className="line-through text-orange-400 font-medium">$42.00</p>
          <p className="text-orange-400 font-medium">&nbsp;$39.00</p>
        </div>
        <p className="mt-2 text-sm font-medium text-gray-600 lg:mt-1 sm:mt-1">
          Color
        </p>
        <div className="mt-1 flex justify-start sm:mt-0">
          <p className="w-4 border border-gray-600 mr-2 h-4 bg-red-500 rounded-full"></p>
          <p className="w-4 border border-gray-600 h-4 mr-2 bg-blue-500 rounded-full"></p>
          <p className="w-4 border border-gray-600 h-4 bg-white-500 rounded-full"></p>
        </div>
        <p className="mt-2 text-sm font-medium text-gray-600 sm:mt-1 ">Size</p>
        <button
          className="w-full flex justify-between group border lg:mt-1 h-10 mt-2 p-2 sm:mt-1 sm:text-xs sm:p-1 items-center sm:h-6 text-gray-500"
          type="button"
        >
          <p>Select</p>
          <p className="font-medium pr-2 text-gray-400">v</p>
        </button>
        <p className="mt-2 text-sm font-medium text-gray-600 sm:mt-1">
          Quantity
        </p>
        <button
          className="w-1/5 flex justify-center group border lg:mt-1 h-10 mt-2 p-2 text-gray-500 sm:mt-1 sm:h-6 sm:p-1 items-center"
          type="button"
        >
          <p>1</p>
        </button>
        <div className="flex justify-center items-center">
          <button
            className="w-full border h-10 mt-4 p-2 lg:p-0 lg:mt-1 sm:p-0 sm:mt-1 sm:text-xs sm:h-7 bg-orange-500 text-gray-100"
            type="button"
          >
            Add to cart
          </button>
          <button
            className="border items-center flex border-orange-400 lg:mt-1 mt-4 h-10 ml-2 sm:ml-1 p-2 sm:h-7"
            type="button"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsRe4_CzXZqIHhKbg0JfjRmF4cblI9xhdIHg&usqp=CAU"
              alt="not found"
              className="w-5 h-4"
            ></img>
          </button>
        </div>

        <button
          className="w-full border h-10 mt-2 p-2 bg-black lg:p-0 lg:mt-1 sm:text-xs sm:h-7 sm: text-gray-100"
          type="button"
        >
          Buy now
        </button>
        {LetsChat && <button className="relative bottom-10 -right-[400px] lg:-right-[250px]  sm:hidden border border-black bg-black text-white pl-6 pr-6 pt-2 pb-2">
          Let's Chat!
        </button>}
        <div className=" mt-0 flex justify-between items-center lg:mt-2 sm:mt-2 sm:text-sm">
          <p className="uppercase font-semibold text-sm text-gray-600 ">
            Product info
          </p>
          <p className="font-semibold">-</p>
        </div>
        <p className="text-xs text-gray-600 mt-2 pb-4 border-b-2 lg:mt-0 lg:pb-2 border-gray-200">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to
        </p>
        <div className="uppercase font-semibold flex justify-between border-b-2 pb-4 lg:pb-2 sm:pb-2  border-gray-200 items-center text-sm mt-4 lg:mt-0 sm:mt-1 sm:font-medium sm:text-xs  text-gray-600">
          <p>return & refund policy</p>
          <p className="">+</p>
        </div>
        <div className="uppercase font-semibold flex justify-between sm:mt-1 sm:font-medium sm:text-xs sm:pb-2 pb-4 lg:pb-2 items-center text-sm mt-4 lg:mt-0 text-gray-600">
          <p>Shipping Info</p>
          <p className="">+</p>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png"
          alt="no img"
          className="w-4 h-4 mb-12 lg:mb-4 sm:mb-2"
        ></img>
      </div>
    </div>
  );
};

export default ProductDetailCard;
