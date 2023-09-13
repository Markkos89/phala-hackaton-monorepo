import React from "react";

function POAPDisplay({ imageUrl }) {
  return (
    <div className="border border-gray-300 rounded-md p-4">
      {imageUrl ? (
        // If there is an image URL, display a nice-looking component
        <div className="w-full h-40 bg-cover bg-center rounded-md" style={{ backgroundImage: `url(${imageUrl})` }}>
          {/* Your nice-looking component */}
          <div className="text-white text-center absolute inset-0 flex justify-center items-center">
            Your Nice Component
          </div>
        </div>
      ) : (
        // If there is no image URL, display a nice message
        <div className="text-gray-500 text-center">
          <p>No image available</p>
          <p>Display something nice here</p>
        </div>
      )}
    </div>
  );
}

export default POAPDisplay;
