import { useEffect, useState } from 'react';
import Card from './Card';

export default function BrandFeedLayout({ brands }) {

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-auto gap-4 md:gap-6 mx-8">
                {brands.map((brand, key) => (
                    <Card brand={brand} key={key} />
                ))}
            </div>

        </>
    );
}
