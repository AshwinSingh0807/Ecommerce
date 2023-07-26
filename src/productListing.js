import React from "react";
import RelatedProducts from "./components/RelatedProducts";
import Footer from "./components/Footer";
import ProductDetailCard from "./components/ProductDetailCard";
import Header from "./components/Header";

const ProductListing = () => {
  return (
    <div className="mt-10 ml-24 mr-24 lg:mr-2 lg:ml-2 lg:mt-2 md:mr-1 md:ml-1 sm:mr-1 sm:ml-1">
      
      {/* // navbar */}
      <Header showCart={true}/>

      <div className=" flex justify-center  xl:justify-start">
        <div className="w-1/2 mt-12 flex justify-between sm:w-full">
          <p>Home/Women/I'm a product</p>
          <div className="flex items-center">
            <p>&lt; Prev | </p>
            <p>&nbsp; Next &gt;</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center xl:justify-start">
      <ProductDetailCard/> 
      </div>

    <RelatedProducts/>
      {/* <!-- footer --> */}

    <Footer/>
    </div>  );
};

export default ProductListing;
