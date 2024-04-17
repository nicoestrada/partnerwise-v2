"use client";
import React, { useState } from 'react';

const PhotoGallery = ({ photos }) => {
  const [activePhoto, setActivePhoto] = useState(photos[0]);

  return (
    <div className="max-w-screen-xl mx-auto p-5 space-y-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-full h-96">
          {/* Main Photo */}
          <img src={activePhoto} alt="Main Venue" className="w-full h-full object-cover object-center" />
        </div>
        <div className="flex overflow-x-auto p-2 space-x-2">
          {/* Thumbnails */}
          {photos.map((photo, index) => (
            <button key={index} className="focus:outline-none" onClick={() => setActivePhoto(photo)}>
              <img
                src={photo}
                alt={`Venue ${index}`}
                className={`w-20 h-20 object-cover object-center rounded-lg ${activePhoto === photo ? 'ring-2 ring-indigo-500' : 'hover:ring-1 ring-gray-300'}`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
