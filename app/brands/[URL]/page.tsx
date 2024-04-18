"use client";
import Header from "@/components/Header";
import Testimonials11 from "@/components/Testimonials11";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

import { useEffect, useState } from "react";
import BrandHero from "@/components/BrandHero";
import TestimonialsAvatars from "@/components/TestimonialsAvatars";
import RelatedCategories from "@/components/RelatedCategories";
import Link from "next/link";
import PitchGenerator from "@/components/PitchGenerator";
import ButtonAccount from "@/components/ButtonAccount";
import ButtonCheckout from "@/components/ButtonCheckout";
import config from "@/config";

export default function BrandPage({ params }: {params: {URL: string}}) {
    const [brand, setBrand] = useState([]); 

    const getBrand = async () => {
        try {
            const query = new URLSearchParams({ 
                URL: params.URL
            });
            const res = await fetch(`http://localhost:3000/api/brands?${query}`);
            if (!res.ok) {
                throw new Error('Failed to fetch info about this brand');
            }
            return res.json();

        } catch (err) {
            console.error(err);
            return [];
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            // setIsLoading(true);
            try {
                const fetchedBrand = await getBrand();
                setBrand(fetchedBrand);
            } catch(error) {
                console.log(error);
                setBrand([]);
            }
            //setIsLoading(false);
        };

        fetchData();
    }, []); // Ensure dependencies are correctly listed, if any are used

    return (
        <>
            <Header />
                

            <div className="max-w-screen-xl mx-auto p-5">
                <div className="flex p-4 justify-between items-center">
                    <h2 className="text-md font-bold">{brand["URL"]?.toUpperCase()}</h2>
                    <div className="flex items-center space-x-4"> 
                        <div className="flex flex-row items-center font-medium"> 
                            <Link href={`https://` + brand["URL"]} className="hover:border-b hover:border-gray-800 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 m-1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                                </svg>
                                <p>Link</p> 
                            </Link>
                        </div>
                        <div className="flex flex-row items-center font-medium">
                            <Link href="" className="hover:border-b hover:border-gray-800 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 m-1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                                <p>Save</p> 
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-300">
                    <div className="relative w-full h-64">
                        <img
                            src={brand["OG image"]}
                            alt="Venue"
                            className="absolute inset-0 w-full h-full object-cover object-center" />
                    </div>   
                </div>
            </div>
            {/* <div className="flex flex-col lg:flex-row w-full lg:w-1/2 mx-auto">
                <div className="flex-grow card bg-base-300 rounded-box place-items-center p-4">
                    View this brand
                </div> 
                <div className="divider lg:divider-horizontal my-4 lg:my-0">OR</div>
                <div className="flex-grow card bg-base-300 rounded-box place-items-center p-4">
                    View another brand
                </div>
            </div> */}
            <PitchGenerator brand={brand} />
            <Testimonials11 brand={brand} />
            <FAQ brand={brand} />
            <div className="container mx-auto px-4">
                <h2 className="text-md font-semibold my-2">Related Categories</h2>
                <RelatedCategories brand={brand} />
            </div>
            <Footer />
        </>
    );
}