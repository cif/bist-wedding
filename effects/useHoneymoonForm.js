import { useState } from 'react'

const useHoneymoonForm = () => {
  const [amount, setAmount] = useState(1000)
  const [isProcessing, setIsProcessing] = useState()
  const updateInputAmount = (input) => {
    setAmount(Number(input))
  }
  const onStripeToken = () => {
    console.log('got token!', token)
  } 
  return {
    amount,
    updateInputAmount,
    onStripeToken  
  }
}

export default useHoneymoonForm