import { useState, useEffect } from 'react'

const CLOUD_STARTING_POSITION = 20
const computeStarsPosition = () => (Math.floor(window.scrollY * 0.4) * -1)
const computeCloudPositionX = () => (Math.floor(window.scrollY * 0.12)) + CLOUD_STARTING_POSITION
const computeCloudPositionY = () => (Math.floor(window.scrollY * 0.02))
const computeCloudOpacity = () => 100 / (window.scrollY * 0.5)

const scrollEffect = () => {
  const [starsPosition, setStarsPosition] = useState(0)
  const [cloudPositionX, setCloudPositionX] = useState(0)
  const [cloudPositionY, setCloudPositionY] = useState(0)
  const [cloudOpacity, setCloudOpacity] = useState(1)
  useEffect(() => {
    const handleScroll = () => {
      setStarsPosition(computeStarsPosition())
      setCloudPositionX(computeCloudPositionX())
      setCloudPositionY(computeCloudPositionY())
      setCloudOpacity(computeCloudOpacity())
    }
    // only add scroll effect if its probably desktop
    if (window.innerWidth > 1000) {
      window.addEventListener('scroll', handleScroll)
    }
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })
  return {
    starsPosition,
    cloudPositionX,
    cloudPositionY,
    cloudOpacity
  }
}

export default scrollEffect