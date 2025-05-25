"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Fuel, Settings, Star } from "lucide-react"

const cars = [
  {
    id: 1,
    name: "Toyota Innova Crysta",
    category: "Premium SUV",
    price: "₹12/km",
    image: "/placeholder.svg?height=200&width=300",
    passengers: 7,
    fuel: "Diesel",
    transmission: "Manual/Auto",
    rating: 4.8,
    features: ["AC", "GPS", "Music System", "Comfortable Seating"],
  },
  {
    id: 2,
    name: "Mercedes-Benz",
    category: "Luxury Sedan",
    price: "₹25/km",
    image: "/placeholder.svg?height=200&width=300",
    passengers: 4,
    fuel: "Petrol",
    transmission: "Automatic",
    rating: 4.9,
    features: ["Premium AC", "Leather Seats", "Premium Sound", "Luxury Interior"],
  },
  {
    id: 3,
    name: "Audi A4",
    category: "Luxury Sedan",
    price: "₹22/km",
    image: "/placeholder.svg?height=200&width=300",
    passengers: 4,
    fuel: "Petrol",
    transmission: "Automatic",
    rating: 4.8,
    features: ["Climate Control", "Premium Audio", "Sunroof", "Sport Mode"],
  },
  {
    id: 4,
    name: "BMW 3 Series",
    category: "Luxury Sedan",
    price: "₹24/km",
    image: "/placeholder.svg?height=200&width=300",
    passengers: 4,
    fuel: "Petrol",
    transmission: "Automatic",
    rating: 4.9,
    features: ["Sport Seats", "Premium Sound", "Navigation", "Luxury Finish"],
  },
  {
    id: 5,
    name: "Honda City",
    category: "Compact Sedan",
    price: "₹8/km",
    image: "/placeholder.svg?height=200&width=300",
    passengers: 4,
    fuel: "Petrol",
    transmission: "Manual/Auto",
    rating: 4.6,
    features: ["AC", "Music System", "Comfortable", "Fuel Efficient"],
  },
  {
    id: 6,
    name: "Maruti Swift",
    category: "Hatchback",
    price: "₹6/km",
    image: "/placeholder.svg?height=200&width=300",
    passengers: 4,
    fuel: "Petrol",
    transmission: "Manual/Auto",
    rating: 4.5,
    features: ["AC", "Music System", "Compact", "Economic"],
  },
]

export default function CarFleet() {
  const handleBookCar = (carName: string, price: string) => {
    const subject = `Car Booking Request - ${carName}`
    const body = `
Dear Travellers Choice Patna Team,

I would like to book the ${carName} at ${price}.

Please provide me with:
- Availability details
- Complete pricing information
- Terms and conditions
- Pickup arrangements

Thank you!
    `

    window.location.href = `mailto:info@travellerschoicepatna.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="cars" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Our Premium Fleet
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our wide range of well-maintained vehicles, from economy cars to luxury sedans. All our cars
            come with professional drivers and comprehensive insurance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <Card
              key={car.id}
              className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={car.image || "/placeholder.svg"}
                  alt={car.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {car.category}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold">{car.rating}</span>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{car.name}</h3>
                <div className="text-2xl font-bold text-orange-600 mb-4">{car.price}</div>

                <div className="grid grid-cols-3 gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4 text-orange-500" />
                    <span>{car.passengers}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Fuel className="h-4 w-4 text-orange-500" />
                    <span>{car.fuel}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Settings className="h-4 w-4 text-orange-500" />
                    <span className="text-xs">{car.transmission}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {car.features.map((feature, index) => (
                      <span key={index} className="text-xs bg-orange-50 text-orange-700 px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <Button
                  onClick={() => handleBookCar(car.name, car.price)}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
