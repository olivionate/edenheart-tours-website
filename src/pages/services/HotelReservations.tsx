import React from 'react';
import { ArrowLeft, Hotel, MapPin, Star, Users, CheckCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import hotelsDetailImage from '@/assets/hotels-detail.jpg';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const HotelReservations = () => {
  const navigate = useNavigate();

  const hotelCategories = [
    {
      title: "Luxury Hotels & Resorts",
      description: "5-star accommodations with world-class amenities",
      features: ["Premium locations", "Full-service spas", "Fine dining restaurants", "Concierge services"]
    },
    {
      title: "Business Hotels",
      description: "Perfect for corporate travelers and conferences",
      features: ["Meeting facilities", "Business centers", "High-speed WiFi", "Airport proximity"]
    },
    {
      title: "Safari Lodges",
      description: "Authentic African hospitality in wildlife areas",
      features: ["Game viewing decks", "Cultural experiences", "All-inclusive packages", "Expert guides"]
    }
  ];

  const destinations = [
    "Nairobi", "Mombasa", "Kisumu", "Nakuru", "Maasai Mara", "Amboseli", 
    "Tsavo", "Samburu", "Mount Kenya", "Lake Naivasha"
  ];

  const features = [
    "Contract rates with all major hotel groups in Kenya and East Africa",
    "Competitive year-round offers and seasonal promotions",
    "Local expertise in accommodation selection",
    "Group booking discounts for 10+ rooms",
    "International hotel reservations worldwide",
    "Quality assurance and property inspections",
    "24/7 reservation support and modifications",
    "Best rate guarantee with price matching"
  ];

  const hotelPartners = [
    "Serena Hotels", "Fairmont", "Sarova Hotels", "Hemingways Collection",
    "Kempinski", "Villa Rosa Kempinski", "Trademark Hotel", "Best Western"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <img
            src={hotelsDetailImage}
            alt="Hotel Reservations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <Button
                variant="ghost"
                onClick={() => navigate('/')}
                className="mb-4 text-white hover:bg-white/20"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Hotel Reservations
              </h1>
              <p className="text-xl leading-relaxed">
                Premium accommodations at competitive rates across Kenya and worldwide
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Service Description */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Premium Hotel Booking Services
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Through our amicable business relationships with hotel chains in Kenya, East Africa, 
                  and worldwide, we offer competitive year-round rates for all categories of 
                  accommodations. From luxury resorts to budget-friendly options, we ensure our 
                  clients receive the best value for their investment.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Our extensive network of partner hotels allows us to secure negotiated rates that 
                  are often unavailable to individual travelers. Whether you need a single room for 
                  a business trip or group accommodations for a conference, we have the relationships 
                  and expertise to meet your needs.
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Info Card */}
              <div>
                <Card className="p-6 shadow-brand">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-bold text-foreground mb-6">Reservation Details</h3>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center space-x-3">
                        <Hotel className="h-5 w-5 text-accent" />
                        <span className="text-muted-foreground">500+ Partner Hotels</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-accent" />
                        <span className="text-muted-foreground">Kenya & Worldwide</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Users className="h-5 w-5 text-accent" />
                        <span className="text-muted-foreground">Individual & Group Bookings</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Star className="h-5 w-5 text-accent" />
                        <span className="text-muted-foreground">Best Rate Guarantee</span>
                      </div>
                    </div>

                    <Button 
                      className="w-full mb-4"
                      onClick={() => navigate('/#contact')}
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Request Hotel Quote
                    </Button>
                    
                    <Badge variant="secondary" className="w-full justify-center py-2">
                      Free consultation & recommendations
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Hotel Categories */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
                Accommodation Categories
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {hotelCategories.map((category, index) => (
                  <Card key={index} className="p-6 hover-lift shadow-brand">
                    <CardContent className="p-0">
                      <h4 className="text-xl font-bold text-foreground mb-3">{category.title}</h4>
                      <p className="text-muted-foreground mb-4">{category.description}</p>
                      <div className="space-y-2">
                        {category.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-accent" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Popular Destinations */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
                Popular Destinations
              </h3>
              <div className="bg-muted/30 rounded-2xl p-8">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                  {destinations.map((destination, index) => (
                    <div key={index} className="p-3 bg-background rounded-lg shadow-sm">
                      <span className="text-foreground font-medium">{destination}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Hotel Partners */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
                Partner Hotel Groups
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {hotelPartners.map((partner, index) => (
                  <Card key={index} className="p-4 text-center shadow-sm">
                    <CardContent className="p-0">
                      <span className="text-foreground font-medium">{partner}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-muted/30 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Find Your Perfect Accommodation
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let us help you find the ideal hotel for your stay. With our extensive network 
                and negotiated rates, we'll ensure you get the best value and perfect location.
              </p>
              <Button 
                size="lg"
                onClick={() => navigate('/#contact')}
              >
                Start Hotel Search
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HotelReservations;