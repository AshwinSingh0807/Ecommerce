import CardHome from "./components/CardHome";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { WOMEN_CAT } from "./utils/MockData";
import Socials from "./components/Socials";

function ProductList() {
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
      {/* header */}
      <div className="uppercase xl:pt-0 xl:pb-0 pt-2 pb-4 mt-12 font-bold text-5xl flex flex-col justify-center items-center">
        <p className="relative top-3 sm:top-[9px] sm:text-2xl uppercase">
          Women
        </p>
        <div className="h-2 text-center sm:w-[100px] sm:h-1 w-[200px]  bg-orange-600"></div>
        <ul className="absolute  top-28 right-[50px] text-black">
        <Socials/>
        </ul>
      </div>
      <div className="mt-12 mb-12 grid grid-cols-5 lg:grid-cols-4 sm:grid-cols-2">
        {/* <!-- products --> */}
        {WOMEN_CAT.map((items, index) => {
          return (
          <CardHome key={index} image={items.img} name={items.name} price={items.price} />
          );
        })}
      </div>
       {/* <!-- footer --> */}
      <Footer />
    </div>
  );
}
export default ProductList;
