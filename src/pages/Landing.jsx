import React from "react"

import "../styles/Landing.css"
import Nature from "../images/Nature"

const Landing = () => {
  return (
    <div className="landing">
      <h1 className="primary header">Welcome!</h1>
      <hr className="primary header" />
      <section className="light-section">
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            pellentesque ultricies urna.
          </p>
        </div>
        <Nature />
      </section>
      <section className="dark-section">
        <Nature />
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            pellentesque ultricies urna.
          </p>
        </div>
      </section>
      <section className="light-section">
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            pellentesque ultricies urna.
          </p>
        </div>
        <Nature />
      </section>
    </div>
  )
}

export default Landing
