import React from 'react'
import rsvpEffect from '../effects/rsvpEffect'


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
    guestCanGo,
    guestCannotGo,
    rsvpInFlight,
    rsvpMessage
  } = rsvpEffect()
  
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
        input {
          border: none;
          padding: 20px 30px;
          width: 80%;
          font-family: urbane-rounded, sans-serif;
          border-radius:  2px;
          font-size: 30px;
          margin: 15px 0;
          color: #9a9a9a;
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
        @media only screen and (max-width: 900px)  {
          button, input {
            width: 90%;
            margin: 5px 0;
            padding: 5%;
            font-size: 15px;
          }
          button {
            width: 95%
          }
        }
      `}
      </style>
      <p>Please <b>RSVP</b> to our wedding ASAP! <br />
      Just enter your name(s) and select your response.</p>
      <input 
        type="text" 
        placeholder="Your name(s)" 
        value={names} 
        onChange={(e) => setNames(e.target.value)} 
      />
      <button onClick={guestCanGo}>Seriously Can't Wait</button>
      <button onClick={guestCannotGo}>Sorry Can't Make It</button>
    </div>
  )
}

export default RsvpForm