import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import "../Styles/swipe.css";

const TextSwiper = ({ textString }) => {
  const maxDots = 3;
    const text =   typeof textString === 'string' && textString.trim() !== '' 
    ? (() => {
        let dotCount = 0;
        let lastSplitIndex = 0;
        const parts = [];

        for (let i = 0; i < textString.length; i++) {
            if (textString[i] === '.') {
                dotCount++;
                if (dotCount === maxDots) {
                    parts.push(textString.slice(lastSplitIndex, i));
                    lastSplitIndex = i + 1; // Update last split index to the character after the dot
                    dotCount = 0; // Reset dot count
                }
            }
        }

        // Add the remaining part of the string after the last split
        parts.push(textString.slice(lastSplitIndex));

        return parts;
    })() 
    : [];
  console.log(text);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentIndex((prevIndex) => (prevIndex + 1) % text.length),
    onSwipedRight: () => setCurrentIndex((prevIndex) => (prevIndex - 1 + text.length) % text.length),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <div {...handlers} className="swiper-container">
      <div className="card">
        <p >{text[currentIndex]}</p>
      </div>
      <div className="pagination">
        {currentIndex + 1} / {text.length}
      </div>
    </div>
  );
};

export default TextSwiper;
