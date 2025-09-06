import React from 'react';
import { ArrowRight, Star, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import heroImage from '@/assets/hero-safari.jpg';

const Hero = () => {
  const stats = [
    { icon: Star, label: "5-Star Rating", value: "4.9/5" },
    { icon: Users, label: "Happy Travelers", value: "2,500+" },
    { icon: Award, label: "Years Experience", value: "15+" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full animate-float" />
        <div className="absolute bottom-32 right-20 w-24 h-24 bg-brand-light-blue/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/15 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Main Hero Content */}
        <div className="mb-12 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Discover Your
            <span className="text-transparent bg-gradient-sunset bg-clip-text block">
              Next Adventure
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            From breathtaking safaris to pristine beaches, let Edenheart Tours & Travel 
            create unforgettable memories that last a lifetime.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-semibold hover-glow"
            >
              Explore Safari Tours
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold"
            >
              Beach Holidays
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-scale-in">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 p-6 hover-lift">
              <div className="flex items-center justify-center space-x-4 text-white">
                <stat.icon className="h-8 w-8 text-accent" />
                <div className="text-left">
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;