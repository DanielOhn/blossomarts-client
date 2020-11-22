import React from "react"
import "../styles/Contact.css"

import QASection from "../components/QASection"

function Contact() {
  // const [name, setName] = useState()
  // const [email, setEmail] = useState()
  // const [subject, setSubject] = useState()
  // const [content, setContent] = useState()

  function sendEmail() {
    fetch(`https://blossomarts-api.herokuapp.com/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="contact-page">
      <div className="faq">
        <h1 className="primary">FAQ</h1>
        <hr className="primary" />

        <div className="faq-section">
          <QASection
            question="Can I returned an item?"
            answer="All sales are final. If, you received a piece that is broken please contact me within 24 hours of receiving the product. If, I do accept the return you must pay for any shipping costs."
          />
          <QASection
            question="One of your products is out of stock.  When will you get more?"
            answer="Every piece is unique from one another, so within the next week or two a new piece will be created."
          />
          <QASection
            question="Can I order a custom piece?"
            answer="Yes! Just email me blossombyeve@gmail.com or send a message on on my Twitter or Instagram."
          />
        </div>
      </div>
      <div className="contact">
        <h1 className="primary">Contact Us</h1>
        <hr className="primary" />

        <p className="primary">
          We are constantly trying to improve our services and products for our
          customers. Any feedback on where we can improve, comments, and
          suggestions would be appreciated!
        </p>
        <form action="/contact" method="POST" className="contact-form">
          <input className="name" placeholder="Your Name" type="text" />
          <input className="email" placeholder="Your Email" type="text" />
          <textarea
            type="text"
            className="textbox"
            placeholder="We would love your feedback!"
          ></textarea>

          <input
            className="submit"
            type="submit"
            value="Submit"
            onClick={() => sendEmail}
          />
        </form>
      </div>
    </div>
  )
}

export default Contact
