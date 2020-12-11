import React from "react"
import QASection from "../components/QASection"

import "../assets/main.css"

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
    <div>
      <div>
        <h1 className="text-4xl font-semibold text-gray-900">FAQ</h1>
        <hr />

        <div>
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
      <div>
        <h1 className="text-4xl font-semibold text-gray-900">Contact Us</h1>
        <hr />

        <p className="text-gray-800">
          We are constantly trying to improve our services and products for our
          customers. Any feedback on where we can improve, comments, and
          suggestions would be appreciated!
        </p>
        <form action="/contact" method="POST" className="contact-form">
          <input
            className="name border-black border w-full p-2 rounded "
            id="name"
            placeholder="Your Name"
            type="text"
          />
          <input
            className="email border border-black w-full p-2 rounded"
            id="email"
            placeholder="Your Email"
            type="text"
          />
          <textarea
            className="textbox border w-full p-2 rounded border-black"
            type="text"
            id="textbox"
            placeholder="We would love your feedback!"
          ></textarea>

          <input
            className="submit bg-blue-400 p-4 rounded-xl text-white"
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
