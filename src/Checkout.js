import React from "react";

const Checkout = () => {
  return (
    <div class="mt-10 ml-24 mr-24">
      {/* navbar */}
      <div class="flex items-center align-center">
        {/* <!-- left icons -->
    <!-- logo --> */}
        <div class="flex items-center p-2 bg-black h-8">
          <img
            class="w-12 h-4 "
            src="https://www.impromelbourne.com.au/assets/img/2018/2018%20Corporate/logos/nous.png"
            alt="file not uploaded"
          ></img>
        </div>
        {/* <!-- search --> */}
        <div class="flex items-center  ">
          <img
            class="w-4 ml-2 mr-1 h-4"
            src="https://cdn-icons-png.flaticon.com/512/149/149852.png"
            alt=""
          ></img>
          <input type="text" placeholder="Search.."></input>
        </div>
        {/* <!-- right icons --> */}
        <div class="flex absolute right-24">
          <div>
            {/* <!-- list --> */}
            <ul class="flex items-center mr-4">
              <li class="mr-4">Shop All</li>
              <li class="mr-4">Women</li>
              <li class="mr-4">Men</li>
              <li class="mr-4">Sale</li>
              <li class="mr-4">About</li>
              <li class="mr-4">Contact</li>
            </ul>
          </div>
          {/* <!-- login --> */}
          <div class="flex items-center">
            <img
              class="w-5 mr-2"
              src="https://as2.ftcdn.net/v2/jpg/04/92/10/53/1000_F_492105322_ipyji3NMgNKtu19bTxSeIco4aYkJCX0z.jpg"
              alt="img not available"
            ></img>
            <li class="list-none mr-2">Log In</li>
          </div>
          {/* <!-- cart --> */}
          <img
            class="w-6 h-6"
            src="https://toppng.com/uploads/preview/shopping-cart-png-image-shopping-cart-icon-sv-11562865326ta92uix1ak.png"
            alt=" not available"
          ></img>
        </div>
      </div>

      {/* header */}
      <div className=" flex justify-center pt-2 pb-4 mt-12 mb-12 ">
        <div className="grid grid-cols-3 gap-10">
          <div className="col-span-2  ">
            <h3 className="border-b-2 border-gray-200 pb-3">My cart</h3>
            <div className=" flex justify-between border-b-2 border-gray-200 pb-6 pt-6">
              {/* left side of checkout box */}
              <div className="flex">
                <img
                  className="max-h-32 "
                  src="https://www.next.es/nxtcms/resource/blob/5601296/bb6d629027a2a0fff625d8e5e24204fc/denim-data.jpg"
                  alt="not found"
                ></img>
                <div className="flex flex-col ml-3">
                  <p className="text-base mb-2" >I'm a product</p>
                  <p className="text-sm font-semibold">$31.00</p>
                  <p className="text-xs font-semibold text-gray-400">Size: Medium</p>
                </div>
              </div>
              {/* right side of checkout box */}
              <div className="flex justify-between">
                {/* increment button */}
                <div className="flex border h-6 border-black justify-center items-center">
                  <button className="text-sm w-6 h-6" type="submit">
                    -
                  </button>
                  <p className="text-sm">1</p>
                  <button className="text-sm w-6 h-6" type="submit">
                    +
                  </button>
                </div>
                <p className="mr-4 ml-4">$31.00</p>
                <button className="w-4 font-bold text-sm h-4">X</button>
              </div>
            </div>
            <div className=" flex justify-between border-b-2 border-gray-200 pb-6 pt-6">
              {/* left side of checkout box */}
              <div className="flex">
                <img
                  className="max-h-32 "
                  src="https://www.next.es/nxtcms/resource/blob/5601296/bb6d629027a2a0fff625d8e5e24204fc/denim-data.jpg"
                  alt="not found"
                ></img>
                <div className="flex flex-col ml-3">
                  <p className="text-base mb-2" >I'm a product</p>
                  <p className="text-sm font-semibold">$31.00</p>
                  <p className="text-xs font-semibold text-gray-400">Size: Medium</p>
                </div>
              </div>
              {/* right side of checkout box */}
              <div className="flex justify-between">
                {/* increment button */}
                <div className="flex border h-6 border-black justify-center align-middle">
                  <button className="text-sm w-6 h-6" type="submit">
                    -
                  </button>
                  <p className="text-sm">1</p>
                  <button className="text-sm w-6 h-6" type="submit">
                    +
                  </button>
                </div>
                <p className="mr-4 ml-4">$31.00</p>
                <button className="w-4 font-bold text-sm h-4">X</button>
              </div>
            </div>
            {/* promo code and note */}
            <div className=" mt-6">
              <p className="mt-3 text-sm flex text-orange-500 ">
                <img className="w-4  h-3 mr-1 mt-1 bg-white" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJnaNbgSgZfO-eIHx1AFuMfaYc48MaJxKNhQ&usqp=CAU" alt="no img"></img>
                Enter a promo code.
              </p>
              <p className=" flex mt-3 text-sm text-orange-500">
                <img className="w-3 h-3 mt-1 mr-1 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHkkAJqhHsu0loKAU2lGgt5R8qnH0ab24xaw&usqp=CAU" alt="not present"></img>Add a note.</p>
            </div>
            <button className='relative bottom-0 left-[980px] border border-black bg-black text-white pl-6 pr-6 pt-2 pb-2'>Let's Chat!</button>
          </div>

          <div>
            <h3 className="border-b-2  w-64 border-gray-200 pb-3 ">
              Order summary
            </h3>
            <div>

            <div className="flex justify-between text-sm mt-6 ">
               <p>Subtotal</p>
               <p>$50.00</p>
              </div>
              <p className="underline text-sm mt-6 border-b-2 border-gray-200 pb-4">Estimate Shipping</p>
            </div>
            <div className="flex justify-between mt-3 mb-6">
              <p className="text-lg">Total</p>
              <p>$50.00</p>
            </div>
            <div className="flex flex-col align-middle">
              <button className="h-10 text-sm font-light mb-3 bg-orange-500 text-white">Checkout</button>
              <p className="flex align-middle text-sm font-semibold justify-center"><img className="h-5 w-5" src="https://static.vecteezy.com/system/resources/previews/000/581/808/original/lock-icon-vector-illustration.jpg" alt="no img"></img>Secure Checkout</p>
            </div>
          </div>
          
        </div>
        <ul className="absolute  top-28 right-[50px] text-black">
          <li className="mb-3">
            <img
              className="w-5 h-5"
              src="https://www.citypng.com/public/uploads/preview/-11594987359wsqhsnkcge.png"
              alt="no img"
            ></img>
          </li>
          <li className="mb-3">
            <img
              className="w-5 h-5"
              src="https://cdn-icons-png.flaticon.com/512/1400/1400829.png"
              alt="no img"
            ></img>
          </li>
          <li className="mb-3">
            <img
              className="w-5 h-5"
              src="https://simg.nicepng.com/png/small/2-28328_twitter-png-clipart-twitter-logo-png-black.png"
              alt="no img"
            ></img>
          </li>
          <li className="mb-3">
            <img
              className="w-5 h-5"
              src="https://cdn.icon-icons.com/icons2/2428/PNG/512/telegram_black_logo_icon_147073.png"
              alt="no img"
            ></img>
          </li>
        </ul>
      </div>

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
    </div>
  );
};

export default Checkout;
