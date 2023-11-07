import React from "react";
import { ImageA, ImageB, ImageC } from "../../assets";

export default function Cartegory() {
  return (
    <>
      <div>
        <div className="flex justify-center items-center">
          <div>
            <img src={ImageA} className="w-[25vw]"/>
            <h1 className="text-center mt-3 text-3xl text-white">Home & Kitchen</h1>
          </div>
        </div>
      </div>
    </>
  );
}
