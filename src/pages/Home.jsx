import React from 'react'
import Hero from '../components/Hero'
import Industries from '../components/Industries'
import Benefits from '../components/Benefits'
import ContactForm from '../components/ContactForm'
import ScrollToTopButton from '../components/ScrollToTopButton'
import PopupBanner from '../components/PopupBanner'

const Home = () => {
  return (
    <div>
      <PopupBanner />
      <Hero />
      <Industries />
      <Benefits />
      <ContactForm />
      <ScrollToTopButton />
    </div>
  )
}

export default Home