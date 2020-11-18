import React, { useState, useEffect } from "react"

import "../styles/Payment.css"

import CheckoutForm from "../components/CheckoutForm"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISH_KEY)

function Payment() {
  const [secret, setSecret] = useState()
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
        console.log(data)
        setSecret(data.clientSecret)
        setSession(data.sessionID)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className="payment-intent">
      {secret && (
        <div className="payment">
          <h1 className="primary">Payment</h1>
          <hr className="primary" />
          <Elements stripe={stripePromise}>
            <CheckoutForm secret={secret} />
          </Elements>
        </div>
      )}
    </div>
  )
}

export default Payment
