import { useState, useEffect } from 'react'
const computeFooterImageHeight = () => Math.floor(window.innerWidth * (877 / 1900))
const computeStarsHeight = () => Math.floor(window.innerWidth * (700 / 1781))
const computeStarsPosition = () => (Math.floor(window.scrollY * 0.2) * -1)

const browserEffects = () => {
  if(!process.browser){
    return {
      footerImageHeight: 0,
      starsImageHeight: 200,
      starsPosition: 0
    }
  } 
  const [footerImageHeight, setFooterImageHeight] = useState(computeFooterImageHeight())
  const [starsImageHeight, setStarsImageHeight] = useState(computeStarsHeight())
  const [starsPosition, setStarsPosition] = useState(computeStarsPosition())
  useEffect(() => {
    const handleResize = () => {
      setFooterImageHeight(computeFooterImageHeight())
      setStarsImageHeight(computeStarsHeight())
    }
    const handleScroll = () => {
      setStarsPosition(computeStarsPosition())
    }
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  })
  return {
    footerImageHeight,
    starsImageHeight,
    starsPosition
  }
}

export default browserEffects