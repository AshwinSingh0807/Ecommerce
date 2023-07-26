import React from "react";

const CardHome = ({image,name,price}) => {
  return (
    <div className="m-1">
      {/* image container */}
      <img
        className="max-h-80 mt-2 mb-1"
        src={image}
        alt="not found"
      ></img>
      {/* item details */}
      <h4>{name}</h4>
      <h4 className=" mt-0 text-orange-600 text-sm">{price}</h4>
    </div>
  );
};

export default CardHome;
