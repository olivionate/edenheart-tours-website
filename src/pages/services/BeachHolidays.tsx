import React from 'react';
import { ArrowLeft, MapPin, Clock, Users, Star, CheckCircle, Phone, Waves, Sun, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import beachDetailImage from '@/assets/beach-paradise.jpg';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BeachHolidays = () => {
  const navigate = useNavigate();

  const beachPackages = [
    {
      name: "Diani Beach Paradise",
      duration: "4 Days / 3 Nights",
      price: "From $450 per person",
      highlights: ["White Sand Beaches", "Snorkeling & Diving", "Sunset Cruises"]
    },
    {
      name: "Malindi Beach Escape",
      duration: "5 Days / 4 Nights",
      price: "From $580 per person",
      highlights: ["Marine National Park", "Historical Sites", "Deep Sea Fishing"]
    },
    {
      name: "Watamu Beach Resort",
      duration: "3 Days / 2 Nights",
      price: "From $380 per person",
      highlights: ["Coral Reefs", "Turtle Watching", "Kitesurfing"]
    },
    {
      name: "Lamu Island Cultural Beach",
      duration: "6 Days / 5 Nights",
      price: "From $750 per person",
      highlights: ["UNESCO World Heritage", "Dhow Sailing", "Swahili Culture"]
    },
    {
      name: "Mombasa City & Beach",
      duration: "4 Days / 3 Nights",
      price: "From $520 per person",
      highlights: ["Historical Fort Jesus", "Old Town Tours", "Beach Relaxation"]
    },
    {
      name: "Luxury Coast Package",
      duration: "7 Days / 6 Nights",
      price: "From $1,200 per person",
      highlights: ["5-Star Beach Resorts", "Private Beach Access", "Spa Treatments"]
    }
  ];

  const features = [
    "Professional beach guides and water sports instructors",
    "All-inclusive beach resort packages available",
    "Marine conservation excursions and coral reef tours",
    "Traditional dhow sailing adventures",
    "Cultural visits to Swahili coastal communities",
    "Deep sea fishing and snorkeling equipment provided",
    "Airport transfers from Mombasa and Malindi",
    "Flexible itineraries for beach and cultural combinations"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <img
            src={beachDetailImage}
            alt="Kenya Beach Holidays"
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
                Kenya Beach Holidays
              </h1>
              <p className="text-xl leading-relaxed">
                Discover pristine white sand beaches, coral reefs, and rich Swahili culture along Kenya's stunning coast
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
                  Coastal Paradise Experiences
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Kenya's coastline offers some of Africa's most beautiful beaches, from the pristine sands 
                  of Diani to the historic charm of Lamu Island. Our beach holiday packages combine relaxation 
                  with adventure, cultural exploration, and marine conservation experiences.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whether you're seeking romantic sunsets, family-friendly resorts, or thrilling water sports, 
                  our coastal experts craft personalized beach experiences that showcase the best of Kenya's 
                  Indian Ocean coastline and rich Swahili heritage.
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
                    <h3 className="text-2xl font-bold text-foreground mb-6">Beach Holiday Information</h3>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-accent" />
                        <span className="text-muted-foreground">Coastal Kenya - Diani, Malindi, Watamu, Lamu</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-accent" />
                        <span className="text-muted-foreground">3-7 Days Available</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Users className="h-5 w-5 text-accent" />
                        <span className="text-muted-foreground">Couples to Group Packages</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Star className="h-5 w-5 text-accent" />
                        <span className="text-muted-foreground">4.8/5 Guest Rating</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Waves className="h-5 w-5 text-accent" />
                        <span className="text-muted-foreground">Year-Round Destination</span>
                      </div>
                    </div>

                    <Button 
                      className="w-full mb-4"
                      onClick={() => navigate('/contact')}
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Get Beach Package Quote
                    </Button>
                    
                    <Badge variant="secondary" className="w-full justify-center py-2">
                      Free beach consultation available
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Beach Packages */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
                Popular Beach Holiday Packages
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {beachPackages.map((pkg, index) => (
                  <Card key={index} className="p-6 hover-lift shadow-brand">
                    <CardContent className="p-0">
                      <h4 className="text-xl font-bold text-foreground mb-2">{pkg.name}</h4>
                      <div className="flex items-center space-x-2 text-muted-foreground mb-3">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">{pkg.duration}</span>
                      </div>
                      <p className="text-lg font-semibold text-accent mb-4">{pkg.price}</p>
                      <div className="space-y-2">
                        {pkg.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-accent" />
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
                Ready for Your Beach Holiday?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Contact us today to plan your perfect coastal escape. Our beach specialists will create 
                an itinerary that combines relaxation, adventure, and cultural experiences along Kenya's 
                stunning coastline.
              </p>
              <Button 
                size="lg"
                onClick={() => navigate('/contact')}
              >
                Start Planning Your Beach Holiday
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BeachHolidays;