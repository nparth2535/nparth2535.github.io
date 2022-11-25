import React from 'react'
import Header from './components/header/header.jsx'
import Nav from './components/navigation/Navigation.jsx'
import Experience from './components/experience/experience.jsx'
import About from './components/about/about.jsx'
import Services from './components/services/services.jsx'
import Portfolio from './components/portfolio/portfolio.jsx'
import Testimonials from './components/testimonial/testimonial.jsx'
import Contact from './components/contact/Contact.jsx'
import Footer from './components/footer/footer.jsx'


const App = () => {
  return (
    <>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Services/>
        <Portfolio/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default App