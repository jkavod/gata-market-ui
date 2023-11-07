import React from "react";
import { ImageA, ImageB, ImageC } from "../../assets";

export default function Stores() {
  return (
    <>
      <div>
        <div className="flex justify-center items-center">
          <div>
            <img src={ImageA} className="w-[25vw]"/>
          </div>
        </div>
      </div>
    </>
  );
}
