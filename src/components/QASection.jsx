import React from "react"

import "../assets/main.css"

const QASection = (props) => {
  return (
    <div className="pb-4">
      <h3 className="font-semibold text-xl text-gray-900">{props.question}</h3>
      <p className="text-gray-800">{props.answer}</p>
    </div>
  )
}

export default QASection
