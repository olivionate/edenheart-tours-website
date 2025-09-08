import React from 'react';
import { ArrowLeft, Presentation, Users, Mic, Wifi, CheckCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import conferenceDetailImage from '@/assets/conference-detail.jpg';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ConferenceFacilities = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Venue Selection & Booking",
      description: "Perfect locations for your corporate events",
      features: ["Hotels & lodges", "Convention centers", "Unique outdoor venues", "Capacity matching"]
    },
    {
      title: "Audio-Visual Equipment",
      description: "State-of-the-art technology for presentations",
      features: ["HD projectors & screens", "Sound systems", "Video conferencing", "Live streaming"]
    },
    {
      title: "Event Management",
      description: "Full-service planning and coordination",
      features: ["Registration systems", "Catering coordination", "Transportation", "Accommodation"]
    }
  ];

  const venueTypes = [
    "Corporate Boardrooms", "Hotel Conference Halls", "Convention Centers", 
    "Safari Lodge Meeting Rooms", "Outdoor Pavilions", "Beach Venues"
  ];

  const features = [
    "Conference venue arrangements for groups of 10-500+ attendees",
    "Professional audio-visual equipment setup and support",
    "Catering services coordination with top-rated providers",
    "Transportation and accommodation arrangements",
    "Registration and check-in services",
    "Simultaneous translation services available",
    "Live streaming and video recording options",
    "Post-event reporting and feedback collection"
  ];

  const packageOptions = [
    {
      name: "Executive Package",
      attendees: "10-25 people",
      includes: ["Boardroom setup", "AV equipment", "Coffee breaks", "Lunch", "Materials"]
    },
    {
      name: "Corporate Package", 
      attendees: "26-100 people",
      includes: ["Conference hall", "Full AV setup", "Registration desk", "Catering", "Accommodation"]
    },
    {
      name: "Convention Package",
      attendees: "100+ people",
      includes: ["Large venue", "Multiple rooms", "Exhibition space", "Full event management", "VIP services"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <img
            src={conferenceDetailImage}
            alt="Conference Facilities"
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
                Conference Facilities
              </h1>
              <p className="text-xl leading-relaxed">
                Professional event planning and conference management services
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
                  Complete Conference Solutions
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We arrange conferences for large and small groups within and outside Nairobi with 
                  reputable hotels and lodges. Our comprehensive service includes venue selection, 
                  equipment provision, catering coordination, and full event management to ensure 
                  your conference runs smoothly and successfully.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  From intimate board meetings to large corporate conventions, we have the expertise 
                  and network to deliver exceptional events. Our team handles all logistics, allowing 
                  you to focus on your content and attendees while we manage the details.
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
                    <h3 className="text-2xl font-bold text-foreground mb-6">Conference Planning</h3>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center space-x-3">
                        <Presentation className="h-5 w-5 text-accent" />
                        <span className="text-muted-foreground">Full Event Management</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Users className="h-5 w-5 text-accent" />
                        <span className="text-muted-foreground">10-500+ Attendees</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mic className="h-5 w-5 text-accent" />
                        <span className="text-muted-foreground">Professional AV Setup</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Wifi className="h-5 w-5 text-accent" />
                        <span className="text-muted-foreground">High-Speed Internet</span>
                      </div>
                    </div>

                    <Button 
                      className="w-full mb-4"
                      onClick={() => navigate('/#contact')}
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Plan Your Event
                    </Button>
                    
                    <Badge variant="secondary" className="w-full justify-center py-2">
                      Free venue consultation
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Services Grid */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
                Conference Services
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <Card key={index} className="p-6 hover-lift shadow-brand">
                    <CardContent className="p-0">
                      <h4 className="text-xl font-bold text-foreground mb-3">{service.title}</h4>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <div className="space-y-2">
                        {service.features.map((feature, idx) => (
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

            {/* Package Options */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
                Conference Packages
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {packageOptions.map((pkg, index) => (
                  <Card key={index} className="p-6 hover-lift shadow-brand">
                    <CardContent className="p-0">
                      <h4 className="text-xl font-bold text-foreground mb-2">{pkg.name}</h4>
                      <p className="text-accent font-semibold mb-4">{pkg.attendees}</p>
                      <div className="space-y-2">
                        {pkg.includes.map((item, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-accent" />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Venue Types */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
                Available Venue Types
              </h3>
              <div className="bg-muted/30 rounded-2xl p-8">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                  {venueTypes.map((venue, index) => (
                    <div key={index} className="p-4 bg-background rounded-lg shadow-sm">
                      <span className="text-foreground font-medium">{venue}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-muted/30 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Ready to Plan Your Conference?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let us handle every detail of your corporate event. From venue selection to final 
                wrap-up, we'll ensure your conference is professional, memorable, and successful.
              </p>
              <Button 
                size="lg"
                onClick={() => navigate('/#contact')}
              >
                Start Event Planning
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ConferenceFacilities;