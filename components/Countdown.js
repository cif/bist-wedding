import React from 'react'
import useCountdown from '../effects/useCountDown'
const Countdown = () => {
  const {
    countDown
  } = useCountdown()
  return countDown
}

export default Countdown