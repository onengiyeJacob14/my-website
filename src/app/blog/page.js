// src/app/blog/page.js
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AccessibilityWidget from '../../components/AccessibilityWidget';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p>
          You can reach us via phone, email, or by filling out the contact form below.
        </p>
        {/* Embed a contact form component or code here */}
      </main>
      <Footer />
      <AccessibilityWidget />
    </div>
  );
}
