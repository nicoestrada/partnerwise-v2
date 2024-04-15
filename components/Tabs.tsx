"use client";
import React, { useEffect, useState, useRef } from 'react';
import BrandFeedLayout from './BrandFeedLayout';

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

const Tabs: React.FC = () => {
  
  const tabContainerRef = useRef(null);

  const [activeTab, setActiveTab] = useState(0);

  const [brands, setBrands] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getBrands = async () => {
    try {
      const query = new URLSearchParams({
        industry: categoriesMap.get(activeTab)
      });
      const res = await fetch(`http://localhost:3000/api/brands?${query}`);
      if (!res.ok) {
          throw new Error('Failed to fetch brands');
      }
      return res.json();
    } catch (err) {
        console.error(err);
        return []; // Return an empty array in case of error
    }
  };
  
  // useEffect to fetch data on activeTab changes
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getBrands();
        setBrands(data);
      } catch (error) {
        console.log(error);
        setBrands([]);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [activeTab]); // Dependency array includes activeTab

  useEffect(() => {
    if (tabContainerRef.current) {
      const updateScrollPosition = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth <= 600) {  // Example breakpoint for mobile devices
          tabContainerRef.current.scrollLeft = 0;  // Adjust this value as needed based on your layout
        }
      };
  
      updateScrollPosition();
      window.addEventListener('resize', updateScrollPosition);
  
      return () => window.removeEventListener('resize', updateScrollPosition);
    }
  }, []);

  const handleTabClick = (index: number) => {
    setActiveTab(index); // Now fetchData is triggered by useEffect when activeTab changes
    setIsLoading(true);
  };

  const loadingIndicator = 
    // Render a loading state while brands are being fetched
      <div className="mx-auto justify-center mb-96 mt-72">
        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin-slow dark:text-gray-600 fill-red-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
      </div>;

  return (
    <div className="tabs flex-col relative mt-6 text-center">
      <div ref={tabContainerRef} className="border-b border-gray-200 mx-auto justify-center bg-base-100 w-full">
        <button
          onClick={() => handleTabClick(0)}
          className={`px-4 py-2 ml-2 font-medium ${
            activeTab === 0 ? 'text-gray-800 border-b-2 border-red-500' : 'text-gray-400 hover:text-slate-800 hover:border-b-2 hover:cursor-pointer hover:bg-base-200 hover:rounded-lg'
          }`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shirt mx-auto"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>
            <p className={`text-xs mt-2 mx-auto ${
              activeTab === 0 ? 'text-slate-800' : 'text-gray-500 hover:text-slate-800'
            }`}>Apparel</p>
        </button>
        <button
          onClick={() => handleTabClick(1)}
          className={`px-4 py-2 font-medium ${
            activeTab === 1 ? 'text-gray-800 border-b-2 border-red-500' : 'text-gray-400 hover:text-slate-800 hover:border-b-2 hover:cursor-pointer hover:bg-base-200 hover:rounded-lg'
          }`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-watch mx-auto"><circle cx="12" cy="12" r="6"/><polyline points="12 10 12 12 13 13"/><path d="m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05"/><path d="m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05"/></svg>
            <p className={`text-xs mt-2 mx-auto ${
              activeTab === 1 ? 'text-slate-800' : 'text-gray-500 hover:text-slate-800'
            }`}>Antiques</p>        
        </button>
        <button
          onClick={() => handleTabClick(2)}
          className={`px-4 py-2 font-medium ${
            activeTab === 2 ? 'text-gray-800 border-b-2 border-red-500' : 'text-gray-400 hover:text-slate-800 hover:border-b-2 hover:cursor-pointer hover:bg-base-200 hover:rounded-lg'
          }`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-car-front mx-auto"><path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"/><path d="M7 14h.01"/><path d="M17 14h.01"/><rect width="18" height="8" x="3" y="10" rx="2"/><path d="M5 18v2"/><path d="M19 18v2"/></svg>
            <p className={`text-xs mt-2 mx-auto ${
              activeTab === 2 ? 'text-slate-800' : 'text-gray-500 hover:text-slate-800'
            }`}>Auto</p>    
        </button>
        <button
          onClick={() => handleTabClick(3)}
          className={`px-4 py-2 font-medium ${
            activeTab === 3 ? 'text-gray-800 border-b-2 border-red-500' : 'text-gray-400 hover:text-slate-800 hover:border-b-2 hover:cursor-pointer hover:bg-base-200 hover:rounded-lg'
          }`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-sparkles mx-auto"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
            <p className={`text-xs mt-2 mx-auto ${
              activeTab === 3 ? 'text-slate-800' : 'text-gray-500 hover:text-slate-800'
            }`}>Beauty</p>
        </button>
        <button
          onClick={() => handleTabClick(4)}
          className={`px-4 py-2 font-medium ${
            activeTab === 4 ? 'text-gray-800 border-b-2 border-red-500' : 'text-gray-400 hover:text-slate-800 hover:border-b-2 hover:cursor-pointer hover:bg-base-200 hover:rounded-lg'
          }`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-book mx-auto"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
            <p className={`text-xs mt-2 mx-auto ${
              activeTab === 4 ? 'text-slate-800' : 'text-gray-500 hover:text-slate-800'
            }`}>Books</p>
        </button>
        <button
          onClick={() => handleTabClick(5)}
          className={`px-4 py-2 font-medium ${
            activeTab === 5 ? 'text-gray-800 border-b-2 border-red-500' : 'text-gray-400 hover:text-slate-800 hover:border-b-2 hover:cursor-pointer hover:bg-base-200 hover:rounded-lg'
          }`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-briefcase-business mx-auto"><path d="M12 12h.01"/><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M22 13a18.15 18.15 0 0 1-20 0"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>
            <p className={`text-xs mt-2 mx-auto ${
              activeTab === 5 ? 'text-slate-800' : 'text-gray-500 hover:text-slate-800'
            }`}>Business</p>
        </button>
        <button
          onClick={() => handleTabClick(6)}
          className={`px-4 py-2 font-medium ${
            activeTab === 6 ? 'text-gray-800 border-b-2 border-red-500' : 'text-gray-400 hover:text-slate-800 hover:border-b-2 hover:cursor-pointer hover:bg-base-200 hover:rounded-lg'
          }`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-plug-zap mx-auto"><path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"/><path d="m2 22 3-3"/><path d="M7.5 13.5 10 11"/><path d="M10.5 16.5 13 14"/><path d="m18 3-4 4h6l-4 4"/></svg>
            <p className={`text-xs mt-2 mx-auto ${
              activeTab === 6 ? 'text-slate-800' : 'text-gray-500 hover:text-slate-800'
            }`}>Tech</p>
        </button>
        <button
          onClick={() => handleTabClick(7)}
          className={`px-4 py-2 font-medium ${
            activeTab === 7 ? 'text-gray-800 border-b-2 border-red-500' : 'text-gray-400 hover:text-slate-800 hover:border-b-2 hover:cursor-pointer hover:bg-base-200 hover:rounded-lg'
          }`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-line-chart mx-auto"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
            <p className={`text-xs mt-2 mx-auto ${
              activeTab === 7 ? 'text-slate-800' : 'text-gray-500 hover:text-slate-800'
            }`}>Finance</p>
        </button>
        <button
          onClick={() => handleTabClick(8)}
          className={`px-4 py-2 font-medium ${
            activeTab === 8 ? 'text-gray-800 border-b-2 border-red-500' : 'text-gray-400 hover:text-slate-800 hover:border-b-2 hover:cursor-pointer hover:bg-base-200 hover:rounded-lg'
          }`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-beef mx-auto"><circle cx="12.5" cy="8.5" r="2.5"/><path d="M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z"/><path d="m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"/></svg>
            <p className={`text-xs mt-2 mx-auto ${
              activeTab === 8 ? 'text-slate-800' : 'text-gray-500 hover:text-slate-800'
            }`}>Food</p>
        </button>
        <button
          onClick={() => handleTabClick(9)}
          className={`px-4 py-2 font-medium ${
            activeTab === 9 ? 'text-gray-800 border-b-2 border-red-500' : 'text-gray-400 hover:text-slate-800 hover:border-b-2 hover:cursor-pointer hover:bg-base-200 hover:rounded-lg'
          }`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-gamepad-2 mx-auto"><line x1="6" x2="10" y1="11" y2="11"/><line x1="8" x2="8" y1="9" y2="13"/><line x1="15" x2="15.01" y1="12" y2="12"/><line x1="18" x2="18.01" y1="10" y2="10"/><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"/></svg>
            <p className={`text-xs mt-2 mx-auto ${
              activeTab === 9 ? 'text-slate-800' : 'text-gray-500 hover:text-slate-800'
            }`}>Games</p>
        </button>
        <button
          onClick={() => handleTabClick(10)}
          className={`px-4 py-2 font-medium ${
            activeTab === 10 ? 'text-gray-800 border-b-2 border-red-500' : 'text-gray-400 hover:text-slate-800 hover:border-b-2 hover:cursor-pointer hover:bg-base-200 hover:rounded-lg'
          }`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-gift mx-auto"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/></svg>
            <p className={`text-xs mt-2 mx-auto ${
              activeTab === 10 ? 'text-slate-800' : 'text-gray-500 hover:text-slate-800'
            }`}>Gifts</p>
        </button>
        <button
          onClick={() => handleTabClick(11)}
          className={`px-4 py-2 font-medium ${
            activeTab === 11 ? 'text-gray-800 border-b-2 border-red-500' : 'text-gray-400 hover:text-slate-800 hover:border-b-2 hover:cursor-pointer hover:bg-base-200 hover:rounded-lg'
          }`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart-pulse mx-auto"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/></svg>
            <p className={`text-xs mt-2 mx-auto ${
              activeTab === 11 ? 'text-slate-800' : 'text-gray-500 hover:text-slate-800'
            }`}>Health</p>
        </button>
        <button
          onClick={() => handleTabClick(12)}
          className={`px-4 py-2 font-medium ${
            activeTab === 12 ? 'text-gray-800 border-b-2 border-red-500' : 'text-gray-400 hover:text-slate-800 hover:border-b-2 hover:cursor-pointer hover:bg-base-200 hover:rounded-lg'
          }`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-party-popper mx-auto"><path d="M5.8 11.3 2 22l10.7-3.79"/><path d="M4 3h.01"/><path d="M22 8h.01"/><path d="M15 2h.01"/><path d="M22 20h.01"/><path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"/><path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17"/><path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7"/><path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"/></svg>
            <p className={`text-xs mt-2 mx-auto ${
              activeTab === 12 ? 'text-slate-800' : 'text-gray-500 hover:text-slate-800'
            }`}>Holidays</p>
        </button>
        <button
          onClick={() => handleTabClick(13)}
          className={`px-4 py-2 font-medium ${
            activeTab === 13 ? 'text-gray-800 border-b-2 border-red-500' : 'text-gray-400 hover:text-slate-800 hover:border-b-2 hover:cursor-pointer hover:bg-base-200 hover:rounded-lg'
          }`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-flower-2 mx-auto"><path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"/><circle cx="12" cy="8" r="2"/><path d="M12 10v12"/><path d="M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"/><path d="M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"/></svg>
            <p className={`text-xs mt-2 mx-auto ${
              activeTab === 13 ? 'text-slate-800' : 'text-gray-500 hover:text-slate-800'
            }`}>Home</p>
        </button>
        <button
          onClick={() => handleTabClick(14)}
          className={`px-4 py-2 font-medium ${
            activeTab === 14 ? 'text-gray-800 border-b-2 border-red-500' : 'text-gray-400 hover:text-slate-800 hover:border-b-2 hover:cursor-pointer hover:bg-base-200 hover:rounded-lg'
          }`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-person-standing mx-auto"><circle cx="12" cy="5" r="1"/><path d="m9 20 3-6 3 6"/><path d="m6 8 6 2 6-2"/><path d="M12 10v4"/></svg>
            <p className={`text-xs mt-2 mx-auto ${
              activeTab === 14 ? 'text-slate-800' : 'text-gray-500 hover:text-slate-800'
            }`}>People</p>
        </button>
        <button
          onClick={() => handleTabClick(15)}
          className={`px-4 py-2 font-medium ${
            activeTab === 15 ? 'text-gray-800 border-b-2 border-red-500' : 'text-gray-400 hover:text-slate-800 hover:border-b-2 hover:cursor-pointer hover:bg-base-200 hover:rounded-lg'
          }`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-paw-print mx-auto"><circle cx="11" cy="4" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="20" cy="16" r="2"/><path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"/></svg>
            <p className={`text-xs mt-2 mx-auto ${
              activeTab === 15 ? 'text-slate-800' : 'text-gray-500 hover:text-slate-800'
            }`}>Pets</p>
        </button>
        <button
          onClick={() => handleTabClick(16)}
          className={`px-4 py-2 font-medium ${
            activeTab === 16 ? 'text-gray-800 border-b-2 border-red-500' : 'text-gray-400 hover:text-slate-800 hover:border-b-2 hover:cursor-pointer hover:bg-base-200 hover:rounded-lg'
          }`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clapperboard mx-auto"><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"/><path d="m6.2 5.3 3.1 3.9"/><path d="m12.4 3.4 3.1 4"/><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/></svg>
            <p className={`text-xs mt-2 mx-auto ${
              activeTab === 16 ? 'text-slate-800' : 'text-gray-500 hover:text-slate-800'
            }`}>Video</p>
        </button>
        <button
          onClick={() => handleTabClick(17)}
          className={`px-4 py-2 font-medium ${
            activeTab === 17 ? 'text-gray-800 border-b-2 border-red-500' : 'text-gray-400 hover:text-slate-800 hover:border-b-2 hover:cursor-pointer hover:bg-base-200 hover:rounded-lg'
          }`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-traffic-cone mx-auto"><path d="M9.3 6.2a4.55 4.55 0 0 0 5.4 0"/><path d="M7.9 10.7c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3"/><path d="M13.9 3.5a1.93 1.93 0 0 0-3.8-.1l-3 10c-.1.2-.1.4-.1.6 0 1.7 2.2 3 5 3s5-1.3 5-3c0-.2 0-.4-.1-.5Z"/><path d="m7.5 12.2-4.7 2.7c-.5.3-.8.7-.8 1.1s.3.8.8 1.1l7.6 4.5c.9.5 2.1.5 3 0l7.6-4.5c.7-.3 1-.7 1-1.1s-.3-.8-.8-1.1l-4.7-2.8"/></svg>
            <p className={`text-xs mt-2 mx-auto ${
              activeTab === 17 ? 'text-slate-800' : 'text-gray-500 hover:text-slate-800'
            }`}>Safety</p>
        </button>
        <button
          onClick={() => handleTabClick(18)}
          className={`px-4 py-2 font-medium ${
            activeTab === 18 ? 'text-gray-800 border-b-2 border-red-500' : 'text-gray-400 hover:text-slate-800 hover:border-b-2 hover:cursor-pointer hover:bg-base-200 hover:rounded-lg'
          }`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-test-tube-diagonal mx-auto"><path d="M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01v0a2.83 2.83 0 0 1 0-4L17 3"/><path d="m16 2 6 6"/><path d="M12 16H4"/></svg>
            <p className={`text-xs mt-2 mx-auto ${
              activeTab === 18 ? 'text-slate-800' : 'text-gray-500 hover:text-slate-800'
            }`}>Science</p>
        </button>
        <button
          onClick={() => handleTabClick(19)}
          className={`px-4 py-2 font-medium ${
            activeTab === 19 ? 'text-gray-800 border-b-2 border-red-500' : 'text-gray-400 hover:text-slate-800 hover:border-b-2 hover:cursor-pointer hover:bg-base-200 hover:rounded-lg'
          }`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-cigarette mx-auto"><path d="M18 12H2v4h16"/><path d="M22 12v4"/><path d="M7 12v4"/><path d="M18 8c0-2.5-2-2.5-2-5"/><path d="M22 8c0-2.5-2-2.5-2-5"/></svg>
            <p className={`text-xs mt-2 mx-auto ${
              activeTab === 19 ? 'text-slate-800' : 'text-gray-500 hover:text-slate-800'
            }`}>Smoking</p>
        </button>
        <button
          onClick={() => handleTabClick(20)}
          className={`px-4 py-2 font-medium ${
            activeTab === 20 ? 'text-gray-800 border-b-2 border-red-500' : 'text-gray-400 hover:text-slate-800 hover:border-b-2 hover:cursor-pointer hover:bg-base-200 hover:rounded-lg'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-meda mx-auto"><path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"/><path d="M11 12 5.12 2.2"/><path d="m13 12 5.88-9.8"/><path d="M8 7h8"/><circle cx="12" cy="17" r="5"/><path d="M12 18v-2h-.5"/></svg>
          <p className={`text-xs mt-2 mx-auto ${
              activeTab === 20 ? 'text-slate-800' : 'text-gray-500 hover:text-slate-800'
            }`}>Sports</p>
        </button>
        <button
          onClick={() => handleTabClick(21)}
          className={`px-4 py-2 font-medium ${
            activeTab === 21 ? 'text-gray-800 border-b-2 border-red-500' : 'text-gray-400 hover:text-slate-800 hover:border-b-2 hover:cursor-pointer hover:bg-base-200 hover:rounded-lg'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-toy-brick mx-auto"><rect width="18" height="12" x="3" y="8" rx="1"/><path d="M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3"/><path d="M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3"/></svg>
          <p className={`text-xs mt-2 mx-auto ${
              activeTab === 21 ? 'text-slate-800' : 'text-gray-500 hover:text-slate-800'
            }`}>Toys</p>
        </button>
        <button
          onClick={() => handleTabClick(22)}
          className={`px-4 py-2 font-medium ${
            activeTab === 22 ? 'text-gray-800 border-b-2 border-red-500' : 'text-gray-400 hover:text-slate-800 hover:border-b-2 hover:cursor-pointer hover:bg-base-200 hover:rounded-lg'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-plane-takeoff mx-auto"><path d="M2 22h20"/><path d="M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z"/></svg>
          <p className={`text-xs mt-2 mx-auto ${
              activeTab === 22 ? 'text-slate-800' : 'text-gray-500 hover:text-slate-800'
            }`}>Travel</p>
        </button>
        <button
          onClick={() => handleTabClick(23)}
          className={`px-4 py-2 font-medium ${
            activeTab === 23 ? 'text-gray-800 border-b-2 border-red-500' : 'text-gray-400 hover:text-slate-800 hover:border-b-2 hover:cursor-pointer hover:bg-base-200 hover:rounded-lg'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-church mx-auto"><path d="m18 7 4 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9l4-2"/><path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4"/><path d="M18 22V5l-6-3-6 3v17"/><path d="M12 7v5"/><path d="M10 9h4"/></svg>
          <p className={`text-xs mt-2 mx-auto ${
              activeTab === 23 ? 'text-slate-800' : 'text-gray-500 hover:text-slate-800'
            }`}>Wedding</p>
        </button>
      </div>
      {!isLoading ? <div className="mx-auto justify-center mt-4">
        <div className={`${activeTab === 0 ? 'block' : 'hidden'}`}>
          <BrandFeedLayout brands={brands} />
        </div>
        <div className={`${activeTab === 1 ? 'block' : 'hidden'}`}>
          <BrandFeedLayout brands={brands} />
        </div>
        <div className={`${activeTab === 2 ? 'block' : 'hidden'}`}>
          <BrandFeedLayout brands={brands} />
        </div>
        <div className={`${activeTab === 3 ? 'block' : 'hidden'}`}>
          <BrandFeedLayout brands={brands} />
        </div>
        <div className={`${activeTab === 4 ? 'block' : 'hidden'}`}>
          <BrandFeedLayout brands={brands} />
        </div>
        <div className={`${activeTab === 5 ? 'block' : 'hidden'}`}>
          <BrandFeedLayout brands={brands} />
        </div>
        <div className={`${activeTab === 6 ? 'block' : 'hidden'}`}>
          <BrandFeedLayout brands={brands} />
        </div>
        <div className={`${activeTab === 7 ? 'block' : 'hidden'}`}>
          <BrandFeedLayout brands={brands} />
        </div>
        <div className={`${activeTab === 8 ? 'block' : 'hidden'}`}>
          <BrandFeedLayout brands={brands} />
        </div>
        <div className={`${activeTab === 9 ? 'block' : 'hidden'}`}>
          <BrandFeedLayout brands={brands} />
        </div>
        <div className={`${activeTab === 10 ? 'block' : 'hidden'}`}>
          <BrandFeedLayout brands={brands} />
        </div>
        <div className={`${activeTab === 11 ? 'block' : 'hidden'}`}>
          <BrandFeedLayout brands={brands} />
        </div>
        <div className={`${activeTab === 11 ? 'block' : 'hidden'}`}>
          <BrandFeedLayout brands={brands} />
        </div>
        <div className={`${activeTab === 12 ? 'block' : 'hidden'}`}>
          <BrandFeedLayout brands={brands} />
        </div>
        <div className={`${activeTab === 13 ? 'block' : 'hidden'}`}>
          <BrandFeedLayout brands={brands} />
        </div>
        <div className={`${activeTab === 14 ? 'block' : 'hidden'}`}>
          <BrandFeedLayout brands={brands} />
        </div>
        <div className={`${activeTab === 15 ? 'block' : 'hidden'}`}>
          <BrandFeedLayout brands={brands} />
        </div>
        <div className={`${activeTab === 16 ? 'block' : 'hidden'}`}>
          <BrandFeedLayout brands={brands} />
        </div>
        <div className={`${activeTab === 17 ? 'block' : 'hidden'}`}>
          <BrandFeedLayout brands={brands} />
        </div>
        <div className={`${activeTab === 18 ? 'block' : 'hidden'}`}>
          <BrandFeedLayout brands={brands} />
        </div>
        <div className={`${activeTab === 19 ? 'block' : 'hidden'}`}>
          <BrandFeedLayout brands={brands} />
        </div>
        <div className={`${activeTab === 20 ? 'block' : 'hidden'}`}>
          <BrandFeedLayout brands={brands} />
        </div>
        <div className={`${activeTab === 21 ? 'block' : 'hidden'}`}>
          <BrandFeedLayout brands={brands} />
        </div>
        <div className={`${activeTab === 22 ? 'block' : 'hidden'}`}>
          <BrandFeedLayout brands={brands} />
        </div>
        <div className={`${activeTab === 23 ? 'block' : 'hidden'}`}>
          <BrandFeedLayout brands={brands} />
        </div>
      </div> : loadingIndicator
      }
      
    </div>
  );
};

export default Tabs;

