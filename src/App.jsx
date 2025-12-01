import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Employers from './pages/Employers'
import Candidates from './pages/Candidates'
import About from './pages/About'
import Contact from './pages/Contact'
import ScrollToTopButton from './components/ScrollToTopButton' 
import TermsOfService from './components/TermsOfService'
import PrivacyPolicy from './components/PrivacyPolicy'
import CookiePolicy from './components/CookiePolicy'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/employers" element={<Employers />} />
            <Route path="/candidates" element={<Candidates />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/cookies" element={<CookiePolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <ScrollToTopButton />
    </Router>
  )
}
export default App