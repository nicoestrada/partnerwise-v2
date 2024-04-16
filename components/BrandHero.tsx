/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import config from "@/config";
import BrandFeedLayout from "./BrandFeedLayout";

const BrandHero = ({ brand }: {brand: []}) => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-4 px-2 py-8 lg:py-10">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <h1 className="font-semibold text-2xl">{brand["Store name"]}</h1>
       <TestimonialsAvatars priority={true} />


       <label className="form-control">
          <div className="label">
            <span className="label-text">Your bio</span>
            <span className="label-text-alt">Alt label</span>
          </div>
          <textarea className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
          <div className="label">
            <span className="label-text-alt">Your bio</span>
            <span className="label-text-alt">Alt label</span>
          </div>
        </label>
        <div className="rating rating-lg rating-half">
          <input type="radio" name="rating-10" className="rating-hidden" />
          <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
          <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
          <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
          <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
          <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
          <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
          <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
          <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
          <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
          <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
        </div>
        <button className="btn btn-primary btn-wide">
          Submit review
        </button>

      </div>
      <div className="lg:w-1/4">
        <img
          src={brand["OG image"]}
          alt="Product Demo"
          className="w-full"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default BrandHero;
