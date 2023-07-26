import React from 'react'

const CartCard = () => {
  return (
    <div className=" flex justify-between border-b-2 border-gray-200 sm:pb-3 sm:pt-3 pb-6 pt-6">
    {/* left side of checkout box */}
    <div className="flex">
      <img
        className="max-h-32 "
        src="https://www.next.es/nxtcms/resource/blob/5601296/bb6d629027a2a0fff625d8e5e24204fc/denim-data.jpg"
        alt="not found"
      ></img>
      <div className="flex flex-col ml-3">
        <p className="text-base mb-2 mr-4 sm:mr-1">I'm a product</p>
        <p className="text-sm font-semibold">$31.00</p>
        <p className="text-xs font-semibold text-gray-400">
          Size: Medium
        </p>
      </div>
    </div>
    {/* right side of checkout box */}
    <div className="flex justify-between">
      {/* increment button */}
      <div className="flex border h-6 border-black justify-center items-center">
        <button className="text-sm  w-4 sm:w-4 h-6" type="submit">
          -
        </button>
        <p className="text-sm">1</p>
        <button className="text-sm w-4 sm:w-4 h-6" type="submit">
          +
        </button>
      </div>
      <p className="mr-4 ml-4 sm:mr-2 sm:ml-2">$31.00</p>
      <button className="w-4 font-bold text-sm h-4">X</button>
    </div>
  </div>
 )
}

export default CartCard
