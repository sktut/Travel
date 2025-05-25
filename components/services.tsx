"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Clock, Shield, Users, MapPin, Headphones, Star } from "lucide-react"

const services = [
  {
    icon: Clock,
    title: "24/7 Service",
    description: "Round-the-clock availability for all your travel needs. Book anytime, anywhere.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description: "All our vehicles are comprehensively insured for your safety and peace of mind.",
    color: "from-blue-500 to-purple-500",
  },
  {
    icon: Users,
    title: "Professional Drivers",
    description: "Experienced and courteous drivers who know Patna and surrounding areas well.",
    color: "from-green-500 to-teal-500",
  },
  {
    icon: MapPin,
    title: "GPS Tracking",
    description: "Real-time tracking and navigation for safe and efficient journeys.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description: "Dedicated customer support team to assist you throughout your journey.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Star,
    title: "Premium Quality",
    description: "Well-maintained vehicles with regular servicing and quality checks.",
    color: "from-yellow-500 to-orange-500",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Why Choose Us?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide exceptional car rental services with a focus on safety, comfort, and reliability. Experience the
            difference with Travellers Choice Patna.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">500+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">50+</div>
            <div className="text-gray-600">Premium Cars</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-600">Service Available</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">5★</div>
            <div className="text-gray-600">Customer Rating</div>
          </div>
        </div>
      </div>
    </section>
  )
}
