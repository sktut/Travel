"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail, User } from "lucide-react"

interface HeaderProps {
  onLoginClick: () => void
}

export default function Header({ onLoginClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm border-b border-orange-100">
          <div className="flex items-center space-x-4 text-gray-600">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4 text-orange-500" />
              <span>+91 9876543210</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4 text-orange-500" />
              <span>info@travellerschoicepatna.com</span>
            </div>
          </div>
          <div className="text-orange-600 font-medium">🚗 Best Car Rental Service in Patna</div>
        </div>

        {/* Main header */}
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">TC</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Travellers Choice
              </h1>
              <p className="text-sm text-gray-600">Patna</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Home
            </a>
            <a href="#cars" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Our Fleet
            </a>
            <a href="#services" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Services
            </a>
            <a href="#about" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              onClick={onLoginClick}
              variant="outline"
              className="hidden md:flex items-center space-x-2 border-orange-500 text-orange-600 hover:bg-orange-50"
            >
              <User className="h-4 w-4" />
              <span>Login</span>
            </Button>
            <Button className="hidden md:block bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
              Book Now
            </Button>

            {/* Mobile menu button */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-orange-100">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-orange-600 font-medium">
                Home
              </a>
              <a href="#cars" className="text-gray-700 hover:text-orange-600 font-medium">
                Our Fleet
              </a>
              <a href="#services" className="text-gray-700 hover:text-orange-600 font-medium">
                Services
              </a>
              <a href="#about" className="text-gray-700 hover:text-orange-600 font-medium">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 font-medium">
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button
                  onClick={onLoginClick}
                  variant="outline"
                  className="border-orange-500 text-orange-600 hover:bg-orange-50"
                >
                  Login
                </Button>
                <Button className="bg-gradient-to-r from-orange-500 to-red-500 text-white">Book Now</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
