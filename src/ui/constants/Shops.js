import React from "react";
import { ImageA, ImageB, ImageC } from "../../assets";

export default function Shops() {
  return (
    <>
      <div>
        <div className="flex justify-center items-center">
          <div>
            <img src={ImageA} className="w-[25vw]"/>
            <h1 className="text-center mt-3 text-3xl text-white">DK Couture</h1>
            <p className="text-center text-xl text-textDarkShade">Fashion and Clothing</p>
          </div>
        </div>
      </div>
    </>
  );
}
