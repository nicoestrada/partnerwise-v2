import { useEffect, useState } from 'react';
import Card from './Card';

const getBrands = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/brands');
        if (!res.ok) {
            throw new Error('Failed to fetch brands');
        }
        return res.json();
    } catch (err) {
        console.error(err);
        return []; // Return an empty array in case of error
    }
};

export default function BrandFeedLayout() {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getBrands();
            setBrands(data);
        };
        
        fetchData();
    }, []);

    // Render a loading state while brands are being fetched
    if (brands.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-auto gap-4 md:gap-6 mx-8">
                {brands.map((brand) => (
                    <Card brand={brand} />
                ))}
            </div>

        </>
    );
}
