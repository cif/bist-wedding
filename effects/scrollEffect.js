import { useState, useEffect } from 'react'

const CLOUD_STARTING_POSITION = 20
const computeStarsPosition = () => (Math.floor(window.scrollY * 0.4) * -1)
const computeCloudPosition = () => (Math.floor(window.scrollY * 0.16)) + CLOUD_STARTING_POSITION
const computeCloudOpacity = () => 100 / (window.scrollY + 2)

const scrollEffect = () => {
  const [starsPosition, setStarsPosition] = useState(0)
  const [cloudPosition, setCloudPosition] = useState(0)
  const [cloudOpacity, setCloudOpacity] = useState(1)
  useEffect(() => {
    const handleScroll = () => {
      setStarsPosition(computeStarsPosition())
      setCloudPosition(computeCloudPosition())
      setCloudOpacity(computeCloudOpacity())
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })
  return {
    starsPosition,
    cloudPosition,
    cloudOpacity
  }
}

export default scrollEffect