import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedTours from '@/components/FeaturedTours';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturedTours />
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default Index;