import React, { useState } from 'react'

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    )
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    )
  }

  return (
    <div className="carousel">
      <button className="arrow_left" onClick={prevImage}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="80"
          viewBox="0 0 48 80"
          fill="none"
        >
          <path
            d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
            fill="white"
          />
        </svg>
      </button>
      <img
        className="carousel_img"
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
      />
      <div className="carousel_index">{`${currentIndex + 1}/${images.length}`}</div>
      <button className="arrow_right" onClick={nextImage}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="80"
          viewBox="0 0 48 80"
          fill="none"
        >
          <path
            d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  )
}

export default Carousel
