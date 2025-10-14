import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    tourType: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', message: '', tourType: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["0721658788"],
      description: "Available 24/7 for emergencies"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@edenheart.co.ke"],
      description: "We respond within 2 hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["2nd Flr, Delta Hse, Nairobi CBD"],
      description: "Monday - Friday, 8AM - 6PM"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM"],
      description: "Sunday: Emergency only"
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Get In 
            <span className="text-accent"> Touch</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            Ready to embark on your next adventure? Let's plan the perfect Kenyan experience together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-4 sm:space-y-6">
            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                Let's Plan Your Adventure
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our travel experts are here to help you create the perfect Kenyan experience. 
                From safaris to beaches, we'll make your dream trip a reality.
              </p>
            </div>

            {contactInfo.map((info, index) => (
              <Card key={index} className="hover-lift shadow-brand">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="bg-gradient-sunset rounded-lg p-2 sm:p-3 flex-shrink-0">
                      <info.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">
                        {info.title}
                      </h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground text-xs sm:text-sm mb-1 break-words">
                          {detail}
                        </p>
                      ))}
                      <p className="text-accent text-xs mt-1 sm:mt-2 font-medium">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* WhatsApp CTA */}
            <Card className="bg-gradient-sunset text-white hover-glow">
              <CardContent className="p-4 sm:p-6 text-center">
                <MessageCircle className="h-10 sm:h-12 w-10 sm:w-12 mx-auto mb-3 sm:mb-4" />
                <h4 className="font-semibold mb-2 text-sm sm:text-base">Quick WhatsApp Chat</h4>
                <p className="text-xs sm:text-sm mb-3 sm:mb-4 opacity-90">
                  Get instant responses to your travel questions
                </p>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-primary min-h-[44px] w-full sm:w-auto"
                >
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-elegant">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-xl sm:text-2xl text-foreground">
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="w-full min-h-[44px]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="w-full min-h-[44px]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="0721658788"
                        className="w-full min-h-[44px]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Tour Type
                      </label>
                      <select
                        name="tourType"
                        value={formData.tourType}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring min-h-[44px]"
                      >
                        <option value="">Select tour type</option>
                        <option value="safari">Safari Tours</option>
                        <option value="beach">Beach Holidays</option>
                        <option value="luxury">Luxury Packages</option>
                        <option value="cultural">Cultural Tours</option>
                        <option value="custom">Custom Package</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your dream Kenya experience..."
                      rows={5}
                      required
                      className="w-full min-h-[120px]"
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full md:w-auto bg-gradient-sunset hover:shadow-glow min-h-[48px]"
                  >
                    Send Message
                    <Send className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;