// src/app/how-it-works/page.js
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AccessibilityWidget from '../../components/AccessibilityWidget';

export default function HowItWorks() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">How It Works</h1>
        <p>
          Our process is simple: Initial Discussion, Care Plan Creation, Caregiver Matching, and Ongoing Support & Monitoring.
        </p>
        {/* Add more detailed steps and visuals here */}
      </main>
      <Footer />
      <AccessibilityWidget />
    </div>
  );
}
