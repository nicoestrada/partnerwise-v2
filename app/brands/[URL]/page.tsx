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
                <div className="p-4">
                    <Link href={`https://`+brand["URL"]} className="no-underline hover:underline text-2xl">{brand["URL"]}</Link>
                </div>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-300">
                    <div className="relative w-full h-64">
                    <img
                        src={brand["OG image"]}
                        alt="Venue"
                        className="absolute inset-0 w-full h-full object-cover object-center" // Updated classes here
                    />
                    </div>
                </div>
                </div>
            {/* <div className="flex flex-col max-w-screen-xl mx-auto p-5 lg:flex-row">
                <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">Good pitch ✅</div> 
                <div className="divider lg:divider-horizontal">VS</div> 
                <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">Bad pitch ❌</div>
            </div> */}
            {/* <Testimonials11 brand={brand} /> */}

            <FAQ brand={brand} />
            <div className="container mx-auto px-4">
                <h2 className="text-md font-semibold my-2">Related Categories</h2>
                <RelatedCategories />
            </div>
            <Footer />
        </>
    );
}