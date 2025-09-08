import React from 'react';
import { ArrowLeft, MapPin, Clock, Users, Star, CheckCircle, Phone, Users2, Briefcase, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import groupTourImage from '@/assets/service-safari.jpg';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const GroupTours = () => {
  const navigate = useNavigate();

  const groupPackages = [
    {
      name: "Family Safari Adventure",
      duration: "5 Days / 4 Nights",
      price: "From $850 per person",
      highlights: ["Child-Friendly Activities", "Educational Programs", "Family Accommodations"]
    },
    {
      name: "Corporate Team Building Safari",
      duration: "3 Days / 2 Nights",
      price: "From $750 per person",
      highlights: ["Leadership Challenges", "Team Activities", "Conference Facilities"]
    },
    {
      name: "School Educational Tours",
      duration: "4 Days / 3 Nights",
      price: "From $350 per student",
      highlights: ["Wildlife Education", "Conservation Learning", "Supervised Activities"]
    },
    {
      name: "Friends Group Safari",
      duration: "6 Days / 5 Nights",
      price: "From $1,200 per person",
      highlights: ["Shared Accommodations", "Group Discounts", "Flexible Itinerary"]
    },
    {
      name: "Church & Faith Groups",
      duration: "7 Days / 6 Nights",
      price: "From $980 per person",
      highlights: ["Spiritual Retreats", "Community Service", "Group Worship"]
    },
    {
      name: "Senior Citizens Safari",
      duration: "5 Days / 4 Nights",
      price: "From $1,150 per person",
      highlights: ["Comfortable Pace", "Medical Support", "Accessible Vehicles"]
    }
  ];

  const features = [
    "Professional group coordinators and specialized guides",
    "Volume discounts for groups of 8 or more travelers",
    "Customized itineraries based on group interests and needs",
    "Private vehicles and exclusive group experiences",
    "Team building activities and leadership challenges",
    "Educational programs for schools and organizations",
    "Special dietary requirements and accessibility accommodations",
    "Group bonding activities and shared memorable experiences"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <img
            src={groupTourImage}
            alt="Kenya Group Tours"
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
                Group Tours & Packages
              </h1>
              <p className="text-xl leading-relaxed">
                Specialized group travel experiences for families, companies, schools, and organizations with exclusive benefits
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
                  Tailored Group Adventures
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our group tour packages are specially designed to create shared memories and strengthen 
                  bonds whether you're traveling with family, colleagues, classmates, or community members. 
                  We understand that group dynamics require special attention to logistics, activities, 
                  and coordination to ensure everyone has an exceptional experience.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  From corporate team building in the wilderness to educational school trips, family 
                  reunions to faith-based retreats, our group specialists craft experiences that bring 
                  people together while showcasing Kenya's incredible wildlife and cultural heritage. 
                  Special group rates and exclusive experiences make traveling together both meaningful and affordable.
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
                    <h3 className="text-2xl font-bold text-foreground mb-6">Group Tour Information</h3>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-accent" />
                        <span className="text-muted-foreground">Kenya Wildlife Parks & Cultural Sites</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-accent" />
                        <span className="text-muted-foreground">3-10 Days Available</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Users className="h-5 w-5 text-accent" />
                        <span className="text-muted-foreground">8+ People Group Minimum</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Star className="h-5 w-5 text-accent" />
                        <span className="text-muted-foreground">4.9/5 Group Satisfaction</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Briefcase className="h-5 w-5 text-accent" />
                        <span className="text-muted-foreground">Volume Discounts Available</span>
                      </div>
                    </div>

                    <Button 
                      className="w-full mb-4"
                      onClick={() => navigate('/contact')}
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Request Group Quote
                    </Button>
                    
                    <Badge variant="secondary" className="w-full justify-center py-2">
                      Dedicated group coordinator assigned
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Group Packages */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
                Specialized Group Experiences
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {groupPackages.map((pkg, index) => (
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

            {/* Group Benefits Section */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                Why Choose Group Tours?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center p-6 hover-lift shadow-brand">
                  <CardContent className="p-0">
                    <Users2 className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-foreground mb-2">Volume Discounts</h4>
                    <p className="text-muted-foreground text-sm">Save 15-25% with group bookings of 8 or more people</p>
                  </CardContent>
                </Card>
                <Card className="text-center p-6 hover-lift shadow-brand">
                  <CardContent className="p-0">
                    <Briefcase className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-foreground mb-2">Exclusive Access</h4>
                    <p className="text-muted-foreground text-sm">Private experiences and activities just for your group</p>
                  </CardContent>
                </Card>
                <Card className="text-center p-6 hover-lift shadow-brand">
                  <CardContent className="p-0">
                    <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-foreground mb-2">Shared Memories</h4>
                    <p className="text-muted-foreground text-sm">Strengthen bonds through shared adventures and experiences</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-muted/30 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Ready to Plan Your Group Adventure?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Bring your group together for an unforgettable Kenya experience. Our group specialists 
                will work with you to create a customized itinerary that meets your group's interests, 
                budget, and timeline while providing exclusive group benefits and memorable shared experiences.
              </p>
              <Button 
                size="lg"
                onClick={() => navigate('/contact')}
              >
                Start Planning Your Group Tour
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GroupTours;