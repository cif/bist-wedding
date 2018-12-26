import { useState, useEffect } from 'react'
const computeStarsPosition = () => (Math.floor(window.scrollY * 0.2) * -1)

const scrollEffect = () => {
  if(!process.browser){
    return {
      starsPosition: 0
    }
  } 
  const [starsPosition, setStarsPosition] = useState(computeStarsPosition())
  useEffect(() => {
    const handleScroll = () => {
      setStarsPosition(computeStarsPosition())
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })
  return {
    starsPosition
  }
}

export default scrollEffect