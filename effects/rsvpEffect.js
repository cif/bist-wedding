import { useState } from 'react'
import firebase from '../firebase'

const rsvpEffect = () => {
  const [names, setNames] = useState('')
  const [guests, setGuests] = useState('2')
  const [rsvpInFlight, setRsvpInFlight] = useState(false)
  const [rsvpMessage, setRsvpMessage] = useState(false)

  const updateGuestCount = () =>
    firebase
      .database()
      .ref('/guestCount')
      .transaction(
        (count) => count + Number(guests)
      ).catch(() => {
        setRsvpInFlight(false)
        setRsvpMessage('Oh no! Something went wrong. Sorry. Please refresh and try again.')
      })

  const updateFirebase = (goingOrNotGoing, message) => {
    setTimeout(() => {
      firebase
      .database()
      .ref(`${goingOrNotGoing}/${names}`)
      .set({
        names,
        guests
      })
      .then(() => {
        setRsvpInFlight(false)
        setRsvpMessage(message)
      })
      .catch(() => {
        setRsvpInFlight(false)
        setRsvpMessage('Oh no! Something went wrong. Sorry. Please refresh and try again.')
      })
    }, 2000) // wait a few to keep the suspense
  }

  const guestCanGo = () => {
    if (names === '') return
    setRsvpInFlight(true)
    updateFirebase(
      'going',
      'Thank you! Look forward to having you with us!'
    )
    updateGuestCount()
  }
  const guestCannotGo = () => {
    setRsvpInFlight(true)
    if (names === '') return
    updateFirebase(
      'notgoing',
      'Sorry to hear, but we get it. You will be missed!'
    )
  }

  return {
    names,
    setNames,
    guests,
    setGuests,
    guestCanGo,
    guestCannotGo,
    rsvpInFlight,
    rsvpMessage
  }
}

export default rsvpEffect