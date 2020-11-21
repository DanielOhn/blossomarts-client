import React, { useState, useEffect } from "react"

import "../styles/Payment.css"

// import CheckoutForm from "../components/CheckoutForm"
// import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISH_KEY)

function Payment() {
  const [error, setError] = useState(null)
  const [session, setSession] = useState()

  useEffect(() => {
    fetch(`http://localhost:3001/payment-intent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: localStorage.getItem("cart"),
    })
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setSession(data.sessionID)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const handleClick = async (event) => {
    const stripe = await stripePromise

    const result = stripe.redirectToCheckout({ sessionId: session })

    // return result
  }

  return (
    <div className="payment-intent">
      {error && (
        <div>
          <p>{error}</p>
        </div>
      )}
      <div className="payment">
        <h1 className="primary">Payment</h1>
        <hr className="primary" />

        <button onClick={handleClick}>Click ME!</button>
      </div>
    </div>
  )
}

export default Payment
