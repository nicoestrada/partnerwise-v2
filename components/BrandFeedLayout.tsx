"use client"

import connectMongo from "@/libs/mongoose";
import Brand from "@/models/Brand";
import Card from "./Card"
import { useEffect, useState } from "react";


export default function BrandFeedLayout() {
    const fetchBrands = async () => {
        const res = await fetch("/api/brands");
        const brands = await res.json();
        return brands;
    }

    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetchBrands().then((brands) => {
            setBrands(brands);
        });
    }, [])

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 mx-auto px-8 gap-4 md:gap-6 my-8 mx-8">
            <div>
                <Card brands={brands} />
            </div>
        </div>
    )
}