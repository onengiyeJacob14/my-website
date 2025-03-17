"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AccessibilityWidget from "../../components/AccessibilityWidget";

export default function TestimonialPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Testimonials</h1>
        <p>
          This is where you can showcase testimonials from clients or share
          success stories about Living Glory Social Care. You might also include
          a form below for people to submit new testimonials or feedback.
        </p>
        {/* Embed a testimonial component or submission form here */}
      </main>
      <Footer />
      <AccessibilityWidget />
    </div>
  );
}
