import React from 'react';
import 'tailwindcss/tailwind.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const imageUrls = [
  'https://images.unsplash.com/photo-1572838967920-59c73b197e7d',
  'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
  'https://images.unsplash.com/photo-1573497017303-36d8ed5d0214',
  'https://images.unsplash.com/photo-1572405263050-5c72b4e4dbad',
  'https://images.unsplash.com/photo-1555685815-1f1805b46235',
];

const AdvancedCarousel = () => {
  return (
    <div className="w-full  mx-auto p-4">
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={4000}
        transitionTime={1000}
        emulateTouch={true}
        selectedItem={0}
        useKeyboardArrows={true}
        centerMode={false} // Disable center mode for responsive display
        dynamicHeight={false} // Disable dynamic height for responsive display
        swipeScrollTolerance={50} // Adjust scroll tolerance for small screens
        renderIndicator={() => null} // Hide the indicator dots
      >
        {imageUrls.map((imageUrl, index) => (
          <div
            key={index}
            className="bg-cover container mx-auto bg-center h-96 relative"
            style={{ backgroundImage: `url(${imageUrl}?fit=crop&w=1920&h=1080)` }}
          >
            <div className="absolute inset-0 bg-black opacity-50 hover:opacity-75 transition-opacity duration-300"></div>
            <div className="absolute inset-0 flex mt-32 flex-col justify-center items-center p-4 text-white">
              <h2 className="text-3xl font-bold mb-2">Image {index + 1}</h2>
              <p className="text-lg top-0 text-center">Photographer: Unsplash</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default AdvancedCarousel;
