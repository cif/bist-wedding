import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import useHoneymoonForm from '../effects/useHoneymoonForm'

const stripeKey = 'pk_test_V1rQVeovNntFhka0oVdsm3ze00EOWieRBK'

const HoneymoonForm = () => {
  const {
    amount,
    onStripeToken,
    updateInputAmount
  } = useHoneymoonForm()

  return (
    <div>
      <StripeCheckout
        stripeKey={stripeKey}
        amount={amount}
        token={onStripeToken}
        name='Ben + Sarah '
        description='Honeymoon Fund Gift'
      >
        <button>
          Contribute To Our Honeymoon Fund
        </button>
      </StripeCheckout>
    </div>
  )
}

export default HoneymoonForm



