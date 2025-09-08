import React from 'react';
import { ArrowLeft, MapPin, Clock, Users, Star, CheckCircle, Phone, Crown, Gem, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import luxuryDetailImage from '@/assets/luxury-safari.jpg';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const LuxuryPackages = () => {
  const navigate = useNavigate();

  const luxuryPackages = [
    {
      name: "Platinum Safari Experience",
      duration: "7 Days / 6 Nights",
      price: "From $4,500 per person",
      highlights: ["Private Jets Between Parks", "5-Star Luxury Lodges", "Personal Butler Service"]
    },
    {
      name: "Exclusive Conservancy Safari",
      duration: "5 Days / 4 Nights",
      price: "From $3,200 per person",
      highlights: ["Private Conservancy Access", "Michelin-Level Dining", "Helicopter Transfers"]
    },
    {
      name: "Presidential Suite Beach & Safari",
      duration: "10 Days / 9 Nights",
      price: "From $6,800 per person",
      highlights: ["Presidential Suites", "Private Beach Villa", "Yacht Excursions"]
    },
    {
      name: "Luxury Kilimanjaro Experience",
      duration: "8 Days / 7 Nights",
      price: "From $8,500 per person",
      highlights: ["Luxury Base Camps", "Personal Mountain Guide", "Helicopter Support"]
    },
    {
      name: "Elite Maasai Mara Package",
      duration: "4 Days / 3 Nights",
      price: "From $2,800 per person",
      highlights: ["Exclusive Lodge Access", "Private Game Drives", "Hot Air Balloon Safari"]
    },
    {
      name: "Royal East Africa Tour",
      duration: "14 Days / 13 Nights",
      price: "From $12,500 per person",
      highlights: ["Multi-Country Luxury", "Private Safari Fleet", "Cultural Immersion"]
    }
  ];

  const features = [
    "Exclusive access to private conservancies and luxury lodges",
    "Personal safari guides and private vehicles throughout",
    "Helicopter and private jet transfers between destinations",
    "Michelin-star level cuisine and premium wine selections",
    "Luxury spa treatments and wellness experiences",
    "24/7 concierge services and personal butler assistance",
    "Private cultural experiences with local communities",
    "Customized luxury amenities and VIP airport services"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <img
            src={luxuryDetailImage}
            alt="Luxury Safari Packages"
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
                Luxury Safari Packages
              </h1>
              <p className="text-xl leading-relaxed">
                Experience East Africa's finest with exclusive luxury lodges, private experiences, and world-class service
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
                  Unparalleled Luxury Experiences
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our luxury safari packages represent the pinnacle of African travel, featuring exclusive 
                  access to private conservancies, world-renowned luxury lodges, and personalized service 
                  that exceeds the highest expectations. Each journey is meticulously crafted for discerning 
                  travelers who demand excellence.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  From private jets between destinations to Michelin-level cuisine in the African wilderness, 
                  our luxury experiences combine adventure with sophistication, creating unforgettable memories 
                  in some of the world's most exclusive safari destinations.
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
                    <h3 className="text-2xl font-bold text-foreground mb-6">Luxury Package Information</h3>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-accent" />
                        <span className="text-muted-foreground">Exclusive Locations Across East Africa</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-accent" />
                        <span className="text-muted-foreground">4-14 Days Available</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Users className="h-5 w-5 text-accent" />
                        <span className="text-muted-foreground">Private & Intimate Groups</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Star className="h-5 w-5 text-accent" />
                        <span className="text-muted-foreground">5.0/5 Luxury Rating</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Crown className="h-5 w-5 text-accent" />
                        <span className="text-muted-foreground">Ultra-Luxury Service</span>
                      </div>
                    </div>

                    <Button 
                      className="w-full mb-4"
                      onClick={() => navigate('/contact')}
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Request Luxury Consultation
                    </Button>
                    
                    <Badge variant="secondary" className="w-full justify-center py-2">
                      Private luxury consultant assigned
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Luxury Packages */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
                Signature Luxury Experiences
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {luxuryPackages.map((pkg, index) => (
                  <Card key={index} className="p-6 hover-lift shadow-brand group">
                    <CardContent className="p-0">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-bold text-foreground">{pkg.name}</h4>
                        <Crown className="h-5 w-5 text-accent" />
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground mb-3">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">{pkg.duration}</span>
                      </div>
                      <p className="text-lg font-semibold text-accent mb-4">{pkg.price}</p>
                      <div className="space-y-2">
                        {pkg.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <Gem className="h-4 w-4 text-accent" />
                            <span className="text-sm text-muted-foreground">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-muted/30 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Ready for the Ultimate Luxury Experience?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our luxury travel specialists will create a bespoke itinerary that surpasses your expectations. 
                Every detail is personally curated to deliver an extraordinary African adventure with 
                uncompromising luxury and exclusive access.
              </p>
              <Button 
                size="lg"
                onClick={() => navigate('/contact')}
              >
                Begin Your Luxury Journey
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LuxuryPackages;