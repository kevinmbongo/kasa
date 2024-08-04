import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const isMobile = useMediaQuery({ maxWidth: 768 })

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
  const svgArrowLeft = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={isMobile ? '24' : '48'}
      height={isMobile ? '24' : '80'}
      viewBox="0 0 48 80"
      fill="none"
    >
      <path
        d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
        fill="white"
      />
    </svg>
  )

  const svgArrowRight = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={isMobile ? '24' : '48'}
      height={isMobile ? '24' : '80'}
      viewBox="0 0 48 80"
      fill="none"
    >
      <path
        d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
        fill="white"
      />
    </svg>
  )

  return (
    <div className="carousel">
      {images.length > 1 && (
        <button className="arrow_left" onClick={prevImage}>
          {svgArrowLeft()}
        </button>
      )}
      <img
        className="carousel_img"
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
      />
      {images.length > 1 && (
        <div className="carousel_index">{`${currentIndex + 1}/${images.length}`}</div>
      )}
      {images.length > 1 && (
        <button className="arrow_right" onClick={nextImage}>
          {svgArrowRight()}
        </button>
      )}
    </div>
  )
}

export default Carousel
