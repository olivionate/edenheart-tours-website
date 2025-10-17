import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FileText } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: January 2024</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
              <p className="text-foreground/80 leading-relaxed">
                By accessing and using Edenheart Tours & Travel's services, you agree to be bound by these 
                Terms of Service and all applicable laws and regulations. If you do not agree with any of 
                these terms, you are prohibited from using our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Booking and Reservations</h2>
              <h3 className="text-xl font-medium mb-3">Payment Terms</h3>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
                <li>A deposit is required to confirm all bookings</li>
                <li>Full payment must be received at least 30 days before departure</li>
                <li>We accept payment via bank transfer, credit card, or mobile money</li>
                <li>All prices are quoted in Kenyan Shillings (KES) unless otherwise stated</li>
              </ul>

              <h3 className="text-xl font-medium mb-3">Confirmation</h3>
              <p className="text-foreground/80 leading-relaxed">
                Your booking is confirmed once we receive your deposit and send you a confirmation email. 
                Please review all details carefully and notify us immediately of any discrepancies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Cancellation and Refund Policy</h2>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li><strong>More than 60 days before departure:</strong> Full refund minus 10% administrative fee</li>
                <li><strong>30-60 days before departure:</strong> 50% refund of total cost</li>
                <li><strong>15-30 days before departure:</strong> 25% refund of total cost</li>
                <li><strong>Less than 15 days before departure:</strong> No refund</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed mt-4">
                Cancellations must be submitted in writing via email. The cancellation date is determined 
                by when we receive your written notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Travel Documents</h2>
              <p className="text-foreground/80 leading-relaxed">
                It is your responsibility to ensure you have valid passports, visas, and any required 
                health certificates for your destination. We are not liable for any issues arising from 
                invalid or incomplete travel documents.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Health and Safety</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                You are responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Obtaining appropriate travel insurance</li>
                <li>Ensuring you are physically fit for your chosen activities</li>
                <li>Following safety guidelines provided by tour guides</li>
                <li>Obtaining necessary vaccinations and medications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Liability Limitations</h2>
              <p className="text-foreground/80 leading-relaxed">
                While we strive to provide excellent service, Edenheart Tours & Travel is not liable for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mt-4">
                <li>Acts of God, natural disasters, or unforeseen circumstances</li>
                <li>Changes in government regulations or travel restrictions</li>
                <li>Loss or damage to personal belongings</li>
                <li>Injuries sustained during activities</li>
                <li>Third-party service provider failures</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Changes to Itinerary</h2>
              <p className="text-foreground/80 leading-relaxed">
                We reserve the right to modify itineraries due to weather conditions, safety concerns, or 
                circumstances beyond our control. We will make every effort to provide suitable alternatives 
                of equal value.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Conduct</h2>
              <p className="text-foreground/80 leading-relaxed">
                Clients are expected to behave respectfully towards other guests, staff, and local 
                communities. We reserve the right to terminate services without refund if behavior is 
                deemed inappropriate or dangerous.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p className="text-foreground/80 leading-relaxed">
                For questions regarding these Terms of Service, please contact us:
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

export default TermsOfService;
