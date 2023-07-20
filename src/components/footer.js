import React from "react";

const footer = () => {
  return (
    <div>
      {/* <!-- footer --> */}
      <div className="h-60 bg-gray-900 flex justify-center text-white items-center mb-6">
        {/* <!-- line1 --> */}
        <ul className="mr-14 text-sm ">
          <li className="mb-4">Shop All</li>
          <li className="mb-4">About</li>
          <li className="mb-4">Contact</li>
          <li>Stock Lists</li>
        </ul>
        {/* <!-- line2 --> */}
        <ul className="mr-14 text-sm ">
          <li className="mb-4">FAQ</li>
          <li className="mb-4">Shipping & Returns</li>
          <li className="mb-4">Store Policy</li>
          <li>Payment Methods</li>
        </ul>
        {/* <!-- line3 --> */}
        <ul className="mr-14 text-sm ">
          <li className="mb-4">Instagram</li>
          <li className="mb-4">Pinterest</li>
          <li className="mb-4">Facebook</li>
          <li>Twitter</li>
        </ul>
        {/* <!-- line4 --> */}
        <div className="flex flex-col">
          <p className="font-medium">Join our mailing list</p>
          <p className="mb-4 text-xs font-thin">and get 10% off</p>
          <button className="pr-4 pl-4 text-xs pt-2 pb-2 border-2 border-white">
            Enter your email here*
          </button>
          <button className="mt-2 pr-4 pl-4  text-xs pt-2 pb-2 border-2 bg-orange-600 border-orange-600">
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

export default footer;
