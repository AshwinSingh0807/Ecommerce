function App() {
  return (
    <div className="mt-10 ml-24 mr-24 xl:mt-8 lg:mt-8 lg:ml-2 lg:mr-2 sm:mt-1 sm:ml-0 sm:mr-0">
      {/* <!-- taskbar --> */}
      <div className="flex items-center align-center">
        {/* <!-- left icons -->
            <!-- logo --> */}
        <div className="flex items-center p-2 bg-black h-8 sm:p-1 sm:h-6">
          <img
            className="w-12 h-4 sm:w-10 sm:h-3"
            src="https://www.impromelbourne.com.au/assets/img/2018/2018%20Corporate/logos/nous.png"
            alt="file not uploaded"
          ></img>
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
            <ul className="flex items-center mr-4 sm:mr-1 lg:mr-1">
              <li className="mr-4 lg:mr-3 sm:mr-1 sm:text-xs">Shop All</li>
              <li className="mr-4 lg:mr-3 sm:mr-1 sm:text-xs">Women</li>
              <li className="mr-4 lg:mr-3 sm:mr-1 sm:text-xs">Men</li>
              <li className="mr-4 lg:mr-3 sm:mr-1 sm:text-xs">Sale</li>
              <li className="mr-4 lg:mr-3 sm:mr-1 sm:text-xs">About</li>
              <li className="mr-4 lg:mr-3 sm:mr-1 sm:text-xs">Contact</li>
            </ul>
          </div>
          {/* <!-- login --> */}
          <div className="flex items-center">
            <img
              className="w-5 mr-2 lg:mr-1 sm:mr-1 sm:w-3"
              src="https://as2.ftcdn.net/v2/jpg/04/92/10/53/1000_F_492105322_ipyji3NMgNKtu19bTxSeIco4aYkJCX0z.jpg"
              alt="img not available"
            ></img>
            <li className="list-none mr-2 sm:mr-1 sm:text-xs">LogIn</li>
          </div>
          {/* <!-- cart --> */}
          <img
            className="w-6 h-6 lg:w-5 lg:mt-[2px] lg:h-5 sm:h-3 sm:w-3"
            src="https://toppng.com/uploads/preview/shopping-cart-png-image-shopping-cart-icon-sv-11562865326ta92uix1ak.png"
            alt=" not available"
          ></img>
        </div>
      </div>

      {/* <!-- advertisement section --> */}
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
            <li className="mb-2 lg:mb-3 ">
              <img
                className="w-6 h-6 lg:w-4 lg:h-4"
                src="https://www.citypng.com/public/uploads/preview/-11594987359wsqhsnkcge.png"
                alt="no img"
              ></img>
            </li>
            <li className="mb-2 lg:mb-3 ">
              <img
                className="w-6 h-6 lg:w-4 lg:h-4"
                src="https://cdn-icons-png.flaticon.com/512/1400/1400829.png"
                alt="no img"
              ></img>
            </li>
            <li className="mb-2 lg:mb-3 ">
              <img
                className="w-6 h-6 lg:w-4 lg:h-4"
                src="https://simg.nicepng.com/png/small/2-28328_twitter-png-clipart-twitter-logo-png-black.png"
                alt="no img"
              ></img>
            </li>
            <li className="mb-2 lg:mb-3 ">
              <img
                className="w-6 h-6 lg:w-4 lg:h-4"
                src="https://cdn.icon-icons.com/icons2/2428/PNG/512/telegram_black_logo_icon_147073.png"
                alt="no img"
              ></img>
            </li>
          </ul>
        </div>
        {/* <!-- image section --> */}
        <div className="grid grid-cols-7 gap-2 mt-2 xl:h-80 container h-fit  lg:h-72 pb-6 xl:pb-0">
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

      {/* <!-- body --> */}
      {/* <!-- heading --> */}
      <div className="uppercase pb-4 relative container font-bold text-5xl flex flex-col justify-center items-center xl:pt-0 xl:pb-0">
        <p className="relative top-3 sm:top-[9px] sm:text-2xl">new arrivals</p>
        <div className="h-2 text-center sm:w-[180px] w-[360px] sm:h-1 bg-orange-600"></div>
      </div>
      <div className="mt-12 mb-12 grid grid-cols-5 gap-4 sm:grid-cols-3 sm:gap-2 sm:mt-6 sm:mb-6 lg:grid-cols-4 lg:gap-4 lg:pl-2 lg:pr-2 ">
        {/* <!-- products --> */}
        <div className="m-1">
          {/* image container */}
          <img
            className="max-h-80 mt-2 mb-1"
            src="https://64.media.tumblr.com/b3d74b0b77a64d4e9aa9a2a68b76a88d/5bbff0fa690c6a16-cd/s1280x1920/8ad9b984be6f0b8c040c52c90eadb9ac72dcdd9a.jpg"
            alt="not found"
          ></img>
          {/* item details */}
          <h4>I'm a product</h4>
          <h4 className=" mt-0 text-orange-600 text-sm">$25.00</h4>``
        </div>
        <div className="m-1">
          {/* image container */}
          <img
            className="max-h-80 mt-2 mb-1"
            src="https://64.media.tumblr.com/b3d74b0b77a64d4e9aa9a2a68b76a88d/5bbff0fa690c6a16-cd/s1280x1920/8ad9b984be6f0b8c040c52c90eadb9ac72dcdd9a.jpg"
            alt="not found"
          ></img>
          {/* item details */}
          <h4>I'm a product</h4>
          <h4 className=" mt-0 text-orange-600 text-sm">$25.00</h4>
        </div>
        <div className="m-1">
          {/* image container */}
          <img
            className="max-h-80 mt-2 mb-1"
            src="https://64.media.tumblr.com/b3d74b0b77a64d4e9aa9a2a68b76a88d/5bbff0fa690c6a16-cd/s1280x1920/8ad9b984be6f0b8c040c52c90eadb9ac72dcdd9a.jpg"
            alt="not found"
          ></img>
          {/* item details */}
          <h4>I'm a product</h4>
          <h4 className=" mt-0 text-orange-600 text-sm">$25.00</h4>
        </div>
        <div className="m-1">
          {/* image container */}
          <img
            className="max-h-80 mt-2 mb-1"
            src="https://64.media.tumblr.com/b3d74b0b77a64d4e9aa9a2a68b76a88d/5bbff0fa690c6a16-cd/s1280x1920/8ad9b984be6f0b8c040c52c90eadb9ac72dcdd9a.jpg"
            alt="not found"
          ></img>
          {/* item details */}
          <h4>I'm a product</h4>
          <h4 className=" mt-0 text-orange-600 text-sm">$25.00</h4>
        </div>
        <div className="m-1">
          {/* image container */}
          <img
            className="max-h-80 mt-2 mb-1"
            src="https://64.media.tumblr.com/b3d74b0b77a64d4e9aa9a2a68b76a88d/5bbff0fa690c6a16-cd/s1280x1920/8ad9b984be6f0b8c040c52c90eadb9ac72dcdd9a.jpg"
            alt="not found"
          ></img>
          {/* item details */}
          <h4>I'm a product</h4>
          <h4 className=" mt-0 text-orange-600 text-sm">$25.00</h4>
        </div>
        <div className="m-1">
          {/* image container */}
          <img
            className="max-h-80 mt-2 mb-1"
            src="https://64.media.tumblr.com/b3d74b0b77a64d4e9aa9a2a68b76a88d/5bbff0fa690c6a16-cd/s1280x1920/8ad9b984be6f0b8c040c52c90eadb9ac72dcdd9a.jpg"
            alt="not found"
          ></img>
          {/* item details */}
          <h4>I'm a product</h4>
          <h4 className=" mt-0 text-orange-600 text-sm">$25.00</h4>
        </div>
        <div className="m-1">
          {/* image container */}
          <img
            className="max-h-80 mt-2 mb-1"
            src="https://64.media.tumblr.com/b3d74b0b77a64d4e9aa9a2a68b76a88d/5bbff0fa690c6a16-cd/s1280x1920/8ad9b984be6f0b8c040c52c90eadb9ac72dcdd9a.jpg"
            alt="not found"
          ></img>
          {/* item details */}
          <h4>I'm a product</h4>
          <h4 className=" mt-0 text-orange-600 text-sm">$25.00</h4>
        </div>
        <div className="m-1">
          {/* image container */}
          <img
            className="max-h-80 mt-2 mb-1"
            src="https://64.media.tumblr.com/b3d74b0b77a64d4e9aa9a2a68b76a88d/5bbff0fa690c6a16-cd/s1280x1920/8ad9b984be6f0b8c040c52c90eadb9ac72dcdd9a.jpg"
            alt="not found"
          ></img>
          {/* item details */}
          <h4>I'm a product</h4>
          <h4 className=" mt-0 text-orange-600 text-sm">$25.00</h4>
        </div>
        <div className="m-1">
          {/* image container */}
          <img
            className="max-h-80 mt-2 mb-1"
            src="https://64.media.tumblr.com/b3d74b0b77a64d4e9aa9a2a68b76a88d/5bbff0fa690c6a16-cd/s1280x1920/8ad9b984be6f0b8c040c52c90eadb9ac72dcdd9a.jpg"
            alt="not found"
          ></img>
          {/* item details */}
          <h4>I'm a product</h4>
          <h4 className=" mt-0 text-orange-600 text-sm">$25.00</h4>
        </div>
        <div className="m-1">
          {/* image container */}
          <img
            className="max-h-80 mt-2 mb-1"
            src="https://64.media.tumblr.com/b3d74b0b77a64d4e9aa9a2a68b76a88d/5bbff0fa690c6a16-cd/s1280x1920/8ad9b984be6f0b8c040c52c90eadb9ac72dcdd9a.jpg"
            alt="not found"
          ></img>
          {/* item details */}
          <h4>I'm a product</h4>
          <h4 className=" mt-0 text-orange-600 text-sm">$25.00</h4>
        </div>
        <div className="m-1">
          {/* image container */}
          <img
            className="max-h-80 mt-2 mb-1"
            src="https://64.media.tumblr.com/b3d74b0b77a64d4e9aa9a2a68b76a88d/5bbff0fa690c6a16-cd/s1280x1920/8ad9b984be6f0b8c040c52c90eadb9ac72dcdd9a.jpg"
            alt="not found"
          ></img>
          {/* item details */}
          <h4>I'm a product</h4>
          <h4 className=" mt-0 text-orange-600 text-sm">$25.00</h4>
        </div>
        <div className="m-1">
          {/* image container */}
          <img
            className="max-h-80 mt-2 mb-1"
            src="https://64.media.tumblr.com/b3d74b0b77a64d4e9aa9a2a68b76a88d/5bbff0fa690c6a16-cd/s1280x1920/8ad9b984be6f0b8c040c52c90eadb9ac72dcdd9a.jpg"
            alt="not found"
          ></img>
          {/* item details */}
          <h4>I'm a product</h4>
          <h4 className=" mt-0 text-orange-600 text-sm">$25.00</h4>
        </div>
        <div className="m-1">
          {/* image container */}
          <img
            className="max-h-80 mt-2 mb-1"
            src="https://64.media.tumblr.com/b3d74b0b77a64d4e9aa9a2a68b76a88d/5bbff0fa690c6a16-cd/s1280x1920/8ad9b984be6f0b8c040c52c90eadb9ac72dcdd9a.jpg"
            alt="not found"
          ></img>
          {/* item details */}
          <h4>I'm a product</h4>
          <h4 className=" mt-0 text-orange-600 text-sm">$25.00</h4>
        </div>
        <div className="m-1">
          {/* image container */}
          <img
            className="max-h-80 mt-2 mb-1"
            src="https://64.media.tumblr.com/b3d74b0b77a64d4e9aa9a2a68b76a88d/5bbff0fa690c6a16-cd/s1280x1920/8ad9b984be6f0b8c040c52c90eadb9ac72dcdd9a.jpg"
            alt="not found"
          ></img>
          {/* item details */}
          <h4>I'm a product</h4>
          <h4 className=" mt-0 text-orange-600 text-sm">$25.00</h4>
        </div>
        <div className="m-1">
          {/* image container */}
          <img
            className="max-h-80 mt-2 mb-1"
            src="https://64.media.tumblr.com/b3d74b0b77a64d4e9aa9a2a68b76a88d/5bbff0fa690c6a16-cd/s1280x1920/8ad9b984be6f0b8c040c52c90eadb9ac72dcdd9a.jpg"
            alt="not found"
          ></img>
          {/* item details */}
          <h4>I'm a product</h4>
          <h4 className=" mt-0 text-orange-600 text-sm">$25.00</h4>
        </div>
      </div>
      {/* <!-- button --> */}
      <div className="flex justify-center items-center mb-10 sm:mb-4 sm:text-sm ">
        <button className="border-2 border-orange-600 text-orange-600 pr-4 pl-4 mr-1">
          Shop All
        </button>
        <button className="bg-orange-600 h-7 w-10 sm:h-6 sm:w-6 text-white ">
          <p>&gt;</p>
        </button>
      </div>

      {/* <!-- footer --> */}
      <div className="h-60 bg-gray-900 flex justify-center sm:text-xs sm:h-40 text-white items-center mb-6">
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
}

export default App;
