import React from 'react'
import Star from '../Star'

const Rating = ({ rating }) => {
  const totalStars = 5
  return (
    <div className="rating">
      {Array.from({ length: totalStars }, (_, index) => (
        <Star key={index} active={index < rating} />
      ))}
    </div>
  )
}

export default Rating
