import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import { CartContext } from "../utils/CartContext";
const Header = ({ showCart }) => {
  // const { cartState, dispatch } = useContext(CartContext);

  return (
    <div className="flex items-center">
      {/* <!-- left icons -->
        <!-- logo --> */}
      <div className="flex items-center p-2 bg-black h-8 sm:p-1 sm:h-6">
        <Link to="/">
          <img
            className="w-12 h-4 sm:w-10 sm:h-3"
            src="https://www.impromelbourne.com.au/assets/img/2018/2018%20Corporate/logos/nous.png"
            alt="file not uploaded"
          ></img>
        </Link>
      </div>
      {/* <!-- search --> */}
      <div className="flex items-center  ">
        <img
          className="w-4 ml-2 mr-1 h-4 sm:w-3 sm:h-3 sm:ml-1 sm:mr-0"
          src="https://cdn-icons-png.flaticon.com/512/149/149852.png"
          alt=""
        ></img>
        <input
          className="sm:text-xs sm:ml-1"
          type="text"
          placeholder="Search.."
        ></input>
      </div>
      {/* <!-- right icons --> */}
      <div className="flex absolute items-center right-24 sm:right-1  lg:right-2">
        <div className="sm:hidden">
          {/* <!-- list --> */}
          <ul className="flex items-center mr-4  lg:mr-1">
            <Link to="/ProductList">
              <li className="mr-4 lg:mr-3 ">Shop All</li>
            </Link>
            <Link to="/ProductList">
              <li className="mr-4 lg:mr-3 ">Women</li>
            </Link>
            <Link to="/ProductList">
              <li className="mr-4 lg:mr-3 ">Men</li>
            </Link>
            <Link to="/ProductList">
              <li className="mr-4 lg:mr-3 ">Sale</li>
            </Link>
            <li className="mr-4 lg:mr-3 ">About</li>
            {showCart && (
              <div className="w-64 h-[550px]  relative top-64 sm:hidden">
                <div className="flex justify-center h-14 text-white bg-black sm:h-10  items-center">
                  <p>Cart</p>
                </div>
                <div className="flex items-start border-b-2 border-gray-200 pb-4 m-4 sm:m-2">
                  <img
                    className="w-14 h-full border-2"
                    src="https://adro.in/cdn/shop/products/H22-M-GOD-CH-F.jpg?v=1667277700&width=480"
                    alt="no img"
                  ></img>
                  <div className="ml-1 ">
                    <p className="text-sm font-normal text-gray-600">
                      I'm a product
                    </p>
                    <p className="text-sm font-medium ">$39.00</p>
                    <div className="flex mt-1 border h-6 w-14 border-black justify-center items-center">
                      <button className="text-sm w-2 h-6" type="submit">
                        -
                      </button>
                      <p className="text-sm pr-2 pl-2 ">1</p>
                      <button className="text-sm w-2 h-6" type="submit">
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex items-start pb-4 m-4 sm:m-2">
                  <img
                    className="w-14 h-full border-2"
                    src="https://adro.in/cdn/shop/products/H22-M-GOD-CH-F.jpg?v=1667277700&width=480"
                    alt="no img"
                  ></img>
                  <div className="ml-1 ">
                    <p className="text-sm font-normal sm:text-xs text-gray-600">
                      I'm a product
                    </p>
                    <p className="text-sm font-medium sm:text-xs  ">$39.00</p>
                    <div className="flex mt-1 border h-6 w-14 border-black sm:text-xs justify-center items-center">
                      <button
                        className="text-sm sm:text-xs sm:w-1 sm:h-4 w-2 h-6"
                        type="submit"
                      >
                        -
                      </button>
                      <p className="text-sm pr-2 pl-2 ">1</p>
                      <button
                        className="text-sm sm:text-xs w-2 h-6"
                        type="submit"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="relative p-4 top-32 sm:top-14 ">
                  <p className="text-xl sm:text-sm">Subtotal</p>
                  <p className=" text-xl border-b-2 sm:text-sm border-gray-200 pb-2">
                    $90.00
                  </p>
                  <Link to={"/cart"}>
                    <button
                      className="w-full text-sm border font-medium h-10 mt-4 p-2 bg-orange-500 text-gray-100"
                      type="button"
                    >
                      View Cart
                    </button>
                  </Link>
                </div>
              </div>
            )}
            {!showCart && <li className="mr-4 lg:mr-3 ">Contact</li>}{" "}
          </ul>
        </div>
        {/* <!-- login --> */}
        {!showCart && (
          <div className="flex items-center">
            <Link to={"/login"}>
              <img
                className="w-5 mr-2 lg:mr-1 sm:mr-1 sm:w-3"
                src="https://as2.ftcdn.net/v2/jpg/04/92/10/53/1000_F_492105322_ipyji3NMgNKtu19bTxSeIco4aYkJCX0z.jpg"
                alt="img not available"
              ></img>
            </Link>
            <Link to={"/login"}>
              <li className="list-none mr-2 sm:mr-1 sm:text-xs">LogIn</li>
            </Link>
          </div>
        )}
        {/* <!-- cart --> */}
        {!showCart && (
          <div>
            <Link to={"/cart"}>
              <img
                className="w-6 h-6 lg:w-5 lg:mt-[2px] lg:h-5 sm:h-3 sm:w-3"
                src="https://toppng.com/uploads/preview/shopping-cart-png-image-shopping-cart-icon-sv-11562865326ta92uix1ak.png"
                alt=" not available"
              ></img>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
