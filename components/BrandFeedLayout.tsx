import { useEffect, useState } from "react";
import Card from "./Card";

export default function BrandFeedLayout() {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const res = await fetch("http://localhost:3000/api/brands"); // Use relative URL assuming your API is served from the same origin
                if (!res.ok) {
                    throw new Error("Failed to fetch brands");
                }
                const brandsData = await res.json();
                setBrands(brandsData);
            } catch (error) {
                console.error("Error fetching brands:", error);
            }
        };

        fetchBrands();
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 mx-auto px-8 gap-4 md:gap-6 my-8 mx-8">
            <div>
                <Card brands={brands} />
            </div>
        </div>
    );
}