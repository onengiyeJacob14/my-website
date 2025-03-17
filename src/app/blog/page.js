"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AccessibilityWidget from "../../components/AccessibilityWidget";

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Our Blog</h1>
        <p>
          Welcome to our blog! You can share your latest posts or updates here.
        </p>
        {/* Add your blog list or content here */}
      </main>
      <Footer />
      <AccessibilityWidget />
    </div>
  );
}
