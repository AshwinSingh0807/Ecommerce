import './App.css';

function App() {
  return (
      <div class="mt-10 ml-24 mr-24">
        {/* <!-- taskbar --> */}
        <div class="flex items-center align-center">
            {/* <!-- left icons -->
            <!-- logo --> */}
            <div class="flex items-center p-2 bg-black h-8">
                <img class="w-12 h-4 " src="https://www.impromelbourne.com.au/assets/img/2018/2018%20Corporate/logos/nous.png" alt="file not uploaded"></img>

            </div>
            {/* <!-- search --> */}
            <div class="flex items-center  ">
                <img class="w-4 ml-2 mr-1 h-4" src="https://cdn-icons-png.flaticon.com/512/149/149852.png" alt=""></img>
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
                    <img class="w-5 mr-2" src="https://as2.ftcdn.net/v2/jpg/04/92/10/53/1000_F_492105322_ipyji3NMgNKtu19bTxSeIco4aYkJCX0z.jpg" alt="img not available"></img>
                    <li class="list-none mr-2">Log In</li>
                </div>
                {/* <!-- cart --> */}
                <img class="w-6 h-6" src="https://toppng.com/uploads/preview/shopping-cart-png-image-shopping-cart-icon-sv-11562865326ta92uix1ak.png" alt=" not available"></img>
                <div>
                    {/* <!-- icons --> */}

                </div>
            </div>
        </div> 
    
        {/* <!-- advertisement section --> */}
        <div>
            {/* <!-- text section and socials --> */}
            <div class="flex flex-col items-center justify-center text-white bg-orange-600 mt-2 h-60">
                <h1 className='text-4xl font-medium'>FREE SHIPPING</h1>
                <h2 className='mt-4 mb-4 font-medium'>ON ORDER OVER $50 - USE COUPON CODE OVER50</h2>
                <div class="flex">
                    <div class="border-2 font-light text-sm pt-1 pl-10 pr-10 pb-1 m-2 ">
                        Shop Women
                    </div>
                    <div class="border-2 font-light text-sm pt-1 pl-10 pr-10 pb-1 m-2">
                        Shop Men
                    </div>
                    <div class="border-2 font-light text-sm pt-1 pl-10 pr-10 pb-1 m-2">
                        Shop Sale
                    </div>
                   
                </div>
                {/* socials */}
                <ul className='absolute  top-28 right-[50px] text-black'>
                      <li className='mb-2'><img className='w-6 h-6' src='https://www.citypng.com/public/uploads/preview/-11594987359wsqhsnkcge.png' alt='no img'></img></li>
                      <li className='mb-2'><img className='w-6 h-6' src='https://cdn-icons-png.flaticon.com/512/1400/1400829.png' alt='no img'></img></li>
                      <li className='mb-2'><img className='w-6 h-6' src='https://simg.nicepng.com/png/small/2-28328_twitter-png-clipart-twitter-logo-png-black.png' alt='no img'></img></li>
                      <li className='mb-2'><img className='w-6 h-6' src='https://cdn.icon-icons.com/icons2/2428/PNG/512/telegram_black_logo_icon_147073.png' alt='no img'></img></li>
                    </ul>
            </div>
            {/* <!-- image section --> */}
            <div className='grid grid-cols-7 gap-2 mt-2 h-96 pb-6'>

      
            <div className='col-span-2 '>
            <img src='https://64.media.tumblr.com/b3d74b0b77a64d4e9aa9a2a68b76a88d/5bbff0fa690c6a16-cd/s1280x1920/8ad9b984be6f0b8c040c52c90eadb9ac72dcdd9a.jpg' alt='not available' className='max-h-[340px] w-full object-cover'></img>
    
            </div>
            <div className='col-span-2 '>
              <img src='https://64.media.tumblr.com/b3d74b0b77a64d4e9aa9a2a68b76a88d/5bbff0fa690c6a16-cd/s1280x1920/8ad9b984be6f0b8c040c52c90eadb9ac72dcdd9a.jpg' alt='not available' className='max-h-[340px] w-full object-cover'></img>
            </div>
            <div className='col-span-3 '>
       
            <img src='https://www.byrdie.com/thmb/SyEnpHMlTlX5FgKdoIkMzc5UgSY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/fashionbloggersprimary-2210aaad71a0454a899fa4345bef529f.jpg' alt='not available' className='max-h-[340px] object-cover w-full'></img>
            <button className='relative bottom-28 -right-[480px] border border-black bg-black text-white pl-6 pr-6 pt-2 pb-2'>Let's Chat!</button>
            </div>
            </div>
        </div>
    
        {/* <!-- body --> */}
            {/* <!-- heading --> */}
            <div className='uppercase pt-2 pb-4 font-bold text-5xl flex flex-col justify-center items-center'>
              <p className='relative top-3'>new arrivals</p>
              <div className='h-2 text-center  w-[360px] bg-orange-600'></div>
              </div>
        <div className='mt-12 mb-12 grid grid-cols-4 gap-2'>
            {/* <!-- products --> */}
            <div>
            {/* image container */}
            <img className='max-h-80 mt-2 mb-1' src='https://64.media.tumblr.com/b3d74b0b77a64d4e9aa9a2a68b76a88d/5bbff0fa690c6a16-cd/s1280x1920/8ad9b984be6f0b8c040c52c90eadb9ac72dcdd9a.jpg' alt='not found'></img>
            {/* item details */}
            <h4 mb-0>I'm a product</h4>
            <h4 className=' mt-0 text-orange-600 text-sm'>$25.00</h4>
            </div>
            <div>
            {/* image container */}
            <img className='max-h-80 mt-2 mb-1' src='https://64.media.tumblr.com/b3d74b0b77a64d4e9aa9a2a68b76a88d/5bbff0fa690c6a16-cd/s1280x1920/8ad9b984be6f0b8c040c52c90eadb9ac72dcdd9a.jpg' alt='not found'></img>
            {/* item details */}
            <h4 mb-0>I'm a product</h4>
            <h4 className=' mt-0 text-orange-600 text-sm'>$25.00</h4>
            </div><div>
            {/* image container */}
            <img className='max-h-80 mt-2 mb-1' src='https://64.media.tumblr.com/b3d74b0b77a64d4e9aa9a2a68b76a88d/5bbff0fa690c6a16-cd/s1280x1920/8ad9b984be6f0b8c040c52c90eadb9ac72dcdd9a.jpg' alt='not found'></img>
            {/* item details */}
            <h4 mb-0>I'm a product</h4>
            <h4 className=' mt-0 text-orange-600 text-sm'>$25.00</h4>
            </div><div>
            {/* image container */}
            <img className='max-h-80 mt-2 mb-1' src='https://64.media.tumblr.com/b3d74b0b77a64d4e9aa9a2a68b76a88d/5bbff0fa690c6a16-cd/s1280x1920/8ad9b984be6f0b8c040c52c90eadb9ac72dcdd9a.jpg' alt='not found'></img>
            {/* item details */}
            <h4 mb-0>I'm a product</h4>
            <h4 className=' mt-0 text-orange-600 text-sm'>$25.00</h4>
            </div><div>
            {/* image container */}
            <img className='max-h-80 mt-2 mb-1' src='https://64.media.tumblr.com/b3d74b0b77a64d4e9aa9a2a68b76a88d/5bbff0fa690c6a16-cd/s1280x1920/8ad9b984be6f0b8c040c52c90eadb9ac72dcdd9a.jpg' alt='not found'></img>
            {/* item details */}
            <h4 mb-0>I'm a product</h4>
            <h4 className=' mt-0 text-orange-600 text-sm'>$25.00</h4>
            </div><div>
            {/* image container */}
            <img className='max-h-80 mt-2 mb-1' src='https://64.media.tumblr.com/b3d74b0b77a64d4e9aa9a2a68b76a88d/5bbff0fa690c6a16-cd/s1280x1920/8ad9b984be6f0b8c040c52c90eadb9ac72dcdd9a.jpg' alt='not found'></img>
            {/* item details */}
            <h4 mb-0>I'm a product</h4>
            <h4 className=' mt-0 text-orange-600 text-sm'>$25.00</h4>
            </div><div>
            {/* image container */}
            <img className='max-h-80 mt-2 mb-1' src='https://64.media.tumblr.com/b3d74b0b77a64d4e9aa9a2a68b76a88d/5bbff0fa690c6a16-cd/s1280x1920/8ad9b984be6f0b8c040c52c90eadb9ac72dcdd9a.jpg' alt='not found'></img>
            {/* item details */}
            <h4 mb-0>I'm a product</h4>
            <h4 className=' mt-0 text-orange-600 text-sm'>$25.00</h4>
            </div>
            <div>
            {/* image container */}
            <img className='max-h-80 mt-2 mb-1' src='https://64.media.tumblr.com/b3d74b0b77a64d4e9aa9a2a68b76a88d/5bbff0fa690c6a16-cd/s1280x1920/8ad9b984be6f0b8c040c52c90eadb9ac72dcdd9a.jpg' alt='not found'></img>
            {/* item details */}
            <h4 mb-0>I'm a product</h4>
            <h4 className=' mt-0 text-orange-600 text-sm'>$25.00</h4>
            </div>
            <div>
            {/* image container */}
            <img className='max-h-80 mt-2 mb-1' src='https://64.media.tumblr.com/b3d74b0b77a64d4e9aa9a2a68b76a88d/5bbff0fa690c6a16-cd/s1280x1920/8ad9b984be6f0b8c040c52c90eadb9ac72dcdd9a.jpg' alt='not found'></img>
            {/* item details */}
            <h4 mb-0>I'm a product</h4>
            <h4 className=' mt-0 text-orange-600 text-sm'>$25.00</h4>
            </div>
            <div>
            {/* image container */}
            <img className='max-h-80 mt-2 mb-1' src='https://64.media.tumblr.com/b3d74b0b77a64d4e9aa9a2a68b76a88d/5bbff0fa690c6a16-cd/s1280x1920/8ad9b984be6f0b8c040c52c90eadb9ac72dcdd9a.jpg' alt='not found'></img>
            {/* item details */}
            <h4 mb-0>I'm a product</h4>
            <h4 className=' mt-0 text-orange-600 text-sm'>$25.00</h4>
            </div>
            <div>
            {/* image container */}
            <img className='max-h-80 mt-2 mb-1' src='https://64.media.tumblr.com/b3d74b0b77a64d4e9aa9a2a68b76a88d/5bbff0fa690c6a16-cd/s1280x1920/8ad9b984be6f0b8c040c52c90eadb9ac72dcdd9a.jpg' alt='not found'></img>
            {/* item details */}
            <h4 mb-0>I'm a product</h4>
            <h4 className=' mt-0 text-orange-600 text-sm'>$25.00</h4>
            </div>
            <div>
            {/* image container */}
            <img className='max-h-80 mt-2 mb-1' src='https://64.media.tumblr.com/b3d74b0b77a64d4e9aa9a2a68b76a88d/5bbff0fa690c6a16-cd/s1280x1920/8ad9b984be6f0b8c040c52c90eadb9ac72dcdd9a.jpg' alt='not found'></img>
            {/* item details */}
            <h4 mb-0>I'm a product</h4>
            <h4 className=' mt-0 text-orange-600 text-sm'>$25.00</h4>
            </div>

        </div>
            {/* <!-- button --> */}
            <div className='flex justify-center items-center mb-10'>
              <button className='border-2 border-orange-600 text-orange-600 pr-4 pl-4 mr-1'>Shop All</button>
              <button className='bg-orange-600 h-7 w-10 text-white ' ><p>&gt;</p></button>
            </div>
    
        {/* <!-- footer --> */}
        <div className='h-60 bg-gray-900 flex justify-center text-white items-center mb-6'>
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
}

export default App;
