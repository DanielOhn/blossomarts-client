import React from "react"
// import "../styles/App.css"
import "../assets/main.css"

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

import logo from "../images/ba-logo.png"

import Landing from "../pages/Landing"
import Contact from "../pages/Contact"
import Product from "../components/Product"
import Products from "../pages/Products"
import Checkout from "../pages/Checkout"
import Footer from "../components/Footer"
import Success from "../pages/Success"
import NotFound from "../pages/NotFound"
import Cancel from "../pages/Cancel"

function App() {
  return (
    <div className="container mx-auto">
      <Router>
        <div className="p-8 flex justify-center">
          <img alt="Background cover" className="h-72" src={logo} />
        </div>
        <div className="mx-auto w-96">
          <ul className="flex flex-row flex-no-wrap justify-evenly p-2">
            <li>
              <Link
                className="pt-2 pb-2 pl-4 pr-4 bg-blue-400 text-white rounded"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="pt-2 pb-2 pl-4 pr-4 bg-blue-400 text-white rounded"
                to="/contact"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                className="pt-2 pb-2 pl-4 pr-4 bg-blue-400 text-white rounded"
                to="/products"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                className="pt-2 pb-2 pl-4 pr-4 bg-blue-400 text-white rounded"
                to="/checkout"
              >
                Checkout
              </Link>
            </li>
          </ul>
        </div>
        <div className="content">
          <Switch>
            <Route path="/" exact render={() => <Landing />} />
            <Route path="/checkout" exact render={() => <Checkout />} />
            <Route path="/contact" exact render={() => <Contact />} />
            <Route path="/products" exact component={Products} />
            <Route
              path="/products/:id"
              exact
              render={(props) => <Product {...props} />}
            />
            <Route path="/success" exact render={() => <Success />} />
            <Route path="/cancel" exact render={() => <Cancel />} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  )
}

export default App
