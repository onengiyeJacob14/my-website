// src/app/services/page.js
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ServiceCard from '../../components/ServiceCard';
import AccessibilityWidget from '../../components/AccessibilityWidget';

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto p-4 flex flex-wrap gap-4">
        <ServiceCard
          title="Domiciliary Care"
          description="Personal care, medication management, and companionship."
        />
        <ServiceCard
          title="Specialist Care"
          description="Specialized support for dementia, complex needs, and learning disabilities."
        />
        <ServiceCard
          title="Supported Living"
          description="Assistance in supported living arrangements ensuring safety and comfort."
        />
      </main>
      <Footer />
      <AccessibilityWidget />
    </div>
  );
}
