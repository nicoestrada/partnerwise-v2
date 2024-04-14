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
  [8, "Food & Drink"]
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
      <div className="mx-auto justify-center mt-4">
        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            activeTab === 0 ? 'text-gray-800 border-b-2 border-blue-500' : 'text-gray-500'
          }`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shirt mx-auto"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>
            <p className="text-slate-800 text-xs mt-2 mx-auto">Apparel</p>
        </button>
        <button
          onClick={() => handleTabClick(1)}
          className={`px-4 py-2 font-medium ${
            activeTab === 1 ? 'text-gray-800 border-b-2 border-blue-500' : 'text-gray-500'
          }`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-watch mx-auto"><circle cx="12" cy="12" r="6"/><polyline points="12 10 12 12 13 13"/><path d="m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05"/><path d="m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05"/></svg>
            <p className="text-slate-800 text-xs mt-2 mx-auto">Antiques</p>
        </button>
        <button
          onClick={() => handleTabClick(2)}
          className={`px-4 py-2 font-medium ${
            activeTab === 2 ? 'text-gray-800 border-b-2 border-blue-500' : 'text-gray-500'
          }`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-car-front mx-auto"><path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"/><path d="M7 14h.01"/><path d="M17 14h.01"/><rect width="18" height="8" x="3" y="10" rx="2"/><path d="M5 18v2"/><path d="M19 18v2"/></svg>
            <p className="text-slate-800 text-xs mt-2 mx-auto">Auto</p>
        </button>
        <button
          onClick={() => handleTabClick(3)}
          className={`px-4 py-2 font-medium ${
            activeTab === 3 ? 'text-gray-800 border-b-2 border-blue-500' : 'text-gray-500'
          }`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-dumbbell mx-auto"><path d="m6.5 6.5 11 11"/><path d="m21 21-1-1"/><path d="m3 3 1 1"/><path d="m18 22 4-4"/><path d="m2 6 4-4"/><path d="m3 10 7-7"/><path d="m14 21 7-7"/></svg>
            <p className="text-slate-800 text-xs mt-2 mx-auto">Fitness</p>
        </button>
        <button
          onClick={() => handleTabClick(4)}
          className={`px-4 py-2 font-medium ${
            activeTab === 4 ? 'text-gray-800 border-b-2 border-blue-500' : 'text-gray-500'
          }`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-book mx-auto"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
            <p className="text-slate-800 text-xs mt-2 mx-auto">Books</p>
        </button>
        <button
          onClick={() => handleTabClick(5)}
          className={`px-4 py-2 font-medium ${
            activeTab === 5 ? 'text-gray-800 border-b-2 border-blue-500' : 'text-gray-500'
          }`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-briefcase-business mx-auto"><path d="M12 12h.01"/><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M22 13a18.15 18.15 0 0 1-20 0"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>
            <p className="text-slate-800 text-xs mt-2 mx-auto">Business</p>
        </button>
        <button
          onClick={() => handleTabClick(6)}
          className={`px-4 py-2 font-medium ${
            activeTab === 6 ? 'text-gray-800 border-b-2 border-blue-500' : 'text-gray-500'
          }`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-plug-zap mx-auto"><path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"/><path d="m2 22 3-3"/><path d="M7.5 13.5 10 11"/><path d="M10.5 16.5 13 14"/><path d="m18 3-4 4h6l-4 4"/></svg>
            <p className="text-slate-800 text-xs mt-2 mx-auto">Tech</p>
        </button>
        <button
          onClick={() => handleTabClick(7)}
          className={`px-4 py-2 font-medium ${
            activeTab === 7 ? 'text-gray-800 border-b-2 border-blue-500' : 'text-gray-500'
          }`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-line-chart mx-auto"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
            <p className="text-slate-800 text-xs mt-2 mx-auto">Finance</p>
        </button>
        <button
          onClick={() => handleTabClick(8)}
          className={`px-4 py-2 font-medium ${
            activeTab === 8 ? 'text-gray-800 border-b-2 border-blue-500' : 'text-gray-500'
          }`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-beef mx-auto"><circle cx="12.5" cy="8.5" r="2.5"/><path d="M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z"/><path d="m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"/></svg>
            <p className="text-slate-800 text-xs mt-2 mx-auto">Food</p>
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

      </div> : loadingIndicator
      }
      
    </div>
  );
};

export default Tabs;

