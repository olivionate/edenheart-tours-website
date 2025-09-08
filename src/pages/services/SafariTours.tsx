import React from 'react';
import { ArrowLeft, MapPin, Clock, Users, Star, CheckCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import safariDetailImage from '@/assets/safari-detail.jpg';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SafariTours = () => {
  const navigate = useNavigate();

  const tourPackages = [
    {
      name: "Maasai Mara Great Migration",
      duration: "5 Days / 4 Nights",
      price: "From $1,250 per person",
      highlights: ["Witness Great Migration", "Big Five Safari", "Cultural Experience"]
    },
    {
      name: "Amboseli Elephant Safari",
      duration: "4 Days / 3 Nights", 
      price: "From $950 per person",
      highlights: ["Mount Kilimanjaro Views", "Large Elephant Herds", "Bird Watching"]
    },
    {
      name: "Samburu Adventure",
      duration: "3 Days / 2 Nights",
      price: "From $750 per person",
      highlights: ["Unique Wildlife", "Cultural Immersion", "River Safari"]
    }
  ];

  const features = [
    "Professional safari guides with 10+ years experience",
    "4WD vehicles fitted with VHF radios",
    "24-hour support and emergency assistance",
    "Bush/nature walk adventures",
    "Hot air balloon adventures available",
    "Cultural safaris and local community visits",
    "Photography and filming permits arranged",
    "Flexible itineraries tailored to your interests"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <img
            src={safariDetailImage}
            alt="Safari Tours"
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
                Safari Tours & Expeditions
              </h1>
              <p className="text-xl leading-relaxed">
                Experience the magic of East Africa's wildlife with our expertly crafted safari adventures
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
                  Unforgettable Safari Experiences
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our Tours Department organizes reasonable and unique Adventure tours and Safaris with 
                  tailor-made itineraries for luxury and adventure travel. From the world-famous Maasai Mara 
                  to the elephant-rich Amboseli, we offer comprehensive safari packages that showcase the 
                  best of East African wildlife.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whether you're seeking the thrill of witnessing the Great Migration, the serenity of a 
                  cultural safari, or the adventure of a walking safari, our experienced guides ensure 
                  every moment is memorable and safe.
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
                    <h3 className="text-2xl font-bold text-foreground mb-6">Safari Information</h3>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-accent" />
                        <span className="text-muted-foreground">Kenya, Tanzania, Uganda</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-accent" />
                        <span className="text-muted-foreground">2-14 Days Available</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Users className="h-5 w-5 text-accent" />
                        <span className="text-muted-foreground">Solo to Group Tours</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Star className="h-5 w-5 text-accent" />
                        <span className="text-muted-foreground">4.9/5 Guest Rating</span>
                      </div>
                    </div>

                    <Button 
                      className="w-full mb-4"
                      onClick={() => {
                        const contactSection = document.getElementById('contact');
                        if (contactSection) {
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                          setTimeout(() => navigate('/#contact'), 100);
                        }
                      }}
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Get Custom Quote
                    </Button>
                    
                    <Badge variant="secondary" className="w-full justify-center py-2">
                      Free consultation available
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Tour Packages */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
                Popular Safari Packages
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {tourPackages.map((tour, index) => (
                  <Card key={index} className="p-6 hover-lift shadow-brand">
                    <CardContent className="p-0">
                      <h4 className="text-xl font-bold text-foreground mb-2">{tour.name}</h4>
                      <div className="flex items-center space-x-2 text-muted-foreground mb-3">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">{tour.duration}</span>
                      </div>
                      <p className="text-lg font-semibold text-accent mb-4">{tour.price}</p>
                      <div className="space-y-2">
                        {tour.highlights.map((highlight, idx) => (
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
                Ready for Your Safari Adventure?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Contact us today to create your perfect safari experience. Our team will work with you 
                to design an itinerary that matches your interests, budget, and timeline.
              </p>
              <Button 
                size="lg"
                onClick={() => navigate('/#contact')}
              >
                Start Planning Your Safari
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SafariTours;