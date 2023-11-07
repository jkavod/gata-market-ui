import React, { useState } from "react";
import { StarIcon as SolidStarIcon } from "@heroicons/react/24/solid";
import { StarIcon as OutlineStarIcon } from "@heroicons/react/24/outline";
import { HeartIcon as OutlineHeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";
import { Shoe } from "../assets";

export default function Products() {
  const [rating, setRating] = useState(0);
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };
  return (
    <>
      <main className="py-10">
        {/* Top Deals */}
        <section className="w-full">
          <div>
            <div className="grid">
              <div className="bg-darkButtons w-[22vw] flex justify-center items-center p-5 rounded-[16px]">
                <div>
                  <div className="relative w-[20vw]">
                    <img src={Shoe} alt="Shoe" className="w-[20vw]" />
                    <button
                      onClick={toggleLike}
                      className="absolute bottom-0 right-0 m-4"
                      aria-label={liked ? "Unlike" : "Like"}
                    >
                      {liked ? (
                        <SolidHeartIcon className="h-6 w-6 text-white" />
                      ) : (
                        <OutlineHeartIcon className="h-6 w-6 text-gray-500 hover:text-white" />
                      )}
                    </button>
                  </div>
                  <div className="mt-2 gap-2">
                    <h2 className="text-white font-bold mb-3">Nice Sporty Shoe</h2>
                    <p className="text-textDarkShade mb-3">
                      Nike is best known for its footwear, apparel, and
                      equipment. Founded in 1964.
                    </p>
                    <div className="flex justify-start gap-2 items-center mb-3">
                      <p className="text-white font-bold">In Stock</p>
                      <span className="text-textDarkShade">3,000+ Sold</span>
                    </div>
                    <div className="gap-3">
                      <h1 className="font-bold text-2xl text-yellowShade mb-3">ETH 300</h1>
                      <div className="flex mb-3">
                        {[...Array(5)].map((_, index) => {
                          const ratingValue = index + 1;

                          return (
                            <button
                              key={ratingValue}
                              className={`h-8 w-8 ${
                                ratingValue <= rating
                                  ? "text-yellowShade"
                                  : "text-gray-400"
                              } transition-colors duration-150 mb-3`}
                              onClick={() => setRating(ratingValue)}
                              aria-label={`Rate ${ratingValue} out of 5 stars`}
                            >
                              {ratingValue <= rating ? (
                                <SolidStarIcon className="h-6 w-6 text-yellowShade"/>
                              ) : (
                                <OutlineStarIcon className="h-6 w-6 text-yellowShade" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                      <div className="w-full flex justify-center items-center">
                      <a href="#" className="bg-yellowShade py-3 px-[102px] mt-3 rounded">
                        Add To Cart
                      </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
