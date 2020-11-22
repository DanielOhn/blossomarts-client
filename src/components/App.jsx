import React from "react"
import "../styles/App.css"

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
    <div className="App">
      <Router>
        <div className="logo">
          <img alt="Background cover" className="logo-image" src={logo} />
        </div>
        <div className="navbar">
          <ul className="nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/checkout">Checkout</Link>
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
