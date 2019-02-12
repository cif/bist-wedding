import React from 'react'
import useCountdown from '../effects/useCountdown'
const Countdown = () => {
  const {
    countDown
  } = useCountdown()
  return countDown
}

export default Countdown