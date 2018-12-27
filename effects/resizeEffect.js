import { useState, useEffect } from 'react'
const computeFooterImageHeight = () => Math.floor(window.innerWidth * (877 / 1900))
const computeStarsHeight = () => Math.floor(window.innerWidth * (700 / 1781))
const computeCloudImageHeight = () => Math.floor(window.innerWidth * (331 / 1878))

const browserEffects = () => {
  const [footerImageHeight, setFooterImageHeight] = useState(0)
  const [starsImageHeight, setStarsImageHeight] = useState(0)
  const [cloudImageHeight, setCloudImageHeight] = useState(0)
  useEffect(() => {
    const handleResize = () => {
      setFooterImageHeight(computeFooterImageHeight())
      setStarsImageHeight(computeStarsHeight())
      setCloudImageHeight(computeCloudImageHeight())
    }
    if (footerImageHeight === 0) {
      handleResize() // initial load
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })
  return {
    footerImageHeight,
    starsImageHeight,
    cloudImageHeight
  }
}

export default browserEffects