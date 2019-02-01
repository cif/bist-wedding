import { useState } from 'react'
import firebase from '../firebase'

const rsvpEffect = () => {
  const [names, setNames] = useState('')
  const [rsvpInFlight, setRsvpInFlight] = useState(false)
  const [rsvpMessage, setRsvpMessage] = useState(false)
  const updateFirebase = (goingOrNotGoing, message) => {
    setTimeout(() => {
      firebase
      .database()
      .ref(`${goingOrNotGoing}/${names}`)
      .set(goingOrNotGoing)
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
    guestCanGo,
    guestCannotGo,
    rsvpInFlight,
    rsvpMessage
  }
}

export default rsvpEffect