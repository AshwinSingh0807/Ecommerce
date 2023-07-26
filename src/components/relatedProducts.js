import React from "react";

const RelatedProducts = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-3xl items-center mb-2 text-gray-800  font-medium">
        Related Products
      </p>
      <div className="flex justify-center items-center">
        <img
          src="https://static.thenounproject.com/png/627785-200.png"
          alt="no img yet"
          className="w-8 mr-2 h-8"
        ></img>
        <div className="mt-4 grid  grid-cols-4 gap-6">
          <img
            src="https://64.media.tumblr.com/b3d74b0b77a64d4e9aa9a2a68b76a88d/5bbff0fa690c6a16-cd/s1280x1920/8ad9b984be6f0b8c040c52c90eadb9ac72dcdd9a.jpg"
            alt="not available"
            className="max-h-48 w-full object-cover"
          ></img>
          <img
            src="https://64.media.tumblr.com/b3d74b0b77a64d4e9aa9a2a68b76a88d/5bbff0fa690c6a16-cd/s1280x1920/8ad9b984be6f0b8c040c52c90eadb9ac72dcdd9a.jpg"
            alt="not available"
            className="max-h-48 w-full object-cover"
          ></img>
          <img
            src="https://64.media.tumblr.com/b3d74b0b77a64d4e9aa9a2a68b76a88d/5bbff0fa690c6a16-cd/s1280x1920/8ad9b984be6f0b8c040c52c90eadb9ac72dcdd9a.jpg"
            alt="not available"
            className="max-h-48 w-full object-cover"
          ></img>
          <img
            src="https://64.media.tumblr.com/b3d74b0b77a64d4e9aa9a2a68b76a88d/5bbff0fa690c6a16-cd/s1280x1920/8ad9b984be6f0b8c040c52c90eadb9ac72dcdd9a.jpg"
            alt="not available"
            className="max-h-48 w-full object-cover"
          ></img>
        </div>
        <img
          src="https://cdn1.iconfinder.com/data/icons/mixed-17/16/icon_right_rounded-512.png"
          alt="no img yet"
          className="w-8 ml-2 h-8"
        ></img>
      </div>
    </div>
  );
};

export default RelatedProducts;
