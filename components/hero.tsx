"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react"

export default function Hero() {
  const [bookingData, setBookingData] = useState({
    pickupLocation: "",
    dropLocation: "",
    pickupDate: "",
    pickupTime: "",
    returnDate: "",
    returnTime: "",
    passengers: "1",
  })

  const handleBooking = () => {
    const subject = "Car Rental Booking Request"
    const body = `
Dear Travellers Choice Patna Team,

I would like to book a car with the following details:

Pickup Location: ${bookingData.pickupLocation}
Drop Location: ${bookingData.dropLocation}
Pickup Date: ${bookingData.pickupDate}
Pickup Time: ${bookingData.pickupTime}
Return Date: ${bookingData.returnDate}
Return Time: ${bookingData.returnTime}
Number of Passengers: ${bookingData.passengers}

Please confirm the availability and send me the booking details.

Thank you!
    `

    window.location.href = `mailto:info@travellerschoicepatna.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Premium Car Rental
              </span>
              <br />
              <span className="text-gray-800">in Patna</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Experience luxury and comfort with our premium fleet of cars. From economy to luxury vehicles, we have the
              perfect ride for every journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3"
              >
                Explore Fleet
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-3"
              >
                Call Now: +91 9876543210
              </Button>
            </div>
          </div>

          {/* Right content - Booking form */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Book Your Ride</h3>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-orange-500" />
                    <input
                      type="text"
                      placeholder="Pickup Location"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      value={bookingData.pickupLocation}
                      onChange={(e) => setBookingData({ ...bookingData, pickupLocation: e.target.value })}
                    />
                  </div>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-red-500" />
                    <input
                      type="text"
                      placeholder="Drop Location"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      value={bookingData.dropLocation}
                      onChange={(e) => setBookingData({ ...bookingData, dropLocation: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-5 w-5 text-orange-500" />
                    <input
                      type="date"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      value={bookingData.pickupDate}
                      onChange={(e) => setBookingData({ ...bookingData, pickupDate: e.target.value })}
                    />
                  </div>
                  <div className="relative">
                    <Clock className="absolute left-3 top-3 h-5 w-5 text-orange-500" />
                    <input
                      type="time"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      value={bookingData.pickupTime}
                      onChange={(e) => setBookingData({ ...bookingData, pickupTime: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-5 w-5 text-red-500" />
                    <input
                      type="date"
                      placeholder="Return Date"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      value={bookingData.returnDate}
                      onChange={(e) => setBookingData({ ...bookingData, returnDate: e.target.value })}
                    />
                  </div>
                  <div className="relative">
                    <Clock className="absolute left-3 top-3 h-5 w-5 text-red-500" />
                    <input
                      type="time"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      value={bookingData.returnTime}
                      onChange={(e) => setBookingData({ ...bookingData, returnTime: e.target.value })}
                    />
                  </div>
                </div>

                <div className="relative">
                  <Users className="absolute left-3 top-3 h-5 w-5 text-orange-500" />
                  <select
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    value={bookingData.passengers}
                    onChange={(e) => setBookingData({ ...bookingData, passengers: e.target.value })}
                  >
                    <option value="1">1 Passenger</option>
                    <option value="2">2 Passengers</option>
                    <option value="3">3 Passengers</option>
                    <option value="4">4 Passengers</option>
                    <option value="5">5+ Passengers</option>
                  </select>
                </div>

                <Button
                  onClick={handleBooking}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 text-lg font-semibold"
                >
                  Send Booking Request
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
