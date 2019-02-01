import React from 'react'
import countDownEffect from '../effects/countDownEffect'
const Countdown = () => {
  const {
    countDown
  } = countDownEffect()
  return countDown
}

export default Countdown