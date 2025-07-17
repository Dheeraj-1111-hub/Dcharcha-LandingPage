import React from 'react'
import Header from './components/LandingPage/Navbar'
import HeroSection from './components/LandingPage/HeroSection'
import ParticipationSection from './components/LandingPage/FeaturesCards'
import HowItWorksSection from './components/LandingPage/HowItWorks'
import TakeDemocracySection from './components/LandingPage/Download'
import TestimonialsSection from './components/LandingPage/Testimonials'
import Footer from './components/LandingPage/Footer'
import ContactSection from './components/LandingPage/Contact'

const App = () => {
  return (
    <div className="bg-gradient-to-br from-gray-950 to-gray-950 text-white min-h-screen">
      <Header />
      <HeroSection />
      <ParticipationSection />
      <HowItWorksSection />
      <TakeDemocracySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
