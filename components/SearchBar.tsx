"use client"

import React, { useState } from 'react';

const categoriesMap: Map<number, string> = new Map([
  [0, "Apparel"],
  [1, "Antiques & Collectibles"],
  [2, "Autos & Vehicles"],
  [3, "Beauty & Fitness"],
  [4, "Books & Literature"],
  [5, "Business & Industrial"],
  [6, "Consumer Electronics"],
  [7, "Finance"],
  [8, "Food & Drink"],
  [9, "Games"],
  [10, "Gifts & Special Events"],
  [11, "Health"],
  [12, "Holidays & Seasonal"],
  [13, "Home & Garden"],
  [14, "People & Society"],
  [15, "Pets & Animals"],
  [16, "Photo & Video Services"],
  [17, "Safety & Survival"],
  [18, "Science"],
  [19, "Smoking & Vaping"],
  [20, "Sports"],
  [21, "Toys & Hobbies"],
  [22, "Travel"],
  [23, "Wedding"],
]);

type SearchBarProps = {
    onSearch: (criteria: SearchCriteria) => void;
};

type SearchCriteria = {
    industry: string;
    revenueRange: string;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [industry, setIndustry] = useState('');
    const [revenueRange, setRevenueRange] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSearch({ industry, revenueRange });
    };

    return (
        <form onSubmit={handleSubmit} className="shadow-lg rounded-full border mx-auto p-2 flex flex-row items-center gap-1 w-96 md:w-96 lg:w-96 xl:w-2/5 grid-cols-2">
          <select
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="flex-1 p-2 rounded-full focus:outline-none w-full"
          >
            <option value="">Industry</option>
            {Array.from(categoriesMap, ([key, value]) => (
              <option key={key} value={value}>{value}</option>
            ))}
          </select>
          <select
              value={revenueRange}
              onChange={(e) => setRevenueRange(e.target.value)}
              className="flex-1 p-2 rounded-full focus:outline-none w-full"
          >
              <option value="">Revenue</option>
              <option value="0-5000">$0 - $5,000</option>
              <option value="5001-50000">$5,001 - $50,000</option>
              <option value="50001-500000">$50,001 - $500,000</option>
              <option value="500001+">$500,001+</option>
          </select>
          <button type="submit" className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
        </form>
    );
};

export default SearchBar;

// <label className="w-2/3 border md:w-7/12 xl:w-2/5 mx-auto input input-bordered flex shadow-lg focus:outline-none w-60 items-center rounded-full md:mt-2 lg:mt-2">
//   <input type="text" className="grow" placeholder="Find brands..." />
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
// </label>