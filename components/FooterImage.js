import React from 'react'
import resizeEffect from '../effects/resizeEffect'
import scrollEffect from '../effects/scrollEffect'

const FooterImage = () => {
  const { 
    cloudImageHeight,
    footerImageHeight
  } = resizeEffect()
  const {
    cloudPosition,
    cloudOpacity
  } = scrollEffect()
  
  return (
    <div className="footer-img-container">
      <div className="bottom-img" />
      <div className="clouds-img" />
      <style jsx>
      {`
        .footer-img-container {
          position: relative;
        }
        .bottom-img {
          position: relative;
          background-image: url('/static/mt-hood-bottom.png');
          background-repeat: no-repeat;
          background-position: top center;
          background-size: contain;
          height: ${footerImageHeight}px;
          width: 100%;
          z-index: 50;
        }
        .clouds-img {
          position: absolute;
          top: 0;
          left: ${cloudPosition}px;
          background-image: url('/static/clouds.png');
          background-repeat: no-repeat;
          background-position: top center;
          background-size: contain;
          height: ${cloudImageHeight}px;
          opacity: ${cloudOpacity};
          width: 100%;
          z-index: 5;
          
        }
      `}
      </style>
    </div>
    
  )
}

export default FooterImage