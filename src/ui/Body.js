import React from "react";
import { Products, Cartegory, Ads, Stores } from "./constants";
import Shops from "./constants/Shops";

export default function Body() {
  return (
    <>
      <main className="mx-auto max-w-full px-2 sm:px-6 lg:px-8 py-10">
        {/* Top Deals */}
        <section className="w-full">
          {/* Top Deals Heading */}
          <div className="w-full flex justify-center items-center mt-10">
            <h1 className="text-yellowShade text-4xl font-extrabold mb-10">
              Top Deals
            </h1>
          </div>

          {/* Products */}
          <div className="grid grid-cols-4">
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
          </div>

          {/* Shops */}
          <div className="mt-20">
            <h1 className="text-yellowShade text-center mb-10 text-4xl font-bold">
              Recommended Shops
            </h1>
            <div className="grid grid-cols-3 mt-3 gap-3 w-full">
              <Shops />
              <Shops />
              <Shops />
            </div>
          </div>

          {/* Sellers */}
          <div className="mt-20">
            <h1 className="text-yellowShade text-center mb-10 text-4xl font-bold">
              Best Sellers
            </h1>
            <div className="grid grid-cols-4 gap-1 w-full">
              <Products />
              <Products />
              <Products />
              <Products />
            </div>
          </div>

          {/* Shops */}
          <div className="mt-20">
            <h1 className="text-yellowShade text-center mb-10 text-4xl font-bold">
              Top Cartegory
            </h1>
            <div className="grid grid-cols-3 mt-3 gap-3 w-full gap-y-20">
              <Cartegory />
              <Cartegory />
              <Cartegory />
              <Cartegory />
              <Cartegory />
              <Cartegory />
              <Cartegory />
              <Cartegory />
              <Cartegory />
            </div>
          </div>

          {/* Ads */}
          <div className="mt-20">
            <Ads />
          </div>

          {/* Weekly Deals */}
          <div className="mt-20">
            <h1 className="text-yellowShade text-center mb-10 text-4xl font-bold">
              Weekly Deals
            </h1>
            <div className="grid grid-cols-4 gap-1 w-full">
              <Products />
              <Products />
              <Products />
              <Products />
            </div>
          </div>

          {/* Black Friday Deals */}
          <div className="mt-20">
            <h1 className="text-yellowShade text-center mb-10 text-4xl font-bold">
              Black Friday Deals
            </h1>
            <div className="grid grid-cols-4 gap-1 w-full">
              <Products />
              <Products />
              <Products />
              <Products />
            </div>
          </div>

          {/* Official Stores */}
          <div className="mt-20">
            <h1 className="text-yellowShade text-center mb-10 text-4xl font-bold">
              Official Stores
            </h1>
            <div className="grid grid-cols-3 mt-10 gap-3 w-full gap-y-20">
             <Stores />
             <Stores />
             <Stores />
             <Stores />
             <Stores />
             <Stores />
             <Stores />
             <Stores />
             <Stores />
             <Stores />
             <Stores />
             <Stores />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
