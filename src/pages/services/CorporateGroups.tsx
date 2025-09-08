import React from 'react';
import { ArrowLeft, Users, Plane, TrendingDown, Star, CheckCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import corporateDetailImage from '@/assets/corporate-detail.jpg';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CorporateGroups = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      title: "Volume Discounts",
      description: "Significant savings for group bookings",
      features: ["10+ passengers qualify", "Tiered discount structure", "Additional perks included", "Flexible payment terms"]
    },
    {
      title: "Negotiated Rates",
      description: "Special airline partnerships for better prices",
      features: ["Preferred airline rates", "Seasonal promotions", "Corporate contracts", "Priority booking"]  
    },
    {
      title: "Enhanced Services",
      description: "Premium support for corporate travelers",
      features: ["Dedicated account manager", "24/7 support", "Priority check-in", "Flexible changes"]
    }
  ];

  const corporateServices = [
    "Group flight bookings with volume discounts",
    "Corporate travel management programs", 
    "Business incentive travel packages",
    "Executive retreats and team building trips",
    "International conference and exhibition travel",
    "Customized corporate safari experiences",
    "VIP airport services and fast-track processing",
    "Comprehensive travel insurance for groups"
  ];

  const discountTiers = [
    {
      size: "10-19 Passengers",
      discount: "5-10% Discount",
      benefits: ["Group check-in", "Seat selection", "Basic support"]
    },
    {
      size: "20-49 Passengers", 
      discount: "10-15% Discount",
      benefits: ["Priority boarding", "Baggage allowance", "Dedicated support"]
    },
    {
      size: "50+ Passengers",
      discount: "15-25% Discount", 
      benefits: ["VIP services", "Custom catering", "Account manager"]
    }
  ];

  const industries = [
    "Technology & IT", "Financial Services", "Manufacturing", "Healthcare", 
    "Education", "Government", "NGOs", "Energy & Mining"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <img
            src={corporateDetailImage}
            alt="Corporate Group Travel"
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
                Corporate Group Discounts
              </h1>
              <p className="text-xl leading-relaxed">
                Maximize savings with our exclusive corporate travel programs and group rates
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
                  Corporate Travel Solutions
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our corporate group discount program offers special rates and volume discounts for 
                  large groups traveling together. With preferred airline partnerships and negotiated 
                  rates, we provide significant cost savings while maintaining high service standards 
                  for your business travel needs.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whether you're organizing a corporate retreat, international conference attendance, 
                  or employee incentive travel, our corporate programs are designed to streamline your 
                  travel management while delivering exceptional value and service.
                </p>

                {/* Services */}
                <div className="space-y-3">
                  {corporateServices.map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Info Card */}
              <div>
                <Card className="p-6 shadow-brand">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-bold text-foreground mb-6">Corporate Benefits</h3>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center space-x-3">
                        <Users className="h-5 w-5 text-accent" />
                        <span className="text-muted-foreground">Group Rates from 10+ travelers</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <TrendingDown className="h-5 w-5 text-accent" />
                        <span className="text-muted-foreground">Up to 25% Volume Discounts</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Plane className="h-5 w-5 text-accent" />
                        <span className="text-muted-foreground">Preferred Airline Partners</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Star className="h-5 w-5 text-accent" />
                        <span className="text-muted-foreground">Dedicated Account Manager</span>
                      </div>
                    </div>

                    <Button 
                      className="w-full mb-4"
                      onClick={() => navigate('/contact')}
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Get Corporate Quote
                    </Button>
                    
                    <Badge variant="secondary" className="w-full justify-center py-2">
                      Custom packages available
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
                Corporate Travel Benefits
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="p-6 hover-lift shadow-brand">
                    <CardContent className="p-0">
                      <h4 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h4>
                      <p className="text-muted-foreground mb-4">{benefit.description}</p>
                      <div className="space-y-2">
                        {benefit.features.map((feature, idx) => (
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

            {/* Discount Tiers */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
                Group Discount Structure
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {discountTiers.map((tier, index) => (
                  <Card key={index} className="p-6 hover-lift shadow-brand text-center">
                    <CardContent className="p-0">
                      <h4 className="text-xl font-bold text-foreground mb-2">{tier.size}</h4>
                      <div className="text-2xl font-bold text-accent mb-4">{tier.discount}</div>
                      <div className="space-y-2">
                        {tier.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center justify-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-accent" />
                            <span className="text-sm text-muted-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Industries Served */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
                Industries We Serve
              </h3>
              <div className="bg-muted/30 rounded-2xl p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  {industries.map((industry, index) => (
                    <div key={index} className="p-4 bg-background rounded-lg shadow-sm">
                      <span className="text-foreground font-medium">{industry}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-muted/30 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Ready to Save on Corporate Travel?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join hundreds of companies who trust us with their corporate travel needs. 
                Get a custom quote for your next group booking and start saving today.
              </p>
              <Button 
                size="lg"
                onClick={() => navigate('/contact')}
              >
                Request Corporate Pricing
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CorporateGroups;