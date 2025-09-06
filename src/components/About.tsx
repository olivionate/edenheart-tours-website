import React from 'react';
import { Shield, Heart, Globe, Award, Users, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Experience and Reliability",
      description: "With years of experience, we have honed our expertise in providing authentic and stimulating safari experiences with long-standing industry relationships."
    },
    {
      icon: Heart,
      title: "Tailor-made Safaris",
      description: "We offer tailor-made safaris that cater to individual budgets, schedules, and preferences, accommodating different interests and time limits."
    },
    {
      icon: Users,
      title: "Expert Guides",
      description: "Our network of expert local guides are knowledgeable, multilingual, and have extensive field experience for the best possible sightings."
    },
    {
      icon: Globe,
      title: "Variety of Destinations",
      description: "We offer safaris to various destinations in Kenya, Tanzania, Uganda, and beach extensions, each with unique attractions to explore."
    },
    {
      icon: Shield,
      title: "Certified & Licensed",
      description: "We are a licensed and certified tour operator, ensuring our clients are protected by necessary regulations and standards."
    }
  ];

  const stats = [
    { icon: Users, number: "2,500+", label: "Happy Travelers" },
    { icon: MapPin, number: "50+", label: "Destinations" },
    { icon: Award, number: "15+", label: "Years Experience" },
    { icon: Heart, number: "4.9/5", label: "Customer Rating" }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About 
            <span className="text-accent"> Edenheart Tours</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For over 15 years, we've been Kenya's premier travel partner, crafting extraordinary 
            adventures that connect you with nature, culture, and unforgettable moments.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              Your Trusted Partner for East African Adventures
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We are a tours and travel agency based in Kenya, with a special focus on safaris and 
              expeditions both locally and across our borders. Our experience in providing thrilling 
              and magical safaris sets us apart as the most trustworthy partner in planning your 
              East African dream holiday.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From mountain trekking to enjoying an evening at the beach or birdwatching, travelling 
              in East Africa is a breathtaking and enthralling adventure waiting to be seized. Let 
              Edenheart Tours & Travel Agency plan your trip and we guarantee unforgettable memories.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We offer budget safaris, mid-range safaris, luxury safaris, half-day and full-day 
              excursions, beach holiday packages, airport transfers, hotel & accommodation bookings, 
              and many more. All our packages can be customized and tailor-made to your preferences, 
              ensuring your trip is memorable and hassle-free.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our professional tour guides are knowledgeable and will assist you in organizing 
              transport, identifying animals during game drives, and managing the itinerary.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover-lift shadow-brand">
                <CardContent className="p-0">
                  <stat.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div>
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            Why Choose Edenheart Tours & Travel
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="text-center p-6 hover-lift shadow-brand group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="bg-gradient-sunset rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-4 group-hover:text-accent transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;