"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback, useState } from 'react';

const SearchBar: React.FC = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    
    const [avgProductPrice, setAvgProductPrice] = useState<string>('');

    // Function to create query string
    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams);
            params.set(name, value);
            return params.toString();
        },
        [searchParams]
    );

    // Handle form submission
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Update the URL with the new query string
        router.push('/' + '?' + createQueryString('avgProductPrice', avgProductPrice));
    };

    return (
        <form onSubmit={handleSubmit} className="shadow-lg rounded-full border mx-auto p-2 flex flex-row items-center gap-1 w-96 grid-cols-2">
            <select
                value={avgProductPrice}
                onChange={(e) => setAvgProductPrice(e.target.value)}
                className="flex-1 p-2 rounded-full focus:outline-none w-full"
            >
                <option value="">Random Shuffle</option>
                <option value="25">Random Shuffle 1</option>
                <option value="50">Random Shuffle 2</option>
                <option value="100">Random Shuffle 3</option>
                <option value="200">Random Shuffle 4</option>
            </select>
            <button type="submit" className="px-4 py-2 bg-gradient-to-br from-blue-400 to-purple-600 text-white rounded-full hover:shadow-xl flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </button>
        </form>
    );
};

export default SearchBar;
