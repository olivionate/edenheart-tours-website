import React from 'react';
import { Shield, Heart, Globe, Award, Users, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passionate Service",
      description: "We pour our hearts into creating unforgettable experiences that exceed expectations."
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Your safety and peace of mind are our top priorities on every adventure."
    },
    {
      icon: Globe,
      title: "Sustainable Tourism",
      description: "We're committed to responsible travel that benefits local communities and wildlife."
    },
    {
      icon: Award,
      title: "Expert Guides",
      description: "Our experienced local guides share deep knowledge and authentic cultural insights."
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
            <span className="text-transparent bg-gradient-sunset bg-clip-text"> Edenheart Tours</span>
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
              Your Gateway to Kenya's Wonders
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Edenheart Tours & Travel was born from a passion for showcasing Kenya's incredible 
              diversity—from the thundering wildebeest migration in the Maasai Mara to the pristine 
              coral reefs of Diani Beach. We believe every journey should be transformative.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team of local experts doesn't just show you destinations; we share stories, 
              traditions, and hidden gems that only insiders know. Whether you're seeking the 
              thrill of a Big Five encounter or the serenity of a sunset dhow cruise, we craft 
              each experience with attention to detail and genuine care.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We're more than a travel company—we're your partners in adventure, committed to 
              sustainable tourism that supports local communities and preserves Kenya's natural 
              heritage for future generations.
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
            Our Core Values
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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