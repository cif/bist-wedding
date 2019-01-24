import React from 'react'
import resizeEffect from '../effects/resizeEffect'
import scrollEffect from '../effects/scrollEffect'

const Stars = () => {
  const { 
    starsImageHeight
  } = resizeEffect()
  const {
    starsPosition
  } = scrollEffect()
  return (
    <div className="stars-img">
      <style jsx>
      {`
        .stars-img {
          position: absolute;
          top: ${starsPosition}px;
          background-image: url('/static/stars.png');
          background-repeat: no-repeat;
          background-position: top center;
          background-size: cover;
          height: ${starsImageHeight}px;
          width: 100%;
          z-index: 1;
        }
      `}
      </style>
    </div>
  )
}

export default Stars