"use client"

import { useState } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import CarFleet from "@/components/car-fleet"
import Services from "@/components/services"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"
import LoginModal from "@/components/login-modal"

export default function HomePage() {
  const [isLoginOpen, setIsLoginOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      <Header onLoginClick={() => setIsLoginOpen(true)} />
      <Hero />
      <CarFleet />
      <Services />
      <About />
      <Contact />
      <Footer />
      <Chatbot />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  )
}
