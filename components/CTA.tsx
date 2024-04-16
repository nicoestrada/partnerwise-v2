/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import config from "@/config";

const CTA = ({ brand }) => {
  return (
    <section className="relative hero overflow-hidden max-h-96">
      <img
        src={brand["OG image"]}
        alt="Background"
        className="object-fill"
      />
      <div className="relative hero-overlay bg-neutral bg-opacity-70"></div>
      <div className="relative hero-content text-center text-neutral-content p-8">
        <div className="flex flex-col items-center max-w-xl p-8 md:p-0">
          
        </div>
      </div>
    </section>
  );
};

export default CTA;
