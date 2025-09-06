import React from 'react';
import { MapPin, Clock, Users, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import safariImage from '@/assets/hero-safari.jpg';
import beachImage from '@/assets/beach-paradise.jpg';
import luxuryImage from '@/assets/luxury-safari.jpg';

const FeaturedTours = () => {
  const tours = [
    {
      id: 1,
      title: "3-Day Maasai Mara Safari",
      description: "Witness breathtaking landscapes, encounter the Big Five, and experience unforgettable game drives in Kenya's most iconic reserve.",
      image: safariImage,
      price: "USD 970",
      duration: "3 Days",
      groupSize: "2-8 People",
      rating: 4.9,
      reviews: 127,
      location: "Maasai Mara",
      highlights: ["Big Five Viewing", "Great Migration", "Cultural Experience"],
      badge: "Best Seller"
    },
    {
      id: 2,
      title: "4-Day Diani Beach Paradise",
      description: "Unwind along pristine white sands, soak in turquoise waters, and indulge in luxury beachfront accommodations.",
      image: beachImage,
      price: "USD 450",
      duration: "4 Days",
      groupSize: "2-12 People",
      rating: 4.8,
      reviews: 89,
      location: "Diani Beach",
      highlights: ["White Sand Beaches", "Snorkeling", "Sunset Cruises"],
      badge: "Popular"
    },
    {
      id: 3,
      title: "5-Day Luxury Safari Experience",
      description: "Discover Amboseli's elephants with Kilimanjaro views, plus exclusive access to private conservancies and luxury lodges.",
      image: luxuryImage,
      price: "USD 1,850",
      duration: "5 Days",
      groupSize: "2-6 People",
      rating: 5.0,
      reviews: 45,
      location: "Amboseli & Tsavo",
      highlights: ["Luxury Lodges", "Private Game Drives", "Mt. Kilimanjaro Views"],
      badge: "Premium"
    }
  ];

  return (
    <section id="safaris" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured 
            <span className="text-accent"> Adventures</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Handpicked experiences that showcase the very best of Kenya's wildlife, 
            beaches, and cultural heritage.
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <Card 
              key={tour.id}
              className="overflow-hidden hover-lift shadow-brand group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Tour Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Badge */}
                <Badge className="absolute top-4 left-4 bg-accent text-white">
                  {tour.badge}
                </Badge>
                
                {/* Price */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                  <span className="text-primary font-bold text-lg">
                    {tour.price}
                  </span>
                  <div className="text-xs text-muted-foreground">per person</div>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Tour Title & Rating */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {tour.title}
                  </h3>
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium text-sm">{tour.rating}</span>
                    </div>
                    <span className="text-muted-foreground text-sm">({tour.reviews} reviews)</span>
                  </div>
                </div>

                {/* Tour Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{tour.location}</span>
                  </div>
                  <div className="flex items-center space-x-4 text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{tour.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4" />
                      <span className="text-sm">{tour.groupSize}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {tour.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {tour.highlights.map((highlight, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Button className="w-full bg-primary hover:bg-primary/90 group-hover:shadow-glow transition-all">
                  Book This Adventure
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Tours CTA */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4"
            onClick={() => {
              // Scroll to services section or contact for more tours
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            View All Tours & Packages
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;