function ProductList() {
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
      <div className="uppercase pt-2 pb-4 mt-12 font-bold text-5xl flex flex-col justify-center items-center">
        <p className="relative top-3 uppercase">Women</p>
        <div className="h-2 text-center  w-[200px] bg-orange-600"></div>
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
      <div className='mt-12 mb-12 grid grid-cols-4'>

            {/* <!-- products --> */}
            <div className='m-1 '>
            {/* image container */}
            <img className='max-h-80 mt-2 mb-1' src='https://www.next.es/nxtcms/resource/blob/5601296/bb6d629027a2a0fff625d8e5e24204fc/denim-data.jpg' alt='not found'></img>
            {/* item details */}
            <h4 mb-0>I'm a product</h4>
            <h4 className=' mt-0 text-orange-600 text-sm'>$25.00</h4>
            </div>
            <div className='m-1'>
            {/* image container */}
            <img className='max-h-80 mt-2 mb-1' src='https://www.next.es/nxtcms/resource/blob/5601296/bb6d629027a2a0fff625d8e5e24204fc/denim-data.jpg' alt='not found'></img>
            {/* item details */}
            <h4 mb-0>I'm a product</h4>
            <h4 className=' mt-0 text-orange-600 text-sm'>$25.00</h4>
            </div>
            <div className='m-1'>
            {/* image container */}
            <img className='max-h-80 mt-2 mb-1' src='https://www.next.es/nxtcms/resource/blob/5601296/bb6d629027a2a0fff625d8e5e24204fc/denim-data.jpg' alt='not found'></img>
            {/* item details */}
            <h4 mb-0>I'm a product</h4>
            <h4 className=' mt-0 text-orange-600 text-sm'>$25.00</h4>
            </div>
            <div className='m-1'>
            {/* image container */}
            <img className='max-h-80 mt-2 mb-1' src='https://www.next.es/nxtcms/resource/blob/5601296/bb6d629027a2a0fff625d8e5e24204fc/denim-data.jpg' alt='not found'></img>
            {/* item details */}
            <h4 mb-0>I'm a product</h4>
            <h4 className=' mt-0 text-orange-600 text-sm'>$25.00</h4>
      <button className='relative bottom-32 -right-[180px] border border-black bg-black text-white pl-6 pr-6 pt-2 pb-2'>Let's Chat!</button>
            </div>
            <div className='m-1'>
            {/* image container */}
            <img className='max-h-80 mt-2 mb-1' src='https://www.next.es/nxtcms/resource/blob/5601296/bb6d629027a2a0fff625d8e5e24204fc/denim-data.jpg' alt='not found'></img>
            {/* item details */}
            <h4 mb-0>I'm a product</h4>
            <h4 className=' mt-0 text-orange-600 text-sm'>$25.00</h4>
            </div>
            <div className='m-1'>
            {/* image container */}
            <img className='max-h-80 mt-2 mb-1' src='https://www.next.es/nxtcms/resource/blob/5601296/bb6d629027a2a0fff625d8e5e24204fc/denim-data.jpg' alt='not found'></img>
            {/* item details */}
            <h4 mb-0>I'm a product</h4>
            <h4 className=' mt-0 text-orange-600 text-sm'>$25.00</h4>
            </div>
            <div className='m-1'>
            {/* image container */}
            <img className='max-h-80 mt-2 mb-1' src='https://www.next.es/nxtcms/resource/blob/5601296/bb6d629027a2a0fff625d8e5e24204fc/denim-data.jpg' alt='not found'></img>
            {/* item details */}
            <h4 mb-0>I'm a product</h4>
            <h4 className=' mt-0 text-orange-600 text-sm'>$25.00</h4>
            </div>
            <div className='m-1'>
            {/* image container */}
            <img className='max-h-80 mt-2 mb-1' src='https://www.next.es/nxtcms/resource/blob/5601296/bb6d629027a2a0fff625d8e5e24204fc/denim-data.jpg' alt='not found'></img>
            {/* item details */}
            <h4 mb-0>I'm a product</h4>
            <h4 className=' mt-0 text-orange-600 text-sm'>$25.00</h4>
            </div>
            <div className='m-1'>
            {/* image container */}
            <img className='max-h-80 mt-2 mb-1' src='https://www.next.es/nxtcms/resource/blob/5601296/bb6d629027a2a0fff625d8e5e24204fc/denim-data.jpg' alt='not found'></img>
            {/* item details */}
            <h4 mb-0>I'm a product</h4>
            <h4 className=' mt-0 text-orange-600 text-sm'>$25.00</h4>
            </div>
            <div className='m-1'>
            {/* image container */}
            <img className='max-h-80 mt-2 mb-1' src='https://www.next.es/nxtcms/resource/blob/5601296/bb6d629027a2a0fff625d8e5e24204fc/denim-data.jpg' alt='not found'></img>
            {/* item details */}
            <h4 mb-0>I'm a product</h4>
            <h4 className=' mt-0 text-orange-600 text-sm'>$25.00</h4>
            </div>
            <div className='m-1'>
            {/* image container */}
            <img className='max-h-80 mt-2 mb-1' src='https://www.next.es/nxtcms/resource/blob/5601296/bb6d629027a2a0fff625d8e5e24204fc/denim-data.jpg' alt='not found'></img>
            {/* item details */}
            <h4 mb-0>I'm a product</h4>
            <h4 className=' mt-0 text-orange-600 text-sm'>$25.00</h4>
            </div>
            <div className='m-1'>
            {/* image container */}
            <img className='max-h-80 mt-2 mb-1' src='https://www.next.es/nxtcms/resource/blob/5601296/bb6d629027a2a0fff625d8e5e24204fc/denim-data.jpg' alt='not found'></img>
            {/* item details */}
            <h4 mb-0>I'm a product</h4>
            <h4 className=' mt-0 text-orange-600 text-sm'>$25.00</h4>
            </div>
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
}
export default ProductList;
