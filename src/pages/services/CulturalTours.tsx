import React from 'react';
import { ArrowLeft, MapPin, Clock, Users, Star, CheckCircle, Phone, Users2, Heart, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import culturalDetailImage from '@/assets/service-safari.jpg';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CulturalTours = () => {
  const navigate = useNavigate();

  const culturalPackages = [
    {
      name: "Maasai Village Experience",
      duration: "Full Day",
      price: "From $85 per person",
      highlights: ["Traditional Dancing", "Warrior Training", "Beadwork Workshop"]
    },
    {
      name: "Samburu Cultural Immersion",
      duration: "2 Days / 1 Night",
      price: "From $180 per person",
      highlights: ["Nomadic Lifestyle", "Traditional Ceremonies", "Authentic Meals"]
    },
    {
      name: "Swahili Coast Heritage Tour",
      duration: "3 Days / 2 Nights",
      price: "From $320 per person",
      highlights: ["Lamu Old Town", "Dhow Building", "Swahili Cooking"]
    },
    {
      name: "Kikuyu Coffee Culture Tour",
      duration: "Full Day",
      price: "From $65 per person",
      highlights: ["Coffee Farm Visit", "Traditional Processing", "Tasting Sessions"]
    },
    {
      name: "Turkana Desert Culture",
      duration: "4 Days / 3 Nights",
      price: "From $450 per person",
      highlights: ["Desert Nomads", "Jade Sea Experience", "Traditional Crafts"]
    },
    {
      name: "Multi-Tribal Cultural Safari",
      duration: "7 Days / 6 Nights",
      price: "From $950 per person",
      highlights: ["5 Different Tribes", "Cultural Exchanges", "Traditional Markets"]
    }
  ];

  const features = [
    "Authentic community-based cultural experiences",
    "Professional cultural guides and local interpreters",
    "Direct support to local communities through tourism",
    "Traditional craft workshops and skill learning",
    "Authentic local cuisine and cooking experiences",
    "Respectful cultural exchange programs",
    "Photography permissions and cultural protocols",
    "Educational insights into Kenya's diverse heritage"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <img
            src={culturalDetailImage}
            alt="Kenya Cultural Tours"
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
                Cultural Tours & Experiences
              </h1>
              <p className="text-xl leading-relaxed">
                Immerse yourself in Kenya's rich cultural heritage through authentic community experiences and traditional customs
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
                  Authentic Cultural Experiences
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Kenya is home to over 42 distinct ethnic communities, each with unique traditions, 
                  languages, and cultural practices. Our cultural tours offer respectful and authentic 
                  encounters that benefit local communities while providing visitors with genuine 
                  insights into traditional African life.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  From the proud Maasai warriors to the seafaring Swahili people, from coffee-growing 
                  Kikuyu communities to the nomadic Turkana, our cultural experiences are designed 
                  to create meaningful connections and lasting memories while supporting local 
                  community development.
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
                    <h3 className="text-2xl font-bold text-foreground mb-6">Cultural Tour Information</h3>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-accent" />
                        <span className="text-muted-foreground">Throughout Kenya - 42+ Communities</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-accent" />
                        <span className="text-muted-foreground">Half Day to 7 Days</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Users className="h-5 w-5 text-accent" />
                        <span className="text-muted-foreground">Individual to Group Tours</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Star className="h-5 w-5 text-accent" />
                        <span className="text-muted-foreground">4.9/5 Cultural Rating</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Heart className="h-5 w-5 text-accent" />
                        <span className="text-muted-foreground">Community Benefit Program</span>
                      </div>
                    </div>

                    <Button 
                      className="w-full mb-4"
                      onClick={() => navigate('/contact')}
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Plan Cultural Experience
                    </Button>
                    
                    <Badge variant="secondary" className="w-full justify-center py-2">
                      Community-certified guides included
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Cultural Packages */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
                Popular Cultural Experiences
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {culturalPackages.map((pkg, index) => (
                  <Card key={index} className="p-6 hover-lift shadow-brand group">
                    <CardContent className="p-0">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-bold text-foreground">{pkg.name}</h4>
                        <Users2 className="h-5 w-5 text-accent" />
                      </div>
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
                Ready to Experience Authentic Kenya Culture?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Connect with Kenya's diverse communities through respectful cultural exchanges. 
                Our community partners welcome you to share in their traditions, stories, and way of life 
                while contributing to sustainable community development.
              </p>
              <Button 
                size="lg"
                onClick={() => navigate('/contact')}
              >
                Start Your Cultural Journey
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CulturalTours;