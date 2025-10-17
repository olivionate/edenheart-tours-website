import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: January 2024</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p className="text-foreground/80 leading-relaxed">
                Edenheart Tours & Travel ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <h3 className="text-xl font-medium mb-3">Personal Information</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Make a booking or reservation</li>
                <li>Subscribe to our newsletter</li>
                <li>Contact us with inquiries</li>
                <li>Create an account on our website</li>
                <li>Participate in surveys or promotions</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed mt-4">
                This information may include your name, email address, phone number, postal address, 
                payment information, and travel preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Process your bookings and reservations</li>
                <li>Communicate with you about your travel arrangements</li>
                <li>Send you promotional materials and special offers (with your consent)</li>
                <li>Improve our services and customer experience</li>
                <li>Comply with legal obligations</li>
                <li>Prevent fraud and enhance security</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Information Sharing</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Service providers who assist in operating our business</li>
                <li>Hotels, airlines, and other travel service providers</li>
                <li>Payment processors for secure transaction handling</li>
                <li>Legal authorities when required by law</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed mt-4">
                We do not sell or rent your personal information to third parties for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
              <p className="text-foreground/80 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. However, 
                no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-foreground/80 leading-relaxed">
                If you have questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="mt-4 space-y-2 text-foreground/80">
                <p><strong>Email:</strong> info@edenheart.co.ke</p>
                <p><strong>Phone:</strong> 0721658788</p>
                <p><strong>Address:</strong> 2nd Floor, Delta House, Nairobi CBD</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
