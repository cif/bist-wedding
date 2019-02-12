import useRsvpForm, { counterTransaction } from './useRsvpForm'
import { testHook, cleanup, wait } from 'react-testing-library'
import firebase from '../firebase'
import '@babel/polyfill' // required for running async

// mock firebase - no bulky libs!
const mockSet = jest.fn()
const mockTransaction = jest.fn()
const mockRef = jest.fn()
jest.mock('../firebase', () => ({
  database: () => ({
    ref: (ref) => ({
      set: mockSet,
      transaction: mockTransaction,
      ref: mockRef(ref)
    })
  })
}))

describe('effects/useRsvpForm', () => {
  afterEach(() => {
    mockSet.mockReset()
    mockTransaction.mockReset()
    mockRef.mockReset()
    cleanup()
  })

  test('it should return correct initial state and update fns', () => {
    let names,
      setNames,
      guests,
      setGuests,
      rsvpInFlight,
      rsvpMessage

    testHook(() => ({
      names,
      setNames,
      guests,
      setGuests,
      rsvpInFlight,
      rsvpMessage
    } = useRsvpForm()))

    expect(names).toBe('')
    setNames('foo')
    expect(names).toBe('foo')
    expect(guests).toBe('2')
    setGuests('3')
    expect(guests).toBe('3')
    expect(rsvpInFlight).toBe(false)
    expect(rsvpMessage).toBe('')
  })

  describe('guestCanGo', () => {
    test('it should return when names is empty', () => {
      let guestCanGo,
        rsvpInFlight

      testHook(() => ({
        guestCanGo,
        rsvpInFlight
      } = useRsvpForm()))
      guestCanGo()
      expect(rsvpInFlight).toBe(false)
    })

    test('it should update firebase with guest info', async () => {
      let guestCanGo,
        rsvpInFlight,
        setNames,
        rsvpMessage

        testHook(() => ({
        guestCanGo,
        rsvpInFlight,
        setNames,
        rsvpMessage
      } = useRsvpForm()))

      mockTransaction.mockResolvedValue(true)
      mockSet.mockResolvedValue(true)

      setNames('Dave+Martha')
      guestCanGo()
      expect(rsvpInFlight).toBe(true)
      expect(mockRef).toHaveBeenCalledWith('/guestCount')
      await wait(() => {
        expect(mockRef).toHaveBeenCalledWith('going/Dave+Martha')
        expect(rsvpInFlight).toBe(false)
        expect(rsvpMessage).toContain('Thank you')
      })
    })

    test('it should set errors when firebase fails', async () => {
      let guestCanGo,
      rsvpInFlight,
      setNames,
      rsvpMessage

      testHook(() => ({
        guestCanGo,
        rsvpInFlight,
        setNames,
        rsvpMessage
      } = useRsvpForm()))

      mockTransaction.mockResolvedValue(true)
      mockSet.mockRejectedValue(true)

      setNames('Dave+Martha#.$[]')
      guestCanGo()
      expect(rsvpInFlight).toBe(true)
      expect(mockRef).toHaveBeenCalledWith('/guestCount')
      await wait(() => {
        expect(rsvpInFlight).toBe(false)
        expect(rsvpMessage).toContain('Oh no')
      })
    })
  })
  describe('guestCannotGo', () => {
    test('it should return when names is empty', () => {
      let guestCannotGo,
        rsvpInFlight

      testHook(() => ({
        guestCannotGo,
        rsvpInFlight
      } = useRsvpForm()))
      guestCannotGo()
      expect(rsvpInFlight).toBe(false)
    })

    test('it should update firebase with guest info', async () => {
      let guestCannotGo,
        setNames,
        rsvpMessage

        testHook(() => ({
        guestCannotGo,
        setNames,
        rsvpMessage
      } = useRsvpForm()))

      mockTransaction.mockResolvedValue(true)
      mockSet.mockResolvedValue(true)

      setNames('Billy+Sue')
      guestCannotGo()
      await wait(() => {
        expect(mockRef).toHaveBeenCalledWith('notgoing/Billy+Sue')
        expect(rsvpMessage).toContain('Sorry')
      })
    })
  })

  test('it should set errors when guest count transactions fail', async () => {
    let guestCanGo,
    rsvpInFlight,
    setNames,
    rsvpMessage

    testHook(() => ({
      guestCanGo,
      rsvpInFlight,
      setNames,
      rsvpMessage
    } = useRsvpForm()))

    mockTransaction.mockRejectedValue('Boom!')
    mockSet.mockResolvedValue(true)

    setNames('Dave+Martha#.$[]')
    guestCanGo()
    expect(rsvpInFlight).toBe(true)
    expect(mockRef).toHaveBeenCalledWith('/guestCount')
    await wait(() => {
      expect(rsvpInFlight).toBe(false)
      expect(rsvpMessage).toContain('Oh no')
    })
  })

  describe('counterTransaction', () => {
    test('increments current count by casted guest count', () => {
      expect(
        counterTransaction('2')(1)
      ).toBe(3)
    })
  })
})