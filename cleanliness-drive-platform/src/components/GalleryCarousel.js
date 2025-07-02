import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const GalleryCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      {/* Main Image */}
      <div className="relative h-96 rounded-lg overflow-hidden">
        <img
          src={images[currentIndex].url}
          alt={images[currentIndex].caption}
          className="w-full h-full object-cover"
        />
        
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-200"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-200"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>

        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
          <p className="text-center">{images[currentIndex].caption}</p>
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex justify-center space-x-2 mt-4">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => goToSlide(index)}
            className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
              index === currentIndex
                ? 'border-primary-600'
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            <img
              src={image.url}
              alt={image.caption}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? 'bg-primary-600'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryCarousel; 
