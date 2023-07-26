import React from "react";

const Footer = () => {
  return (
    <div>
      {/* <!-- footer --> */}
      <div className="h-60 bg-gray-900 flex justify-center sm:text-xs sm:h-40 mt-2 text-white items-center mb-6">
        {/* <!-- line1 --> */}
        <ul className="mr-14 text-sm sm:font-extralight sm:text-xs sm:mr-2">
          <li className="mb-4 sm:mb-2">Shop All</li>
          <li className="mb-4 sm:mb-2">About</li>
          <li className="mb-4 sm:mb-2">Contact</li>
          <li>Stock Lists</li>
        </ul>
        {/* <!-- line2 --> */}
        <ul className="mr-14 text-sm sm:font-extralight sm:text-xs sm:mr-2 ">
          <li className="mb-4 sm:mb-2">FAQ</li>
          <li className="mb-4 sm:mb-2">Shipping & Returns</li>
          <li className="mb-4 sm:mb-2">Store Policy</li>
          <li>Payment Methods</li>
        </ul>
        {/* <!-- line3 --> */}
        <ul className="mr-14 text-sm sm:text-xs sm:font-extralight sm:mr-2 ">
          <li className="mb-4 sm:mb-2">Instagram</li>
          <li className="mb-4 sm:mb-2">Pinterest</li>
          <li className="mb-4 sm:mb-2">Facebook</li>
          <li>Twitter</li>
        </ul>
        {/* <!-- line4 --> */}
        <div className="flex flex-col sm:text-xs">
          <p className="font-medium sm:font-extralight">
            Join our mailing list
          </p>
          <p className="mb-4 text-xs font-thin sm:mb-1">and get 10% off</p>
          <button className="pr-4 pl-4 text-xs pt-2 pb-2 border-2 border-white sm:mt-1 sm:pr-1 sm:pl-1 sm:pt-1 sm:pb-1  sm:border">
            Enter your email here
          </button>
          <button className="mt-2 pr-4 pl-4  text-xs pt-2 pb-2 border-2 bg-orange-600 border-orange-600 sm:mt-1 sm:pr-0 sm:pl-0 sm:pt-0 sm:pb-0 ">
            Subscribe Now
          </button>
        </div>
      </div>
      <p className="font-light text-xs mb-10 flex">
        &copy; 2035 by NOUS. Powered and secured by&nbsp; <u>Wix</u>
      </p>
    </div>
  );
};

export default Footer;
