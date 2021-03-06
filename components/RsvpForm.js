import React from 'react'
import useRsvpForm from '../effects/useRsvpForm'


const RsvpMessage = ({ message }) => (
  <div>
    <style jsx>
      {`
        h1 {
          margin: 55px;
          font-size: 40px;
        }
      `}
    </style>
    <h1>{message}</h1>
  </div>
)

const RsvpLoading = () => (
  <div>
    <style jsx>
      {`
        h1 {
          margin: 55px;
          font-size: 40px;
        }
      `}
    </style>
    <h1>Saving your response in our fancy pants system...</h1>
  </div>
)

const RsvpForm = () => {
  const {
    names,
    setNames,
    guests,
    setGuests,
    guestCanGo,
    guestCannotGo,
    rsvpInFlight,
    rsvpMessage
  } = useRsvpForm()

  if (rsvpInFlight) {
    return <RsvpLoading />
  }

  if (rsvpMessage) {
    return <RsvpMessage message={rsvpMessage} />
  }

  return (
    <div className="rsvpWrapper">
      <style jsx>
      {`
        .rsvpWrapper {
          width: 100%;
          margin: 10px;
        }
        .rsvpWrapper p {
          font-size: 28px;
        }
        input, select {
          border: none;
          padding: 20px 30px;
          width: 80%;
          font-family: urbane-rounded, sans-serif;
          border-radius:  2px;
          font-size: 30px;
          margin: 15px 0;
          color: #696969;
        }
        select {
          width: 50px;
          display: inline-block;
          margin-left: 14px;
          font-size: 18px;
        }

        button {
          background-color: #BDFFF7;
          color: #295b7c;
          padding: 10px 25px;
          font-size: 25px;
          border: none;
          border-radius: 5px;
          urbane-rounded, sans-serif;
          margin: 5px;
          cursor: pointer;
        }
        textarea:focus, input:focus{
          outline: none;
        }
        h1, p {
          line-height: 35px;
        }
        .rsvpWrapper p.guestsLabel {
          font-size: 16px !important;
          font-weight: bold;
        }
        .rsvpWrapper p.noKidsSorry {
          font-size: 13px !important;
          line-height: 19px;
        }

        @media only screen and (max-width: 900px)  {
          button, input, select {
            width: 90%;
            margin: 5px 0;
            padding: 20px 3%;
            font-size: 15px;
          }
          select {
            width: 96%;
            margin: 0;
            margin-top: 20px;
            margin-bottom: -20px;
            padding: 10px;
            height: 50px;
          }
          button {
            width: 95%
          }
        }

      `}
      </style>
      <p>Please <b>RSVP</b> to our wedding</p>
      <p className="guestsLabel">
         *How many guests are you responding for?
         <select onChange={(e) => setGuests(e.target.value)} defaultValue={guests}>
           <option value="1">1</option>
           <option value="2">2</option>
         </select>
      </p>
      <input
        type="text"
        placeholder="Your name(s)"
        value={names}
        onChange={(e) => setNames(e.target.value)}
      />
      <button onClick={guestCanGo}>Seriously Can't Wait</button>
      <button onClick={guestCannotGo}>Sorry Can't Make It</button>
      <p className="noKidsSorry">*Sorry, due to limited venue capacity we are unable to host additional family.<br />Well behaved infants (two years old and younger) are welcome.</p>
    </div>
  )
}

export default RsvpForm