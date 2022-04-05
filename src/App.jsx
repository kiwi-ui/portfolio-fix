import React from 'react'
import Header from './Components/Header/Header'
import Navigation from './Components/Navigation/Navigation'
import About from './Components/About/About' 
import Experience from './Components/Experience/Experience'
import Services from './Components/Services/Services'
import Portofolio from './Components/Portofolio/Portofolio'
// import Testi from './Components/Testi/Testi'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Navigation />
      <About />
      <Experience />
      <Services />
      <Portofolio />
      {/* <Testi /> */}
      <Contact />
      <Footer />

    </>
  )
}

export default App