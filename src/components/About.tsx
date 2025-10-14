import React from 'react';
import { Shield, Heart, Globe, Award, Users, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import experienceImage from '@/assets/about-experience.jpg';
import tailormadeImage from '@/assets/about-tailormade.jpg';
import guidesImage from '@/assets/about-guides.jpg';
import destinationsImage from '@/assets/about-destinations.jpg';
import certifiedImage from '@/assets/about-certified.jpg';

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Experience and Reliability",
      description: "With years of experience, we have honed our expertise in providing authentic and stimulating safari experiences with long-standing industry relationships.",
      image: experienceImage
    },
    {
      icon: Heart,
      title: "Tailor-made Safaris",
      description: "We offer tailor-made safaris that cater to individual budgets, schedules, and preferences, accommodating different interests and time limits.",
      image: tailormadeImage
    },
    {
      icon: Users,
      title: "Expert Guides",
      description: "Our network of expert local guides are knowledgeable, multilingual, and have extensive field experience for the best possible sightings.",
      image: guidesImage
    },
    {
      icon: Globe,
      title: "Variety of Destinations",
      description: "We offer safaris to various destinations in Kenya, Tanzania, Uganda, and beach extensions, each with unique attractions to explore.",
      image: destinationsImage
    },
    {
      icon: Shield,
      title: "Certified & Licensed",
      description: "We are a licensed and certified tour operator, ensuring our clients are protected by necessary regulations and standards.",
      image: certifiedImage
    }
  ];

  const stats = [
    { icon: Users, number: "2,500+", label: "Happy Travelers" },
    { icon: MapPin, number: "50+", label: "Destinations" },
    { icon: Award, number: "15+", label: "Years Experience" },
    { icon: Heart, number: "4.9/5", label: "Customer Rating" }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            About 
            <span className="text-accent"> Edenheart Tours</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            For over 15 years, we've been Kenya's premier travel partner, crafting extraordinary 
            adventures that connect you with nature, culture, and unforgettable moments.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 md:mb-20">
          {/* Text Content */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
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
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-4 sm:p-6 hover-lift shadow-brand">
                <CardContent className="p-0">
                  <stat.icon className="h-8 sm:h-10 md:h-12 w-8 sm:w-10 md:w-12 text-accent mx-auto mb-2 sm:mb-4" />
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1 sm:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground text-xs sm:text-sm">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-8 sm:mb-12">
            Why Choose Edenheart Tours & Travel
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover-lift shadow-brand group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img 
                    src={value.image}
                    alt={value.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  {/* Icon */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-gradient-sunset rounded-full w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center group-hover:shadow-glow transition-all">
                    <value.icon className="h-5 sm:h-6 w-5 sm:w-6 text-white" />
                  </div>
                </div>
                
                <CardContent className="p-4 sm:p-6 text-center">
                  <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3 group-hover:text-accent transition-colors">
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