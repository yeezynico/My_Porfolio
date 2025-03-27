import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Nav from './components/nav/navbar.jsx'
import Hero from './components/hero/hero.jsx'
import Biographie from './components/biographie/biographie.jsx'
import Projet from './components/projet/projet.jsx'
import Techno from './components/techno/techno.jsx'
import Contact from './components/form/contact.jsx'
import Footer from './components/footer/footer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='body-blue min-h-screen h-auto text-white font-tektur'>
      <Nav />
      <Hero />
      <Biographie />
      <Projet />
      <Techno />
      <Contact />
      <Footer />
    </div>
  </StrictMode>,
)
