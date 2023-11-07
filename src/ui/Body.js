import React from "react";
import Products from "./products";

export default function Header() {
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
            <Products/>
            <Products/>
            <Products/>
            <Products/>
            <Products/>
            <Products/>
            <Products/>
            <Products/>
          </div>
        
        </section>
      </main>
    </>
  );
}
