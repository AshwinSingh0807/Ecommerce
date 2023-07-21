import React from "react";

const ProductDetails = () => {
  return (
    <div className="mt-10 ml-24 mr-24">
      {/* // navbar */}
      <div className="flex items-center ">
        {/* <!-- left icons -->
            <!-- logo --> */}
        <div className="flex items-center p-2 bg-black h-8">
          <img
            className="w-12 h-4 "
            src="https://www.impromelbourne.com.au/assets/img/2018/2018%20Corporate/logos/nous.png"
            alt="file not uploaded"
          ></img>
        </div>
        {/* <!-- search --> */}
        <div className="flex items-center  ">
          <img
            className="w-4 ml-2 mr-1 h-4"
            src="https://cdn-icons-png.flaticon.com/512/149/149852.png"
            alt=""
          ></img>
          <input type="text" placeholder="Search.."></input>
        </div>
        {/* <!-- right icons --> */}
        <div className="flex absolute right-24">
          <div>
            {/* <!-- list --> */}
            <ul className="flex items-center mr-4">
              <li className="mr-4">Shop All</li>
              <li className="mr-4">Women</li>
              <li className="mr-4">Men</li>
              <li className="mr-4">Sale</li>
              <li className="mr-4">About</li>
              <li className="mr-4">Contact</li>
            </ul>
          </div>
          {/* <!-- login --> */}
          <div className="flex items-center">
            <img
              className="w-5 mr-2"
              src="https://as2.ftcdn.net/v2/jpg/04/92/10/53/1000_F_492105322_ipyji3NMgNKtu19bTxSeIco4aYkJCX0z.jpg"
              alt="img not available"
            ></img>
            <li className="list-none mr-2">Log In</li>
          </div>
          {/* <!-- cart --> */}
          <img
            className="w-6 h-6"
            src="https://toppng.com/uploads/preview/shopping-cart-png-image-shopping-cart-icon-sv-11562865326ta92uix1ak.png"
            alt=" not available"
          ></img>
        </div>
      </div>
      <div className=" flex justify-center">
        <div className="w-1/2 mt-12 flex justify-between">
          <p>Home/Women/I'm a product</p>
          <div className="flex items-center">
            <p>&lt; Prev | </p>
            <p>&nbsp; Next &gt;</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid w-1/2 mt-12 grid-cols-2 gap-6 ">
          <div className="">
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
          <div className="">
            <p className="text-2xl font-medium">I'm a product</p>
            <p className="text-xs font-medium text-gray-600 mt-1">SUK: 001</p>
            <div className="flex items-center mt-2">
              <p className="line-through text-orange-400 font-medium">$42.00</p>
              <p className="text-orange-400 font-medium">&nbsp;$39.00</p>
            </div>
            <p className="mt-2 text-sm font-medium text-gray-600 ">Color</p>
            <div className="mt-1 flex justify-start">
              <p className="w-4 border border-gray-600 mr-2 h-4 bg-red-500 rounded-full"></p>
              <p className="w-4 border border-gray-600 h-4 mr-2 bg-blue-500 rounded-full"></p>
              <p className="w-4 border border-gray-600 h-4 bg-white-500 rounded-full"></p>
            </div>
            <p className="mt-2 text-sm font-medium text-gray-600 ">Size</p>
            <button
              className="w-full flex justify-between group border h-10 mt-2 p-2 text-gray-500"
              type="button"
            >
              <p>Select</p>
              <p className="font-medium pr-2 text-gray-400">v</p>
            </button>
            <p className="mt-2 text-sm font-medium text-gray-600 ">Quantity</p>
            <button
              className="w-1/5 flex justify-between group border h-10 mt-2 p-2 text-gray-500"
              type="button"
            >
              <p>1</p>
            </button>
            <div className="flex justify-center items-center">
              <button
                className="w-full border h-10 mt-4 p-2 bg-orange-500 text-gray-100"
                type="button"
              >
                Add to cart
              </button>
              <button
                className="border border-orange-400 mt-4 h-10 ml-2 p-2 "
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
              className="w-full border h-10 mt-2 p-2 bg-black text-gray-100"
              type="button"
            >
              Buy now
            </button>
            <button className='relative bottom-10 -right-[550px] border border-black bg-black text-white pl-6 pr-6 pt-2 pb-2'>Let's Chat!</button>
            <div className=" mt-4 flex justify-between items-center">
              <p className="uppercase font-semibold text-sm text-gray-600">
                Product info
              </p>
              <p className="font-semibold">-</p>
            </div>
            <p className="text-xs text-gray-600 mt-2 pb-4 border-b-2 border-gray-200">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to
            </p>
            <div className="uppercase font-semibold flex justify-between border-b-2 pb-4 border-gray-200 items-center text-sm mt-4 text-gray-600">
              <p>return & refund policy</p>
              <p className="">+</p>
            </div>
            <div className="uppercase font-semibold flex justify-between  pb-4 items-center text-sm mt-4 text-gray-600">
              <p>return & refund policy</p>
              <p className="">+</p>
            </div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png"
              alt="no img"
              className="w-4 h-4 mb-12"
            ></img>
          </div>
        </div>
        <ul className='absolute  top-32 right-[60px] text-black'>
                      <li className='mb-3'><img className='w-6 h-6' src='https://www.citypng.com/public/uploads/preview/-11594987359wsqhsnkcge.png' alt='no img'></img></li>
                      <li className='mb-3'><img className='w-6 h-6' src='https://cdn-icons-png.flaticon.com/512/1400/1400829.png' alt='no img'></img></li>
                      <li className='mb-3'><img className='w-6 h-6' src='https://simg.nicepng.com/png/small/2-28328_twitter-png-clipart-twitter-logo-png-black.png' alt='no img'></img></li>
                      <li className='mb-3'><img className='w-6 h-6' src='https://cdn.icon-icons.com/icons2/2428/PNG/512/telegram_black_logo_icon_147073.png' alt='no img'></img></li>
                    </ul>

      </div>
      <div className="flex flex-col items-center">
        <p className="text-3xl items-center mb-2 text-gray-800  font-medium">Related Products</p>
        <div className="flex justify-center items-center">
          <img
            src="https://static.thenounproject.com/png/627785-200.png"
            alt="no img yet"
            className="w-8 mr-2 h-8"
          ></img>
          <div className="mt-4 grid  grid-cols-4 gap-6">
            <img
              src="https://64.media.tumblr.com/b3d74b0b77a64d4e9aa9a2a68b76a88d/5bbff0fa690c6a16-cd/s1280x1920/8ad9b984be6f0b8c040c52c90eadb9ac72dcdd9a.jpg"
              alt="not available"
              className="max-h-48 w-full object-cover"
            ></img>
            <img
              src="https://64.media.tumblr.com/b3d74b0b77a64d4e9aa9a2a68b76a88d/5bbff0fa690c6a16-cd/s1280x1920/8ad9b984be6f0b8c040c52c90eadb9ac72dcdd9a.jpg"
              alt="not available"
              className="max-h-48 w-full object-cover"
            ></img>
            <img
              src="https://64.media.tumblr.com/b3d74b0b77a64d4e9aa9a2a68b76a88d/5bbff0fa690c6a16-cd/s1280x1920/8ad9b984be6f0b8c040c52c90eadb9ac72dcdd9a.jpg"
              alt="not available"
              className="max-h-48 w-full object-cover"
              ></img>
            <img
              src="https://64.media.tumblr.com/b3d74b0b77a64d4e9aa9a2a68b76a88d/5bbff0fa690c6a16-cd/s1280x1920/8ad9b984be6f0b8c040c52c90eadb9ac72dcdd9a.jpg"
              alt="not available"
              className="max-h-48 w-full object-cover"
            ></img>
          </div>
          <img
            src="https://cdn1.iconfinder.com/data/icons/mixed-17/16/icon_right_rounded-512.png"
            alt="no img yet"
            className="w-8 ml-2 h-8"
            ></img>
        </div>
            </div>
        {/* <!-- footer --> */}
        <div className='h-60 bg-gray-900 mt-12 flex justify-center text-white items-center mb-6'>
            {/* <!-- line1 --> */}
          <ul className='mr-14 text-sm '>
          <li className='mb-4'>Shop All</li>
          <li className='mb-4'>About</li>
          <li className='mb-4'>Contact</li>
          <li>Stock Lists</li>
          </ul>
            {/* <!-- line2 --> */}
            <ul className='mr-14 text-sm '>
          <li className='mb-4'>FAQ</li>
          <li className='mb-4'>Shipping & Returns</li>
          <li className='mb-4'>Store Policy</li>
          <li>Payment Methods</li>
          </ul>
            {/* <!-- line3 --> */}
            <ul className='mr-14 text-sm '>
          <li className='mb-4'>Instagram</li>
          <li className='mb-4'>Pinterest</li>
          <li className='mb-4'>Facebook</li>
          <li>Twitter</li>
          </ul>
            {/* <!-- line4 --> */}
            <div className='flex flex-col'>
              <p className='font-medium'>Join our mailing list</p>
              <p className='mb-4 text-xs font-thin'>and get 10% off</p>
              <button className='pr-4 pl-4 text-xs pt-2 pb-2 border-2 border-white'>Enter your email here*</button>
              <button className='mt-2 pr-4 pl-4  text-xs pt-2 pb-2 border-2 bg-orange-600 border-orange-600'>Subscribe Now</button>
            </div>
        </div>
        <p className='font-light text-xs mb-10 flex'>&copy; 2035 by NOUS. Powered and secured  by&nbsp; <u>Wix</u></p>
        
    </div>
  );
};

export default ProductDetails;

// path header
// product details - image, info
// related products - carousal
// footer
