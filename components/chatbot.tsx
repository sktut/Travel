"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { MessageCircle, X, Phone, Mail, MessageSquare, Star } from "lucide-react"

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const chatOptions = [
    {
      id: "contact",
      title: "Contact Us",
      icon: Phone,
      description: "Get in touch with our team",
      action: () => {
        window.location.href = "tel:+919876543210"
      },
    },
    {
      id: "query",
      title: "General Query",
      icon: MessageSquare,
      description: "Ask us anything about our services",
      action: () => {
        const subject = "General Query"
        const body = "Hi, I have a question about your car rental services. Please get back to me."
        window.location.href = `mailto:info@travellerschoicepatna.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      },
    },
    {
      id: "feedback",
      title: "Feedback",
      icon: Star,
      description: "Share your experience with us",
      action: () => {
        const subject = "Customer Feedback"
        const body = "I would like to share my feedback about your services:"
        window.location.href = `mailto:info@travellerschoicepatna.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      },
    },
    {
      id: "booking",
      title: "Booking Support",
      icon: Mail,
      description: "Need help with your booking?",
      action: () => {
        const subject = "Booking Support Request"
        const body = "I need assistance with my car rental booking. Please help me with:"
        window.location.href = `mailto:info@travellerschoicepatna.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      },
    },
  ]

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-2xl z-50 transition-all duration-300 ${isOpen ? "scale-0" : "scale-100"}`}
      >
        <MessageCircle className="h-8 w-8" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card
          className={`fixed bottom-6 right-6 w-80 md:w-96 bg-white shadow-2xl z-50 transition-all duration-300 ${isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
        >
          <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-t-lg">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold text-lg">Travellers Choice</h3>
                <p className="text-sm opacity-90">How can we help you?</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setIsOpen(false)
                  setSelectedOption(null)
                }}
                className="text-white hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="p-0 max-h-96 overflow-y-auto">
            {!selectedOption ? (
              <div className="p-4">
                <p className="text-gray-600 mb-4 text-center">Welcome! Choose an option below to get started:</p>
                <div className="space-y-3">
                  {chatOptions.map((option) => {
                    const IconComponent = option.icon
                    return (
                      <Button
                        key={option.id}
                        variant="outline"
                        className="w-full justify-start p-4 h-auto border-orange-200 hover:bg-orange-50 hover:border-orange-300"
                        onClick={() => setSelectedOption(option.id)}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                            <IconComponent className="h-5 w-5 text-white" />
                          </div>
                          <div className="text-left">
                            <div className="font-semibold text-gray-800">{option.title}</div>
                            <div className="text-sm text-gray-600">{option.description}</div>
                          </div>
                        </div>
                      </Button>
                    )
                  })}
                </div>
              </div>
            ) : (
              <div className="p-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedOption(null)}
                  className="mb-4 text-orange-600 hover:bg-orange-50"
                >
                  ← Back to options
                </Button>

                {selectedOption && (
                  <div className="space-y-4">
                    <div className="text-center">
                      <h4 className="font-bold text-lg text-gray-800 mb-2">
                        {chatOptions.find((opt) => opt.id === selectedOption)?.title}
                      </h4>
                      <p className="text-gray-600 mb-4">
                        {selectedOption === "contact" && "Call us directly or send an email for immediate assistance."}
                        {selectedOption === "query" && "Send us your questions and we'll get back to you promptly."}
                        {selectedOption === "feedback" && "We value your feedback! Let us know about your experience."}
                        {selectedOption === "booking" && "Need help with booking? We're here to assist you."}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <Button
                        onClick={() => chatOptions.find((opt) => opt.id === selectedOption)?.action()}
                        className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
                      >
                        {selectedOption === "contact" ? "Call Now" : "Send Email"}
                      </Button>

                      {selectedOption === "contact" && (
                        <Button
                          onClick={() => {
                            const subject = "Contact Request"
                            const body = "Hi, I would like to get in touch with your team. Please contact me."
                            window.location.href = `mailto:info@travellerschoicepatna.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
                          }}
                          variant="outline"
                          className="w-full border-orange-500 text-orange-600 hover:bg-orange-50"
                        >
                          Send Email Instead
                        </Button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </>
  )
}
