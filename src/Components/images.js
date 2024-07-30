import React from 'react';
import  { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
 


const ImageGallery = ({ imageUrls }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <div>
      {imageUrls.map((url, index) => (
        <img
          key={index}
          src={url}
          alt={`Image ${index}`}
          style={{ width: '100px', height: '100px', margin: '10px', cursor: 'pointer' }}
          onClick={() => {
            setPhotoIndex(index);
            setIsOpen(true);
          }}
        />
      ))}

      {isOpen && (
        <Lightbox
          mainSrc={imageUrls[photoIndex]}
          nextSrc={imageUrls[(photoIndex + 1) % imageUrls.length]}
          prevSrc={imageUrls[(photoIndex + imageUrls.length - 1) % imageUrls.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + imageUrls.length - 1) % imageUrls.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % imageUrls.length)
          }
        />
      )}
    </div>
  );
};

export default ImageGallery;