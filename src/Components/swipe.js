import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import "../Styles/swipe.css";

const TextSwiper = ({ textString, maxChars = 500 }) => {
  const text = typeof textString === 'string' && textString.trim() !== ''
    ? (() => {
        const parts = [];
        let lastSplitIndex = 0;

        while (lastSplitIndex < textString.length) {
          parts.push(textString.slice(lastSplitIndex, lastSplitIndex + maxChars));
          lastSplitIndex += maxChars;
        }

        return parts;
      })()
    : [];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentIndex((prevIndex) => (prevIndex + 1) % text.length),
    onSwipedRight: () => setCurrentIndex((prevIndex) => (prevIndex - 1 + text.length) % text.length),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div {...handlers} className="swiper-container">
      <div className="card">
        <p>{text[currentIndex]}</p>
      </div>
      <div className="pagination">
        {currentIndex + 1} / {text.length}
      </div>
    </div>
  );
};

export default TextSwiper;
