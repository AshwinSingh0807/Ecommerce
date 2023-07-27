import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Socials from "./components/Socials";
import CartCard from "./components/CartCard";

const Checkout = () => {
  return (
    <div className="mt-10 ml-24 mr-24 xl:mt-8 lg:mt-8 lg:ml-2 lg:mr-2 sm:mt-1 sm:ml-1 sm:mr-1">
      {/* navbar */}
      <Header />

      {/* header */}
      <div className=" flex justify-center sm:min-w-full pt-2 pb-4 mt-12 mb-12">
        <div className="grid grid-cols-6 gap-10 lg:flex lg:flex-col">
          <div className="col-span-4  ">
            <div>
              <h3 className="border-b-2 border-gray-200 pb-3 font-medium sm:pb-1">
                My cart
              </h3>

              <CartCard />
              <CartCard />

              {/* promo code and note */}
              <div className=" mt-6 sm:mt-2">
                <p className="mt-3 sm:mt-1 text-sm flex text-orange-500 ">
                  <img
                    className="w-4  h-3 mr-1 mt-1 bg-white"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJnaNbgSgZfO-eIHx1AFuMfaYc48MaJxKNhQ&usqp=CAU"
                    alt="no img"
                  ></img>
                  Enter a promo code.
                </p>
                <p className=" flex mt-3 sm:mt-1 text-sm text-orange-500">
                  <img
                    className="w-3 h-3 mt-1 mr-1 "
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHkkAJqhHsu0loKAU2lGgt5R8qnH0ab24xaw&usqp=CAU"
                    alt="not present"
                  ></img>
                  Add a note.
                </p>
              </div>
              <button className="relative bottom-0 left-[600px] border border-black bg-black text-white pl-6 pr-6 pt-2 pb-2 xl:left-[500px] lg:left-[300px] sm:hidden">
                Let's Chat!
              </button>
            </div>
          </div>

          <div className="">
           <h3 className="border-b-2 border-gray-200 pb-3 font-medium sm:pb-1 ">
              Order summary
            </h3>
            <div>
              <div className="flex justify-between text-sm mt-6 sm:mt-3 ">
                <p>Subtotal</p>
                <p>$50.00</p>
              </div>
              <p className="underline text-sm mt-6 border-b-2 sm:mt-2 border-gray-200 pb-4">
                Estimate Shipping
              </p>
            </div>
            <div className="flex justify-between sm:mt-2 sm:mb-3 mt-3 mb-6">
              <p className="text-lg">Total</p>
              <p>$50.00</p>
            </div>
            <div className="flex flex-col align-middle">
              <button className="h-10 text-sm font-light mb-3 bg-orange-500 text-white">
                Checkout
              </button>
              <p className="flex align-middle text-sm font-semibold justify-center">
                <img
                  className="h-5 w-5"
                  src="https://static.vecteezy.com/system/resources/previews/000/581/808/original/lock-icon-vector-illustration.jpg"
                  alt="no img"
                ></img>
                Secure Checkout
              </p>
            </div>
          </div>
        </div>
        <ul className="absolute sm:hidden top-28 right-[50px] text-black">
          <Socials />
        </ul>
      </div>

      <div>
        {/* <!-- footer --> */}
        <Footer />
      </div>
    </div>
  );
};

export default Checkout;
