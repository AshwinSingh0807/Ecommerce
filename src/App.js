import React from "react";
import CardHome from "./components/CardHome";
import { MOCK_JSON } from "./utils/MockData";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Advertisement from "./components/Advertisement";
function App() {
  return (
    <div className="mt-10 ml-24 mr-24 xl:mt-8 lg:mt-8 lg:ml-2 lg:mr-2 sm:mt-1 sm:ml-0 sm:mr-0">
    
      {/* <!-- taskbar --> */}
      <Header />

      {/* <!-- advertisement section --> */}
      <Advertisement />

      {/* <!-- body --> */}

      {/* <!-- heading --> */}
      <div className="uppercase pb-4 relative container font-bold text-5xl flex flex-col justify-center items-center xl:pt-0 xl:pb-0">
        <p className="relative top-3 sm:top-[9px] sm:text-2xl">new arrivals</p>
        <div className="h-2 text-center sm:w-[180px] w-[360px] sm:h-1 bg-orange-600"></div>
      </div>

      {/* <!-- products --> */}
      <div className="mt-12 mb-12 grid grid-cols-5 gap-4 sm:grid-cols-3 sm:gap-2 sm:mt-6 sm:mb-6 lg:grid-cols-4 lg:gap-4 lg:pl-2 lg:pr-2 ">
        {MOCK_JSON.map((item, index) => {
          return (
            <CardHome
              key={index}
              image={item.img}
              name={item.name}
              price={item.price}
            />
          );
        })}
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
      <Footer />
    </div>
  );
}

export default App;
