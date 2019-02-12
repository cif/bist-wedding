import useCountdown from './useCountdown'
import moment from 'moment'
import { testHook } from 'react-testing-library'
import '@babel/polyfill' // required for running async

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

describe('effects/useCountdown', () => {
  moment.duration = jest.fn()
    .mockReturnValueOnce({
      months: () => '1',
      days: () => '1',
      hours: () => '1',
      minutes: () => '1',
      seconds: () => '1'
    })
    .mockReturnValue({
      months: () => '2',
      days: () => '2',
      hours: () => '2',
      minutes: () => '2',
      seconds: () => '2'
    })

  test('it should return initial countdown', () => {
    let countDown
    testHook(() => ({ countDown } = useCountdown()))
    expect(countDown.replace(/ /g, '')).toBe(`
      1 months,
      1 days,
      1 hours,
      1 minutes,
      1 seconds
    `.replace(/ /g,''))
  })

  test('it should update countdown at interval', async () => {
    let countDown
    testHook(() => ({ countDown } = useCountdown()))
    await sleep(1000)
    expect(countDown.replace(/ /g, '')).toBe(`
      2 months,
      2 days,
      2 hours,
      2 minutes,
      2 seconds
    `.replace(/ /g,''))
  })
})