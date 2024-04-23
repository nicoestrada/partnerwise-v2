"use client";

// components/RelatedCategories.js


  export default function RelatedCategories({ brand }) {

    const categories = [
      { name: `Find other ${brand["Category"]} brands`, href: '/' },
    ];
  

    return (
      <div className="flex overflow-x-auto py-4 space-x-2">
        {categories.map((category, index) => (
          <a
            key={index}
            href={category.href}
            className="bg-base-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-lg shadow"
          >
            {category.name}
          </a>
        ))}
      </div>
    );
  }
  