"use client";
import React, { useState } from 'react';
import BrandFeedLayout from './BrandFeedLayout';

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs flex-col relative snap-start">
      <div className="flex border-b border-gray-200 mx-auto justify-center w-screen xl:w-full overflow-auto bg-base-100">
        <button
          onClick={() => handleTabClick(0)}
          className={`px-4 py-2 mx-2 font-medium ml-20 ${
            activeTab === 0 ? 'text-gray-800 border-b-2 border-blue-500' : 'text-gray-500'
          }`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shirt mx-auto"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>
            <p className="text-slate-800 text-xs mt-2 mx-auto">Apparel</p>
        </button>
        <button
          onClick={() => handleTabClick(1)}
          className={`px-4 py-2 mx-2 font-medium ${
            activeTab === 1 ? 'text-gray-800 border-b-2 border-blue-500' : 'text-gray-500'
          }`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-watch mx-auto"><circle cx="12" cy="12" r="6"/><polyline points="12 10 12 12 13 13"/><path d="m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05"/><path d="m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05"/></svg>
            <p className="text-slate-800 text-xs mt-2 mx-auto">Antiques</p>
        </button>
        <button
          onClick={() => handleTabClick(2)}
          className={`px-4 py-2 mx-2 font-medium ${
            activeTab === 2 ? 'text-gray-800 border-b-2 border-blue-500' : 'text-gray-500'
          }`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-car-front mx-auto"><path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"/><path d="M7 14h.01"/><path d="M17 14h.01"/><rect width="18" height="8" x="3" y="10" rx="2"/><path d="M5 18v2"/><path d="M19 18v2"/></svg>
            <p className="text-slate-800 text-xs mt-2 mx-auto">Auto</p>
        </button>
        <button
          onClick={() => handleTabClick(2)}
          className={`px-4 py-2 mx-2 font-medium ${
            activeTab === 2 ? 'text-gray-800 border-b-2 border-blue-500' : 'text-gray-500'
          }`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-car-front mx-auto"><path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"/><path d="M7 14h.01"/><path d="M17 14h.01"/><rect width="18" height="8" x="3" y="10" rx="2"/><path d="M5 18v2"/><path d="M19 18v2"/></svg>
            <p className="text-slate-800 text-xs mt-2 mx-auto">Auto</p>
        </button>
        <button
          onClick={() => handleTabClick(2)}
          className={`px-4 py-2 mx-2 font-medium ${
            activeTab === 2 ? 'text-gray-800 border-b-2 border-blue-500' : 'text-gray-500'
          }`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-car-front mx-auto"><path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"/><path d="M7 14h.01"/><path d="M17 14h.01"/><rect width="18" height="8" x="3" y="10" rx="2"/><path d="M5 18v2"/><path d="M19 18v2"/></svg>
            <p className="text-slate-800 text-xs mt-2 mx-auto">Auto</p>
        </button>
        <button
          onClick={() => handleTabClick(2)}
          className={`px-4 py-2 mx-2 font-medium ${
            activeTab === 2 ? 'text-gray-800 border-b-2 border-blue-500' : 'text-gray-500'
          }`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-car-front mx-auto"><path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"/><path d="M7 14h.01"/><path d="M17 14h.01"/><rect width="18" height="8" x="3" y="10" rx="2"/><path d="M5 18v2"/><path d="M19 18v2"/></svg>
            <p className="text-slate-800 text-xs mt-2 mx-auto">Auto</p>
        </button>
        <button
          onClick={() => handleTabClick(2)}
          className={`px-4 py-2 mx-2 font-medium mr-4 ${
            activeTab === 2 ? 'text-gray-800 border-b-2 border-blue-500' : 'text-gray-500'
          }`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-car-front mx-auto"><path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"/><path d="M7 14h.01"/><path d="M17 14h.01"/><rect width="18" height="8" x="3" y="10" rx="2"/><path d="M5 18v2"/><path d="M19 18v2"/></svg>
            <p className="text-slate-800 text-xs mt-2 mx-auto">Auto</p>
        </button>
      </div>
      <div className="mx-auto justify-center mt-4">
        <div className={`${activeTab === 0 ? 'block' : 'hidden'}`}>
            <BrandFeedLayout />
        </div>
        <div className={`${activeTab === 1 ? 'block' : 'hidden'}`}>Tab content 2</div>
        <div className={`${activeTab === 2 ? 'block' : 'hidden'}`}>Tab content 3</div>
      </div>
    </div>
  );
};

export default Tabs;

