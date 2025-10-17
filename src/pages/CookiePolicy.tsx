import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Cookie } from 'lucide-react';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Cookie className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
            <p className="text-muted-foreground">Last updated: January 2024</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">What Are Cookies</h2>
              <p className="text-foreground/80 leading-relaxed">
                Cookies are small text files that are placed on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and 
                understanding how you use our site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Edenheart Tours & Travel uses cookies for various purposes:
              </p>
              
              <h3 className="text-xl font-medium mb-3">Essential Cookies</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                These cookies are necessary for the website to function properly. They enable basic 
                functions like page navigation, secure areas access, and shopping cart functionality.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>Session management</li>
                <li>Security and authentication</li>
                <li>Form submission</li>
              </ul>

              <h3 className="text-xl font-medium mb-3">Performance Cookies</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                These cookies help us understand how visitors interact with our website by collecting 
                and reporting information anonymously.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>Analytics and statistics</li>
                <li>Page load times</li>
                <li>User navigation patterns</li>
              </ul>

              <h3 className="text-xl font-medium mb-3">Functional Cookies</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                These cookies enable enhanced functionality and personalization.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>Language preferences</li>
                <li>User preferences and settings</li>
                <li>Remembering login details</li>
              </ul>

              <h3 className="text-xl font-medium mb-3">Marketing Cookies</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                These cookies track your online activity to help us deliver more relevant advertising.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Advertising effectiveness</li>
                <li>Personalized content</li>
                <li>Social media integration</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Third-Party Cookies</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We may use third-party services that set their own cookies, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li><strong>Google Analytics:</strong> To analyze website traffic and usage</li>
                <li><strong>Social Media Platforms:</strong> For social sharing functionality</li>
                <li><strong>Payment Processors:</strong> For secure payment processing</li>
                <li><strong>Booking Systems:</strong> For reservation management</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                You have the right to decide whether to accept or reject cookies. You can manage your 
                cookie preferences through your browser settings:
              </p>
              
              <h3 className="text-xl font-medium mb-3">Browser Settings</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Most web browsers allow you to control cookies through their settings. However, limiting 
                cookies may impact your experience on our website.
              </p>

              <h3 className="text-xl font-medium mb-3">Cookie Consent</h3>
              <p className="text-foreground/80 leading-relaxed">
                When you first visit our website, you will see a cookie consent banner. You can choose 
                to accept all cookies, reject non-essential cookies, or customize your preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Cookie Duration</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We use both session and persistent cookies:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li><strong>Session Cookies:</strong> Temporary cookies that expire when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> Remain on your device until deleted or expired (typically 
                between 30 days and 2 years)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
              <p className="text-foreground/80 leading-relaxed">
                We may update this Cookie Policy from time to time. Any changes will be posted on this 
                page with an updated revision date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-foreground/80 leading-relaxed">
                If you have questions about our use of cookies, please contact us:
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

export default CookiePolicy;
