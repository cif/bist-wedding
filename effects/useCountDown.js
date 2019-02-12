import { useState, useEffect } from 'react'
import moment from 'moment'

const useCountdown = () => {
  const weddingDate = 1568502900
  const rightNow = moment(new Date()).unix()
  const duration = moment.duration((weddingDate - rightNow) * 1000)

  const [countDown, setCountDown] = useState(`
    ${duration.months()} months,
    ${duration.days()} days,
    ${duration.hours()} hours,
    ${duration.minutes()} minutes,
    ${duration.seconds()} seconds
  `)
  useEffect(() => {
    const countDownTimer = setInterval(() => {
      const weddingDate = 1568502900
      const rightNow = moment(new Date()).unix()
      const duration = moment.duration((weddingDate - rightNow) * 1000)
      setCountDown(`
        ${duration.months()} months,
        ${duration.days()} days,
        ${duration.hours()} hours,
        ${duration.minutes()} minutes,
        ${duration.seconds()} seconds
      `)
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