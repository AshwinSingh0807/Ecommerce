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
            <div class="flex flex-col items-center justify-center bg-orange-500 mt-2 h-60">
                <h1>FREE SHIPPING</h1>
                <h2>ON ORDER OVER $50 - USE COUPON CODE OVER50</h2>
                <div class="flex">
                    <div class="border pt-1 pl-4 pr-4 pb-1 m-2">
                        Shop Women
                    </div>
                    <div class="border pt-1 pl-4 pr-4 pb-1 m-2">
                        Shop Men
                    </div>
                    <div class="border pt-1 pl-4 pr-4 pb-1 m-2">
                        Shop Sale
                    </div>
                </div>
            </div>
            {/* <!-- image section --> */}
        </div>
    
        {/* <!-- body --> */}
        <div>
            {/* <!-- heading -->
            <!-- products -->
            <!-- button --> */}
        </div>
    
        {/* <!-- footer --> */}
        <div>
            {/* <!-- line2 -->
            <!-- line1 -->
            <!-- line3 -->
            <!-- line4 --> */}
        </div>
        
    </div>
      );
}

export default App;
