// src/Slideshow.js
import React, { useState, useEffect } from "react";
import "./Slideshow.css";
import slide1 from "./images/alunalun.jfif";
import slide2 from "./images/puncak.jfif";
import slide3 from "./images/tugu.jfif";

const images = [slide1, slide2, slide3];

function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3 detik per slide

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="slideshow-container">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="slide-image"
      />

      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
}

export default Slideshow;
