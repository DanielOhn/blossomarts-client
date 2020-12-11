import React from "react"

import "../assets/main.css"
import Nature from "../images/Nature"

const Landing = () => {
  return (
    <div className="container mx-auto m-4">
      <h1 className="text-4xl font-semibold text-gray-900">Welcome!</h1>
      <hr className="" />
      <section className="flex flex-row flex-nowrap justify-center p-2 m-4">
        <div className="self-center max-w-md">
          <p className="text-gray-800 text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            pellentesque ultricies urna.
          </p>
        </div>
        <Nature />
      </section>
      <section className="mx-auto flex flex-row flex-nowrap justify-center p-2 m-4">
        <Nature />
        <div className="self-center max-w-md">
          <p className="text-gray-800 text-right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            pellentesque ultricies urna.
          </p>
        </div>
      </section>
      <section className="mx-auto flex flex-row flex-nowrap justify-center p-2 m-4">
        <div className="self-center max-w-md">
          <p className="text-gray-800 text-left">
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
