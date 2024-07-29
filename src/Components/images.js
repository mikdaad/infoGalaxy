import React from 'react';

const ImageGallery = ({ imageUrls }) => {
  return (
    <div>
      {imageUrls.map((url, index) => (
        <img key={index} src={url} alt={`Image ${index}`} style={{ width: '100px', height: '100px', margin: '10px' }} />
      ))}
    </div>
  );
};

export default ImageGallery;