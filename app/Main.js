import "./styles/main.scss"
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Components
import Header from "./components/Header"
import Home from "./components/Home"
import HouseHold from "./components/HouseHold"
import Member from "./components/Member"
import ScrollToTop from "./components/ScrollToTop"
import Footer from "./components/Footer"

function Main() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/house-hold" element={<HouseHold />} />
        <Route path="/member" element={<Member />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.querySelector("#app"))
root.render(<Main />)

if (module.hot) {
  module.hot.accept()
}
