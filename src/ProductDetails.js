import React from "react";
import Header from "./components/Header";
import ProductDetailCard from "./components/ProductDetailCard";
import Socials from "./components/Socials";
import Footer from "./components/Footer";
import RelatedProducts from "./components/RelatedProducts";
import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const location = useLocation();
  const {data} = location.state || {};
  console.log({data});
  return (
    <div className="mt-10 ml-24 mr-24 xl:mt-8 lg:mt-8 lg:ml-2 lg:mr-2 sm:mt-1 sm:ml-0 sm:mr-0">
      
      {/* // navbar */}
      <Header />
      
      <div className=" flex justify-center">
        <div className="w-1/2 mt-12 flex justify-between sm:w-full sm:mr-1 sm:ml-1 sm:text-sm text-gray-800 font-medium ">
          <p>Home/Women/I'm a product</p>
          <div className="flex items-center">
            <p>&lt; Prev | </p>
            <p>&nbsp; Next &gt;</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">

        {/* Product Detail Card */}
        <ProductDetailCard LetsChat={true}  />
        

        {/* Socials */}
        <ul className="absolute  top-32 right-[60px] text-black sm:hidden">
          <Socials />
        </ul>
      </div>

      {/* Related Products */}
      <RelatedProducts />

      {/* <!-- footer --> */}
      <Footer />

    </div>
  );
};

export default ProductDetails;
