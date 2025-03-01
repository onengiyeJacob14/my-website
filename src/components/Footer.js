// src/components/Footer.js
export default function Footer() {
    return (
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Living Glory Social Care. All rights reserved.</p>
          <p className="text-xs">Accessibility Options: [Font Resizing] [Contrast] [Text-to-Speech]</p>
        </div>
      </footer>
    );
  }
  