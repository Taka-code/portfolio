import React from 'react'
import Header from './Component/Header/Header'
import Home from './Component/Takahiro/Home'
import Features from "./Component/Features/Features"
import Portfolio from "./Component/Portfolio/Portfolio"
import Resume from './Component/Resume/Resume'
import Testimonial from './Component/Testimonial/Testimonial'
import Contact from './Component/Contact/Contact'

import "./App.css"

export const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Features />
      <Portfolio />
      <Resume />
      {/* <Testimonial /> */}
      <Contact />
    </>
  )
}

export default App