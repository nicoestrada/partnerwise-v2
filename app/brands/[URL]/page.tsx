"use client";
import Header from "@/components/Header";
import Testimonials11 from "@/components/Testimonials11";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

import { useEffect, useState } from "react";
import BrandHero from "@/components/BrandHero";

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
            <BrandHero brand={brand} />
            <FAQ brand={brand} />
            <Footer />
        </>
    );
}