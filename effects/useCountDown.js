import { useState, useEffect } from 'react'
import moment from 'moment'

const WEDDING_DATE_TS = 1568502900
const durationTillWedding = () =>
  moment.duration((WEDDING_DATE_TS - moment(new Date()).unix()) * 1000)

const durationToCountdown = (duration) => `
  ${duration.days()} days,
  ${duration.hours()} hours,
  ${duration.minutes()} minutes,
  ${duration.seconds()} seconds
`
const useCountdown = () => {
  const [countDown, setCountDown] = useState(
    durationToCountdown(durationTillWedding())
  )
  useEffect(() => {
    const countDownTimer = setInterval(() => {
      setCountDown(
        durationToCountdown(durationTillWedding())
      )
    }, 1000)

    return () => {
      clearInterval(countDownTimer)
    }
  })

  return {
    countDown
  }
}

export default useCountdown